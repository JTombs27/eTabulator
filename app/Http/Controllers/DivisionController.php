<?php

namespace App\Http\Controllers;

use App\Models\Division;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class DivisionController extends Controller
{
    public function __construct(Division $division)
    {
        $this->model = $division;
    }

    public function _sync()
    {
        try {
            //code...
            // DB::table('divisions')->truncate();
            $url = env('MIX_API_URL');
            $divions = Http::post("http://122.54.19.172:91//api/PGDDO_Divisions_tbl")->collect();
            // return $divions;
            $divisionArray = [];
            foreach ($divions as $value) {
                $data = [
                    'department_code' => $value['department_code'],
                    'designation_head1' => $value['designation_head1'],
                    'designation_head2' => $value['designation_head2'],
                    'division_code' => $value['division_code'],
                    'division_name1' => $value['division_name1'],
                    'division_name2' => $value['division_name2'],
                    'division_short_name' => $value['division_short_name'],
                    'effective_date' => $value['effective_date'],
                    'empl_id' => $value['empl_id'],
                    'sort_order_div' => $value['sort_order_div'],
                    'subdepartment_code' => $value['subdepartment_code'],
                    'created_at' => now()
                ];
                array_push($divisionArray, $data);
            }
            $divisionArray = collect($divisionArray)->merge($this->boardMember())->toArray();
            // DB::table('divisions')->insert($divisionArray);
            
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
        
    }

    protected function boardMember()
    {
        $bmArray = [];
        $bmArray = collect([
            ['name' => 'BM Raul Caballero', 'division_code' => 144],
            ['name' => 'BM Vivencia Secuya', 'division_code' => 145],
            ['name' => 'BM Kristine Mae', 'division_code' => 146],
            ['name' => 'BM Renato BASAÑES', 'division_code' => 147],
            ['name' => 'BM Teodoro Arancon', 'division_code' => 148],
            ['name' => 'BM Albert Camana', 'division_code' => 149],
            ['name' => 'BM Herv Martelle Apsay', 'division_code' => 150],
            ['name' => 'BM Ruwina GONZAGA', 'division_code' => 151],
            ['name' => 'BM Marie Jude Fuentes-Lopoz', 'division_code' => 152],
            ['name' => 'BM Eutropio Jayectin', 'division_code' => 153],
            ['name' => 'BM Wilfredo Ang', 'division_code' => 154]
        ]);

        return $bmArray->map(fn($item) => [
            'department_code' => 19,
            'designation_head1' => '',
            'designation_head2' => '',
            'division_code' => '',
            'division_name1' => $item['name'],
            'division_code' => $item['division_code'],
            'division_name2' => '',
            'division_short_name' => '',
            'effective_date' => '',
            'empl_id' => '',
            'sort_order_div' => '',
            'subdepartment_code' => '',
            'created_at' => now()
        ])->toArray();
       
    }

    public function loadDivisions(Request $request)
    {
        $query = $this->model
                    ->where('department_code',$request->department_code)
                    ->get()
                    ->map(fn($item) => [
                        'id' => $item->division_code,
                        'text' => $item->division_name1,
                        'division_name1' => $item->division_name1
                    ]);

        return $query;
    }
    
}
