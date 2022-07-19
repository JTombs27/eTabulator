<?php

namespace App\Http\Controllers;

use App\Models\Office;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class OfficeController extends Controller
{
    public function __construct(Office $office)
    {
        $this->model = $office;
    }

    public function _sync()
    {
        try {
            //code...
            DB::table('offices')->truncate();
            $url = env('MIX_API_URL');
            $offices = Http::get("{$url}/PGDDODepartments")->collect();
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
    
    public function loadOffices(Request $request)
    {
        $query = $this->model->get()
                    ->map(fn($item) => [
                        'id' => $item->department_code,
                        'text' => $item->office
                    ]);

        return $query;
    }
}
