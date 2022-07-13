<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\Vehicle;

class DriverVehicleController extends Controller
{
    public function __construct(Driver $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return inertia('Drivers/Index', [
            'driver_vehicles' => $this->model->with([
                'vehicle'
            ])

            ->simplePaginate(10)
            ->withQueryString()
        ]);
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

}
