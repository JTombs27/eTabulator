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
                ->latest()
                ->simplePaginate(10)
                ->withQueryString()
                ,
            "filters" => $request->only(['search']),
            "can" => [
                'canCreatePrice' => auth()->user()->can('canCreatePrice', User::class)
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
        	'data.date' => 'required|date',
        	"gasTypeGroup.*.gas_type" =>"required",
        	"gasTypeGroup.*.price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
    	],[
    		"gasTypeGroup.*.gas_type.required"    =>"Gas Type is Required",
        	"gasTypeGroup.*.price.required"    =>"Price is Required",
        	"gasTypeGroup.*.price.regex"    =>"Provide Currency only",
        	"data.date.required"    =>"Date is Required",
    	]);


        foreach ($request->gasTypeGroup as $index => $value) 
        {

        	foreach ($request->gasTypeGroup as $index2 => $value2) 
            {
            	$find = $this->model->where("gas_type", $value2['gas_type'])->where('date',$request['data.date'])->first();

        		if(!!$find){
        			$attributes = $request->validate(
                        [  
                            "gasTypeGroup.$index2.gas_typeX"=>"required",                            
                        ],
                        [  
                            "gasTypeGroup.$index2.gas_typeX.required"=>"Gas Type already used on this date.",
                        ] );
        		}

                if($index !== $index2)
                {
                    //VALIDATE IF SAME VEHICLE is used for the same period or Not Same Period but
                    //but same purpose
                    if($value["gas_type"] === $value2["gas_type"])
                    {

                        $attributes = $request->validate(
                        [  
                            "gasTypeGroup.$index.gas_typeX"=>"required",
                            "gasTypeGroup.$index2.gas_typeX"=>"required",
                        ],
                        [  
                            "gasTypeGroup.$index.gas_typeX.required"=>"Gas Type conflict with the same Type.",
                            "gasTypeGroup.$index2.gas_typeX.required"=>"Gas Type conflict with the same Type.",
                        ] );
                    }
                }
            }
        
        }
        foreach($request->gasTypeGroup as $key=>$gasType) 
        { 
            $this->model->create([
                'gas_type'   => $gasType["gas_type"],
                'price' => $gasType["price"],
                'date' => $request["data.date"],
            ]); 
        }

        return redirect("/prices")->with('message', 'Added Successfully');
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
        $attributes = $request->validate(["gasTypeGroup.*.price" =>"required||regex:/^\d{1,13}(\.\d{1,4})?$/",
                              			],
                                        [ "gasTypeGroup.*.price.required"    =>"Amount is Required",
        								  "gasTypeGroup.*.price.regex"    =>"Provide Currency only",
        								] );
        try {
            //code...
            $data = $this->model->findOrFail($id);
            $data->update([
                'price' => $request->gasTypeGroup[0]["price"],
            ]);
            //$data->update([
            //                "purpose"=>$request->purpose,
            //                "date_from"=>$request->date_from,
            //                "date_to"=>$request->date_to
            //              ]);
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
