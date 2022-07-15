<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class OfficeController extends Controller
{
    public function sync()
    {
        try {
            //code...
            DB::table('offices')->truncate();
            $offices = Http::get('http://192.168.9.101:91//api/PGDDODepartments')->collect();
            $officeArray = [];
            foreach ($offices as $value) {
                $data = [
                    'id' => $value['department_code'],
                    'office' => $value['department_name1'],
                    'department_code' => $value['department_code'],
                    'created_at' => now()
                ];
                array_push($officeArray, $data);
            }
            DB::table('offices')->insert($officeArray);
            
        } catch (\Throwable $th) {
            return $th;
        }
        
    }
}
