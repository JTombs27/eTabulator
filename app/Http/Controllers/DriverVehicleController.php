<?php

namespace App\Http\Controllers;

use App\Http\Requests\DriverValidation;
use Illuminate\Http\Request;
use App\Models\DriverVehicle;
use App\Models\Employee;
use App\Models\Vehicle;
use PHPUnit\Framework\Constraint\IsTrue;

class DriverVehicleController extends Controller
{
    public function __construct(DriverVehicle $model, Employee $employee)
    {
        $this->model = $model;
        $this->employee = $employee;
    }

    public function index(Request $request,$id)
    {
       
        return inertia('Drivers/Index', [
            'driver_vehicles' => $this->model->with(
                'vehicle',
                'empl',
                'office',
                'travel'
            )

            ->where('vehicles_id','=',$id)
            ->latest()
            ->simplePaginate(10)
            ->withQueryString(),
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first(),
            "can" => [
                'canCreateDriver' => auth()->user()->can('canCreateDriver', User::class),
            ]

        ]);
    }

    public function create($id)
    {
        return inertia("Drivers/Create", [
            "Vdriver" => Vehicle::where('id', $id)->select('id', 'PLATENO')->first()
        ]);
       
    }

    public function store(DriverValidation $request, $id)
    {
        // $attributes = $request->validate([
        //     'date_from' => "required|date",
        //     'date_to' => "required|date|after_or_equal:date_from", 
        // ]);
        $request->validated();

        $data = $this->model->where('vehicles_id',$request->vehicles_id)
        ->where(function ($query) use($request){
            $query->whereBetween("date_from",[$request->date_from,$request->date_to])
            ->orWhereBetween("date_to",[$request->date_from,$request->date_to]);
        })->first();

        if ($data) {
            $attributes = $request->validate([
                "date_fromA"=>"required",
                "date_toB"=>"required"],[
                    "date_fromA.required"=>"Date Conflict to other entry",
                    "date_toB.required"=>"Date Conflict to other entry"
                ]);
        } else {
            try {
                $this->model->create($request->all());
                return redirect('/drivers/'.$id.'/vehicles')->with('message', 'Added Successfully');
            } catch(\Throwable $th) {
                return redirect('/drivers/'.$id.'/create')->with('error', 'Please provide Valid Data');

            }
        }

    }

    public function destroy(Request $request,$id,$did)
    {
        $data = $this->model->findOrFail($did);
        $data->delete();


        return back()->with('message', 'deleted successfuly');
    }

    public function fetch(Request $request)
    {
        return $this->employee
                    ->where('last_name', 'like', "%$request->filter%")
                    ->orWhere('first_name', 'like', "%$request->filter%")
                    ->orWhere('empl_id', 'like', "%$request->filter%")
                    ->get()
                    ->map(fn($item) => [
                        'employee_name' => "$item->last_name, $item->first_name ". ($item->middle_name ? $item->middle_name[0].".":''),
                        'empl_id' => $item->empl_id,
                        'position_long_title' => $item->position_title_long,
                        'department_code' => $item->department_code,
                    ]);
    }

}
