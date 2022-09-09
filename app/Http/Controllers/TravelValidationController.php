<?php

namespace App\Http\Controllers;


use App\Http\Requests\TravelRequest;
use App\Models\Price;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Str;
class TravelValidationController extends Controller
{
    //
    public function __construct(Travel $model, Price $price)
    {
        $this->model = $model;
        $this->prices = $price;
    }    

    public function index(Request $request)
    {
        $data = $this->model
            ->with('driverVehicle.empl', 'driverVehicle.vehicle','gasoline')
            ->where('travels.id', $request->id)
            ->simplePaginate(10)
            ->through(function ($item) 
            {
                $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                $total = $this->prices->when($checkPrice, function($q) use ($item) {
                    $q->whereDate('date', $item->date_from);
                })->where('gasoline_id', $item->gasoline_id)->latest()->first($item->gas_type);
                return [
                    'first_name' => $item->driverVehicle->empl->first_name,
                    'middle_name' => $item->driverVehicle->empl->middle_name,
                    'last_name' => $item->driverVehicle->empl->last_name,
                    'PLATENO' => $item->driverVehicle->vehicle->PLATENO,
                    'FDESC' => $item->driverVehicle->vehicle->FDESC,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'actual_driver' => $item->actual_driver,
                    'ticket_number' => $item->ticket_number,
                    'id' => $item->id,
                    'liters' => $item->total_liters,
                    'status' => $item->status,
                    'office_id' => $item->office_id,
                    'gas_type'=>$item->gas_type,
                    'price' => number_format($total[$item->gas_type],2),
                    'gasoline_station' => $item->gasoline->name
                ]; 
            });
        return inertia("TravelValidations/Index",["TravelData" => $data]);
    }

    public function update(Request $request){
        try {
            //code...
            //dd();
            $actual_liters = $request->actual_liters;
            $data = $this->model->findOrFail($request->id);
            $data->update([
                'status'=> 'Fueled'
                ,'actual_liter'=> $actual_liters
                ,'date_fueled' => Carbon::now()
            ]);
            
            return 'success';
        } catch (\Exception $th) 
        {
            //throw $th;
            return 'error';
        } 
    }
}
