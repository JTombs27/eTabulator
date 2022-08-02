<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Charge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChargeController extends Controller
{
    public function __construct(Charge $model, User $user)
    {
        $this->model = $model;
        $this->user = $user;
    }

    public function index(Request $request)
    {
        $isAdmin =  User::
                    where('id', auth()->user()->id)
                    ->where(function($query){
                        $query->where('role','Admin')
                        ->orWhere('role','PGO');
                    })
                    ->first();

        $charge =  $this->model;
                                

        if(!$isAdmin){
            $charge = $this->model->where('office_id', auth()->user()->office_id);
        }

        return inertia('Charges/Index', [
            //returns an array of users with name field only

            "charge" => $charge->with('office')
                ->when($request->search, function ($query, $searchItem) {
                    $query->whereHas('office', function($q) use ($searchItem){
                        $q->where('office', 'like', '%' . $searchItem . '%');
                    });
                })
                ->simplePaginate(10)
                ->withQueryString(),
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateCharge' => auth()->user()->can('canCreateCharge', User::class),
                'canEditCharge' => auth()->user()->can('canEditCharge', User::class),
                'canDeleteCharge' => auth()->user()->can('canDeleteCharge', User::class),
            ]
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Charges/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
        	"officeGroup.*.office_id"=>"required",
        	"officeGroup.*.amount" =>"required||regex:/^\d{1,13}(\.\d{1,4})?$/",
    	],[
    		"officeGroup.*.office_id.required"=>"Office is Required",
        	"officeGroup.*.amount.required"    =>"Amount is Required",
        	"officeGroup.*.amount.regex"    =>"Provide number only",
    	]);
        /*foreach ($request->officeGroup as $index => $value) 
        {
            foreach ($request->officeGroup as $index2 => $value2) 
            {
                if($index !== $index2)
                {
                    //VALIDATE IF SAME VEHICLE is used for the same period or Not Same Period but
                    //but same purpose
                    if($value["office_id"] === $value2["office_id"])
                    {

                        $attributes = $request->validate(
                        [  
                            "officeGroup.$index.office_idX"=>"required",
                            "officeGroup.$index2.office_idX"=>"required",
                        ],
                        [  
                            "officeGroup.$index.office_idX.required"=>"Office conflict with the same office.",
                            "officeGroup.$index2.office_idX.required"=>"Office conflict with the same office.",
                        ] );
                    }
                }
            }
        }*/
        foreach($request->officeGroup as $key=>$office) 
        { 
            $this->model->create([
                'office_id'   => $office["office_id"],
                'amount' => $office["amount"],
            ]); 
        }
        return redirect("/charges")->with('message', 'Added Successfully');
    }

    public function edit(Request $request,$id)
    {
        return inertia('Charges/Create'
                    ,[
                        "editData"  => $this->model->with('office')->where('id',$id)->first()
                    ]
                );
    }

    public function update(Request $request,$id)
    {
        $attributes = $request->validate(["officeGroup.*.amount" =>"required||regex:/^\d{1,13}(\.\d{1,4})?$/",
                              			],
                                        [ "officeGroup.*.amount.required"    =>"Amount is Required",
        								  "officeGroup.*.amount.regex"    =>"Provide number only",
        								] );
        try {
            //code...
            $data = $this->model->findOrFail($id);
            $data->update([
                'amount' => $request->officeGroup[0]["amount"],
            ]);
            //$data->update([
            //                "purpose"=>$request->purpose,
            //                "date_from"=>$request->date_from,
            //                "date_to"=>$request->date_to
            //              ]);
            return redirect('/charges')->with('message', 'Successfully Updated!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return redirect('/charges')->with('error', 'Please provide required data');
        } 
    }

    public function destroy(Request $request)
    {
        try 
        {
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //$request->session()->put("message","Successfully Deleted");
           return redirect('/charges')->with('message', 'Successfully Deleted!');
        } catch (\Exception $th) 
        {
            //throw $th;
            return   ["message"=>"error"];
        }
       
    }
}
