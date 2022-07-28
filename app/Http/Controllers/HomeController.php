<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $isAdmin = User::
        where('id', auth()->user()->id)
        ->where('role','Admin')
        ->first();

        $chargeAmount  =  Models\Charge::groupBy("office_id")
                        ->selectRaw('sum(amount) as amount')
                        ->get()
                        ->map(fn($item) => 
                        [
                            $item->amount
                        ]);
        $chargeLabel   =  Models\Charge::with(['office'=>function($query){
            $query->select('short_name','department_code');
        }])->groupBy("office_id")->get()
        ->map(fn($item) => [
            $item->office->short_name
        ]);
        $offices = Models\Office::get()->map(fn($item) => [
            $item->short_name
        ]);
        if(!$isAdmin)
        {
            $chargeAmount = Models\Charge::where('office_id', auth()->user()->office_id)
            ->selectRaw('sum(amount) as amount')
            ->get()
            ->map(fn($item) => 
            [
                $item->amount
            ]);

            $chargeLabel  =  Models\Charge::with(['office'=>function($query){
                $query->select('short_name','department_code');
            }])->where('office_id', auth()->user()->office_id)
            ->groupBy('office_id')
            ->get()->map(fn($item) => [
                $item->office->short_name
            ]);
        }
        //dd($chargeLabel);
        return inertia('Home',[
            'chargesAmount'=>$chargeAmount,
            'chargesLabel'=>$chargeLabel,
            'officesLabels' =>$offices
        ]);
    }
}
