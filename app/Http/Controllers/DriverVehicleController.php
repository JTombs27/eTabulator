<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\DriverVehicle;
use App\Models\Vehicle;

class DriverVehicleController extends Controller
{
    public function __construct(DriverVehicle $model)
    {
        $this->model = $model;
    }

    public function index(Request $requet,$id)
    {
        return inertia('Drivers/Index', [
            'driver_vehicles' => $this->model->with([
                'vehicle',
                'driver',
                'office'

                // ->when($request->search, function($query, $searchItem) {
                //     $query->where()
                // })
            ])

            ->latest()
            ->where('vehicles_id','=',$id)
            ->simplePaginate(10)
            ->withQueryString(),
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first()
        ]);

        // "filters" => $request->only(['search']),
    }

    public function create($id)
    {
        return inertia("Drivers/Create", [
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first()
        ]);
       
    }

    public function store(Request $request, $id)
    {
        $attributes = $request->validate([
            'date_from' => 'required',
            'date_to' => 'required',
            
        ]); 
        $this->model->create($request->all());

        return redirect('/drivers/'.$id.'/vehicles')->with('message', 'Added Successfully');
    }

    public function destroy(Request $request,$id,$did)
    {
        $data = $this->model->findOrFail($did);
        $data->delete();


        return back()->with('message', 'deleted successfuly');
    }

}
