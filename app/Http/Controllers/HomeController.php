<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $userPhoto = User::whereNotNull('user_photo')->exists();
        if (!$userPhoto) {
            dd('mag update ug photo');
        }
        dd($userPhoto);
        return inertia('Home');
    }
}
