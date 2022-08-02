<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use DB;

class ReportController extends Controller
{
    public function travels(Request $request)
    {

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
                            ->orderBy('offices.office','asc')
                            ->orderBy('travels.ticket_number', 'asc')
                            ->get();

       	if (!!$request->office_id) {

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
                            ->where('travels.office_id', $request->office_id)
                            ->orderBy('offices.office','asc')
                            ->orderBy('travels.ticket_number', 'asc')
                            ->get();
       	}
        return $travel;
    }
}
