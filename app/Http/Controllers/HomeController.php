<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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
        // $UsrCats = auth()->user()->cats;
        // dd($UsrCats);
        // $UserPhoto =  Http::get("http://192.168.9.101:91//api/PGDDOEmployeePhoto?empl_id=8672")->collect();

        // $cats = $UserPhoto[0]['empl_id'];
        // $photo = $UserPhoto[0]['empl_photo_img'];
        // dd($cats);
        // $UsrPhotoExst = User::whereNotNull('user_photo')->exists();
        // if (!$UsrPhotoExst) {
        //     dd('mag update ug photo');
        // }
        // dd($UsrPhotoExst);
        return inertia('Home');
    }
}
