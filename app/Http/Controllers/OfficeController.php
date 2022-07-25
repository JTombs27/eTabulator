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
            $offices = Http::get("http://192.168.9.101:91//api/PGDDODepartments")->collect();
            // return $offices;
            $officeArray = [];
            foreach ($offices as $value) {
                $data = [
                    'id' => $value['department_code'],
                    'office' => $value['department_name1'],
                    'department_code' => $value['department_code'],
                    'short_name' => $value['department_short_name'],
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
        $query = $this->model
                    ->where('office', 'like', "%$request->filter%")
                    ->orWhere('short_name', 'like', "%$request->filter%")->get()
                    ->map(fn($item) => [
                        'id' => $item->department_code,
                        'text' => $item->office ." (".$item->short_name.")"
                    ]);

        return $query;
    }
}
