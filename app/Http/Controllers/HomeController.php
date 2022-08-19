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
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges, Price $prices, Vehicle $vehicle)
    {
        $this->model            = $model;
        $this->driverVehicle    = $driverVehicle;
        $this->charges          = $charges;
        $this->prices           = $prices;
        $this->vehicle          = $vehicle;
    }    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $isAdmin =  User::
                    where('id', auth()->user()->id)
                    ->where(function($query){
                        $query->where('role','Admin')
                        ->orWhere('role','PGO');
                    })
                    ->first();

        $charges  =  $this->charges
                    ->with(['office'=>function($query){
                        $query->select('short_name','department_code');
                    }])
                    ->groupBy("office_id")
                    ->selectRaw('sum(amount) as amount, office_id')
                    ->get()
                    ->map(fn($item) => 
                    [
                       'office_charges_amount'=> $item->amount,
                       'office_short_name'=> $item->office->short_name,
                    ]);
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

        $officesLabels = Models\Office::withCount('officeTravelCount')
                                ->get()
                                ->map(fn($item) => [
                                    'short_name'=>$item->short_name,//['PGO'.'SPO']
                                    'travel_count'=> $item->office_travel_count_count
                                ]);

        if(!$isAdmin)
        {
            $charges  =  $this->charges
                            ->where('office_id', auth()->user()->office_id)
                            ->with(['office'=>function($query){
                                $query->select('short_name','department_code');
                            }])
                            ->groupBy("office_id")
                            ->selectRaw('sum(amount) as amount, office_id')
                            ->get()
                            ->map(fn($item) => 
                            [
                               'office_charges_amount'=> $item->amount,
                               'office_short_name'=> $item->office->short_name,
                            ]);
        }

        $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();

        $amountTotal = $this->charges->whereYear('created_at', date("Y"))->get();
        $amountTotal = $amountTotal->sum('amount');
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
            'charges' =>$charges,
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
