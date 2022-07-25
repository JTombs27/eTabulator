<?php

namespace App\Http\Controllers;

use App\Models\LogTimeArrival;
use App\Models\Travel;
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
            '_logTimeArrival' =>  $this->travel->where([
                'is_carpool' => 1,
                'status' => 'Approved'
                ])->simplePaginate(10),
        ]); 
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
            '_logTimeArrival' => $this->travel->findOrFail($request->id),
            'editData' => true
        ]);
    }
    public function store(Request $request)
    {
        dd($request->travel_id);
        $attributes = $request->validate([
            'travel_id' => 'required',
            'time_arrival' => 'required',
            'time_arrival' => 'required',
            
        ]);
      
        $this->model->create($request->all());
        return redirect('/logTimeArrival')->with('message', 'Vehicle status added!');
    }

    public function update(Request $request)
    {
        dd($request->travel_id);
        $attributes = $request->validate([
            'travel_id' => 'required',
            'ticket_number' => 'required',
            'time_arrival' => 'required',
        ]);
      
       $log = $this->model->findOrFail($request->id);
       $log->update([
        'time_arrival' => $request->time_arrival
        ]);
       return redirect('/logTimeArrival')->with('message', 'Vehicle status updated!');
    }

}
