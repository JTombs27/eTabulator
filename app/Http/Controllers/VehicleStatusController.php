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
            'vehicle' =>  $this->vehicle->with('vehicle_status')
                                    ->where('id',$id)->latest()->first()
                                    
        ]);

    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'condition' => 'required',
        ]);
        
        $this->model->create($request->all());
        
        return redirect('/vehicles')->with('message', 'Vehicle status added!');
    }

    public function create()
    {
        return inertia('VehicleStatus/index');
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
