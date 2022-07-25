<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectVehicle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Project;
use App\Models\Vehicle;
use Carbon\Carbon;

class ProjectVehicleController extends Controller
{
    //
    public function __construct(ProjectVehicle $model)
    {
        $this->model = $model;
    }

    public function index(Request $request,$id)
    {
        return inertia('ProjectVehicles/Index'
                    ,[
                    'projectVehicles' => $this->model
                    ->with("Vehicles")
                    ->where('project_id','=',$id)
                    ->when($request->search, function ($query, $searchItem) 
                    {
                        $query->
                        where('purpose', 'like', '%' . $searchItem . '%')
                        ->orWhereHas("Vehicles",function($queryx) use($searchItem){
                            $queryx->where("PLATENO",'like','%' . $searchItem . '%');
                        });
                    })
                    ->simplePaginate(10)
                    ->withQueryString(),
                    "project"=> Project::where('id',$id)->select('id','description')->first(),
                        "filters" => $request->only(['search']),
                        "can" => [
                            'canCreateProjectVehicle' => auth()->user()->can('canCreateProjectVehicle',User::class),
                            'canEditProjectVehicle' => auth()->user()->can('canEditProjectVehicle',User::class),
                            'canDeleteProjectVehicle' => auth()->user()->can('canDeleteProjectVehicle',User::class)
                        ]
                    ]
                );
    }

    public function create(Request $request,$id)
    {
        
        return inertia('ProjectVehicles/Create'
                    ,[
                        "project"   => Project::where('id',$id)->select('id','description')->first(),
                        "can"       => [
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                                        ]
                    ]
                );
    }

    public function edit(Request $request,$id,$vid)
    {
        return inertia('ProjectVehicles/Create'
                    ,[
                        "editData"  => $this->model->where('id',$vid)->first(),
                        "project"   => Project::where('id',$id)->select('id','description')->first(),
                        "can"       => [
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                                        ]
                    ]
                );
    }

    public function store(Request $request,$id)
    {
        //Common validation
        $attributes = $request->validate([  "vehiclesGroup.*.vehicle_id"=>"required",
        "vehiclesGroup.*.purpose"       =>"required",
        "vehiclesGroup.*.date_from"     =>"required|date",
        "vehiclesGroup.*.date_to"       =>"required|date|after_or_equal:vehiclesGroup.*.date_from"],
        ["vehiclesGroup.*.vehicle_id.required"=>"Vehicle is Required",
        "vehiclesGroup.*.purpose.required"    =>"Purpose is Required",
        "vehiclesGroup.*.date_from.required"  =>"Date From is Required",
        "vehiclesGroup.*.date_to.required"    =>"Date To is Required",
        "vehiclesGroup.*.date_to.after_or_equal" =>"Date To must be a date after date From"] );

        foreach ($request->vehiclesGroup as $index => $value) 
        {
            foreach ($request->vehiclesGroup as $index2 => $value2) 
            {
                if($index !== $index2)
                {
                    //VALIDATE IF SAME VEHICLE is used for the same period or Not Same Period but
                    //but same purpose
                    if($value["vehicle_id"] === $value2["vehicle_id"]
                     && 
                     (
                        ($value["date_from"] === $value2["date_from"])
                     )
                    )
                    {

                        $attributes = $request->validate(
                        [  
                            "vehiclesGroup.$index.vehicle_idX"=>"required",
                            "vehiclesGroup.$index2.vehicle_idX"=>"required",
                        ],
                        [  
                            "vehiclesGroup.$index.vehicle_idX.required"=>"Vehicle conflic with the same period.",
                            "vehiclesGroup.$index2.vehicle_idX.required"=>"Vehicle conflic with the same period.",
                        ] );
                    }
                    if($value["vehicle_id"] === $value2["vehicle_id"]
                     && 
                     (
                        (
                            $value["date_from"] > $value2["date_from"] &&
                            $value["date_from"] <= $value2["date_to"] &&
                            $value["purpose"] == $value2["purpose"]
                        )
                     )
                    )
                    {
                        $attributes = $request->validate(
                            [  
                                "vehiclesGroup.$index.vehicle_idX"=>"required",
                                "vehiclesGroup.$index2.vehicle_idX"=>"required",
                            ],
                            [  
                                "vehiclesGroup.$index.vehicle_idX.required"   =>"Same vehicle must have unique purpose.",
                                "vehiclesGroup.$index2.vehicle_idX.required"  =>"Same vehicle must have unique purpose.",
                            ] );
                    }
                }
            }
        }

        //Validate Backend for adding a vehicle conflic and exist to other project
        //with same or within the period
        foreach ($request->vehiclesGroup as $key => $value) {
            # code...
        }

        foreach($request->vehiclesGroup as $key=>$vehicle) 
        { 
            $this->model->create([
                'purpose'   => $vehicle["purpose"],
                'date_from' => $vehicle["date_from"],
                'date_to'   => $vehicle["date_to"],
                'project_id'=> $vehicle["project_id"],
                'vehicle_id'=> $vehicle["vehicle_id"],
                'external_borrow_flag'=> $vehicle["external_borrow_flag"],
                'rental_flag'=> $vehicle["rental_flag"],
                'municipality_id'=> $vehicle["municipality_id"],
                'barangay_id'=> $vehicle["barangay_id"],
            ]); 
        }
        return redirect("/projects-vehicle/$id/vehicles")->with('message', 'Added Successfully');
    }

