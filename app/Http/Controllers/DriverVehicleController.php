<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\Vehicle;

class DriverVehicleController extends Controller
{
    public function __construct(Driver $model, Vehicle $vehicles)
    {
        $this->model = $model;
        $this->vehicle = $vehicles;
    }

    public function index()
    {
        return inertia('Drivers/Index', [
            'driver_vehicles' => $this->model
            ->with(['vehicles'
            ])
        ]);
    }

    public function create()
    {
        return inertia("Drivers/Create");
    }

    public function getVehicles()
    {
        return $this->vehicle->get();
    }
}
