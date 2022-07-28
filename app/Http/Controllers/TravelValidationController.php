<?php

namespace App\Http\Controllers;


use App\Http\Requests\TravelRequest;
use App\Models\DriverVehicle;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Str;
use App\Models\Price;
class TravelValidationController extends Controller
{
    //
    public function __construct(Travel $model, DriverVehicle $driverVehicle)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
    }    

    public function index(Request $request)
    {
        $data = DB::table('travels')
        ->select(
            'vehicles.PLATENO',
            'vehicles.FDESC',
            'employees.first_name',
            'employees.middle_name',
            'employees.last_name',
            'travels.date_from',
            'travels.date_to',
            'travels.actual_driver',
            'travels.id',
            'travels.status',
            'travels.total_liters',
        )
        ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
        ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
        ->leftJoin('employees', 'driver_vehicles.drivers_id', 'employees.empl_id')
        ->where('travels.id', $request->id)
        ->first();
        return view("travelvalidation",compact("data"));
    }
}
