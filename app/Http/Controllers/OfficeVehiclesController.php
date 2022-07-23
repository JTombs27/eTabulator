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

    public function index(Request $request)
    {
       
       
       return inertia('OfficeVehicles/Index',[
           'officevehicle' => $this->officevehicles->with('vehicle')
           ->latest()->simplePaginate(10)
       ]);

    }

    public function create(Request $request)
    {
       
      
       return inertia('OfficeVehicles/Create',[
           'offices' => $this->offices->get(),
           'vehicles' => $this->vehicles->get()
       ]);

    }

}
