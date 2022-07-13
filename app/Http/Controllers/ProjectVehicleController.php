<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectVehicle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Project;

class ProjectVehicleController extends Controller
{
    //
    public function __construct(ProjectVehicle $model)
    {
        $this->model = $model;
    }

    public function index(Request $request,$id)
    {
        return inertia('Project_Vehicles/Index'
                    ,[
                    'projectVehicles' => $this->model
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
        return inertia('Project_Vehicles/Create'
                    ,[
                        "project"   => Project::where('id',$id)->select('id','description')->first(),
                        "can"       => [
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                                        ]
                    ]
                );
    }
}
