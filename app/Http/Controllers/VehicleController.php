<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;

class VehicleController extends Controller
{

    public function __construct(Vehicle $model){
        $this->model = $model;
    
    }
    public function index()
    {
        return inertia('Vehicles/index', [
            "vehicles" => $this->model

            ->simplePaginate(10)
            ->withQueryString()
        ]);

    }

    public function create()
    {
        return inertia('Vehicles/Create');
    }

    public function store(Request $request)
    {
        $this->model->create($request->all());

        return redirect('/vehicles')->with('message', 'Added Successfully');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id',$id)->get();
        return inertia('Vehicles/Create', [
            'editData' => $data
        ]);
    }
}
