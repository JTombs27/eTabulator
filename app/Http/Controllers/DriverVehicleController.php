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
        return inertia('Drivers/Index');
    }

    public function create()
    {
        return inertia("Drivers/Create");
    }

    public function store(Request $request)
    {
        $this->model->create($request->all());

        return redirect('/drivers')->with('message', 'Added Successfully');
    }

    public function getVehicles()
    {
        return $this->vehicle->get()->map(fn($item) => [
            'id' => $item->id,
            'text' => $item->PLATENO
        ]);
    }
}
