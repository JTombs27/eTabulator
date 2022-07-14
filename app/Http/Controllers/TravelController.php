<?php

namespace App\Http\Controllers;

use App\Models\DriverVehicle;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class TravelController extends Controller
{
    public function __construct(Travel $model, DriverVehicle $driverVehicle)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
    }    

    public function index()
    {
        return inertia('Travels/Index',[
            "can" => [
                'canCreateTravel' => auth()->user()->can('canCreateTravel', User::class)
            ]
        ]);
    }

    public function create()
    {
        return inertia('Travels/Create', [

        ]);
    }

    public function getVehicleDriver(Request $request)
    {
        $driverVehicle = $this->driverVehicle
                            ->where('vehicles_id', $request->vehicles_id)
                            ->where(function($query) use ($request){
                                $query->where('date_from', '<=', $request->travel_date)
                                        ->where('date_to', '>=', $request->travel_date);
                            })
                            ->first();

        if ($driverVehicle) {
            $response = Http::get('http://192.168.9.101:91//api/PGDDO_Employees');
        }
        return $driverVehicle;
    }
}
