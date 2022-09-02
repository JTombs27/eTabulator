<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\OfficeVehicles;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

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
           'officevehicle' => $this->officevehicles->with(['vehicle','office'])->where('vehicles_id',$id)
           ->latest()->simplePaginate(10),
           'vehicles_id' => $id
       ]);
    }

    
    public function store(Request $request)
    {
        // dd($request->all());
        $vehicles = $this->officevehicles->where('vehicles_id', $request->vehicles_id);
        $vehicles->update(['office_owner' => false]);
        $attributes = $request->validate([
            'department_code' => 'required',
            // 'effective_date' => 'required',
            
        ]);
        $request['office_owner'] = 1;
        $this->officevehicles->create($request->all());
        return redirect('/vehicles')->with('message', 'Vehicle status added!');
    }


    public function create(Request $request,$id)
    {
      
       return inertia('OfficeVehicles/Create',[
          'vehicles' => $this->vehicles->where('id',$id)->get()
       ]);

    }

    public function back(Request $request)
    {
        return inertia('OfficeVehicles/Index',[
            'officevehicle' => $this->officevehicles->with(['vehicle','office'])->where('vehicles_id',$request->id)
            ->latest()->simplePaginate(10),
            'vehicles_id' => $request->id
        ]);
    }
   

    public function update(Request $request)
    {
        $attributes = $request->validate([
            'department_code' => 'required',
            // 'effective_date' => 'required',
            
        ]);
        $data = $this->officevehicles->findOrFail($request->id);
        $data->update($request->all());
        return redirect('/vehicles')->with('message', 'updated successfuly');
    }
    public function edit(Request $request,$id)
    {
       return inertia('OfficeVehicles/Edit',[
           'officevehicle' => $this->officevehicles->with('office')->where('id',$id)->get(),
       ]);
    }
    public function destroy(Request $request,$id)
    {
        $data = $this->officevehicles->findOrFail($id);
        $data->delete();

        return redirect('/vehicles')->with('message', 'Deleted Susccessfuly');
    }


}
