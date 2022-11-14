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

class StudentsController extends Controller
{
    public function __construct(User $model,EventHeader $eventHeader)
    {
        $this->model = $model;
        $this->events = $eventHeader;
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
        $events = $this->events
                        ->with('event_settup')
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
}
