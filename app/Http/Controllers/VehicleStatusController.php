<?php

namespace App\Http\Controllers;

use App\Models\VehicleStatus;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use PHPUnit\Framework\Constraint\IsTrue;

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
                                    ->where('vehicles_id',$id)->latest()->simplePaginate(10),
            'vehicles_id' => $id
                                    
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
            'vehicle' => $this->vehicle->findOrFail($id),
            'editData' => True
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
        ]);
       $status = $this->model->findOrFail($request->id);
       $status->update([
        'condition' => $request->condition
    ]);
       return redirect('/vehicles')->with('message', 'Vehicle status updated!');
    }

   

    
}
