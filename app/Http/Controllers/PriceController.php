<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PriceController extends Controller
{
    public function __construct(Price $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        return inertia('Prices/Index', [
            //returns an array of users with name field only
            "price" => $this->model
            	->when($request->search, function ($query, $searchItem) {
                    $q->where('gas_type', 'like', '%' . $searchItem . '%');
                    
                })
                ->orderBy('date','desc')
                ->simplePaginate(10)
                ->withQueryString()
                ,
            "filters" => $request->only(['search']),
            "can" => [
                'canCreatePrice' => auth()->user()->can('canCreatePrice', User::class),
                'canEditPrice' => auth()->user()->can('canEditPrice', User::class),
                'canDeletePrice' => auth()->user()->can('canDeletePrice', User::class)
            ]
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Prices/Create');
    }

    public function store(Request $request)
    {

        $attributes = $request->validate([
            'gasoline_id' => 'required',
        	'date' => 'required|date',
        	"premium_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
        	"regular_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "deisoline_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "engine_oil_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "brake_oil_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "greases_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
    	],[
            "gasoline_id.required"    =>"Station is Required",
    		"premium_price.required"    =>"Price is Required",
        	"premium_price.regex"    =>"Provide Currency only",
            "regular_price.required"    =>"Price is Required",
            "regular_price.regex"    =>"Provide Currency only",
            "deisoline_price.required"    =>"Price is Required",
            "deisoline_price.regex"    =>"Provide Currency only",
            "engine_oil_price.regex"    =>"Provide Currency only",
            "brake_oil_price.regex"    =>"Provide Currency only",
            "greases_price.regex"    =>"Provide Currency only",
        	"data.required"    =>"Date is Required",
    	]);

        $find = $this->model->where('date', $request->date)->where('gasoline_id', $request->gasoline_id)->first();

        if ($find) {
            return back()->with('error', 'Date and Station Already Exists!');
        } else {
            $this->model->create($request->all());  

            return redirect('/prices')->with('message', 'Added Successfully');
        }   
    }

    public function edit(Request $request,$id)
    {
        return inertia('Prices/Create'
                    ,[
                        "editData"  => $this->model->where('id',$id)->first()
                    ]
                );
    }

    public function update(Request $request,$id)
    {
       $attributes = $request->validate([
            'gasoline_id' => 'required',
            'date' => 'required|date',
            "premium_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "regular_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "deisoline_price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "engine_oil_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "brake_oil_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
            "greases_price" =>"nullable|regex:/^\d{1,13}(\.\d{1,4})?$/",
        ],[
            "gasoline_id.required"    =>"Station is Required",
            "premium_price.required"    =>"Price is Required",
            "premium_price.regex"    =>"Provide Currency only",
            "regular_price.required"    =>"Price is Required",
            "regular_price.regex"    =>"Provide Currency only",
            "deisoline_price.required"    =>"Price is Required",
            "deisoline_price.regex"    =>"Provide Currency only",
            "engine_oil_price.regex"    =>"Provide Currency only",
            "brake_oil_price.regex"    =>"Provide Currency only",
            "greases_price.regex"    =>"Provide Currency only",
            "data.required"    =>"Date is Required",
        ]);
        try {
            //code...
            $data = $this->model->findOrFail($id);
            $data->update($request->all());
            
            return redirect('/prices')->with('message', 'Successfully Updated!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return redirect('/prices')->with('error', 'Please provide required data');
        } 
    }

    public function destroy(Request $request)
    {
        try 
        {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //$request->session()->put("message","Successfully Deleted");
           return redirect('/prices')->with('message', 'Successfully Deleted!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return   ["message"=>"error"];
        }
       
    }
}
