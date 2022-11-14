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

class EventHeaderController extends Controller
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

        return inertia('EventHeader/Index',[
            'events' => $this->model->when($request->search, function ($query, $searchItem) 
                            {
                                $query->where('event_title', 'like', '%' . $searchItem . '%')
                                    ->orWhere('event_description', 'like', '%' . $searchItem . '%');
                            })
                            ->orderBy('event_from', 'DESC')
                            ->simplePaginate(8)
                            ->withQueryString()
                            ->through(fn($event) => [
                                'id' => $event->id,
                                'event_title' => $event->event_title,
                                'event_description' => $event->event_description,
                                'event_from' => $event->event_from,
                                'event_to' => $event->event_to,
                                'background_image' => $event->background_image,
                                "can" => [
                                    'delete' => true
                                ],
                            ])
            ,
            'username'      => auth()->user()->username,
            'users'=>[],
            'can'=>[
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                
            ]
        ]);
    }
    public function create()
    {
        return inertia('EventHeader/Create');
    }

    public function store(Request $request)
    {
        //$attributes = $request->validated();
        $filename  = "";
        if ($request->hasFile('background_image')) 
        {
            $file = $request->file('background_image');
            $filename = $file->getClientOriginalName();
            $file->storeAs('events/', $filename);
        }
        
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

            $this->model->create([
                'event_title'           => $request->event_title,
                'event_description'     => $request->event_description,
                'background_image'      => "events/$filename",
                'event_from'            => $request->event_from,
                'event_to'              => $request->event_to
            ]);
           

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/event-header')->with('error', $e);
        }

        return redirect('/event-header')->with('message', 'Event Successfully Created');
    }


    
    
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function eventSetup(Request $request)
    {

        return inertia('EventHeader/EventSettup/Index',[
            'eventSetup' => $this->model
                            ->where('id',$request->event_id)
                            ->first()
            ,
            'settupData' => $this->setup->where('event_id',$request->event_id)
            ->orderBy('id', 'asc')
            ->simplePaginate(10)
            ->withQueryString(),
            'username'      => auth()->user()->username,
            'users'=>[],
            'can'=>[
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                
            ]
        ]);
    }
    public function createEventSetup(Request $request)
    {
        return inertia('EventHeader/EventSettup/Create',
        [
            "event" =>  $this->model
                        ->where('id',$request->event_id)
                        ->first()
        ]);
    }

    public function storeSetup(Request $request)
    {
        //$attributes = $request->validated();
        
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        //dd($request);

        DB::beginTransaction();
        try {

            $this->setup->create([
                'event_id'                                  => $request->event_id,
                'event_settup_title'                        => $request->event_settup_title,
                'event_settup_requirement'                  => $request->event_settup_requirement,
                'event_settup_withpannel'                   => $request->event_settup_withpannel,
                'event_settup_withaudience'                 => $request->event_settup_withaudience,
                'event_settup_withaudience_vote_open'       => $request->event_settup_withaudience_vote_open,
                'event_settup_withaudience_vote_closed'     => $request->event_settup_withaudience_vote_closed,
                'settup_status'                             => "F",
            ]);
           

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/event-setup/create/'.$request->event_id)->with('error', $e);
        }

        return redirect('/event-setup/'.$request->event_id)->with('message', 'Event Settup Successfully Created');
    }

    public function destroySetup(Request $request)
    {
        //dd( $request);
        $data = $this->setup->findOrFail($request->settup_id);
        $data->delete();

        return redirect('/event-setup/'.$request->event_id)->with('message', 'Setup Successfully
          deleted');
    }

}
