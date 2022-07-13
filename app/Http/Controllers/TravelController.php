<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;
use OCILob;

class TravelController extends Controller
{
    public function __construct(Travel $model)
    {
        $this->model = $model;
    }    

    public function index()
    {
        return inertia('Travels/Index');
    }

    public function create()
    {
        return inertia('Travels/Create');
    }
}
