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
            $soatravel = $this->soatravel->where('office_id', auth()->user()->office_id)
                                        ->orWhere('gasoline_id',auth()->user()->gasoline_id);
        }

        return inertia('SoaTravels/Index', [
            //returns an array of users with name field only
            "soaTravel" => $soatravel
            	->with('travels','office','division')
            	->when($request->search, function ($query, $searchItem) {
                    $query->where('ticket_no', 'like', '%' . $searchItem . '%');
                })
                ->latest()
                ->simplePaginate(10)
                ->withQueryString()
                ->through(fn($item) => [
                    'id' => $item->id,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'total_liters' => number_format($item->travels->sum('actual_liter'),2),
                    'totalPrice' => number_format($item->travels->sum('totalPrice'),2),
                    'ticket_no' => $item->ticket_no,
                    'office' => $item->office->short_name,
                    'division' => $item->division
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
            	->with('user.employee.division')
                ->where('status','Fueled')
                ->where('gasoline_id', auth()->user()->gasoline_id)
                ->where('soa_travel',null)
            	->orderBy('date_fueled', 'asc')
            	->get()->map(function($item) {
                        $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_fueled)->exists();
                                    $total = $this->price->when($checkPrice, function($q) use ($item) {
                                        $q->whereDate('date', $item->date_fueled);
                        })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type); 
                    $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                    return [
                                    'id' => $item->id,
                                    'date_from' => $item->date_from,
                                    'date_fueled' => $item->date_fueled,
                                    'date_to' => $item->date_to,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                    'travelDate' => $item->travelDate,
                                    'ticket_number' => $item->ticket_number,
                                    'id' => $item->id,
                                    'total_liters' => $item->total_liters,
                                    'actual_liters' => $item->actual_liter,
                                    'gas_type' => $item->gas_type,
                                    'gasoline_id' => $item->gasoline_id,
                                    'soa_travel' => $item->soa_travel,
                                    'office_id' => $item->office_id,
                                    'actual_prices' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $actual),
                                    'invoice' => $item->invoice_no,
                                    'user_id' => $item->user_id,
                                    'division_code' => $item->user->employee->division
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
            $travels = $this->model->where('office_id', auth()->user()->office_id)
                                    ->orWhere('gasoline_id',auth()->user()->gasoline_id);;
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
                                $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_fueled)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_fueled);
                                })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                                $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;
                                return [
                                    'date_from' => $item->date_from,
                                    'date_fueled' => $item->date_fueled,
                                    'date_to' => $item->date_to,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                    'travelDate' => $item->travelDate,
                                    'ticket_number' => $item->ticket_number,
                                    'id' => $item->id,
                                    'total_liters' => $item->total_liters,
                                    'actual_liters' => $item->actual_liter,
                                    'gas_type' => $item->gas_type,
                                    'soa_travel' => $item->soa_travel,
                                    'office_id' => $item->office_id,
                                    'actual_prices' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $actual),
                                    'invoice_no' => $item->invoice_no,
                                    'gasoline_id' => $item->gasoline_id
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
        $request['ticket_no'] = 0;
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

        	if ($request->travels != null) {
               
                $soaTravel = $this->soatravel->create($request->only('date_from','date_to','user_id','office_id','gasoline_id','division_code'));
                
                $soaTravel->updateTicketNo();
        		foreach ($request->travels as $key ) {
                    if ($key['invoice'] == null) {
                        return redirect()->back()->with('error','Invoice is Required');
                    } else {

        			    $travel = $this->model->where('id', $key['id'])->where('soa_travel', null)->update(['soa_travel' => $soaTravel->id]);
                    }
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
                                gasolines.name AS gasstation,
                                soa_travels.date_from AS soa_date_from,
                                soa_travels.date_to AS soa_date_to,
                                users.name,
                                divisions.division_name1
                                '))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('gasolines', 'travels.gasoline_id', 'gasolines.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('soa_travels', 'travels.soa_travel', 'soa_travels.id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->leftJoin('divisions', 'divisions.division_code', 'soa_travels.division_code')
                            ->leftJoin('users', 'users.id', 'soa_travels.user_id')
                            ->where('travels.soa_travel', $request->soa_travel)
                            ->orderByRaw("travels.date_fueled ASC,travels.ticket_number ASC")
                            ->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_fueled)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_fueled);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;
                    return [
                                    'PLATENO' => $item->PLATENO,
                                    'ticket_number' => $item->ticket_number,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'date_fuel' => $item->date_fueled,
                                    'gas_type' => $item->gas_type,
                                    'unit_price' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $actual),
                                    'total_liters' => $actual,
                                    'short_name' =>$item->short_name,
                                    'office' => $item->office,
                                    'gasoline_name' => $item->gasstation,
                                    'invoice_no' => $item->invoice_no,
                                    'date' => (\Carbon\Carbon::parse($item->soa_date_from)->format('M d')) ."-". (\Carbon\Carbon::parse($item->soa_date_to)->format('d, Y')),
                                    'prepared_by' => $item->name,
                                    'division_name' => $item->division_name1
                                    
                                ]; 
                });

        return $soa;
    }

    public function total_soa(Request $request)
    {
        $total_soa = DB::table('travels')
                            ->select(DB::raw('travels.*'))
                            ->where('travels.soa_travel', $request->soa_travel)
                            ->orderBy('travels.gas_type','desc')
                            ->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_fueled)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_fueled);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                    return [
                                    'id' => $item->id,
                                    'gas_type' => $item->gas_type,
                                    'unit_price' => $total[$item->gas_type],
                                    'price' => ($total[$item->gas_type] * $actual),
                                    'total_liters' => $actual
                                    
                                ]; 
                });
        $total = $total_soa->groupBy('unit_price','gas_type')->mapWithKeys(fn ($items, $key) => [
                collect($items)->first()['unit_price'] => [
                    'total'=> number_format(collect($items)->sum('price'),2),
                    'gas_type' => collect($items)->first()['gas_type'],
                    'unit_price' => collect($items)->first()['unit_price'],
                    'total_liters' => number_format(collect($items)->sum('total_liters'),2),
                ]
             
            
           
        ]);

        $testData = collect([]);
        
        $testData = $testData->mergeRecursive(
            $total->map(fn($item) => [
                "total" => strVal($item['total']),
                "gas_type" => $item['gas_type'],
                "unit_price" => $item['unit_price'],
                "total_liters" => strVal($item['total_liters'])
            ])
        );
        return $testData->values();
        
        
        
    }

}
