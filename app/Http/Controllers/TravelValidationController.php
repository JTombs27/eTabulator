<?php

namespace App\Http\Controllers;


use App\Http\Requests\TravelRequest;
use App\Models\Price;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Str;
class TravelValidationController extends Controller
{
    //
    public function __construct(Travel $model, Price $price)
    {
        $this->model = $model;
        $this->prices = $price;
    }    

    public function index(Request $request)
    {
        // $data = DB::table('travels')
        // ->select(
        //     'vehicles.PLATENO',
        //     'vehicles.FDESC',
        //     'employees.first_name',
        //     'employees.middle_name',
        //     'employees.last_name',
        //     'travels.date_from',
        //     'travels.date_to',
        //     'travels.actual_driver',
        //     'travels.id',
        //     'travels.status',
        //     'travels.total_liters',
        //     'travels.gas_type'
        // )
        // ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
        // ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
        // ->leftJoin('employees', 'driver_vehicles.drivers_id', 'employees.empl_id')
        
        // ->where('travels.id', $request->id)
        // ->first();

        $data = $this->model
            ->with('driverVehicle.empl', 'driverVehicle.vehicle')
            ->where('travels.id', $request->id)
            ->simplePaginate(10)
            ->through(function ($item) {
                $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
                $total = $this->prices->when($checkPrice, function($q) use ($item) {
                    $q->whereDate('date', $item->date_from);
                })->latest()->first($item->gas_type);
                return [
                    'first_name' => $item->driverVehicle->empl->first_name,
                    'middle_name' => $item->driverVehicle->empl->middle_name,
                    'last_name' => $item->driverVehicle->empl->last_name,
                    'PLATENO' => $item->driverVehicle->vehicle->PLATENO,
                    'FDESC' => $item->driverVehicle->vehicle->FDESC,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'actual_driver' => $item->actual_driver,
                    'ticket_number' => $item->ticket_number,
                    'id' => $item->id,
                    'liters' => $item->total_liters,
                    'status' => $item->status,
                    'office_id' => $item->office_id,
                    'gas_type'=>$item->gas_type,
                    'price' => number_format($total[$item->gas_type],2),
                ]; 
            });
        return view("travelvalidation",compact("data"));
    }
}
