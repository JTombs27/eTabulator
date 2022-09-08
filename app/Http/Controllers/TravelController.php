<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelRequest;
use App\Models\Charge;
use App\Models\DriverVehicle;
use App\Models\Gasoline;
use App\Models\OfficeVehicles;
use App\Models\Price;
use App\Models\Travel;
use App\Models\User;
use App\Models\Vehicle;
use App\Rules\ValidateWeek;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;

class TravelController extends Controller
{
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges, Price $prices, OfficeVehicles $officeVehicles, Vehicle $vehicles, Gasoline $station)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
        $this->charges = $charges;
        $this->prices = $prices;
        $this->officeVehicles = $officeVehicles;
        $this->vehicles = $vehicles;
        $this->station = $station;
    }    

    public function index(Request $request)
    {
        // dd($request->all());
        return inertia('Travels/Index',[
            "travels" => $this->model
                            ->with('driverVehicle.empl', 'driverVehicle.vehicle','gasoline')
                            ->when(strtolower(auth()->user()->role) == 'ro' || strtolower(auth()->user()->role) == 'pg-head' || strtolower(auth()->user()->role) == 'pgso',
                                function($q) {
                                    $q->where('office_id', auth()->user()->office_id);
                                }
                            )
                            ->when($request->dateFilterType == 'all', function($q) use ($request) {
                                $q->whereBetween('date_from', [$request->date_from,$request->date_to]);
                            })
                            ->when($request->dateFilterType == 'from', function($q) use ($request) {
                                $q->where('date_from', '>=', $request->date_from);
                            })
                            ->when($request->dateFilterType == 'to', function($q) use ($request) {
                                $q->where('date_from', '<=', $request->date_to);
                            })
                            ->when($request->status && $request->status != 'pending', function($q) {
                                $q->orWhere('status', request('status'));
                            
                            })
                            ->when($request->status == 'pending', function($q) {
                                $q->orWhereNull('status');
                            })
                            ->when($request->search, function ($query, $searchItem) {
                                $query->where('ticket_number', 'like', '%' . $searchItem . '%');
                            })
                            ->orderBy('status')
                            ->orderBy('id','desc')
                            ->simplePaginate(10)
                            ->withQueryString()
                            ->through(function ($item) {
                                $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                    $q->whereDate('date', $item->date_from);
                                                })->where('gasoline_id', $item->gasoline_id)
                                                ->latest()
                                                ->first($item->gas_type);
                                // dd($total[$item->gas_type], $item->total_liters);
                                $actual = $item->actual_liter ? $item->actual_liter : $item->total_liters;
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
                                    'price' => ($total[$item->gas_type] * $actual),
                                    'soa_travel' => $item->soa_travel,
                                    'place_to_visit' =>$item->place_to_visit,
                                    'purpose' =>$item->purpose,
                                    'actual_liters' =>$item->actual_liter,
                                    'official_passenger'=>$item->official_passenger,
                                    'is_carpool' =>$item->is_carpool,
                                    'is_borrowed_fuel'  =>$item->is_borrowed_fuel,
                                    'is_borrowed_vehicle'=>$item->is_borrowed_vehicle,
                                    'gasoline_station' => $item->gasoline->name,
                                    'invoice' => $item->invoice_no,
                                    'allow_to_edit' => $item->allow_edit
                                     ]; 
                                 }),
             "can" => [
                 'canCreateTravel' => auth()->user()->can('canCreateTravel', User::class),
                 'canEditTravel' => auth()->user()->can('canCreateTravel', User::class),
                 'canDeleteTravel' => auth()->user()->can('canDeleteTravel', User::class),
                 'canSetStatus' => auth()->user()->can('canSetStatus', User::class),
                 'canAllowEdit' => auth()->user()->can('canAllowEdit', User::class),
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
        // $amount = $this->charges->where('office_id', auth()->user()->office_id)->whereYear('created_at', date("Y"))->get();

        $amount = DB::table('fms.raaods as raaods')
                    ->leftJoin('fms.ooes', 'ooes.recid', '=', 'raaods.idooe')
                    ->leftJoin('fms.raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                    ->leftJoin('fms.functions', 'functions.ffunccod', '=', 'raaohs.ffunccod')
                    ->leftJoin('fms.functions as f', 'f.ffunccod', '=', 'ooes.ffunccod')
                    ->leftJoin('fuel.offices', 'offices.department_code', '=', 'functions.department_code')
                    ->select(DB::raw('offices.office ,functions.FFUNCTION,raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.ffunccod, f.ffunccod as other_alloc, raaohs.fraodesc,raaohs.fraodesc, ooes.fooedesc,
                        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.fueltag'),'1')
                    ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                    ->orderBy(DB::raw('raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'));

        if (auth()->user()->role != 'admin') {
            $amount = $amount->where(DB::raw('functions.department_code'), auth()->user()->office_id)
                            ->orWhere(DB::raw('f.department_code'), auth()->user()->office_id);
        }

        // dd($amount->get());
        // dd($amount->get());
        // if(!$amount) {
        //     // $amount = 0.00;
        // } else {
        // //    $amount = $amount->sum('amount');
        // //    $amount = number_format($amount->sum('amount'), 2);
        // }
        
        
        // ->with('soa')
        // ->whereHas('soa', function($q){
        //     $q->whereNull('cafoa_number');
        // })
        $travels = $this->model
                        ->with(['soa' => function($q) {
                            $q->whereNull('cafoa_number');
                        }])
                        ->whereYear('date_from', date("Y"))
                        ->where('office_id', auth()->user()->office_id)
                        ->where(function($q) {
                            $q->where('status', '<>', 'Disapproved')->orWhereNull('status');
                        })
                        ->get();
        
        $travels = $travels->map(function($item)  {
            $checkPrice = $this->prices->whereDate('date', $item->date_from)->exists();
            $total = $this->prices
                ->when($checkPrice, function($q) use ($item) {
                    $q->whereDate('date', $item->date_from);
                })
                ->where('gasoline_id', $item->gasoline_id)
                ->latest()
                ->first($item->gas_type);
            return [
                'price' => ($total[$item->gas_type] * $item->total_liters),
                'date' => $item->date_from,
                'idooe' => $item->idooe,
                'idraao' => $item->idraao,
            ];
        });
        // dd($travels);
        $total_expense = $travels->sum('price');
       
        
        return inertia('Travels/Create',[
           'charges' => $amount->get()
                            ->map(fn($item) => [
                                'balance1' => ($item->balance2 - collect($travels)->where('idooe', $item->idooe)->where('idraao', $item->idraao)->sum('price')),
                                'idooe' => $item->idooe,
                                'idraao' => $item->idraao,
                                'fraodesc' => "$item->fraodesc ($item->ffunccod)",
                                'fooedesc' => $item->fooedesc,
                            ])
        ]);
    }

    public function edit(Request $request, $id)
    {
        
        $amount = DB::table('fms.raaods as raaods')
                    ->leftJoin('fms.ooes', 'ooes.recid', '=', 'raaods.idooe')
                    ->leftJoin('fms.raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                    ->leftJoin('fms.functions', 'functions.ffunccod', '=', 'raaohs.ffunccod')
                    ->leftJoin('fms.functions as f', 'f.ffunccod', '=', 'ooes.ffunccod')
                    ->leftJoin('fuel.offices', 'offices.department_code', '=', 'functions.department_code')
                    ->select(
                        DB::raw('offices.office ,
                        functions.FFUNCTION,
                        raaods.idraao, 
                        raaods.idooe,
                        raaohs.fraotype,
                        raaohs.ffunccod, 
                        f.ffunccod as other_alloc, 
                        raaohs.fraodesc,
                        raaohs.fraodesc, ooes.fooedesc,
                        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.fueltag'),'1')
                    ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                    ->orderBy(DB::raw('raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'));

        if (auth()->user()->role != 'admin') {
            $amount =  $amount->where(DB::raw('functions.department_code'), auth()->user()->office_id)
            ->orWhere(DB::raw('f.department_code'), auth()->user()->office_id);
        }

        $travels = $this->model
                        ->whereYear('date_from', date("Y"))
                        ->where('office_id', auth()->user()->office_id)
                        // ->where('status', '<>', 'Disapproved')
                        ->get();
                
        $travels = $travels->map(function($item)  {
                        $checkPrice = $this->prices->whereDate('date', $item->date_from)->where('gasoline_id', $item->gasoline_id)->exists();
                        $total = $this->prices
                                ->when($checkPrice, function($q) use ($item) {
                                    $q->whereDate('date', $item->date_from);
                                })
                                ->where('gasoline_id', $item->gasoline_id)
                                ->latest()
                                ->first($item->gas_type);
                        return [
                        'price' => ($total[$item->gas_type] * $item->total_liters),
                        'date' => $item->date_from
                        ];
                    });
        
        $editData = $this->model->with('driverVehicle', 'driverVehicle.empl', 'driverVehicle.vehicle')->where('id',$id)->first();
      
        return inertia('Travels/Create', [
            'editData' => $editData,
            'charges' => $amount->get()
                            ->map(fn($item) => [
                                'balance1' => ($item->balance2 - collect($travels)->where('idooe', $item->idooe)->where('idraao', $item->idraao)->sum('price')),
                                'idooe' => $item->idooe,
                                'idraao' => $item->idraao,
                                'fraodesc' => "$item->fraodesc ($item->ffunccod)",
                                'fooedesc' => $item->fooedesc,
                            ])
        ]);
        
    }

    public function getVehicleDriver(Request $request)
    {
        $mi = "";
        // $weekStartDate = Carbon::parse($request->date_from)->startOfWeek()->format('Y-m-d');
        // $weekEndDate = Carbon::parse($request->date_from)->endOfWeek()->format('Y-m-d');
      
        // $fuel = $this->model->whereBetween('date_from', [$weekStartDate,$weekEndDate])
        //             ->with(['driverVehicle' => function($q) use ($request) {
        //                 $q->where('vehicles_id', $request->vehicles_id);
        //             }])
        //             ->whereHas('driverVehicle', function($q) use ($request) {
        //                 $q->where('vehicles_id', $request->vehicles_id);
        //             })
        //             ->when($request->date_to, function ($q) use ($weekStartDate,$weekEndDate){
        //                 $q->orWhereBetween('date_to', [$weekStartDate,$weekEndDate]);
        //             })
                    
        //             ->latest()
        //             ->get();

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
        $now = Carbon::now();
        // $weekStartDate = Carbon::parse($date_from)->startOfWeek()->format('Y-m-d');
        // $weekEndDate = Carbon::parse($date_from)->endOfWeek()->format('Y-m-d');
        // dd($weekStartDate, $weekEndDate);
        // $isExistTravel = $this->model
        //                     ->where('driver_vehicles_id', $request->driver_vehicles_id)
        //                     ->where(function($query) use($date_from, $date_to) {
        //                         $query->whereBetween('date_from', [$date_from, $date_to])
        //                                 ->OrWhereBetween('date_to', [$date_from, $date_to]);
        //                     })
        //                     ->exists();
      
        // if ($isExistTravel) {
        //     return redirect('/travels/create')->with('error', 'This record already exist.');
        // }

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
        $request['edit_by'] = auth()->user()->id;
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

    public function destroy($id)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();

        return redirect('/travels')->with('message', 'Travel deleted');
    }

    public function setStatus(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $statType = $data->setStatus($request->status);
        
        return redirect('/travels')->with($statType,"Status {$data->status}");
    }

    public function tripTicket(Request $request)
    {
        $travel = collect(DB::table('travels')
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
                                
                                offices.office,
                                offices.designation,
                                users.cats,
                                gasolines.name,
                                raaohs.ffunccod,
                                raaohs.fraodesc,
                                ooes.fooedesc'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees as driver', 'driver_vehicles.drivers_id', 'driver.empl_id')
                            ->leftJoin('offices', 'travels.office_id', 'offices.department_code')
                            ->leftJoin('users', 'travels.status_user_id', 'users.id')
                            ->leftJoin('gasolines', 'gasolines.id', 'travels.gasoline_id')
                            ->leftJoin('employees as head', function($join)
                                 {
                                     $join->on('users.cats', '=', 'head.empl_id');
                                 })
                            ->leftJoin('fms.raaods as raaods', function($join)
                                 {
                                     $join->on('travels.idraao', '=', 'raaods.idraao');
                                     $join->on('travels.idooe', '=', 'raaods.idooe');
                                 })
                            ->leftJoin('fms.raaohs as raaohs', 'raaohs.recid', 'raaods.idraao')
                            ->leftJoin('fms.ooes as ooes', 'raaods.idooe', 'ooes.recid')   
                            ->where('travels.id', $request->id)
                            ->get()->toArray())->map(function ($item){

                                $checkPrice = $this->prices->where('gasoline_id', $item->gasoline_id)->whereDate('date', $item->date_from)->exists();
                                
                                $total = $this->prices->when($checkPrice, function($q) use ($item) {
                                                    $q->whereDate('date', $item->date_from);
                                                })->where('gasoline_id', $item->gasoline_id)
                                                ->latest()
                                                ->first($item->gas_type);

                                return [
                                    'PLATENO' => $item->PLATENO,
                                    'FDESC' => $item->FDESC,
                                    'first_name' => $item->first_name,
                                    'middle_name' => $item->middle_name,
                                    'last_name' => $item->last_name,
                                    'id' => $item->id,
                                    'driver_vehicles_id' => $item->driver_vehicles_id,
                                    'ticket_number' => $item->ticket_number,
                                    'invoice_no' => $item->invoice_no,
                                    'is_carpool' => $item->is_carpool,
                                    'is_borrowed_fuel' => $item->is_borrowed_fuel,
                                    'is_borrowed_vehicle' => $item->is_borrowed_vehicle,
                                    'borrowing_office' => $item->borrowing_office,
                                    'date_from' => $item->date_from,
                                    'date_to' => $item->date_to,
                                    'place_to_visit' => $item->place_to_visit,
                                    'purpose' => $item->purpose,
                                    'time_departure' => $item->time_departure,
                                    'time_arrival' => $item->time_arrival,
                                    'gasoline_id' => $item->gasoline_id,
                                    'gas_type' => $item->gas_type,
                                    'price' => number_format($total[$item->gas_type],2),
                                    'total_liters' => $item->total_liters,
                                    'tank_balance' => $item->tank_balance,
                                    'consumed_fuel' => $item->consumed_fuel,
                                    'user_id' => $item->user_id,
                                    'office_id' => $item->office_id,
                                    'official_passenger' => $item->official_passenger,
                                    'soa_travel' => $item->soa_travel,
                                    'idraoo' => $item->idraao,
                                    'idooe' => $item->idooe,
                                    'actual_driver' => $item->actual_driver,
                                    'status' => $item->status,
                                    'status_user_id' => $item->status_user_id,
                                    'created_at' => $item->created_at,
                                    'updated_at' => $item->updated_at,
                                    'departure' => $item->departure,
                                    'arrival' => $item->arrival,
                                    'head_first_name' => $item->head_first_name,
                                    'head_middle_name' => Str::limit($item->head_middle_name, 1,'.'),
                                    'head_last_name' => $item->head_last_name,
                                    'position_short' => $item->position_short,
                                    'office' => $item->office,
                                    'designation' => $item->designation,
                                    'cats' => $item->cats,
                                    'name' => $item->name,
                                    'ffunccod' => $item->ffunccod,
                                    'fraodesc' => $item->fraodesc,
                                    'fooedesc' => $item->fooedesc
                                ]; 
                            });
        return $travel;
    }

    public function getPrice(Request $request)
    {
        try {
            $is_exist = $this->prices->where('gasoline_id', $request->gasoline_id)->whereDate('date',$request->datefilter)->exists();
            
            $query = $this->prices->query();

            $query->when($is_exist, function ($q) {
                return $q->whereDate('date',request('datefilter'));
            });
            $query = $query->where('gasoline_id', request('gasoline_id'))->latest()->first($request->gasType);
            return array_values($query->toArray())[0];
            
        } catch (\Throwable $th) {
           return 0.00;
        }
    }

    public function getVehicles(Request $request)
    {
        
        return $this->officeVehicles
                    ->whereHas('vehicle.vehicle_latest_status')
                    ->get()
                    ->map(fn($item) => [
                        'id' => $item->vehicles_id,
                        'text' => $item->plate_no,
                        'condition' => $item->vehicle->vehicle_latest_status->condition,
                        'typeCode' => $item->vehicle->TYPECODE,
                        'office_id' => $item->department_code
                    ]);
    }

    // public function checkWeek(Request $request)
    // {
    //     $validator = $request->validate([
    //         'date_to' => ['required', new ValidateWeek($request->date_from, $request->date_from)]
    //     ]);

        

    // }

    public function getFuel(Request $request) 
    {
        $weekStartDate = Carbon::parse($request->date_from)->startOfWeek()->format('Y-m-d');
        $weekEndDate = Carbon::parse($request->date_from)->endOfWeek()->format('Y-m-d');
        $fuel_limit = $this->vehicles->find($request->vehicles_id)->fuel_limit;
        
        $fuel = $this->model
                    ->whereBetween('date_from', [$weekStartDate,$weekEndDate])
                    ->with(['driverVehicle' => function($q) use ($request) {
                        $q->where('vehicles_id', $request->vehicles_id);
                    }])
                    ->whereHas('driverVehicle', function($q) use ($request){
                        $q->where('vehicles_id', $request->vehicles_id);
                    })
                    ->where(function($q) {
                        // $q->whereNull('status')->orWhere('status', 'Approved');
                        $q->where('status', '<>', 'Disapproved');
                    })
                    ->latest()
                    ->get();

        $consumedFuel =  $fuel->sum('total_liters') - $fuel->sum('actual_liter');
        
        if ($request->id) {
            $currentLitters = $this->model->find($request->id)->total_liters;
            $consumedFuel = $consumedFuel - $currentLitters;
        }
        if ($fuel_limit == 0) {
            return 'Unlimited';
        }
        return ($fuel_limit * 5) - $consumedFuel;
    }

    public function checkInvoice(Request $request)
    {
        $request->invoice_no = $request->invoice_no ? $request->invoice_no : "";
        $current_invoice = $this->model->find($request->id)->invoice_no;
        $response = $this->model
                        ->when($request->invoice_no, function($q) use($request) {
                            $q->where('invoice_no', $request->invoice_no);
                        })->exists();

        return !$response || ($request->invoice_no == $current_invoice);
    }

    public function updateInvoice(Request $request)
    {
        $current_invoice = $this->model->find($request->id)->invoice_no;
        
        $request->validate([
            'invoice' => ['required', Rule::when($current_invoice != $request->invoice, ['unique:travels,invoice_no'])],
            'actual_liter' => [Rule::when($request->actual_liter, ['numeric'])]
        ]);

        $travel = $this->model->findOrFail($request->id);

        $travel->update([
            'invoice_no' => $request->invoice,
            'actual_liter' => $request->actual_liter
        ]);

        return redirect()->back();
        
    }

    public function getGasolineStation(Request $request)
    {
       
        return $this->station->get();
        
    }

    public function allowEdit(Request $request)
    {
        $travel = $this->model->findOrFail($request->id);
        $travel->update([
            'allow_edit' => true
        ]);
        return redirect('/travels')->with('message', "Trip ticket # $travel->ticket_number is now allowed to edit");
    }
}
