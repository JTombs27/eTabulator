<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class EmployeeController extends Controller
{
    public function __construct(Employee $employee)
    {  
        $this->model = $employee;
    }
    public function _sync()
    {
        try {
            //code...
            DB::table('employees')->truncate();
            $url = env('MIX_API_URL');
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

    public function getEmployees(Request $request)
    {
        if ($request->search) {
            $data = $this->model
                    ->where('empl_id', 'like', "%{$request->search}%")
                    ->orWhere('last_name', 'like', "%{$request->search}%");
            return $data->get()->map(fn($item) => [
                'id' => $item->full_name,
                'text' => $item->full_name
            ]);
        }
    }

    protected function whereEqual($query, $fieldName, $_params)
    {
        return $query->where($fieldName, $_params);
    }

}
