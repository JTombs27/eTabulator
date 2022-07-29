<?php

namespace App\Http\Controllers;

use App\Models\VehicleStatus;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VehicleStatusController extends Controller
{
    public function __construct(VehicleStatus $model, Vehicle $vehicle)
    {
        $this->model = $model;
        $this->vehicle = $vehicle;
    }

    public function index($id)
    {
        // dd(auth()->user());  
        return inertia('VehicleStatus/Index',[
            'vehicle_status' =>  $this->model->with('vehicle')
                                    ->where('vehicles_id',$id)
                                    ->latest()->simplePaginate(10),
            'vehicles_id' => $id,
            'PLATENO' =>  $this->vehicle->where('id',$id)->first()->PLATENO,
             'can' => [
                 'canCreateVehicleStatus' => auth()->user()->can('canCreateVehicleStatus', User::class),
                 'canEditVehicleStatus' => auth()->user()->can('canEditVehicleStatus', User::class),
             ]
        ]);
      

    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'vehicle_status_date' => 'required',
            'condition' => 'required',
           
            
        ]);
        $this->model->create($request->all());
        return redirect('/vehicles')->with('message', 'Vehicle status added!');
    }

    public function Create(Request $request,$id)
    {
       
        return inertia('VehicleStatus/Create',[
            'vehicle' => $this->vehicle->findOrFail($id),
            'editData' => false
        ]);
    }

    public function edit(Request $request)
    {
        return inertia('VehicleStatus/Create',[
            'vehicle' => $this->model->findOrFail($request->id),
            'editData' => True
        ]);
    }

    public function update(Request $request)
    {
        $attributes = $request->validate([
            'condition' => 'required',
            'vehicle_status_date' => 'required',
        ]);
       $status = $this->model->findOrFail($request->id);
       $status->update([
        'condition' => $request->condition
        ]);
       return redirect('/vehicles')->with('message', 'Vehicle status updated!');
    }

   

    
}
