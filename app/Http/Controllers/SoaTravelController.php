<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\SoaTravel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SoaTravelController extends Controller
{
    public function __construct(Travel $model, SoaTravel $soatravel)
    {
        $this->model = $model;
        $this->soatravel = $soatravel;
    }

    public function index(Request $request)
    {
        return inertia('SoaTravels/Index', [
            //returns an array of users with name field only
            "travel" => $this->model
            	->orderBy('date_from', 'asc')
            	->get(),
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'date_from' => 'required|date',
            'date_to' => 'required|date|after:date_from',
        ]);

        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

        	if ($request->travels != null) {
        		$soaTravel = $this->soatravel->create($attributes);
        		foreach ($request->travels as $key ) {
        			$travel = $this->model->where('id', $key['id'])->where('soa_travel', null)->update(['soa_travel' => $soaTravel->id]);
        		}
        	} else {
        		return redirect('/soatravels')->with('error', 'Travel already Tagged');
        	}
           	
            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/soatravels')->with('message', $e);
        }

        return redirect('/soatravels')->with('message', 'Travel Merged');
    }

    public function remove(Request $request)
    {
    	$travel = $this->model->findOrFail($request->id);
    	$travel->update(['soa_travel' => null]);

    	return redirect('/soatravels')->with('message', 'Tag removed');
    }
}
