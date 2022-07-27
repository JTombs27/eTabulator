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
            '_logTimeArrival' =>  $this->travel
            ->with("logTimeArrival")
            ->where([
                'is_carpool' => 1,
                'status' => 'Approved'
                ])
                ->latest()
                ->simplePaginate(10),
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
        $this->model->create($request->all());
        return redirect('/logTimeArrival')->with('message', 'Your arrival is successfully log!');
    }

    public function update(Request $request)
    {
       
        $attributes = $request->validate([
            'travel_id' => 'required',
            'time_arrival' => 'required',
        ]);
        
         $log = $this->model->where('travel_id',$request->travel_id);
      
         $log->update([
          'time_arrival' => $request->time_arrival
        ]);
       
      
        return redirect('/logTimeArrival')->with('message', 'Your arrival log is successfully updated!');
    }

}
