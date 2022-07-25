<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectVehicle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProjectController extends Controller
{
    public function __construct(Project $model, ProjectVehicle $projectVehicle)
    {
        $this->model = $model;
        $this->projectVehicle = $projectVehicle;
    }

    public function index(Request $request)
    {
        return inertia('Projects/Index',
        [
            'projects' => $this->model
            ->with("ProjectVehicles")
            ->when($request->search, function ($query, $searchItem) {
                $query->where('description', 'like', '%' . $searchItem . '%');
            })
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateProject' => auth()->user()->can('canCreateProject',User::class),
                'canEditProject' => auth()->user()->can('canEditProject',User::class),
                'canDeleteProject' => auth()->user()->can('canDeleteProject',User::class)
            ]
        ]);
    }

    public function create(Request $request)
    {
        if($request->id)
        {
            return inertia('Projects/Create',[
                "can" => [
                            'canCreateProject' => auth()->user()->can('create', User::class),
                            'canEditProject' => auth()->user()->can('canDeleteUser', User::class),
                ],
               'editData'=>$this->model
                ->with("ProjectVehicles.Vehicles")
                ->where('id','=',$request->id)->first()
            ]);
        }
        else{
            return inertia('Projects/Create',["can" => [
                    'canCreateProject' => auth()->user()->can('create', User::class),
                    'canEditProject' => auth()->user()->can('canDeleteUser', User::class),
                ]
            ]);
        }
        
    }

    public function store(Request $request)
    {
        //dd($request->data['description']);
        if($request->vehiclesGroup)
        {
            $attributes = $request->validate([ 'data.description'=> 'required',
                "vehiclesGroup.*.vehicle_id"=>"required",
                "vehiclesGroup.*.purpose"       =>"required",
                "vehiclesGroup.*.date_from"     =>"required|date",
                "vehiclesGroup.*.date_to"       =>"required|date|after_or_equal:vehiclesGroup.*.date_from"],
                [
                "data.description.required"                 =>"Project Description is Required.",
                "vehiclesGroup.*.vehicle_id.required"       =>"Vehicle is Required",
                "vehiclesGroup.*.purpose.required"          =>"Purpose is Required",
                "vehiclesGroup.*.date_from.required"        =>"Date From is Required",
                "vehiclesGroup.*.date_to.required"          =>"Date To is Required",
                "vehiclesGroup.*.date_to.after_or_equal"    =>"Date To must be a date after date From"] );
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
        }
        else
        {
            $attributes = $request->validate(['data.description'=> 'required'],
            [  "data.description.required" => "Project Description is Required."]);
        }
        DB::beginTransaction();
        try {
        //code...
            $newProject = $this->model->create($request->data);

            if($request->vehiclesGroup !==null)
            {
                foreach($request->vehiclesGroup as $key=>$vehicle) 
                { 
                    $this->projectVehicle->create([
                        'purpose'   => $vehicle["purpose"],
                        'date_from' => $vehicle["date_from"],
                        'date_to'   => $vehicle["date_to"],
                        'external_borrow_flag' =>false,
                        'rental_flag'=>false,
                        'municipality_id' =>0,
                        'barangay_id'=>0,
                        'project_id'=> $newProject->id,
                        'vehicle_id'=> $vehicle["vehicle_id"]
                    ]); 
                }
            }
            DB::commit();
        return redirect("/projects")->with('message', 'Added Successfully');
        } catch (\Exception $th) 
        {
            DB::rollback();
            //throw $th;
            return redirect("/projects")->with('error', $th);
        }  
      
        //DB::beginTransaction();
        //try {
        //  //code...
        //  $attributes = $request->validate(['description'=> 'required']);
        //  $newProject = $this->model->create($attributes);
        //  //DB::commit();
        //  return "success";
        //} catch (\Exception $th) {
        //    //DB::rollback();
        //    //throw $th;
        //    return "Description is required!";
        //}
        
    }

    public function update(Request $request)
    {
        $attributes = $request->validate(['data.description'=> 'required'],
        [  "data.description.required" => "Project Description is Required."]);
        try {
           //code...
           
           $id = $request->data["id"];
           $description = $request->data["description"];
           $data = $this->model->findOrFail($id);
           $data->update([
               'description' => $description
           ]);
           //DB::commit();
           return redirect("/projects")->with('message', 'Updated Successfully');
        } catch (\Exception $th) 
        {
           //throw $th;
           return redirect("/projects")->with('error', $th);
        } 
    }

    public function destroy(Request $request)
    {
        try 
        {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
    
            return "success";
        } catch (\Exception $th) {
            //throw $th;
            return $th;
        }
       
    }

}
