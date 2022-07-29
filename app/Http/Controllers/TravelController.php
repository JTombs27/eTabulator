<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelRequest;
use App\Models\Charge;
use App\Models\DriverVehicle;
use App\Models\OfficeVehicles;
use App\Models\Price;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;


class TravelController extends Controller
{
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges, Price $prices, OfficeVehicles $officeVehicles)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
        $this->charges = $charges;
        $this->prices = $prices;
        $this->officeVehicles = $officeVehicles;
    }    

    public function index(Request $request)
    {
       
        return inertia('Travels/Index',[
            "travels" => $this->model
                            ->with('driverVehicle.empl', 'driverVehicle.vehicle')
                            ->when(strtolower(auth()->user()->role) == 'ro' || strtolower(auth()->user()->role) == 'pg-head' || strtolower(auth()->user()->role) == 'pgso',
                                function($q) {
                                    $q->where('office_id', auth()->user()->office_id);
                                }
                            )
                            ->when($request->dateFilterType == 'all', function($q) use ($request) {
                                $q->wherebetween('date_from', [$request->date_from,$request->date_from]);
                            })
                            ->when($request->dateFilterType == 'from', function($q) use ($request) {
                                $q->where('date_from', '>=', $request->date_from);
                            })
                            ->when($request->dateFilterType == 'to', function($q) use ($request) {
                                $q->where('date_from', '<=', $request->date_to);
                            })
                            ->orderBy('status')
                            ->orderBy('id','desc')
                            ->simplePaginate(10)
                            ->through(function ($item) {
                                $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
                                $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                                })->latest()->first($item->gas_type);
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
                                    'price' => ($total[$item->gas_type] * $item->total_liters),

                                    'soa_travel'        => $item->soa_travel,
                                    'place_to_visit'    =>$item->place_to_visit,
                                    'purpose'           =>$item->purpose,
                                    'official_passenger'=>$item->official_passenger,
                                    'is_carpool'        =>$item->is_carpool,
                                    'is_borrowed_fuel'  =>$item->is_borrowed_fuel,
                                    'is_borrowed_vehicle'=>$item->is_borrowed_vehicle,
                                ]; 
                            }),
            "can" => [
                'canCreateTravel' => auth()->user()->can('canCreateTravel', User::class),
                'canEditTravel' => auth()->user()->can('canCreateTravel', User::class),
                'canDeleteTravel' => auth()->user()->can('canDeleteTravel', User::class),
                'canSetStatus' => auth()->user()->can('canSetStatus', User::class),
            ]
        ]);
    }

    public function create()
    {
        // inertia()->share([
        //     'flash' => [
        //         'message' => null,
        //         'error' => "Ews"
        //     ]
        // ]);
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
                        ->where('status', '<>', 'Disapproved')
                        ->get();
                        
        $travels = $travels->map(function($item)  {
            $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
            $total = $this->prices->when($checkPrice, function($q) use ($item) {
                $q->whereDate('date', $item->date_from);
            })->latest()->first($item->gas_type);
            return [
                'price' => ($total[$item->gas_type] * $item->total_liters),
                'date' => $item->date_from
            ];
        });
      

        return inertia('Travels/Create',[
           'balance' => $amount - $travels->sum('price')
        ]);
    }

    public function edit(Request $request, $id)
    {
        $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();

        $travels = $this->model
                ->whereYear('date_from', date("Y"))
                ->where('office_id', auth()->user()->office_id)
                ->where('status', '<>', 'Disapproved')
                ->get();
                
        $travels = $travels->map(function($item)  {
                        $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
                        $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                                })->latest()->first($item->gas_type);
                        return [
                        'price' => ($total[$item->gas_type] * $item->total_liters),
                        'date' => $item->date_from
                        ];
                    });
        
        if(!$amount) {
            $amount = 0.00;
        } else {
           $amount = $amount->sum('amount');
        //    $amount = number_format($amount->sum('amount'), 2);
        }
        $editData = $this->model->with('driverVehicle', 'driverVehicle.empl')->where('id',$id)->first();
        return inertia('Travels/Create', [
            'editData' => $editData,
            'balance' => $amount - $travels->sum('price')
        ]);
        
    }

    public function getVehicleDriver(Request $request)
    {
        $mi = "";
        $driverVehicle = $this->driverVehicle
                            ->with('empl','vehicle.vehicle_status')
                            ->where('vehicles_id', $request->vehicles_id)
                            ->get();

        return $driverVehicle;
    }

    public function store(TravelRequest $request)
    {
        $date_from = $request->date_from;
        $date_to = $request->date_to;
        // $now = Carbon::now();
        // $weekStartDate = Carbon::parse($date_from)->startOfWeek()->format('Y-m-d');
        // $weekEndDate = Carbon::parse($date_to)->endOfWeek()->format('Y-m-d');
        $isExistTravel = $this->model
                            ->where('driver_vehicles_id', $request->driver_vehicles_id)
                            ->where(function($query) use($date_from, $date_to) {
                                $query->whereBetween('date_from', [$date_from, $date_to])
                                        ->OrWhereBetween('date_to', [$date_from, $date_to]);
                            })
                            ->exists();
      
        if ($isExistTravel) {
            return redirect('/travels/create')->with('error', 'This record already exist.');
        }

        // $attributes = $request->validated();
        
        // $travel = User::latest()->first();
        // $secondDigit = $travel->id+1;
        // $series = date('y').sprintf('%08d', $secondDigit);
        // $request['official_passenger'] = join(', ', $request->official_passenger);
        $request['ticket_number'] = 0;
        $request['user_id'] = auth()->user()->id;
        $request['office_id'] = auth()->user()->office_id;
        if (!$request->rangedDate) {
            $request['date_to'] = null;
        }
        
        DB::beginTransaction();
        try {
            $travel = Travel::create($request->all());
        } catch (\Throwable $e) {
            DB::rollback();
            return redirect('/travels/create')->with('error', $e);
        }
        
        try {
            $travel->updateTicket();
        } catch (\Throwable $e) {
            DB::rollback();
            return redirect('/travels/create')->with('error', '2');
        }
        
        try {
            $data1 = $this->charges->where('office_id', auth()->user()->office_id)->first();
        } catch (\Throwable $e) {
            DB::rollback();
            return redirect('/travels/create')->with('error', $e);
        }
        DB::commit();
        
        return redirect('/travels')->with('message', 'Travel successfully added');
        
    }

    public function update(TravelRequest $request, $id)
    {
        $date_from = $request->date_from;
        $date_to = $request->date_to;
        // $now = Carbon::now();
        // $weekStartDate = Carbon::parse($date_from)->startOfWeek()->format('Y-m-d');
        // $weekEndDate = Carbon::parse($date_to)->endOfWeek()->format('Y-m-d');
        
        // $isExistTravel = $this->model
        //                     ->where('driver_vehicles_id', $request->driver_vehicles_id)
        //                     ->where('id', '<>' ,$request->id)
        //                     ->where(function($query) use($date_from, $date_to) {
        //                         $query->whereBetween('date_from', [$date_from, $date_to])
        //                                 ->OrWhereBetween('date_to', [$date_from, $date_to]);
        //                     })
        //                     ->first();
       
        // $attributes = $request->validated();
       
        // if ($isExistTravel) {
        //     return redirect('/travels/create')->with('error', 'This record already exist.');
        // }

        $request['office_id'] = auth()->user()->office_id;
        if (!$request->rangedDate) {
            $request['date_to'] = null;
        }
        if (!$request->showActualDriver) {
            $request['actual_driver'] = null;
            // dd($request->all());
        }
        $data = $this->model->findOrFail($id);
        $data->update($request->all());

        return redirect('/travels')->with('message', 'The changes have been saved');

    }

    public function setStatus(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $statType = $data->setStatus($request->status);
        
        return redirect('/travels')->with($statType,"Status {$data->status}");
    }

    public function tripTicket(Request $request)
    {
        $travel = DB::table('travels')
                            ->select(DB::raw('vehicles.PLATENO,
                                vehicles.FDESC,
                                driver.first_name,
                                driver.middle_name,
                                driver.last_name,
                                travels.*, TIME_FORMAT(travels.time_departure, "%p") as departure, TIME_FORMAT(travels.time_arrival, "%p") as arrival,
                                head.first_name as head_first_name,
                                head.middle_name as head_middle_name,
                                head.last_name as head_last_name,
                                head.position_title_short as position_short,
                                offices.short_name,
                                offices.office,
                                offices.designation'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->leftJoin('employees as head', function($join)
                                 {
                                     $join->on('offices.empl_id', '=', 'head.empl_id');
                                 })
                            ->where('travels.id', $request->id)
                            ->first();
        return $travel;
    }

    public function getPrice(Request $request)
    {
        try {
            $is_exist = $this->prices->whereDate('date',$request->datefilter)->exists();
            
            $query = $this->prices->query();

            $query->when($is_exist, function ($q) {
                return $q->whereDate('date',request('datefilter'));
            });
            $query = $query->latest()->first($request->gasType);
            return array_values($query->toArray())[0];
            
        } catch (\Throwable $th) {
           return 0.00;
        }
    }

    public function getVehicles(Request $request)
    {
        
        return $this->officeVehicles
                    ->with('vehicle.vehicle_latest_status')
                    ->get()
                    ->map(fn($item) => [
                        'id' => $item->vehicles_id,
                        'text' => $item->plate_no,
                        'condition' => $item->vehicle->vehicle_latest_status->condition,
                        'typeCode' => $item->vehicle->TYPECODE,
                        'office_id' => $item->department_code
                    ]);
    }
}
