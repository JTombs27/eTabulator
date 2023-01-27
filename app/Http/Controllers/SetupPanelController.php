<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\SetupPanel;
use App\Models\User;
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
    public function __construct(SetupPanel $model, EventHeader $event, EventSetup  $setup, User $users)
    {
        $this->model = $model;
        $this->event = $event;
        $this->setup = $setup;
        $this->users = $users;
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
                            ->with(['panelUser','setup'])
                            ->where('settup_id',$settup_id)
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
        return inertia('Panel/Index'
                    ,[
                        'event'         => $event_data,
                        'panel_list'    => $pannelList,
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
        $settup_info = $this->setup->where('id','=',$request->settup_id)->first();
        return inertia('Panel/Create',
        [
        "settup_info"=> $settup_info
        ,"settup_id"=> $request->settup_id
        ,"event_id" => $request->event_id
        ,"users"    => $this->users
                        ->selectRaw(
                        'users.id   AS id,
                         users.name AS name
                        ')
                        ->leftjoin(DB::raw('event_panel AS panel'),function($join) use($request)
                        {
                            $join->on('panel.user_id','=','users.id');
                            $join->on('panel.settup_id','=',DB::raw($request->settup_id));
                        })
                        ->where('role','Panel')
                        ->whereNull('panel.id')
                        ->simplePaginate()
                        ->withQueryString()
                        ->through(fn($panel) => [
                        'id'                    => $panel->id,
                        'text'                  => $panel->name
                        ])
    ]);
    }

    public function edit(Request $request)
    {
        $data = $this->model
        ->with('panelUser')
        ->where('id','=',$request->id)->first();
        $settup_info = $this->setup->where('id','=',$request->settup_id)->first();
        return inertia('Panel/Create',
        [
         "editData" => $data
         , "settup_info"=> $settup_info
        ,"settup_id"=> $request->settup_id
        ,"event_id" => $request->event_id
        ,"users"    => $this->users
                        ->leftjoin(DB::raw('event_panel AS panel'),function($join) use($request)
                        {
                            $join->on('panel.user_id','=','users.id');
                            $join->on('panel.settup_id','=',DB::raw($request->settup_id));
                        })
                        ->selectRaw(
                        'users.id   AS id,
                         users.name AS name
                        ')
                        ->where('role','Panel')
                        ->whereNull('panel.id')
                        ->simplePaginate()
                        ->withQueryString()
                        ->through(fn($panel) => [
                        'id'                    => $panel->id,
                        'text'                  => $panel->name
                        ])
    ]);
    }

    public function update(Request $request)
    { //$attributes = $request->validated();
        $filename  = "";
        $data = $this->model->findOrFail($request->id);

        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

            $data->update([
                'settup_id'             => $request->settup_id,
                'user_id'               => $request->user_id,
                'panel_info'            => $request->panel_info
            ]);
           
            if ($request->hasFile('profile_path')) 
            {
                $file       = $request->file('profile_path');
                $filename   = $file->getClientOriginalName();
                $name       = $file->getClientOriginalName();
                $extension  = $file->getClientOriginalExtension();
                Storage::disk('public')->delete($data->profile_path);
                $path       = $request->file('profile_path')->storeAs('panel',$data->id.'.'.$extension,'public');
                $data->update([
                    "profile_path" => $path
                ]);
                
            }
          

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/panel')->with('error', $e);
        }

        return redirect('/panel?event_id='.$request->event_id.'&settup_id='.$request->settup_id)->with('message', 'Event Successfully Created');
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
                'user_id'               => $request->user_id,
                'panel_info'            => $request->panel_info,
                'profile_path'          => "",
            ]);
           
            if ($request->hasFile('profile_path')) 
            {
                $file       = $request->file('profile_path');
                $filename   = $file->getClientOriginalName();
                $name       = $file->getClientOriginalName();
                $extension  = $file->getClientOriginalExtension();
                Storage::disk('public')->delete('panel/'.$inserted_data->id.'.'.$extension.'');
                $path       = $request->file('profile_path')->storeAs('panel',$inserted_data->id.'.'.$extension,'public');
                $inserted_data->update([
                    "profile_path" => $path
                ]);
                
            }
          

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/panel')->with('error', $e);
        }

        return redirect('/panel?event_id='.$request->event_id.'&settup_id='.$request->settup_id)->with('message', 'Event Successfully Created');
     }

    public function destroy(Request $request)
    {
        $id         = "";
        $event_id   = "";
        $settup_id  = "";
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
        Storage::disk('public')->delete($data->profile_path);
        $data->delete();

        return redirect('/panel?event_id='.$event_id.'&settup_id='.$settup_id)->with('message', 'Panel Successfull deleted');
    }
}
