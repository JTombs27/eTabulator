<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\User;
use App\Models\Charge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class ChargeController extends Controller
{
    public function __construct(Charge $model, User $user, Office $office)
    {
        $this->model = $model;
        $this->user = $user;
        $this->office = $office;
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

        /*$url = env('MIX_API_URL');
        $employees = Http::get("http://192.168.6.22:8077/sample_charge")->collect();
        $arrayOfEmployees = [];
            foreach ($employees as $value) {
                $data = [
                    'idraao' => $value['idraao'],
                    'idooe' => $value['idooe'],
                    'fraotype' => $value['fraotype'],
                    'ffunccod' => $value['ffunccod'],
                    'fraodesc' => $value['fraodesc'],
                    'fooedesc' => $value['fooedesc'],
                    'balance1' => $value['balance1'],
                    'balance2' => $value['balance2'],
                ];
                array_push($arrayOfEmployees, $data);
            }

    

        foreach ($employees as $key => $value) {
            //dd($employees);
            $office = DB::table('offices')->select(DB::raw('offices.office'))->where(DB::raw('offices.ffunccod'), $value['ffunccod'])
                    ->get();   
            dd($office);
        }*/
        
        $charge = DB::table('fms.raaods')
                    ->leftJoin('fms.ooes', 'ooes.recid', '=', 'raaods.idooe')
                    ->leftJoin('fms.raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                    ->leftJoin('fms.functions', 'functions.ffunccod', '=', 'raaohs.ffunccod')
                    ->leftJoin('fuel.offices', 'offices.department_code', '=', 'functions.department_code')
                    ->select(DB::raw('offices.office ,functions.FFUNCTION,raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.ffunccod, ooes.ffunccod as other_alloc, raaohs.fraodesc,raaohs.fraodesc, ooes.fooedesc,
                        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.factcode'),'50203090')
                    ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                    ->orderBy(DB::raw('raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'));
    
        if(!$isAdmin){
            $charge = $charge->where(DB::raw('functions.department_code'), auth()->user()->office_id)
                             ->orWhere(DB::raw('ooes.ffunccod'), auth()->user()->office->ffunccod);
        }

        return inertia('Charges/Index', [
            //returns an array of users with name field only

            "charge" => $charge
                ->when($request->search, function ($query, $searchItem) {
                    $query->where('ffunccod', 'like', '%' . $searchItem . '%');
                   
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

    public function sampleCharge(Request $request)
    {
        $charges = DB::connection('fms')->table('raaods')
                    ->leftJoin('ooes', 'ooes.recid', '=', 'raaods.idooe')
                    ->leftJoin('raaohs', 'raaohs.recid', '=', 'raaods.idraao')
                    ->select(DB::raw('raaods.idraao, raaods.idooe,raaohs.fraotype,raaohs.ffunccod,raaohs.fraodesc, ooes.fooedesc,
                        (SUM(if(entrytype=1 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance1,
                        (sum(if(entrytype=2 ,raaods.famount,0)) - sum(if(entrytype=3 ,raaods.famount,0))) as balance2'))
                    ->where(DB::raw('raaohs.tyear'),now()->year)
                    ->where(DB::raw('ooes.factcode'),'50203090')
                    ->groupBy(DB::raw('raaods.idraao,raaods.idooe'))
                    ->orderBy(DB::raw('raaohs.ffunccod, raaohs.fraodesc, ooes.fooedesc'))
                    ->get();

        return $charges;
    }


}
