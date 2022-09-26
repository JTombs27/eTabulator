<?php

namespace App\Http\Controllers;

use App\Models\Gasoline;
use Illuminate\Http\Request;

class GasolineController extends Controller
{
    public function __construct(Gasoline $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        return inertia('Gasolines/Index', [
            //returns an array of users with name field only
            "gasoline" => $this->model
            	->with('travel')
            	->when($request->search, function ($query, $searchItem) {
                    $q->where('name', 'like', '%' . $searchItem . '%');
                    
                })
                ->simplePaginate(10)
                ->withQueryString()
                ,
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateGasoline' => auth()->user()->can('canCreateGasoline', User::class),
                'canEditGasoline' => auth()->user()->can('canEditGasoline', User::class),
                'canDeleteGasoline' => auth()->user()->can('canDeleteGasoline', User::class)
            ]
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Gasolines/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
        	"name" =>"required",
    	],[
    		"name.required"=>"Station is Required",
        	
    	]);
            $this->model->create($request->all()); 
        
        return redirect("/gasolines")->with('message', 'Added Successfully');
    }

    public function edit(Request $request,$id)
    {
        return inertia('Gasolines/Create'
                    ,[
                        "editData"  => $this->model->where('id',$id)->first()
                    ]
                );
    }

    public function update(Request $request,$id)
    {
        $attributes = $request->validate([
        	"name" =>"required",
    	],[
    		"name.required"=>"Station is Required",
        	
    	]);
        try {
            //code...
            $data = $this->model->findOrFail($id);
            $data->update($request->all());
            //$data->update([
            //                "purpose"=>$request->purpose,
            //                "date_from"=>$request->date_from,
            //                "date_to"=>$request->date_to
            //              ]);
            return redirect('/gasolines')->with('message', 'Successfully Updated!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return redirect('/gasolines')->with('error', 'Please provide required data');
        } 
    }

    public function destroy(Request $request)
    {
        try 
        {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //$request->session()->put("message","Successfully Deleted");
           return redirect('/gasolines')->with('message', 'Successfully Deleted!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return   ["message"=>"error"];
        }
       
    }

     public function setStatus(Request $request, $id)
    {
        $status = $request->is_check ? 'activated':'deactivated';
        $status1 = $request->is_check ? 'activating':'deactivating';
        $gas = $this->model->findOrFail($id)->setStatus($request->is_check);
        if (!$gas) {
            return redirect('/gasolines')->with('error', "Error while $status1 the Gas Station account");
        }
        return redirect('/gasolines')->with('message', "Gas Station account $status ");
    }
}
