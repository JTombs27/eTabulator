<?php

namespace App\Http\Controllers;

use App\Models\Price;
use App\Models\User;
use App\Models\Travel;
use App\Models\SoaTravel;
use Illuminate\Http\Request;
use DB;

class ReportController extends Controller
{
	public function __construct(Travel $model, SoaTravel $soatravel, User $user, Price $price)
    {
        $this->model = $model;
        $this->soatravel = $soatravel;
        $this->user = $user;
        $this->price = $price;
    }

    protected function index(Request $request)
    {
        return inertia('Reports/Index');
    } 

    public function travels(Request $request)
    {

    	/*$travels = $this->model
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
                })*/

        $travel = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                driver.first_name,
                                driver.middle_name,
                                driver.last_name,
                                travels.*,
                                offices.short_name,
                                offices.office'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->orderByRaw("offices.office ASC, travels.ticket_number ASC")
                            ->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    return [
                    				'PLATENO' => $item->PLATENO,
                    				'FDESC' => $item->FDESC,
                    				'first_name' => $item->first_name,
                    				'middle_name' => $item->middle_name,
                    				'last_name' => $item->last_name,
                                    'id' => $item->id,
                                    'driver_vehicles_id' => $item->driver_vehicles_id,
                                    'ticket_number' => $item->ticket_number,
                                    'is_carpool' => $item->is_carpool,
                                    'is_borrowed_fuel' => $item->is_borrowed_fuel,
                                    'is_borrowed_vehicle' => $item->is_borrowed_vehicle,
                                    'borrowing_office' => $item->borrowing_office,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'place_to_visit' => $item->place_to_visit,
                                    'purpose' => $item->purpose,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                 	'gasoline_id' => $item->gasoline_id,
                                    'gas_type' => $item->gas_type,
                                    'price' => ($total[$item->gas_type] * $item->total_liters),
                                    'total_liters' => $item->total_liters,
                                    'user_id' => $item->user_id,
                                    'office_id' => $item->office_id,
                                    'official_passenger' =>$item->official_passenger,
                                    'soa_travel' => $item->soa_travel,
                                    'actual_driver' => $item->actual_driver,
                                    'status' => $item->status,
                                    'short_name' =>$item->short_name,
                                    'office' => $item->office
                                    
                                ]; 
                });

       	if (!!$request->office_id) {

       		$travel = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                driver.first_name,
                                driver.middle_name,
                                driver.last_name,
                                travels.*,
                                offices.short_name,
                                offices.office'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->where('travels.office_id', $request->office_id)
                            ->orderByRaw("offices.office ASC, travels.ticket_number ASC")
                            ->get()->map(function($item) {
                    $checkPrice = $this->price->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->price->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                    })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                    return [
                    				'PLATENO' => $item->PLATENO,
                    				'FDESC' => $item->FDESC,
                    				'first_name' => $item->first_name,
                    				'middle_name' => $item->middle_name,
                    				'last_name' => $item->last_name,
                                    'id' => $item->id,
                                    'driver_vehicles_id' => $item->driver_vehicles_id,
                                    'ticket_number' => $item->ticket_number,
                                    'is_carpool' => $item->is_carpool,
                                    'is_borrowed_fuel' => $item->is_borrowed_fuel,
                                    'is_borrowed_vehicle' => $item->is_borrowed_vehicle,
                                    'borrowing_office' => $item->borrowing_office,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'place_to_visit' => $item->place_to_visit,
                                    'purpose' => $item->purpose,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                 	'gasoline_id' => $item->gasoline_id,
                                    'gas_type' => $item->gas_type,
                                    'price' => ($total[$item->gas_type] * $item->total_liters),
                                    'total_liters' => $item->total_liters,
                                    'user_id' => $item->user_id,
                                    'office_id' => $item->office_id,
                                    'official_passenger' =>$item->official_passenger,
                                    'soa_travel' => $item->soa_travel,
                                    'actual_driver' => $item->actual_driver,
                                    'status' => $item->status,
                                    'short_name' =>$item->short_name,
                                    'office' => $item->office
                                    
                                ]; 
                });
       	}
        return $travel;
    }

    public function soa_travels(Request $request)
    {

    	$soa =  $this->soatravel
            	->with('travels','office')
            	->orderBy("office_id" , "ASC")
            	->orderBy("date_from" , "ASC")
            	->get()
                ->map( function($item) { return
                	[
                    'id' => $item->id,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'short_name' => $item->office->short_name,
                    'office' => $item->office->office,
                    'total_liters' => $item->travels->sum('total_liters'),
                    'totalPrice' => number_format($item->travels->sum('totalPrice'),2)
                ];
            });

        if (!!$request->office_id) {

        	$soa =  $this->soatravel
            	->with('travels','office')
            	->where('office_id', $request->office_id)
            	->orderBy("office_id" , "ASC")
            	->orderBy("date_from" , "ASC")
            	->get()
                ->map( function($item) { return
                	[
                    'id' => $item->id,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'short_name' => $item->office->short_name,
                    'office' => $item->office->office,
                    'total_liters' => $item->travels->sum('total_liters'),
                    'totalPrice' => number_format($item->travels->sum('totalPrice'),2)
                ];
            });
            

       
        }

         return $soa;
    }
}
