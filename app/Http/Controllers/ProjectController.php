<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProjectController extends Controller
{
    public function __construct(Project $model)
    {
        $this->model = $model;
    }

    public function index(Request $request){
        return inertia('Projects/Index',[
            'projects' => $this->model
            ->with("ProjectVehicles")
            ->when($request->search, function ($query, $searchItem) {
                $query->where('description', 'like', '%' . $searchItem . '%');
            })
            ->simplePaginate(10)
            ->withQueryString(),
            "filters" => $request->only(['search']),
            "can" => [
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
            ]
        ]);
    }

    public function store(Request $request)
    {
       
        //DB::beginTransaction();
        try {
          //code...
          $attributes = $request->validate(['description'=> 'required']);
          $newProject = $this->model->create($attributes);
          //DB::commit();
          return "success";
        } catch (\Exception $th) {
            //DB::rollback();
            //throw $th;
            return "Description is required!";
        }
        
    }

    public function update(Request $request)
    {
        try {
            //code...
            $data = $this->model->findOrFail($request->id);
            $data->update([
                'description' => $request->description
            ]);
            return "success";
        } catch (\Exception $th) 
        {
            //throw $th;
            return  "Description is required!";
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
