<?php

namespace App\Http\Controllers;

use App\Models\Price;
use App\Models\User;
use App\Models\Travel;
use App\Models\SoaTravel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SoaTravelController extends Controller
{
    public function __construct(Travel $model, SoaTravel $soatravel, User $user, Price $price)
    {
        $this->model = $model;
        $this->soatravel = $soatravel;
        $this->user = $user;
        $this->price = $price;
    }

    public function index(Request $request)
    {
        $isAdmin = $this->user
            ->where('id', auth()->user()->id)
            ->where(function($query){
                $query->where('role', 'Admin')
                     ->orWhere('role', 'PGO');
            })
            ->first();

        $soatravel =  $this->soatravel;
                                

        if(!$isAdmin){
            $soatravel = $this->soatravel->where('office_id', auth()->user()->office_id);
        }

        return inertia('SoaTravels/Index', [
            //returns an array of users with name field only
            "soaTravel" => $soatravel
            	->with('travels')
            	->when($request->search, function ($query, $searchItem) {
                    $query->where('invoice_no', 'like', '%' . $searchItem . '%');
                })
                ->latest()
                ->simplePaginate(10)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'total_liters' => $item->travels->sum('total_liters'),
                    'totalPrice' => number_format($item->travels->sum('totalPrice'),2),
                    'invoice_no' => $item->invoice_no
                ])
                ,
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateSoaTravel' => auth()->user()->can('canCreateSoaTravel', User::class)
            ]
        ]);
    }

    public function show(Request $request)
    {
        return inertia('SoaTravels/Show', [
            //returns an array of users with name field only
            "travel" => $this->model
            	->where('office_id', auth()->user()->office_id)
                ->where('status','Approved')
            	->orderBy('date_from', 'asc')
            	->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    return [
                                    'id' => $item->id,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                    'travelDate' => $item->travelDate,
                                    'ticket_number' => $item->ticket_number,
                                    'id' => $item->id,
                                    'total_liters' => $item->total_liters,
                                    'gas_type' => $item->gas_type,
                                    'soa_travel' => $item->soa_travel,
                                    'office_id' => $item->office_id,
                                    'actual_prices' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $item->total_liters)
                                ]; 
                }),
        ]);
    }

    public function details(Request $request, $id)
    {
        $isAdmin = $this->user
            ->where('id', auth()->user()->id)
            ->where(function($query){
                $query->where('role', 'Admin')
                     ->orWhere('role', 'PGO');
            })
            ->first();

        $travels =  $this->model;
                                

        if(!$isAdmin){
            $travels = $this->model->where('office_id', auth()->user()->office_id);
        }


        return inertia('SoaTravels/Details', [
            //returns an array of users with name field only
            "travels" => $travels
            	->latest()
            	->when($request->search, function ($query, $searchItem) {
                    $query->where('ticket_number', 'like', '%' . $searchItem . '%');
                })
            	->where('soa_travel', $id)
            	->simplePaginate(10)
                ->through(function ($item) {
                                $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                                })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                                return [
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                    'travelDate' => $item->travelDate,
                                    'ticket_number' => $item->ticket_number,
                                    'id' => $item->id,
                                    'total_liters' => $item->total_liters,
                                    'gas_type' => $item->gas_type,
                                    'soa_travel' => $item->soa_travel,
                                    'office_id' => $item->office_id,
                                    'price' => ($total[$item->gas_type] * $item->total_liters)
                                ]; 
                            }),
            "filters" => $request->only(['search']),
            "soaTravelId" =>$id,
        ]);
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'date_from' => 'required|date',
            'date_to' => 'required|date|after_or_equal:date_from',
            'invoice_no' => 'required'
        ]);

        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

        	if ($request->travels != null) {
        		$soaTravel = $this->soatravel->create($request->only('date_from','date_to','user_id','office_id','invoice_no'));
        		foreach ($request->travels as $key ) {
        			$travel = $this->model->where('id', $key['id'])->where('soa_travel', null)->update(['soa_travel' => $soaTravel->id]);
        		}
        	} else {
        		return redirect('/soatravels')->with('error', 'Travel already Tagged');
        	}
           	
            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/soatravels')->with('message', $e);
        }

        return redirect('/soatravels')->with('message', 'Travel Merged');
    }

    public function remove(Request $request)
    {
    	$travel = $this->model->findOrFail($request->id);
    	$travel->update(['soa_travel' => null]);

    	return redirect('/soatravels/'.$request->soa_travel.'/details')->with('message', 'Tag removed');
    }

     public function destroy(Request $request)
    {
        $data = $this->soatravel->findOrFail($request->id);

        $travel = $this->model->where('soa_travel', $data->id)->get();

        	foreach($travel as $travels){
        		$travels->update(['soa_travel' => null]);
        	}
        
        $data->delete();

        return redirect('/soatravels')->with('message', 'Soa Travel deleted');
    }

    public function statement_of_account(Request $request)
    {
        $soa = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                travels.*,
                                offices.short_name,
                                offices.office,
                                soa_travels.invoice_no'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('soa_travels', 'travels.soa_travel', 'soa_travels.id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->where('travels.soa_travel', $request->soa_travel)
                            ->orderByRaw("offices.office ASC, travels.ticket_number ASC")
                            ->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    return [
                                    'PLATENO' => $item->PLATENO,
                                    'ticket_number' => $item->ticket_number,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'gas_type' => $item->gas_type,
                                    'unit_price' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $item->total_liters),
                                    'total_liters' => $item->total_liters,
                                    'short_name' =>$item->short_name,
                                    'office' => $item->office,
                                    'invoice_no' =>$item->invoice_no
                                    
                                ]; 
                });

        return $soa;
    }

}
