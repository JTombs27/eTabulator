<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectVehicle;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class ProjectVehicleController extends Controller
{
    //
    public function __construct(ProjectVehicle $model)
    {
        $this->model = $model;
    }
    public function index(Request $request){
        return inertia('Project_Vehicles/Index'
        ,[
           'projectVehicles' => $this->model
           //->when($request->search, function ($query, $searchItem) {
           //    $query->where('description', 'like', '%' . $searchItem . '%');
           //})
           ->simplePaginate(10)
           ->withQueryString(),
            "filters" => $request->only(['search']),
            "can" => [
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
            ]
        ]
    );
    }
}