    public function update(Request $request,$id,$vid)
    {
        $attributes = $request->validate([  "vehiclesGroup.*.vehicle_id"=>"required",
                                        "vehiclesGroup.*.purpose"   =>"required",
                                        "vehiclesGroup.*.date_from" =>"required|date",
                                        "vehiclesGroup.*.date_to"   =>"required|date|after_or_equal:vehiclesGroup.*.date_from"],
                                        ["vehiclesGroup.*.vehicle_id.required"=>"Vehicle is Required",
                                        "vehiclesGroup.*.purpose.required"    =>"Purpose is Required",
                                        "vehiclesGroup.*.date_from.required"  =>"Date From is Required",
                                        "vehiclesGroup.*.date_to.required"    =>"Date To is Required",
                                        "vehiclesGroup.*.date_to.after_or_equal"       =>"Date To must be a date after date From"] );
        
        $data = $this->model
        ->where('id','!=',$vid)
        ->where('vehicle_id',$request->vehiclesGroup[0]["vehicle_id"])
        ->where(function ($qeury) use($request){
            $qeury->where("date_from",$request->vehiclesGroup[0]["date_from"])
            ->orWhere(function($query2) use ($request){
                $query2->whereBetween("date_from",[$request->vehiclesGroup[0]["date_from"],$request->vehiclesGroup[0]["date_to"]])
                ->where("purpose",$request->vehiclesGroup[0]["purpose"]);
            });
        })
        ->first();
        if($data)
        {
            $attributes = $request->validate([
            "vehiclesGroup.*.date_fromX"=>"required",
            "vehiclesGroup.*.date_toX"=>"required"],[
                "vehiclesGroup.*.date_fromX.required"=>"Date Conflic to other entry",
                "vehiclesGroup.*.date_toX.required"=>"Date Conflic to other entry"
            ]);
        }
        try {
            //code...
            $data = $this->model->findOrFail($vid);
            $data->update([
                'purpose' => $request->vehiclesGroup[0]["purpose"],
                'date_from' => $request->vehiclesGroup[0]["date_from"],
                'date_to' => $request->vehiclesGroup[0]["date_to"],
                'external_borrow_flag' => $request->vehiclesGroup[0]["external_borrow_flag"],
                'rental_flag' => $request->vehiclesGroup[0]["rental_flag"],
                'municipality_id' => $request->vehiclesGroup[0]["municipality_id"],
                'barangay_id' => $request->vehiclesGroup[0]["barangay_id"],
            ]);
            //$data->update([
            //                "purpose"=>$request->purpose,
            //                "date_from"=>$request->date_from,
            //                "date_to"=>$request->date_to
            //              ]);
            return redirect('/projects-vehicle/'.$id.'/vehicles')->with('message', 'Successfully Updated!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return redirect('/projects-vehicle/'.$id.'/vehicles')->with('error', 'Please provide required data');
        } 
    }

    public function destroy(Request $request)
    {
        try 
        {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //$request->session()->put("message","Successfully Deleted");
            return ["message"=>"success"];
        } catch (\Exception $th) 
        {
            //throw $th;
            return   ["message"=>"error"];
        }
       
    }


    public function getVehicles()
    {
        $data = Vehicle::whereHas('vehicle_latest_status')
        ->get();
        
        return $data->map(fn($item) =>[
                'id' => $item->id,
                'text' => $item->PLATENO,
                'condition' => $item->vehicle_latest_status
                ]);
    }
}
