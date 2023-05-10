<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\SetupPanel;
use App\Models\ParticipantPanel;
use App\Models\Participant;
use App\Models\CriteriaForJudging;
use App\Models\Voting;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class JudgingController extends Controller
{
    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(SetupPanel $model, EventHeader $event, EventSetup  $setup, User $users, Participant $participant,CriteriaForJudging $criteria,Voting $vote)
    {
        $this->model        = $model;
        $this->event        = $event;
        $this->setup        = $setup;
        $this->users        = $users;
        $this->participant  = $participant;
        $this->criteria     = $criteria;
        $this->vote         = $vote;
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
                        
        $pannelList = $this->model
                            ->with(['panelUser','setup','setup.winner'])
                            ->where('user_id',auth()->user()->id)
                            ->simplePaginate(8)
                            ->withQueryString()
                            ->through(fn($panel) => [
                            'id'                    => $panel->id,
                            'panel_info'            => $panel->panel_info,
                            'profile_path'          => $panel->profile_path ,
                            'settup_info'           => $panel->setup ,
                            'user_information'      => $panel->panelUser,
                                "can" => [
                                    'delete' => true
                                ],
                            ]);
        return inertia('Judges/Index'
                    ,[
                        'event'         => $event_data,
                        'tobe_judge'    => $pannelList,
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

    public function getPariticipants(Request $request)
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
            $settupData = $this->setup->where('id','=',$settup_id)->get();
            return inertia('Judges/Participants'
            ,[
                'settupData'    => $settupData,
                'panelInfo'     => auth()->user(),
                'participants'  => $this->participant
                                ->with(['settup','settup.criteria'])
                                ->where('settup_id',$settup_id)
                                ->simplePaginate(1)
                                ->withQueryString()
                                ->through(fn($participant) => [
                                    'id'                   => $participant->id,
                                    'settup_id'            => $participant->settup_id           ,
                                    'participants_name'    => $participant->participants_name   ,
                                    'participants_address' => $participant->participants_address,
                                    'participants_details' => $participant->participants_details,
                                    'participants_profile' => $participant->participants_profile,
                                    'settup_info'          => $participant->settup,
                                    'criteria'             => $participant->settup->criteria,
                                    "can" => [
                                        'delete' => true
                                    ],
                                    ]),
                'username'      => auth()->user()->username,
                'users'         =>[],
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

    public function vote(Request $request)
    {
        DB::beginTransaction();
        $msg = "";
        try {
            foreach ($request->criteriaVoteGroup as $key => $value) 
            {
                # code...
                $this->vote->create([
                    'settup_id'             => $value['settup_id'],
                    'participants_id'       => $value['participants_id'],
                    'user_id'               => auth()->user()->id,
                    'criterria_id'          => $value['criteria_id'],
                    'vote_datetime_cast'    => Carbon::now(),
                    'vote_value'            => $value['vote_value'],
                ]);
            }
          
            DB::commit();
        } catch (\Exception $e) 
        {
            DB::rollback();
            return redirect('/panel-judging/participants?settup_id='.$request->data['settup_id'])->with('error','nag error ang program');
        }
        return redirect('/panel-judging/participants?settup_id='.$request->data['settup_id'])->with('message', "Successfully voted!");
    }

    public function getCriteria(Request $request)
    {
        $criteria = $this->criteria
                        ->leftjoin(DB::raw('voting_tbl AS V'),function($join) use($request)
                        {
                            $join->on('V.criterria_id','=','criteria_for_judging.id');
                            $join->on('V.participants_id','=',DB::raw($request->participants_id));
                            $join->on('V.user_id','=',DB::raw($request->panel_id));
                        })
                        ->selectRaw(
                            '
                                 criteria_for_judging.settup_id                 AS settup_id         
                                ,"'.DB::raw($request->participants_id).'"       AS participants_id     
                                ,"'.DB::raw($request->panel_id).'"              AS user_id             
                                ,criteria_for_judging.id                        AS criteria_id         
                                ,criteria_for_judging.criteria_description      AS criteria_description
                                ,criteria_for_judging.criteria_percentage       AS criteria_percentage
                                ,IF(ISNULL(V.vote_value)=1,0,V.vote_value)      AS vote_value
                                ,IF(ISNULL(V.vote_value)=1,"N","Y")             AS already_vote
                            '
                        )
                        ->where('criteria_for_judging.settup_id','=',$request->settup_id)
                        ->get();
        return $criteria;
    }
}
