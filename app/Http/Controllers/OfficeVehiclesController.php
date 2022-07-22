<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\OfficeVehicles;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class OfficeVehiclesController extends Controller
{
    public function __construct(OfficeVehicles $officevehicles, Office $offices, Vehicle $vehicle)
    {
        $this->offices = $offices;
        $this->vehicles = $vehicle;
        $this->officevehicles = $officevehicles;
    }

    public function index(Request $request,$id)
    {
       return inertia('OfficeVehicles/Index',[
           'officevehicle' => $this->officevehicles->with('vehicle')->where('vehicles_id',$id)
           ->latest()->simplePaginate(10),
           'vehicles_id' => $id
       ]);
    }

    
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'department_code' => 'required',
            
        ]);
        $this->officevehicles->create($request->all());
        return redirect('/vehicles')->with('message', 'Vehicle status added!');
    }


    public function create(Request $request,$id)
    {
      
       return inertia('OfficeVehicles/Create',[
          'vehicles' => $this->vehicles->where('id',$id)->get()
       ]);

    }

}
