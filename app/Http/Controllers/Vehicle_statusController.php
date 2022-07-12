<?php

namespace App\Http\Controllers;

use App\Models\Vehicle_status;
use Illuminate\Http\Request;

class Vehicle_statusController extends Controller
{
    public function __construct(Vehicle_status $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        return inertia('vehicle_status/index');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'vehicle_id' => 'required',
            'condition' => 'required',
        ]);

        
        DB::beginTransaction();
        try {

            // $attributes['password'] = bcrypt($request->password);
            // $newUser = $this->model->create($attributes);
            // $user = User::find($newUser->id);

            // if ($request->permission == 'Admin') {
            //     //1,2,3 are all available permissions for the admin
            //     $user->permissions()->sync([1, 2, 3]);
            // } else {
            //     //specify an Array of permissions id here manually
            //     $user->permissions()->sync([]);
            // }

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/users')->with('message', $e);
        }

        return redirect('/Vehicle_status')->with('message', 'User created');
    }

    public function create()
    {
        return inertia('vehicle_status/index');
    }
}
