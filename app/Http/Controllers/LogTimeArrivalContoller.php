<?php

namespace App\Http\Controllers;

use App\Models\LogTimeArrival;
use App\Models\Travel;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LogTimeArrivalContoller extends Controller
{
    public function __construct(LogTimeArrival $model,Travel $travel)
    {
        $this->model = $model;
        $this->travel = $travel;
    }
    public function index()
    {
        return inertia('LogTimeArrival/Index',[
            '_logTimeArrival' =>  $this->travel
            ->with("logTimeArrival")
            ->where([
                'is_carpool' => 1,
                'status' => 'Approved',
                ])
            ->orWhere([
                    'is_borrowed_vehicle' => 1,
                    'status' => 'Approved',
                    ])
            ->latest()
            ->simplePaginate(10),
        ]);
    }

    public function logtime()
    {
        return view("logTimArrival",['data' => 'input']);
    }
    public function return()
    {
        return back(['data' => 'input']);
    }
    public function updateLog(Request $request)
    {
        
        $validated = $request->validate([
            'ticket_number' => 'required',
            'time_arrival' => 'required',
        ]);
        // dd($request->time_arrival);
        try{
            $log = $this->travel->where('ticket_number',$request->ticket_number)->first();
                               
            if ($log) {
             
                if ($log->status == "Approved"){
                    $log2 = $this->model->where('travel_id',$log->id)->first();
                    if($log2)
                    {
                        $log2->update([
                            'time_arrival' => $request->time_arrival
                        ]);
                    }
                    else{
                        $this->model->create([
                            'time_arrival' => $request->time_arrival,
                            'travel_id' => $log->id,
                        ]);
                    }
                    $log->update([
                        'time_arrival' => $request->time_arrival
                    ]);
               }
               else
               {
                  return back()->withErrors(['ticket_number' => 'Trip ticket not apporved'])->withInput();
               }
            } else {
                return back()->withErrors(['ticket_number' => 'Trip ticket not found'])->withInput();
            }
          
        }
        catch(\Throwable $e)
        {
            return back()->withError('ticket_number', $e);
        }
      
     
        return view("logTimArrival",['data' => 'alert','message' => 'Success','type'=>'success']);
    }
    public function create(Request $request)
    {
        return inertia('LogTimeArrival/Create',[
            '_logTimeArrival' => $this->travel->findOrFail($request->id),
            'editData' => false
        ]);
    }
    public function edit(Request $request)
    {
        return inertia('LogTimeArrival/Create',[
            '_logTimeArrival' => $this->travel
            ->with("logTimeArrival")
            ->where("id",$request->id)
            ->first(),
            'editData' => true
        ]);
    }
    public function store(Request $request)
    {
        $message = "";
        $attributes = $request->validate([
            'travel_id' => 'required',
            'time_arrival' => 'required',
        ]);
        try{
            $log = $this->travel->where('id',$request->travel_id)->first();
            if ($log) {
                $log->update([
                    'time_arrival' => $request->time_arrival
                ]);
            } 

            $log2 = $this->model->where('travel_id',$request->travel_id)->first(); 
            
            if($log2)
            {
                $log2->update([
                    'time_arrival' => $request->time_arrival
                ]);
            }else{
                $this->model->create($request->all());
            }
            
            return redirect('/logTimeArrival')->with('message', 'Your arrival is successfully log!');
        }catch(\Throwable $e){
            return redirect('/logTimeArrival')->with('message', 'Saving Failed!');
        }
       
        
    }

    public function update(Request $request)
    {
        $attributes = $request->validate([
            'travel_id' => 'required',
            'time_arrival' => 'required',
        ]);
        
         $log = $this->travel->where('id',$request->travel_id);

         $log->update([
            'time_arrival' => $request->time_arrival
          ]);

         $log2 = $this->model->where('travel_id',$request->travel_id);
      
         $log2->update([
          'time_arrival' => $request->time_arrival
        ]);
        return redirect('/logTimeArrival')->with('message', 'Your arrival log is successfully updated!');
    }

}
