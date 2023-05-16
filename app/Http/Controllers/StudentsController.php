<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\Voting;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class StudentsController extends Controller
{
    public function __construct(Participant $model,EventHeader $eventHeader, Voting $voting, EventSetup $setup)
    {
        $this->model    = $model;
        $this->events   = $eventHeader;
        $this->vote     = $voting;
        $this->setup    = $setup;
    }

    protected function resourceAbilityMap()
    {
        return array_merge(parent::resourceAbilityMap(), [
            'canDeleteUser' => 'canDeleteUser'
        ]);
    } 


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $myId = auth()->user();
        $events = $this->events
                        ->with(['event_settup','event_settup.winner','event_settup.voted'=>function($q) use($myId)
                        {
                                $q->where('user_id',$myId->id);   
                        }])
                        ->orderBy('event_from', 'DESC')
                        ->get()
                        ->map(fn($event) => [
                            'id' => $event->id,
                            'event_title' => $event->event_title,
                            'event_description' => $event->event_description,
                            'settups'=> $event->event_settup
                           
                        ]);
        
        return inertia('Students/Index', [
            //returns an array of users with name field only
            "events" => $events,
            "can" => [
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                
            ],
        ]);
    }

    public function vote(Request $request)
    {
        DB::beginTransaction();
        $already_voted = $this->vote
        ->where('settup_id',$request->settup_id)
        ->where('user_id' ,auth()->user()->id)
        ->first();
        $msg = "";
        try {
           
            if(!$already_voted)
            {
                $inserted_data = $this->vote->create([
                    'settup_id'             => $request->settup_id,
                    'participants_id'       => $request->participants_id,
                    'user_id'               => auth()->user()->id,
                    'criterria_id'          => 0,
                    'vote_datetime_cast'    => Carbon::now(),
                    'vote_value'            => 1,
                ]);
               
                DB::commit();
            }
            else{
                return redirect('/students/to-students/'.$request->settup_id)->with('error','Invalid vote, Already voted!');
            }
          
           
        } catch (\Exception $e) 
        {
            DB::rollback();
            return redirect('/students/to-students/'.$request->settup_id)->with('error','nag error ang program');
        }
        return redirect('/students/to-students/'.$request->settup_id)->with('message', "Successfully voted!");
    }

    public function voteSummary(Request $request)
    {
        $data = $this->setup
        ->selectRaw(
        '
            (SELECT COUNT(X.id) FROM users X WHERE X.role = "Student" AND is_active = 1) AS total_student,
            (SELECT COUNT(X.user_id) FROM voting_tbl X 
                            INNER JOIN users Y
                                ON  Y.id = X.user_id
                                AND Y.role = "Student"
                 WHERE X.settup_id = event_settup.id) AS voted_student
        ')
        ->where('id',$request->settup_id)->first();
        $summary = $this->model
                    ->leftJoin('voting_tbl', 'voting_tbl.participants_id', '=','participants.id')
                    ->select(DB::raw("participants.participants_name as participants_name,
                     participants.participants_profile,
                     participants.id as participants_id,
                     voting_tbl.settup_id as settup_id"))
                    ->where('participants.settup_id',$request->settup_id)
                    ->groupBy('voting_tbl.participants_id')
                    ->get()
                    ->map(function($item) use($request)
                    {
                        return
                        [
                            "participants_name" => $item->participants_name,
                            "participants_photo"=> $item->participants_profile,
                            "participants_id"   => $item->participants_id,
                            "vote_count"        =>count($this->vote->where("settup_id",$request->settup_id)->where("criterria_id",0)->where("participants_id",$item->participants_id)->get())
                        ];
                    })
                    ;
        //dd($summary->values());
        return $data;
    }

    public function getEventParticipants(Request $request)
    {
            $this->settup_id = $request->settup_id;

            $event = $this->events
                    ->with(['event_settup'=>function($q)
                    {
                            $q->where('id',$this->settup_id);
                    }])
                    // ->whereHas('event_settup',function($q)
                    // {
                    //         $q->where('id',$this->settup_id);
                    // })
                    ->orderBy('event_from', 'DESC')
                    ->first();
            $server_date = Carbon::now()->format('Y-m-d');
          
            $participants = $this->model
                    ->where('settup_id',$this->settup_id)
                    ->orderBy('id', 'ASC')
                    ->get();
            $settup_data = $this->setup->where('id',$this->settup_id)->where('event_settup_withaudience',1)->exists();
            //dd('Server Date:'.$server_date.' -> between('.$event->event_from.','.$event->event_to.')');
            //dd(Carbon::parse($server_date)->between($event->event_from,$event->event_to));
            return inertia('Students/ParticipantsIndex'
                    ,[
                        'events'        => $event,
                        'participants'  => $participants,
                        'username'      => auth()->user()->username,
                        'settup_id'     => $this->settup_id,
                        'users'         =>[],
                        'canVote'       => ($this->vote->where('settup_id',$this->settup_id)->where('user_id',auth()->user()->id)->exists() == false && Carbon::parse($server_date)->between($event->event_from,$event->event_to) == true && $settup_data == true) ? true:false
                    ]
                );
    }
}
