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
use Illuminate\Support\Facades\DB;
use App\Models\Office;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges, Price $prices, Vehicle $vehicle, Office $office)
    {
        $this->model            = $model;
        $this->driverVehicle    = $driverVehicle;
        $this->charges          = $charges;
        $this->prices           = $prices;
        $this->vehicle          = $vehicle;
        $this->offices          = $office;
    }    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // $url = env('MIX_API_URL');
        // $employees = Http::get("http://122.54.19.170:8077/sample_charge")->collect();
        // $attrs = [];
        // foreach ($employees as $key => $value) {
        //     // -> as it return std object
        //     //dd($value);
        //     $attrs[$value["ffunccod"]][] = $value["balance1"];
        // }
        // $charge = DB::connection('fms')->table('raaods')
        // ->leftJoin('ooes', 'ooes.recid', '=', 'raaods.idooe')
        // ->leftJoin('raaohs', 'raaohs.recid', '=', 'raaods.idraao')
        // ->select(DB::raw('raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.ffunccod,raaohs.fraodesc, ooes.fooedesc,
        //     (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
        //     (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
        // ->where(DB::raw('raaohs.tyear'),now()->year)
        // ->where(DB::raw('ooes.factcode'),'50203090')
        // ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
        // ->orderBy(DB::raw('raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'))
        // ->get();

        $chartData = DB::table('offices')
                     ->join('fms.functions','functions.department_code','=','offices.department_code')
                     ->join('fms.raaohs','fms.raaohs.FFUNCCOD','=','functions.ffunccod')
                     ->join('fms.raaods','raaods.idraao','=','raaohs.recid')
                     ->join('fms.ooes','ooes.recid', '=', 'raaods.idooe')
                     ->select(DB::raw('offices.short_name,raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.FFUNCCOD  ,raaohs.fraodesc, ooes.fooedesc,
                     (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                     (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                     ->where(DB::raw('raaohs.tyear'),now()->year)
                     ->where(DB::raw('ooes.factcode'),'50203090')
                     //->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                     ->groupBy(DB::raw('offices.department_code'))
                     ->orderBy(DB::raw('offices.department_code,raaohs.FFUNCCOD, raaohs.fraodesc, ooes.fooedesc'))
                     ->get()
                     ->map(fn($item) => 
                            [
                               'office_charges_amount'=> $item->balance1,
                               'office_short_name'=> $item->short_name,
                            ]);

        $isAdmin =  User::
                    where('id', auth()->user()->id)
                    ->where(function($query){
                        $query->where('role','Admin')
                        ->orWhere('role','PGO');
                    })
                    ->first();
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
                        ->where(DB::raw('ooes.factcode'),'50203090')
                        ->where('offices.department_code', auth()->user()->office_id)
                     //->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                     ->groupBy(DB::raw('raaohs.FFUNCCOD'))
                     ->orderBy(DB::raw('offices.department_code,raaohs.FFUNCCOD, raaohs.fraodesc, ooes.fooedesc'))
                     ->get()
                     ->map(fn($item) => 
                            [
                               'office_charges_amount'=> $item->balance1,
                               'office_short_name'=> $item->short_name,
                            ]);
           
        }
        $officesLabels = Models\Office::withCount('officeTravelCount')
                                ->get()
                                ->map(fn($item) => [
                                    'short_name'=>$item->short_name,//['PGO'.'SPO']
                                    'travel_count'=> $item->office_travel_count_count
                                ]);
        // $charges  =  $this->charges
        //                 ->where('office_id', auth()->user()->office_id)
        //                 ->with(['office'=>function($query){
        //                     $query->select('short_name','department_code');
        //                 }])
        //                 ->groupBy("office_id")
        //                 ->selectRaw('sum(amount) as amount, office_id')
        //                 ->get()
        //                 ->map(fn($item) => 
        //                 [
        //                    'office_charges_amount'=> $item->amount,
        //                    'office_short_name'=> $item->office->short_name,
        //                 ]);
        $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();

        //$amountTotal = $this->charges->whereYear('created_at', date("Y"))->get();
        //dd($amountTotal);
        //$amountTotal = $amountTotal->sum('amount');
        $amountTotal =DB::table('offices')
                    ->join('fms.functions','functions.department_code','=','offices.department_code')
                    ->join('fms.raaohs','fms.raaohs.FFUNCCOD','=','functions.ffunccod')
                    ->join('fms.raaods','raaods.idraao','=','raaohs.recid')
                    ->join('fms.ooes','ooes.recid', '=', 'raaods.idooe')
                    ->select(DB::raw('(SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.factcode'),'50203090')
                    //->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                    ->get();
        if(!$amount) {
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

        $fuelConsumed = $this->model
                        ->with(['office'=>function($query){
                            $query->select('short_name','department_code');
                        }])
                        ->whereYear('date_from', date("Y"))
                        ->get();

        $fuelConsumed = $fuelConsumed->map(function($item)  
        {
            $checkPrice =  $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
            $total      = $this->prices->when($checkPrice, function($q) use ($item) 
                                        {
                                            $q->whereDate('date', $item->date_from);
                                        })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
            return [
                'price' => ($total[$item->gas_type] * $item->total_liters),
                'office_short_name' => $item->office->short_name
            ];
        });

       
        return inertia('Home',[
            'charges' =>$chartData,
            'officesLabels' => $officesLabels,
            'consume'       => $travels->sum('price'),
            'balance'       => $amount,
            'isAdmin'       => $isAdmin,
            'fuelConsumed'  => $fuelConsumed,
            'TotalCharge'   => $amountTotal,
            'vehicles'      => $vehicles
        ]);
    }
}
