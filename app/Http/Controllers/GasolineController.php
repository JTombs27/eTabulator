<?php

namespace App\Http\Controllers;

use App\Models\Gasoline;
use Illuminate\Http\Request;

class GasolineController extends Controller
{
    public function __construct(Gasoline $model)
    {
        $this->model = $model;
    }

    public function index(Request $request)
    {
        return inertia('Gasolines/Index', [
            //returns an array of users with name field only
            "gasoline" => $this->model
            	->when($request->search, function ($query, $searchItem) {
                    $q->where('name', 'like', '%' . $searchItem . '%');
                    
                })
                ->simplePaginate(10)
                ->withQueryString()
                ,
            "filters" => $request->only(['search']),
            "can" => [
                'canCreateGasoline' => auth()->user()->can('canCreateGasoline', User::class),
                'canEditGasoline' => auth()->user()->can('canEditGasoline', User::class),
                'canDeleteGasoline' => auth()->user()->can('canDeleteGasoline', User::class)
            ]
        ]);
    }
}
