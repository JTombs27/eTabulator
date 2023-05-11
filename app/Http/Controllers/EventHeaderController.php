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
                                'id'                => $event->id,
                                'event_title'       => $event->event_title,
                                'event_description' => $event->event_description,
                                'event_from'        => $event->event_from,
                                'event_to'          => $event->event_to,
                                'background_image'  => $event->background_image,
                                "can" => [
                                    'delete' => ($this->setup->where('event_id',$event->id)->exists() == true ? false:true)
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

    public function edit(Request $request)
    {
        $editData = $this->model->where('id',$request->id)->first();
        return inertia('EventHeader/Create',[
            'editData'=> $editData
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(['event_title'=>'required',
                            'event_description'=>'required',
                            'event_from'=>'required|date',
                            'event_to'=>'required|date|after_or_equal:event_from',
                            ]);
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


    public function update(Request $request)
    {
        $request->validate(['event_title'=>'required',
                            'event_description'=>'required',
                            'event_from'=>'required|date',
                            'event_to'=>'required|date|after_or_equal:event_from',
                            ]);
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {
            $data = $this->model->where('id','=',$request->id)->first();
            $data->update([
                'event_title'           => $request->event_title,
                'event_description'     => $request->event_description,
                'background_image'      => "",
                'event_from'            => $request->event_from,
                'event_to'              => $request->event_to
            ]);
           

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/event-header')->with('error', $e);
        }

        return redirect('/event-header')->with('message', 'Event Successfully Updated');
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
            'settupData' => $this->setup
            ->with(['winner'])
            ->where('event_id',$request->event_id)
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

    public function editEventSetup(Request $request)
    {
        $data = $this->setup
        ->selectRaw('
             id                                   
            ,event_settup_title                   
            ,event_settup_requirement             
            ,event_settup_withpannel              
            ,event_settup_withaudience            
            ,convert(event_settup_withaudience_vote_open,DATE)      AS event_settup_withaudience_vote_open
            ,convert(event_settup_withaudience_vote_closed,DATE)    AS event_settup_withaudience_vote_closed
            ,settup_status                        
        ')
        ->findOrFail($request->id);
        return inertia('EventHeader/EventSettup/Create',
        [
             "editData" => $data
            ,"event" =>  $this->model
                        ->where('id',$request->event_id)
                        ->first()
        ]);
    }

    public function test(Request $request)
    {
        dd("gg");
        // $data = $this->setup
        //             ->leftJoin('participants','participants.settup_id','=','event_settup.id')
        //             ->where('id',$request->id)
        //             ->get();
        return "";
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
                'event_settup_withpannel'                   => $request->event_settup_withpannel == null ? 0:1,
                'event_settup_withaudience'                 => $request->event_settup_withaudience  == null ? 0:1,
                'event_settup_withaudience_vote_open'       => $request->event_settup_withaudience_vote_open == "" ? null:$request->event_settup_withaudience_vote_open,
                'event_settup_withaudience_vote_closed'     => $request->event_settup_withaudience_vote_closed == "" ? null:$request->event_settup_withaudience_vote_closed,
                'settup_status'                             => "F",
            ]);
           

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/event-setup/create/'.$request->event_id)->with('error', $e);
        }

        return redirect('/event-setup/'.$request->event_id)->with('message', 'Event Settup Successfully Created');
    }

    public function updateSetup(Request $request)
    {
     
        $data = $this->setup->findOrFail($request->id);
        DB::beginTransaction();
        try {

            $data->update([
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

        return redirect('/event-setup/'.$request->event_id)->with('message', 'Event Settup Successfully Updated');
    }

    public function destroySetup(Request $request)
    {
        //dd( $request);
        $data = $this->setup->findOrFail($request->settup_id);
        $data->delete();

        return redirect('/event-setup/'.$request->event_id)->with('message', 'Setup Successfully
          deleted');
    }

    public function destroy(Request $request)
    {
        //dd( $request);
        $data = $this->model->findOrFail($request->event_id);
        $data->delete();

        return redirect('/event-header')->with('message', 'Event Successfully deleted!');
    }

    public function generateWinner(Request $request)
    {
        //dd( $request);
        try {
            //code...
            DB::select(

                'CALL sp_generate_winner('.$request->event_id.')'
         
             );
            
            return redirect('/event-header')->with('message', 'Event Winners Successfully Generated!');
        } catch (\Throwable $th) {
            //throw $th;
        }
       
    }

}
