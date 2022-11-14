<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EventParticipantsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(EventHeader $model, EventSetup  $setup)
    {
        $this->model = $model;
        $this->setup = $setup;
    }    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        // $events = $this->model
        // ->with('event_settup')
        // ->orderBy('event_from', 'DESC')
        // ->get()
        // ->map(fn($event) => [
        //     'id' => $event->id,
        //     'event_title' => $event->event_title,
        //     'event_description' => $event->event_description,
        //     'settups'=> $event->event_settup
        // ]);

        return inertia('EventParticipants/Index'
                    ,[
                        'event'         => $this->model
                                            ->with('event_settup')
                                            ->orderBy('event_from', 'DESC')
                                            ->get()
                                            ->map(fn($event) => [
                                                'id' => $event->id,
                                                'event_title' => $event->event_title,
                                                'event_description' => $event->event_description,
                                                'settups'=> $event->event_settup
                                            ]),
                        'username'      => auth()->user()->username,
                        'users'         =>[],
                        'can'           =>[
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),    
                                        ]
                    ]
                );
    }

    public function getEventParticipants(Request $request)
    {
            $this->settup_id = $request->settup_id;
            $event = $this->model
                    ->with('event_settup')
                    ->whereHas('event_settup',function($q)
                    {
                            $q->where('id',$this->settup_id);
                    })
                    ->orderBy('event_from', 'DESC')
                    ->first();
                    // ->map(fn($event) => [
                    //     'id'                => $event->id,
                    //     'settup_id'         => $event->event_settup,
                    //     'event_title'       => $event->event_title,
                    //     'event_description' => $event->event_description
                    // ]);
            $settups = $this->setup
                    ->where('id',$this->settup_id)
                    ->orderBy('id', 'ASC')
                    ->get();
            return inertia('Students/ParticipantsIndex'
                    ,[
                        'events'        => $event,
                        'settup'        => $settups,
                        'username'      => auth()->user()->username,
                        'users'         =>[],
                        'can'           =>[
                                            'createUser' => auth()->user()->can('create', User::class),
                                            'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),    
                                        ]
                    ]
                );
    }
}
