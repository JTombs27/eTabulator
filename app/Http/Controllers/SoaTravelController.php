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
            	->when($request->search, function ($query, $searchItem) {
                    $query->where('cafoa_number', 'like', '%' . $searchItem . '%');
                })
                ->latest()
                ->simplePaginate(10)
                ->withQueryString()
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
                    $checkPrice = $this->price->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                    })->latest()->first($item->gas_type);
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
                                    'price' => number_format(($total[$item->gas_type] * $item->total_liters),2),
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
                                $checkPrice = $this->price->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                                })->latest()->first($item->gas_type);
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
                                    'soa_travel' => $item->soa_travel,
                                    'price' => number_format(($total[$item->gas_type] * $item->total_liters),2),
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
        ]);

        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

        	if ($request->travels != null) {
        		$soaTravel = $this->soatravel->create($request->only('date_from','date_to','user_id','office_id'));
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

}
