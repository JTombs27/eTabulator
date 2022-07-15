<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class EmployeeController extends Controller
{
    public function sync()
    {
        try {
            //code...
            DB::table('employees')->truncate();
            $employees = Http::post("http://192.168.9.101:91//api/ListOfEmployees")->collect();
            $arrayOfEmployees = [];
            foreach ($employees as $value) {
                // if ($value['empl_id']) {
                    
                //        return date('Y-m-d',$value['birth_date']) ;
                // }
                $data = [
                    'empl_id' => $value['empl_id'],
                    'first_name' => $value['first_name'],
                    'middle_name' => $value['middle_name'],
                    'last_name' => $value['last_name'],
                    'department_code' => $value['department_code'],
                    'gender' => $value['gender'],
                    'position_code' => $value['position_code'],
                    'position_title_long' => $value['position_long_title'],
                    'position_title_short' => $value['position_short_title'],
                    'birth_date' => date('Y-m-d',strtotime($value['birth_date'])),
                    'created_at' => now()
                ];
                array_push($arrayOfEmployees, $data);
            }
            $emp = array_chunk($arrayOfEmployees, 200);
            foreach ($emp as $value) {
                DB::table('employees')->insert($value);
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
