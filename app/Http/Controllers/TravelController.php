<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelRequest;
use App\Models\Charge;
use App\Models\DriverVehicle;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class TravelController extends Controller
{
    public function __construct(Travel $model, DriverVehicle $driverVehicle, Charge $charges)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
        $this->charges = $charges;
    }    

    public function index()
    {
        
        return inertia('Travels/Index',[
            "travels" => DB::table('travels')
                            ->select(
                                'vehicles.PLATENO',
                                'vehicles.FDESC',
                                'employees.first_name',
                                'employees.middle_name',
                                'employees.last_name',
                                'travels.date_from',
                                'travels.date_to',
                                'travels.actual_driver',
                                'travels.id',
                                'travels.status',
                                'travels.office_id'
                            )
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees', 'driver_vehicles.drivers_id', 'employees.empl_id')
                            ->get(),
            "can" => [
                'canCreateTravel' => auth()->user()->can('canCreateTravel', User::class),
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
        return inertia('Travels/Create',[
            'charges' => $this->charges->where('office_id', auth()->user()->office_id)->first()->amount
        ]);
    }

    public function edit(Request $request, $id)
    {
        $editData = $this->model->with('driverVehicle', 'driverVehicle.empl')->where('id',$id)->first();
        return inertia('Travels/Create', [
            'editData' => $editData
        ]);
        
    }

    public function getVehicleDriver(Request $request)
    {
        $mi = "";
        $driverVehicle = $this->driverVehicle
                            ->with('empl')
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

        DB::beginTransaction();
        try {
            $travel = Travel::create($request->all());
        } catch (\Throwable $e) {
            DB::rollback();
            return redirect('/travels/create')->with('error', '1');
        }
        
        try {
            $travel->updateTicket();
        } catch (\Throwable $e) {
            DB::rollback();
            return redirect('/travels/create')->with('error', '2');
        }
        
        try {
            $data1 = $this->charges->where('office_id', auth()->user()->office_id)->first();
            $data1->deductCharge($request->price);
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
        $isExistTravel = $this->model
                            ->where('driver_vehicles_id', $request->driver_vehicles_id)
                            ->where('id', '<>' ,$request->id)
                            ->where(function($query) use($date_from, $date_to) {
                                $query->whereBetween('date_from', [$date_from, $date_to])
                                        ->OrWhereBetween('date_to', [$date_from, $date_to]);
                            })
                            ->exists();

        $attributes = $request->validated();
       
        if ($isExistTravel) {
            return redirect('/travels/create')->with('error', 'This record already exist.');
        }

        $request['office_id'] = auth()->user()->office_id;
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
                                employees.first_name,
                                employees.middle_name,
                                employees.last_name,
                                travels.*, TIME_FORMAT(travels.time_departure, "%p") as departure, TIME_FORMAT(travels.time_arrival, "%p") as arrival'))
                            ->leftJoin('driver_vehicles', 'travels.driver_vehicles_id', 'driver_vehicles.id')
                            ->leftJoin('vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                            ->leftJoin('employees', 'driver_vehicles.drivers_id', 'employees.empl_id')
                            ->where('travels.id', $request->id)
                            ->first();
        return $travel;
    }

    
}
