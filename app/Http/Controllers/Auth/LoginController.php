<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    
    public function username()
    {
        return 'username';
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);
        $user= User::where('username', $request->username)->first();
                
        $errorMessage = "The provided credentials do not match our records.";

        try {
            if (Hash::check($request->password, $user->password)) 
            {

                if (!$user->is_active) 
                {
                
                    $errorMessage = "The provided credentials is deactivated.";

                }
                else if (Auth::attempt($credentials) && $user->role == "Admin")
                {
                 
                    $request->session()->regenerate();

                    return redirect()->to('/');
                
                }
                else
                {
                    $request->session()->regenerate();

                    return redirect()->to('/students');
                }
            }
        } catch (\Throwable $th) {
            return back()->withErrors([
                'email' => $errorMessage,
            ])->withInput();
        }
        
        
        
        // if ($user) {
        //     $errorMessage = "The provided credentials is deactivated.";
        // }
        return back()->withErrors([
            'email' => $errorMessage,
        ])->withInput();
    }

    public function logout()
    {
        Auth::guard('web')->logout();
 
        request()->session()->invalidate();
 
        request()->session()->regenerateToken();

        return inertia()->location('/');
    }
}
