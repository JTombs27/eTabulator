<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravelRequest;
use App\Models\DriverVehicle;
use App\Models\Travel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class TravelController extends Controller
{
    public function __construct(Travel $model, DriverVehicle $driverVehicle)
    {
        $this->model = $model;
        $this->driverVehicle = $driverVehicle;
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
                                'travels.status'
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
        return inertia('Travels/Create', [

        ]);
    }

    public function getVehicleDriver(Request $request)
    {
        $mi = "";
        $driverVehicle = $this->driverVehicle
                            ->with('driver')
                            ->where('vehicles_id', $request->vehicles_id)
                            ->get();

        return $driverVehicle;
    }

    public function store(TravelRequest $request)
    {
        
        $attributes = $request->validated();
        
        // $travel = User::latest()->first();
        // $secondDigit = $travel->id+1;
        // $series = date('y').sprintf('%08d', $secondDigit);
        // $request['official_passenger'] = join(', ', $request->official_passenger);
        $request['ticket_number'] = 0;
        $request['user_id'] = auth()->user()->id;
        $request['office_id'] = auth()->user()->office_id;

        $travel = Travel::create($request->all());
        $travel->updateTicket();
        
        return redirect('/travels')->with('message', 'Travel successfully added');
        
    }

    public function setStatus(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->setStatus();
        return redirect('/travels')->with('message',"Status {$data->status}");
    }
}
