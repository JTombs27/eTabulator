<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use App\Models\VehicleStatus;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\VehicleValidation;
use App\Models\DriverVehicle;
use App\Models\Project;
use App\Models\ProjectVehicle;
use App\Models\Travel;

class VehicleController extends Controller
{
    protected $isBorrow;
    public function __construct(Vehicle $model, VehicleStatus $status,Travel $travel,DriverVehicle $driverVehicle,Project $project,ProjectVehicle $projectVehicle)
    {
        $this->model = $model;
        $this->status = $status;
        $this->travel = $travel;
        $this->driverVehicle = $driverVehicle;
        $this->project = $project;
        $this->projectVehicle = $projectVehicle;
    }

    public function index(Request $request)
    {

        $index = $this->getFilter($request);
       
        return inertia('Vehicles/Index', [
            "vehicles" => $index
            ->when($request->search, function ($query, $searchItem) {
                $query->where('PLATENO', 'like', '%'.$searchItem . '%');
            })
            ->latest()
            ->simplePaginate(10)
            ->withQueryString(),
            // ->through(function($item) {
                
            //     // dd($item->officeV->department_code);
            //     if (request('department_code') && ($item->officeV->department_code != request('department_code'))) {
                    
            //     } else {
            //         return $item;
            //     }
            // })
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateVehicle'          => auth()->user()->can('canCreateVehicle', User::class),
                'canEditVehicle'            => auth()->user()->can('canEditVehicle', User::class),
                'canDeleteVehicle'          => auth()->user()->can('canDeleteVehicle', User::class),
                'canCreateDriver'           => auth()->user()->can('canCreateDriver', User::class ),
                'canCreateOfficeVehicles'   => auth()->user()->can('canCreateOfficeVehicles', User::class),
                'canViewWhereAbouts'        => auth()->user()->can('canViewWhereAbouts', User::class)
            ]
        ]);
    }

    public function getFilter($request)
    {
        
        $index = $this->model->with([
                    'vehicle_status',
                    'driverassign.empl.office',
                    'officeV.office'
                ]);


        
        if ($request->PLATENO) {
            $index = $index->where('PLATENO', 'like' , '%' .$request->PLATENO. '%');
        }
        
        if ($request->TYPECODE) {
            $index = $index->where('TYPECODE', 'like' , '%'.$request->TYPECODE.'%');
        }

        if ($request->FDATEACQ) {
            $index = $index->where('FDATEACQ', 'like' , '%'.$request->FDATEACQ.'%');
        }

        if ($request->FDESC) {
            $index = $index->where('FDATEACQ', 'like' , '%'.$request->FDESC.'%');
        }
        if ($request->department_code) {
            $index = $index->wherehas('officeV', function($q) use ($request) {
                $q->where('department_code', $request->department_code)->where('office_owner', 1);
            });
        }
        return $index;
    }

    public function create()
    {
        return inertia('Vehicles/Create');
    }

    public function store(VehicleValidation $request)
    {
        $validated = $request->validated();

        $vehicle = $this->model->create($request->except('checkadd','condition','vehicle_status_date', 'department_code'));

        if(!!$request->condition && !!$request->department_code) {

            $vehicleStatus = $this->status->create(['condition' => $request->condition,
                                                    'vehicles_id' => $vehicle->id,
                                                    'vehicle_status_date' => $request->vehicle_status_date,
                                                    'department_code' => $request->department_code,]);
        }

        if (!!$request->checkadd) {
            return redirect('/drivers/'.$vehicle->id.'/create')->with('message', 'Vehicle Added Successfully');
        } else {
            return redirect('/vehicles')->with('message', 'Added Successfully');
        }
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id',$id)->first();

        return inertia('Vehicles/Create', [
            'editData' => $data
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->update($request->except('checkadd','condition','vehicle_status_date'));

        return redirect('/vehicles')->with('message', 'updated successfuly');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        return redirect('/vehicles')->with('message', 'Deleted Susccessfuly');
    }

    public function getVehicles()
    {
        
        return DB::table('vehicles')
                ->select(
                    'vehicles.id',
                    'vehicles.PLATENO',
                    'vehicles.TYPECODE',
                    'vehicle_status.condition',
                    'vehicles.fuel_limit'
                )
                ->leftJoin('vehicle_status', 'vehicle_status.vehicles_id', 'vehicles.id')

                ->leftJoin('driver_vehicles', 'driver_vehicles.vehicles_id', 'vehicles.id')
                //->when('driver_vehicles.department_code', auth()->user()->office_id)
                // ->where(function ($query) use($id){
                //     $query->where('vehicle_status.condition', 'Good Condition')
                //         ->orWhere('vehicle_status.vehicles_id', $id);
                // })
                ->distinct('vehicle_status.vehicles_id')
                ->orderBy('vehicle_status.created_at', 'desc')
                ->get()
                ->map(fn($item) => [
                    'id' => $item->id,
                    'text' => $item->PLATENO,
                    'condition' => $item->condition ? $item->condition:"",
                    'typeCode' => $item->TYPECODE,
                    'fuel_limit' => $item->fuel_limit ? $item->fuel_limit:""
                ]);

    }

    public function setStatus(Request $request)
    {
        foreach ($request->vehiclesGroup as $index => $value) 
        {
           $this->status->create(
            [
                'condition' => $request->condition,
                'vehicles_id' => $value,
                'vehicle_status_date' => $request->vehicle_status_date]);
        }
        return 'success';
    }

    public function loadVehicles(Request $request)
    {
        $query = $this->model
                    ->where('FDESC', 'like', "%$request->filter%")
                    ->orWhere('PLATENO', 'like', "%$request->filter%")->get()
                    ->map(fn($item) => [
                        'id' => $item->PLATENO,
                        'text' => $item->FDESC
                    ]);
        return $query;
    }

    public function getWhereAboutsTravel(Request $request,$id)
    {
        
        $driverVehiclesId = $this->driverVehicle->where('vehicles_id',$id)->first();
        try{
            $travel_info = $this->travel
            ->with(['driverVehicle.vehicle.vehicle_status','driverVehicle.office'])
            ->where('driver_vehicles_id', $driverVehiclesId->id)
            ->latest()
            ->get();

            return  $travel_info;
        }catch(\Throwable $e ){
            return  "Error";
        }
        
      
        
    }
    public function getWhereAboutsProject(Request $request,$id)
    {
        
        try{
            $pv = $this->projectVehicle->where('vehicle_id',$id)->latest()->first();
             if(!!$pv)
             {
                 $this->isBorrow = $pv->external_borrow_flag;
             }
             else{
                 $this->isBorrow = 0;
             }
        }catch(\Throwable $e){
           $this->isBorrow = 0;
        }
       
        try{
             if($this->isBorrow == 1)
             {
                 $project_info = $this->project
                 ->with(['ProjectVehicles.municipality','ProjectVehicles.barangay'])
                 ->whereHas('ProjectVehicles',function($query) use($id){
                       $query->where('vehicle_id',$id);
                 })
                 ->latest()
                 ->get();
                 return  [$project_info, $this->isBorrow];
        
             }
             else{
                 $project_info = $this->project
                 ->with('ProjectVehicles')
                 ->whereHas('ProjectVehicles',function($query) use($id){
                    $query->where('vehicle_id',$id);
                 })
                 ->latest()
                 ->get();
                 return  [$project_info, $this->isBorrow];
             }
        }catch(\Throwable $e){
            return  $e;
        }
    }


    

}
