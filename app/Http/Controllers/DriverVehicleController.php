<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\DriverVehicle;
use App\Models\Vehicle;

class DriverVehicleController extends Controller
{
    public function __construct(DriverVehicle $model)
    {
        $this->model = $model;
    }

    public function index(Request $request,$id)
    {
        return inertia('Drivers/Index', [
            'driver_vehicles' => $this->model->with([
                'vehicle',
                'driver',
                'office'
            ])

            ->simplePaginate(10)
            ->withQueryString(),
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first()
        ]);
    }

    public function create(Request $request,$id)
    {
        return inertia("Drivers/Create", [
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first()
        ]);
       
    }

    public function store(Request $request, $id)
    {
        $attributes = $request->validate([
            'date_from' => 'required',
            'date_to' => 'required',
            
        ]); 
        $this->model->create($request->all());

        return redirect('/drivers/'.$id.'/vehicles')->with('message', 'Added Successfully');
    }

}
