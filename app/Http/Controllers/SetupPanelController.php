<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\CriteriaForJudging;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
class SetupPanelController extends Controller
{
    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(CriteriaForJudging $model, EventHeader $event, EventSetup  $setup)
    {
        $this->model = $model;
        $this->event = $event;
        $this->setup = $setup;
    }    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $event_id   = "";
        $settup_id  = "";

        try {
            $event_id       = $request->event_id;
            $settup_id      = $request->settup_id;
            
        } catch (\Throwable $th) 
        {
            //throw $th;
        }

        $event_data = $this->event
                        ->with('event_settup')
                        ->orderBy('event_from', 'DESC')
                        ->get()
                        ->map(fn($event) => [
                            'id'                => $event->id,
                            'event_title'       => $event->event_title,
                            'event_description' => $event->event_description,
                            'settups'           => $event->event_settup,
                            'text'              => $event->event_title
                        ]);
        $criteria_list = $this->model
                            ->selectRaw(
                                'id                 
                                ,criteria_description
                                ,criteria_percentage
                                ,settup_id
                                ,(SELECT SUM(X.criteria_percentage) FROM criteria_for_judging X WHERE X.settup_id = criteria_for_judging.settup_id) 
                                    AS total_percentage
                                '           
                            )
                            ->where('settup_id',$settup_id)
                            ->orderBy('criteria_percentage','DESC')
                            ->simplePaginate(8)
                            ->withQueryString()
                            ->through(fn($criteria) => [
                            'id'                   => $criteria->id,
                            'criteria_description' => $criteria->criteria_description,
                            'criteria_percentage'  => $criteria->criteria_percentage ,
                            'total_percentage'     => $criteria->total_percentage ,
                            'settup_id'            => $criteria->settup_id,
                                "can" => [
                                    'delete' => true
                                ],
                            ]);
        return inertia('Panel/Index'
                    ,[
                        'event'         => $event_data,
                        'criteria_list' => $criteria_list,
                        'username'      => auth()->user()->username,
                        'can'           =>[
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),    
                        ],
                        'filterDataX'=>[
                            'event_id' => $event_id ,
                            'settup_id'=> $settup_id,
                        ]
                    ]
                );
    }
    public function create(Request $request)
    {
        return inertia('EventParticipants/Create',["settup_id"=> $request->settup_id,"event_id"=> $request->event_id]);
    }

    public function update(Request $request)
    {
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        if($request->criteriaGroup)
        {
            $attributes = $request->validate([ 
                "criteriaGroup.*.criteria_description"   =>"required",
                "criteriaGroup.*.criteria_percentage"    =>"required|gt:0"],
                [
                "criteriaGroup.*.criteria_description.required" =>"Description is Required!",
                "criteriaGroup.*.criteria_percentage.required"  =>"Percentage is Required!",
                "criteriaGroup.*.criteria_percentage.gt"        =>"Must be greater than zero!"] );
        }
        DB::beginTransaction();
        try {

            
            if($request->criteriaGroup !==null)
            {
                foreach($request->criteriaGroup as $key=>$criteria) 
                { 
                    $data = $this->model->where('id','=',$criteria["id"])->first();
                    $data->update(
                        [ 'criteria_description'   => $criteria["criteria_description"],
                        'criteria_percentage'   => $criteria["criteria_percentage"]
                        ]
                    );
                }
            }

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/criteria')->with('error', $e);
        }

        return redirect('/criteria?event_id='.$request->data["event_id"].'&settup_id='.$request->data["settup_id"])->with('message', 'Criteria Successfully Updated');
    }


    public function store(Request $request)
    {
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        if($request->criteriaGroup)
        {
            $attributes = $request->validate([ 
                "criteriaGroup.*.criteria_description"   =>"required",
                "criteriaGroup.*.criteria_percentage"    =>"required|integer|gt:0"],
                [
                "criteriaGroup.*.criteria_description.required" =>"Description is Required!",
                "criteriaGroup.*.criteria_percentage.required"  =>"Percentage is Required!",
                "criteriaGroup.*.criteria_percentage.gt"        =>"Must be greater than zero!"] );
        }
        DB::beginTransaction();
        try {

            
            if($request->criteriaGroup !==null)
            {
                foreach($request->criteriaGroup as $key=>$criteria) 
                { 
                    $this->model->create([
                        'criteria_description'   => $criteria["criteria_description"],
                        'criteria_percentage'   => $criteria["criteria_percentage"],
                        'settup_id'             => $criteria["settup_id"]
                    ]); 
                }
            }

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/criteria')->with('error', $e);
        }

        return redirect('/criteria?event_id='.$request->data["event_id"].'&settup_id='.$request->data["settup_id"])->with('message', 'Criteria Successfully Created');
    }

    public function destroy(Request $request)
    {
        $id = "";
        $event_id = "";
        $settup_id = "";
        try {
            if($request->data["id"] != null)
            {
                    $id         = $request->data["id"];
                    $event_id   = $request->data["event_id"];
                    $settup_id  = $request->data["settup_id"];
            }
            else{
                $id         = $request->id;
                $event_id   = $request->event_id;
                $settup_id  = $request->settup_id;
            }
        } catch (\Throwable $th) {
            //throw $th;
            $id         = $request->id;
            $event_id   = $request->event_id;
            $settup_id  = $request->settup_id;
        }
       
        $data = $this->model->findOrFail($id);
        $data->delete();

        return redirect('/criteria?event_id='.$event_id.'&settup_id='.$settup_id)->with('message', 'Setup Successfull deleted');
    }
}
