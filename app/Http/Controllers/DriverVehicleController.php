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

    public function index($id)
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
            'date_from' => "required|date",
            'date_to' => "required|date|after_or_equal:date_from", 
        ]);

        $data = $this->model->where('vehicles_id',$request->vehicles_id)
        ->where(function ($query) use($request){
            $query->whereBetween("date_from",[$request->date_from,$request->date_to])
            ->orWhereBetween("date_to",[$request->date_from,$request->date_to]);
        })->first();

        if ($data) {
            $attributes = $request->validate([
                "date_fromA"=>"required",
                "date_toB"=>"required"],[
                    "date_fromA.required"=>"Date Conflict to other entry",
                    "date_toB.required"=>"Date Conflict to other entry"
                ]);
        } else {
            try {
                $this->model->create($request->all());
                return redirect('/drivers/'.$id.'/vehicles')->with('message', 'Added Successfully');
            } catch(\Throwable $th) {
                return redirect('/drivers/'.$id.'/create')->with('error', 'Please provide Valid Data');

            }
        }

    }

    public function destroy(Request $request,$id,$did)
    {
        $data = $this->model->findOrFail($did);
        $data->delete();


        return back()->with('message', 'deleted successfuly');
    }

}
