<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Driver;
use App\Models\Vehicle;

class DriverVehicleController extends Controller
{
    public function index()
    {
        return inertia('Drivers/Index');
    }

    public function create()
    {
        return inertia("Drivers/Create");
    }
}
