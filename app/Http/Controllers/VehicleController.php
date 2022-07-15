<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;

class VehicleController extends Controller
{

    public function __construct(Vehicle $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        return inertia('Vehicles/Index', [
            "vehicles" => $this->model

            ->latest()
            ->simplePaginate(10)
            ->withQueryString(),
            
        ]);

    }

    public function create(Request $request)
    {
        return inertia('Vehicles/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'PLATENO' => 'required',
            // 'TYPECODE' => 'required',
            'FDATEACQ' => 'required',
            'FDESC' => 'required',
            
        ]);
        $this->model->create($request->all());

        return redirect('/vehicles')->with('message', 'Added Successfully');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id',$id)->first();

        return inertia('Vehicles/Create', [
            'editData' => $data
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->update($request->all());

        return redirect('/vehicles')->with('message', 'updated successfuly');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        return redirect('/vehicles')->with('message', 'Deleted Susccessfuly');
    }

    public function getVehicles()
    {
        return $this->model->get()->map(fn($item) => [
            'id' => $item->id,
            'text' => $item->PLATENO
        ]);
    }
}
