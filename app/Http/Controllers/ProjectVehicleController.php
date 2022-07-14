<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectVehicle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Project;
use App\Models\Vehicle;

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
                    ->when($request->search, function ($query, $searchItem) 
                    {
                        $query->where('purpose', 'like', '%' . $searchItem . '%')
                        ->orWhereHas("Vehicles",function($queryx) use($searchItem){
                            $queryx->where("PLATENO",'like','%' . $searchItem . '%');
                        });
                    })
                    ->where('project_id','=',$id)
                    ->simplePaginate(10)
                    ->withQueryString(),
                    "project"=> Project::where('id',$id)->select('id','description')->first(),
                        "filters" => $request->only(['search']),
                        "can" => [
                            'createUser' => auth()->user()->can('create', User::class),
                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
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
        $attributes = $request->validate([  "vehicle_id"=>"required",
                                            "purpose"=>"required",
                                            "date_from"=>"required|date",
                                            "date_to"=>"required|date|after:date_from"]);

        $data = $this->model->where('vehicle_id',$request->vehicle_id)
        ->where(function ($qeury) use($request){
            $qeury->whereBetween("date_from",[$request->date_from,$request->date_to])
            ->orWhereBetween("date_to",[$request->date_from,$request->date_to]);
        })->first();
        if($data)
        {
            $attributes = $request->validate([
            "date_fromX"=>"required",
            "date_toX"=>"required"],[
                "date_fromX.required"=>"Date Conflict to other entry",
                "date_toX.required"=>"Date Conflict to other entry"
            ]);
        }
        else
        {
            try {
                //code...
                $this->model->create($request->all());
                return redirect('/projects-vehicle/'.$id.'/vehicles')->with('message', 'Added Successfully');
            } catch (\Throwable $th) {
                //throw $th;
                return redirect('/projects-vehicle/'.$id.'/create')->with('error','Please Provide required Data');
            }
        }
        
       
    }

    public function update(Request $request,$id,$vid)
    {
        $attributes = $request->validate([  
                                            "purpose"=>"required",
                                            "date_from"=>"required|date",
                                            "date_to"=>"required|date|after:date_from"]);
        $data = $this->model
        ->where('id','!=',$vid)
        ->where('vehicle_id',$request->vehicle_id)
        ->where(function ($qeury) use($request){
            $qeury->whereBetween("date_from",[$request->date_from,$request->date_to])
            ->orWhereBetween("date_to",[$request->date_from,$request->date_to]);
        })
        ->first();
        if($data)
        {
            $attributes = $request->validate([
            "date_fromX"=>"required",
            "date_toX"=>"required"],[
                "date_fromX.required"=>"Date Conflic to other entry",
                "date_toX.required"=>"Date Conflic to other entry"
            ]);
        }
        try {
            //code...
            $data = $this->model->findOrFail($vid);
            $data->update($request->all());
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
        return Vehicle::get()->map(fn($item) => [
            'id' => $item->id,
            'text' => $item->PLATENO
        ]);
    }
}
