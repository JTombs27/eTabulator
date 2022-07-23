<?php

namespace App\Http\Controllers;

use App\Models\VehicleStatus;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleStatusController extends Controller
{
    public function __construct(VehicleStatus $model, Vehicle $vehicle)
    {
        $this->model = $model;
        $this->vehicle = $vehicle;
    }

    public function index($id)
    {
      
        return inertia('VehicleStatus/index',[
            'vehicle_status' =>  $this->model->with('vehicle')
                                    ->where('vehicle_id',$id)->latest()->simplePaginate(10),
            'vehicle_id' => $id
                                    
        ]);

    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'vehicle_status_date' => 'required',
            'condition' => 'required',
            'plate_no' => 'required',
            
        ]);
        $this->model->create($request->all());
        return redirect('/vehicles')->with('message', 'Vehicle status added!');
    }

    public function Create(Request $request,$id)
    {
       
        return inertia('VehicleStatus/Create',[
            'vehicle' => $this->vehicle->findOrFail($id)
        ]);
    }

    public function update(Request $request)
    {
        $attributes = $request->validate([
            'condition' => 'required',
        ]);
       $status = $this->model->findOrFail($request->id);
       $status->update([
        'condition' => $request->condition
    ]);
       return redirect('/vehicles')->with('message', 'Vehicle status updated!');
    }

   

    
}
