<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use DB;

class ReportController extends Controller
{
    public function travels(Request $request)
    {
    	$isAdmin = User::where('id', auth()->user()->id)
            ->where(function($query){
                $query->where('role', 'Admin')
                     ->orWhere('role', 'PGO');
            })
            ->first();


        $travel = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                driver.first_name,
                                driver.middle_name,
                                driver.last_name,
                                travels.*,
                                offices.short_name,
                                offices.office'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->get();

       	if (!$isAdmin) {

        	$travel = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                driver.first_name,
                                driver.middle_name,
                                driver.last_name,
                                travels.*,
                                offices.short_name,
                                offices.office'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->where('travels.office_id', auth()->user()->office_id)
                            ->get();
       	}
        return $travel;
    }
}
