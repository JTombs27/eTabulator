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
        	'data.date_from' => 'required|date',
            'data.date_to' => 'required|date|after_or_equal:data.date_from',
        	"gasTypeGroup.*.price" =>"required|regex:/^\d{1,13}(\.\d{1,4})?$/",
    	],[
        	"gasTypeGroup.*.price.required"    =>"Amount is Required",
        	"gasTypeGroup.*.price.regex"    =>"Provide number only",
        	"data.date_from.required"    =>"Date is Required",
        	"data.date_to.required"    =>"Date is Required",
        	"data.date_to.after_or_equal"    =>"Date must be a date after or equal to Date from",
    	]);
    	
        foreach ($request->gasTypeGroup as $index => $value) 
        {
        	$attributes = $request->validate(
                        [  
                            "gasTypeGroup.$index.price"=>"required",     
                        ],
                        [  
                            "officeGroup.$index.price.required"=>"Office conflict with the same office.",
                        ] );
        
        }
       /* foreach($request->officeGroup as $key=>$office) 
        { 
            $this->model->create([
                'office_id'   => $office["office_id"],
                'amount' => $office["amount"],
            ]); 
        }*/

        return redirect("/prices")->with('message', 'Added Successfully');
    }
}
