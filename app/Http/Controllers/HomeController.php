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

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges, Price $prices)
    {
        $this->model            = $model;
        $this->driverVehicle    = $driverVehicle;
        $this->charges          = $charges;
        $this->prices           = $prices;
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
                    ->where('role','Admin')
                    ->orWhere('role','PGO')
                    ->first();

        $chargeAmount  =  $this->charges->groupBy("office_id")
                        ->selectRaw('sum(amount) as amount')
                        ->get()
                        ->map(fn($item) => 
                        [
                            $item->amount
                        ]);
        $chargeLabel   =    $this->charges
                            ->with(['office'=>function($query){
                                $query->select('short_name','department_code');
                            }])
                            ->groupBy("office_id")->get()
                            ->map(fn($item) => [
                                $item->office->short_name
                            ]);
        $officesLabels = Models\Office::withCount('officeTravelCount')
                                ->get()
                                ->map(fn($item) => [
                                    $item->short_name
                                ]);
        $officesTravelCount = Models\Office::withCount('officeTravelCount')
                                ->get()
                                ->map(fn($item) => [
                                    $item->office_travel_count_count
                                ]);
        if(!$isAdmin)
        {
            $chargeAmount = $this->charges
                            ->where('office_id', auth()->user()->office_id)
                            ->selectRaw('sum(amount) as amount')
                            ->get()
                            ->map(fn($item) => 
                            [
                                $item->amount
                            ]);

            $chargeLabel  =  $this->charges
                            ->with(['office'=>function($query){
                                $query->select('short_name','department_code');
                            }])->where('office_id', auth()->user()->office_id)
                            ->groupBy('office_id')
                            ->get()->map(fn($item) => [
                                $item->office->short_name
                            ]);
        }

        $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();
        
        if(!$amount) {
            $amount = 0.00;
        } else {
           $amount = $amount->sum('amount');
        //    $amount = number_format($amount->sum('amount'), 2);
        }

        
        $travels = $this->model
                        ->whereYear('date_from', date("Y"))
                        ->where('office_id', auth()->user()->office_id)
                        ->get();
                        
        $travels = $travels->map(function($item)  
                    {
                        $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
                        $total      = $this->prices->when($checkPrice, function($q) use ($item) {
                                        $q->whereDate('date', $item->date_from);
                                    })->latest()->first($item->gas_type);
                        return [
                            'price' => ($total[$item->gas_type] * $item->total_liters),
                            'date' => $item->date_from
                        ];
                    });



        return inertia('Home',[
            'chargesAmount' =>$chargeAmount,
            'chargesLabel'  =>$chargeLabel,
            'officesLabels' =>$officesLabels,
            'officesTravelCount'=>$officesTravelCount,
            'consume'       =>$travels->sum('price'),
            'balance'       =>$amount,
            'isAdmin'       =>$isAdmin
        ]);
    }
}
