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
            $employees = Http::post("http://122.54.19.172:91//api/ListOfEmployees")->collect();
            $arrayOfEmployees = [];
            foreach ($employees as $value) {
                
                $first = $value['first_name'];
                $last_name = $value['last_name'];
                $division =  $this->boardMember($first, $last_name)->pluck('division_code');
                $division_code = count($division) != 0 ? $division[0] : $value['division_code'];
                $data = [
                    'empl_id' => $value['empl_id'],
                    'first_name' => $value['first_name'],
                    'middle_name' => $value['middle_name'],
                    'last_name' => $value['last_name'],
                    'department_code' => $value['department_code'],
                    'gender' => $value['gender'],
                    'is_pghead' => $value['is_pghead'],
                    'position_code' => $value['position_code'],
                    'position_title_long' => $value['position_long_title'],
                    'position_title_short' => $value['position_short_title'],
                    'birth_date' => date('Y-m-d',strtotime($value['birth_date'])),
                    'created_at' => now(),
                    'suffix'=> $value['suffix_name'],
                    'division_code'=> $division_code,
                    'postfix'=> $value['postfix_name'],
                    'courtesy_title'=> $value['courtisy_title'],
                ];
                array_push($arrayOfEmployees, $data);
            }
            $emp = array_chunk($arrayOfEmployees, 200);
            foreach ($emp as $value) {
                DB::table('employees')->upsert($value,['empl_id'],
                [
                    'empl_id',
                    'first_name',
                    'middle_name',
                    'last_name',
                    'department_code',
                    'gender',
                    'is_pghead',
                    'position_code',
                    'position_title_long',
                    'position_title_short',
                    'birth_date',
                    'created_at',
                    'suffix',
                    'division_code',
                    'postfix',
                    'courtesy_title',
                ]);
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
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
                'text' => $item->full_name,
                'cats' => $item->empl_id
            ]);
        }
    }

    protected function whereEqual($query, $fieldName, $_params)
    {
        return $query->where($fieldName, $_params);
    }

    protected function boardMember($first_name, $last_name)
    {
        // return "hello world";
        
        $bmArray = collect([
            ['name' => 'BM Raul Caballero', 'division_code' => 144, 'first_name' => 'HENRY', 'last_name' => 'LUNA'],
            ['name' => 'BM Vivencia Secuya', 'division_code' => 145, 'first_name' => 'NELLYGENE', 'last_name' => 'MAGALLANO'],
            ['name' => 'BM Kristine Mae', 'division_code' => 146, 'first_name' => 'JOSEPHINE', 'last_name' => 'MICABALO'],
            ['name' => 'BM Renato BASAÑES', 'division_code' => 147, 'first_name' => 'RODRIGO', 'last_name' => 'MANUGAS'],
            ['name' => 'BM Teodoro Arancon', 'division_code' => 148, 'first_name' => 'JENNIFER', 'last_name' => 'ARANGCON'],
            ['name' => 'BM Albert Camana', 'division_code' => 149, 'first_name' => 'CHERES', 'last_name' => 'ANGMARA'],
            ['name' => 'BM Herv Martelle Apsay', 'division_code' => 150, 'first_name' => 'SHERYL', 'last_name' => 'BILLONES'],
            ['name' => 'BM Ruwina GONZAGA', 'division_code' => 151, 'first_name' => 'LISTLY', 'last_name' => 'PANCIT'],
            ['name' => 'BM Marie Jude Fuentes-Lopoz', 'division_code' => 152, 'first_name' => 'CHERRYPIE', 'last_name' => 'RIVERA'],
            ['name' => 'BM Eutropio Jayectin', 'division_code' => 153, 'first_name' => 'ALEXA YSOBEL', 'last_name' => 'PEPITO'],
            ['name' => 'BM Wilfredo Ang', 'division_code' => 154, 'first_name' => 'EDUARDO', 'last_name' => 'RAPISTA'],
        ]);

       return $bmArray->where('first_name', $first_name)->where('last_name', $last_name);
       
    }

}
