<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;
use Illuminate\Support\Facades\DB;
use App\Models\VehicleStatus;

class VehicleController extends Controller
{

    public function __construct(Vehicle $model, VehicleStatus $status)
    {
        $this->model = $model;
        $this->status = $status;
    }

    public function index(Request $request)
    {
        return inertia('Vehicles/Index', [
            "vehicles" => $this->model->with([
                'driverassign.empl.office'
            ])

            ->when($request->search, function ($query, $searchItem) {
                $query->where('PLATENO', 'like', '%'.$searchItem . '%');
            })
            
            ->latest()
            ->simplePaginate(10)
            ->withQueryString(),
            
            "filters" => $request->only(['search']),
        ]);
    }

    public function create()
    {
        return inertia('Vehicles/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'PLATENO' => "required",
            'TYPECODE' => "required",
            'FDATEACQ' => "required",
            'FACQCOST'=> "regex:/^\d{1,13}(\.\d{1,4})?$/",
            'FDESC' => "required",
            'condition' => "required"
            
        ]);
        $vehicle = $this->model->create($request->except('checkadd','condition'));

        $vehicleStatus = $this->status->create(['condition' => $request->condition,
                                                'vehicle_id' => $vehicle->id]);

        if (!!$request->checkadd) {
            return redirect('/drivers/'.$vehicle->id.'/create')->with('message', 'Vehicle Added Successfully');
        } else {
            return redirect('/vehicles')->with('message', 'Added Successfully');
        }
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
        return DB::table('vehicle_status')
                ->leftJoin('vehicles', 'vehicle_status.vehicle_id', 'vehicles.id')
                ->where('condition', 'Good Condition')
                ->distinct('vehicles_id')
                ->orderBy('vehicle_status.created_at', 'desc')
                ->get()
                ->map(fn($item) => [
                    'id' => $item->vehicle_id,
                    'condition' => $item->condition
                ]);

    }
}
