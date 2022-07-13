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
                    //->when($request->search, function ($query, $searchItem) {
                    //    $query->where('description', 'like', '%' . $searchItem . '%');
                    //})
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

    public function store(Request $request,$id)
    {
        $this->model->create($request->all());
        return redirect('/projects-vehicle/'.$id.'/vehicles')->with('message', 'Added Successfully');
    }

    public function getVehicles()
    {
        return Vehicle::get()->map(fn($item) => [
            'id' => $item->id,
            'text' => $item->PLATENO
        ]);
    }
}
