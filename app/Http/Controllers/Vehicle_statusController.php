<?php

namespace App\Http\Controllers;

use App\Models\Vehicle_status;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class Vehicle_statusController extends Controller
{
    public function __construct(Vehicle_status $model, Vehicle $vehicle)
    {
        $this->model = $model;
        $this->vehicle = $vehicle;
    }

    public function index($id)
    {
        return inertia('vehicle_status/index',[
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
        return inertia('vehicle_status/index');
    }

    public function update(Request $request)
    {
       $status = $this->model->findOrFail($request->id);
       $status->update([
        'condition' => $request->condition
    ]);
       return redirect('/vehicles')->with('message', 'Vehicle status updated!');
    }

    public function raymart() 
    {
        return inertia('vehicle_status/raymart', [
            'test' => 'Itanong'
        ]);
    }

    
}
