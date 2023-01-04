<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\Participant;
use App\Models\User;
use App\Models\Voting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventParticipantsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Participant $model, EventHeader $event, EventSetup  $setup, Voting $vote)
    {
        $this->model = $model;
        $this->event = $event;
        $this->setup = $setup;
        $this->vote  = $vote;
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

        return inertia('EventParticipants/Index'
                    ,[
                        'event'         => $this->event
                                            ->with('event_settup')
                                            ->orderBy('event_from', 'DESC')
                                            ->get()
                                            ->map(fn($event) => [
                                                'id'                => $event->id,
                                                'event_title'       => $event->event_title,
                                                'event_description' => $event->event_description,
                                                'settups'           => $event->event_settup,
                                                'text'              =>$event->event_title
                                            ]),
                        'participants' => $this->model
                                         ->where('settup_id',$settup_id)
                                         ->simplePaginate(15)
                                         ->withQueryString()
                                         ->through(fn($event) => [
                                            'settup_id'            => $event->settup_id           ,
                                            'participants_name'    => $event->participants_name   ,
                                            'participants_address' => $event->participants_address,
                                            'participants_details' => $event->participants_details,
                                            'participants_profile' => $event->participants_profile,
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
                            'settup_id'=>$settup_id,
                        ]
                    ]
                );
    }
    public function create(Request $request)
    {
        return inertia('EventParticipants/Create',["settup_id"=> $request->settup_id,"event_id"=> $request->event_id]);
    }


    public function store(Request $request)
    {
        //$attributes = $request->validated();
        $filename  = "";
        
        
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

            $inserted_data = $this->model->create([
                'settup_id'             => $request->settup_id,
                'participants_name'     => $request->participants_name,
                'participants_address'  => $request->participants_address,
                'participants_details'  => $request->participants_details,
                'participants_profile'  => "",
            ]);
           
            if ($request->hasFile('participants_profile')) 
            {
                $file       = $request->file('participants_profile');
                $filename   = $file->getClientOriginalName();
                $name       = $file->getClientOriginalName();
                $extension  = $file->getClientOriginalExtension();
                Storage::disk('public')->delete('participants_profile/'.$inserted_data->id.'.'.$extension.'');
                $path       = $request->file('participants_profile')->storeAs('participants_profile',$inserted_data->id.'.'.$extension,'public');
                $inserted_data->update([
                    "participants_profile" => $path
                ]);
                
            }
          

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/event-participants')->with('error', $e);
        }

        return redirect('/event-participants')->with('message', 'Event Successfully Created');
    }
}
