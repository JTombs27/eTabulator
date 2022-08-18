<?php

namespace App\Http\Controllers;

use App\Models\DriverVehicle;
use App\Models\Employee;
use App\Models\LogTimeArrival;
use App\Models\Travel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LogTimeArrivalContoller extends Controller
{
    public function __construct(LogTimeArrival $model,Travel $travel,DriverVehicle $drivervehicle,Employee $employee, User $user)
    {
        $this->model = $model;
        $this->travel = $travel;
        $this->drivervehicle = $drivervehicle;
        $this->employee = $employee;
        $this->user = $user;
    }
    public function index()
    {
        $isAdmin = $this->user
        ->where('id', auth()->user()->id)
        ->where(function($query){
            $query->where('role', 'Admin')
                 ->orWhere('role', 'PGO');
        })
        ->first();

        if(!$isAdmin)
        {
            $travels = $this->travel
            ->with("logTimeArrival")
            ->where([
                'status' => 'Approved',
                'office_id' => auth()->user()->office_id
                ])
            ->latest()
            ->simplePaginate(10);
        }
        else{
            $travels = $this->travel
            ->with("logTimeArrival")
            ->where([
                'status' => 'Approved',
                ])
            ->latest()
            ->simplePaginate(10);
        }
       

        return inertia('LogTimeArrival/Index',[
            '_logTimeArrival' =>  $travels,
        ]);
    }

    public function logtime()
    {
        return view("logTimArrival",['data' => 'input',"type" => ""]);
    }
    public function return()
    {
        return back(['data' => 'input']);
    }

    public function updateLog(Request $request)
    {
       
        if($request->action == "confirm")
        {
           
          
            $iswithactualdriver = false;
            $actualdrivername = "";
            $assigndrivername = "";
            $assigndrivercats =  "";
            $ticketnumber = "";
            $timearrival = "";
            $odometer ="";
            $validated = $request->validate([
                'ticket_number' => 'required',
                'time_arrival' => 'required',
                'odometer' => 'required',
            ]);
          
            try{
                $log = $this->travel->where('ticket_number',$request->ticket_number)->first();
               
    
                if ($log) {
                   
                   if ($log->status == "Approved"){
                  
                         $logdriver = $this->drivervehicle->with('empl')->where('id',$log->driver_vehicles_id)->first();
                         
                        if($logdriver->empl->actual_driver == null)
                        {
                            $assigndrivername = $logdriver->empl->last_name .', '.$logdriver->empl->first_name.' '.$logdriver->empl->middle_name;
                            $assigndrivercats = $logdriver->empl->empl_id;
                        }
                        else{
                           $actualdrivername = $log->actual_driver;
                           $iswithactualdriver = true;
                        }
                        $ticketnumber = $request->ticket_number;
                        $timearrival = $request->time_arrival;
                        $odometer =$request->odometer;
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
          
         
            return view("logTimArrival",[
                 'data' => 'confirm'
                ,'ticket_number' =>  $ticketnumber
                ,'time_arrival'=> $timearrival
                ,'odometer'=> $odometer
                ,'iswith_actualdriver' => $iswithactualdriver
                ,'actual_drivername' =>  $actualdrivername 
                ,'assign_drivercats' =>  $assigndrivercats 
                ,'assign_drivername' =>  $assigndrivername 
                ,'type'=>'success'
            ]);
        }
        else{
          
           
           if($request->view == "cancel")
           {
                return view("logTimArrival",['data' => 'alert','message' => 'Canceled','type'=>'danger']);
           }
           else{
            $validated = $request->validate([
                'ticket_number' => 'required',
                'time_arrival' => 'required',
                'odometer' => 'required',
            ]);

          
            try{
                $log = $this->travel->where('ticket_number',$request->ticket_number)->first();
                                   
                if ($log) {
                 
                    if ($log->status == "Approved"){
                        $log2 = $this->model->where('travel_id',$log->id)->first();
                        if($log2)
                        {
                            $log2->update([
                                'time_arrival' => $request->time_arrival,
                                 'odometer' => $request->odometer,
                            ]);
                        }
                        else{
                            $this->model->create([
                                'time_arrival' => $request->time_arrival,
                                'travel_id' => $log->id,
                                'odometer' => $request->odometer,
                            ]);
                        }
                        // $log->update([
                        //     'time_arrival' => $request->time_arrival,
                        //     'odometer' => $request->odometer,
                        // ]);
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
            
        }
       
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
            'odometer' => 'required',
        ]);
        try{
            // $log = $this->travel->where('id',$request->travel_id)->first();
            // if ($log) {
            //     $log->update([
            //         'time_arrival' => $request->time_arrival
            //     ]);
            // } 

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
            'odometer' => 'required',
        ]);
        
        //  $log = $this->travel->where('id',$request->travel_id);

        //  $log->update([
        //     'time_arrival' => $request->time_arrival,
        //     'odometer' => $request->odometer
        //   ]);

         $log2 = $this->model->where('travel_id',$request->travel_id);
      
         $log2->update([
          'time_arrival' => $request->time_arrival,
          'odometer' => $request->odometer
        ]);
        return redirect('/logTimeArrival')->with('message', 'Your arrival log is successfully updated!');
    }

}
