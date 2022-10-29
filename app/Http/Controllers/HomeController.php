<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\Charge;
use App\Models\DriverVehicle;
use App\Models\Price;
use App\Models\Travel;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\SoaTravel;
use Illuminate\Support\Facades\DB;
use App\Models\Office;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Travel $model, DriverVehicle $driverVehicle ,SoaTravel $soatravel, Charge $charges, Price $prices, Vehicle $vehicle, Office $office)
    {
        $this->model            = $model;
        $this->driverVehicle    = $driverVehicle;
        $this->charges          = $charges;
        $this->prices           = $prices;
        $this->vehicle          = $vehicle;
        $this->offices          = $office;
        $this->soatravel        = $soatravel;

    }    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $vehicles = $this->vehicle
                    ->whereIn('TYPECODE',array(1,2,3))
                    ->groupBy('TYPECODE')
                    ->selectRaw('TYPECODE,count(id) AS number_of_type_vehicle')
                    ->get()
                    ->map(fn($item) => 
                    [
                       'TYPECODE'=> $item->TYPECODE,
                       'number_of_type_vehicle'=> $item->number_of_type_vehicle,
                    ]);
        
        $isAdmin =  User::
                    where('id', auth()->user()->id)
                    ->where(function($query){
                        $query->where('role','Admin')
                        ->orWhere('role','PGO');
                    })
                    ->first();
        $officesLabels = Models\Office::withCount('officeTravelCount')
                                ->get()
                                ->map(fn($item) => [
                                    'short_name'=>$item->short_name,//['PGO'.'SPO']
                                    'travel_count'=> $item->office_travel_count_count
                                ]);
       
        $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();

       
        $amountTotal =DB::table('offices')
                    ->join('fms.functions','functions.department_code','=','offices.department_code')
                    ->join('fms.raaohs','fms.raaohs.FFUNCCOD','=','functions.ffunccod')
                    ->join('fms.raaods','raaods.idraao','=','raaohs.recid')
                    ->join('fms.ooes','ooes.recid', '=', 'raaods.idooe')
                    ->select(DB::raw('(SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.fueltag'),'1')
                    ->get();
        if(!$amount) 
        {
            $amount = 0.00;
        } else {
           $amount = $amount->sum('amount');
        }

        
        $travels = $this->model
                        ->whereYear('date_from', date("Y"))
                        ->where('office_id', auth()->user()->office_id)
                        ->get();
                        
        $travels = $travels->map(function($item)  
                    {
                        $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                        $total      =$this->prices->when($checkPrice, function($q) use ($item) 
                                                {
                                                    $q->whereDate('date', $item->date_from);
                                                })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                        return [
                            'price' => ($total[$item->gas_type] * $item->total_liters),
                            'date' => $item->date_from
                        ];
                    });
       
        return inertia('Home',[
            'officesLabels' => $officesLabels,
            'consume'       => $travels->sum('price'),
            'balance'       => $amount,
            'isAdmin'       => $isAdmin,
            'TotalCharge'   => $amountTotal,
            'vehicles'      => $vehicles,
            'username'      => auth()->user()->username
        ]);
    }

    public function loadDepartmentCharges()
    {
        $chartData = DB::table('offices')
        ->join('fms.functions','functions.department_code','=','offices.department_code')
        ->join('fms.raaohs','fms.raaohs.FFUNCCOD','=','functions.ffunccod')
        ->join('fms.raaods','raaods.idraao','=','raaohs.recid')
        ->join('fms.ooes','ooes.recid', '=', 'raaods.idooe')
        ->select(DB::raw('offices.short_name,raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.FFUNCCOD  ,raaohs.fraodesc, ooes.fooedesc,
        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
        ->where(DB::raw('raaohs.tyear'),now()->year)
        ->where(DB::raw('ooes.fueltag'),'1')
        //->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
        ->groupBy(DB::raw('offices.department_code'))
        ->orderBy(DB::raw('offices.department_code,raaohs.FFUNCCOD, raaohs.fraodesc, ooes.fooedesc'));

        $isAdmin =  User::
        where('id', auth()->user()->id)
        ->where(function($query){
            $query->where('role','Admin')
            ->orWhere('role','PGO');
        })
        ->first();

        if(!$isAdmin)
        {
            $chartData = DB::table('offices')
                        ->join('fms.functions','functions.department_code','=','offices.department_code')
                        ->join('fms.raaohs','fms.raaohs.FFUNCCOD','=','functions.ffunccod')
                        ->join('fms.raaods','raaods.idraao','=','raaohs.recid')
                        ->join('fms.ooes','ooes.recid', '=', 'raaods.idooe')
                        ->select(DB::raw('offices.short_name,raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.FFUNCCOD  ,raaohs.fraodesc, ooes.fooedesc,
                        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                        ->where(DB::raw('raaohs.tyear'),now()->year)
                        ->where(DB::raw('ooes.fueltag'),'1')
                        ->where('offices.department_code', auth()->user()->office_id)
                        //->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                        ->groupBy(DB::raw('raaohs.FFUNCCOD'))
                        ->orderBy(DB::raw('offices.department_code,raaohs.FFUNCCOD, raaohs.fraodesc, ooes.fooedesc'));
            
        }

        return ["chartData" => $chartData->get()->map(fn($item) => $item->balance1), "chartLabel"=>$chartData->get()->map(fn($item) => $item->short_name)];
    }

    public function loadUtilize()
    {
        $unpaid = $this->model->where('status','fueled')->where(function($query) 
        {
            $query->where('soa_travel', null)
                    ->orWhereHas('soa', function ($q) {
                        $q->where('cafoa_number', null);
                    });
        })->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $totalUnpaid = $unpaid->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])

        ])->flatten(3);


        $paid = $this->model->whereHas('soa', function ($q) {
                                $q->where('cafoa_number','!=', null);
                            })->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $totalpaid = $paid->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])
        ])->flatten(3);

        $balance = $this->model->where('status','fueled')->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $total = $balance->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])
        ])->flatten(3);


        $charge = DB::table('fms.raaods as raaods')
                ->leftJoin('fms.ooes', 'ooes.recid', '=', 'raaods.idooe')
                ->leftJoin('fms.raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                ->leftJoin('fms.functions', 'functions.ffunccod', '=', 'raaohs.ffunccod')
                ->leftJoin('fms.functions as f', 'f.ffunccod', '=', 'ooes.ffunccod')
                ->leftJoin('fuel.offices', 'offices.department_code', '=', 'functions.department_code')
                ->select(DB::raw('offices.short_name as office,raaods.idraao, raaods.idooe, offices.department_code,
                    (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                    (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                ->where(DB::raw('raaohs.tyear'),now()->year)
                ->where(DB::raw('ooes.fueltag'),'1')
                ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                ->orderBy(DB::raw('offices.department_code','raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'))
                ->get()->map(function ($items) use ($total,$totalpaid,$totalUnpaid)
                {

                    $balance = $total->filter(function ($value) use ($items) {
                        
                        return $value['idraao'] == $items->idraao and $value['idooe'] == $items->idooe;
                    })->first();

                    $paid = $totalpaid->filter(function ($values) use ($items) {
                        
                        return $values['idraao'] == $items->idraao and $values['idooe'] == $items->idooe;
                    })->first();

                    $unpaid = $totalUnpaid->filter(function ($values) use ($items) {
                        
                        return $values['idraao'] == $items->idraao and $values['idooe'] == $items->idooe;
                    })->first();
                    
                    return [
                        'office_id' => $items->department_code,
                        'office_name' => $items->office,
                        'balance2' => $items->balance2,
                        'idraao' => $items->idraao,
                        'idooe' => $items->idooe,
                        'total_liters' => $balance ? $balance['total_liters']: 0,
                        'amount'=> $balance ? $balance['amount']: 0,
                        'paid_amount' => $paid ? $paid['amount']: 0,
                        'unpaid_amount' => $unpaid ? $unpaid['amount'] :0
                    ];
                });
        
        $charge2 = $charge->groupBy('office_id')->map(fn ($items) =>$items[0]['office_name']);

        $charge3 = $charge->groupBy('office_id')->map(fn ($items) =>$items->sum('amount'));

        return ["utilize_label"=>$charge2->values(),"utilize_data"=>$charge3->values()];//$charge2->values();
    }

    public  function loadFuelStatusBalance()
    {
        $unpaid = $this->model->where('status','fueled')->where(function($query) 
        {
            $query->where('soa_travel', null)
                    ->orWhereHas('soa', function ($q) {
                        $q->where('cafoa_number', null);
                    });
        })->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $totalUnpaid = $unpaid->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])

        ])->flatten(3);


        $paid = $this->model->whereHas('soa', function ($q) {
                                $q->where('cafoa_number','!=', null);
                            })->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $totalpaid = $paid->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])
        ])->flatten(3);

        $balance = $this->model->where('status','fueled')->get()->map(function ($item){

                            $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();

                            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                $q->whereDate('date', $item->date_from);
                                            })->where('gasoline_id', $item->gasoline_id)
                                            ->latest()
                                            ->first($item->gas_type);
                            $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;

                            return [
                                'office_id' => $item->office_id,
                                'total_liters' => $item->total_liters,
                                'price' => number_format($total[$item->gas_type],2),
                                'idraao' => $item->idraao,
                                'idooe' => $item->idooe,
                                "amount" => ($total[$item->gas_type] * $actual),
                            ]; 
                        });

        $total = $balance->groupBy('idraao')->map(fn($item) => [
        $item->groupBy('idooe')
        ])->map(fn($item) => [
        collect($item)->flatten(1)->map(fn($row1) => [
                $row1->mapWithKeys(fn($row) => [
                    'total_liters' => collect($row1)->sum('total_liters'),
                    'amount' => collect($row1)->sum('amount'),
                    'idraao' => $row['idraao'],
                    'idooe' => $row['idooe'],
                    'office_id' => $row['office_id']

                ])
            
        ])
        ])->flatten(3);


        $charge = DB::table('fms.raaods as raaods')
                ->leftJoin('fms.ooes', 'ooes.recid', '=', 'raaods.idooe')
                ->leftJoin('fms.raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                ->leftJoin('fms.functions', 'functions.ffunccod', '=', 'raaohs.ffunccod')
                ->leftJoin('fms.functions as f', 'f.ffunccod', '=', 'ooes.ffunccod')
                ->leftJoin('fuel.offices', 'offices.department_code', '=', 'functions.department_code')
                ->select(DB::raw('offices.office,raaods.idraao, raaods.idooe, offices.department_code,
                    (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                    (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                ->where(DB::raw('raaohs.tyear'),now()->year)
                ->where(DB::raw('ooes.fueltag'),'1')
                ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                ->orderBy(DB::raw('offices.department_code','raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'))
                ->get()->map(function ($items) use ($total,$totalpaid,$totalUnpaid){

                    $balance = $total->filter(function ($value) use ($items) {
                        
                        return $value['idraao'] == $items->idraao and $value['idooe'] == $items->idooe;
                    })->first();

                    $paid = $totalpaid->filter(function ($values) use ($items) {
                        
                        return $values['idraao'] == $items->idraao and $values['idooe'] == $items->idooe;
                    })->first();

                    $unpaid = $totalUnpaid->filter(function ($values) use ($items) {
                        
                        return $values['idraao'] == $items->idraao and $values['idooe'] == $items->idooe;
                    })->first();
                    
                    return [
                        'office_id' => $items->department_code,
                        'office_name' => $items->office,
                        'balance2' => $items->balance2,
                        'idraao' => $items->idraao,
                        'idooe' => $items->idooe,
                        'total_liters' => $balance ? $balance['total_liters']: 0,
                        'amount'=> $balance ? $balance['amount']: 0,
                        'paid_amount' => $paid ? $paid['amount']: 0,
                        'unpaid_amount' => $unpaid ? $unpaid['amount'] :0
                    ];
                });

        $charge2 = $charge->groupBy('office_id')->map(fn ($items) =>
        [
            'office_id'     => $items[0]['office_id'],
            'office_name'   => $items[0]['office_name'],
            'balance2'      => number_format($items->sum('balance2'),2),
            'total_liters'  => number_format($items->sum('total_liters'),2),
            'amount'        => number_format($items->sum('amount'),2),
            'amount_paid'   => number_format($items->sum('paid_amount'),2),
            'unpaid_amount' => number_format($items->sum('unpaid_amount'),2),
        ]
        );
        return $charge2->values();
    }

    
}
