<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        if (auth()->check()) {
            //$profile =  User::where('id', auth()->user()->id)->first()->getFirstMedia('avatars');
            $UsrCats = auth()->user()->cats;
            $photo = null;
            $UsrPhotoExst = User::where("cats",$UsrCats)->whereNotNull('user_photo')->exists();
            if (!$UsrPhotoExst) {
                $UserPhoto =  Http::get(env('MIX_API_URL')."/PGDDOEmployeePhoto?empl_id=".$UsrCats)->collect();
                $cats = $UserPhoto[0]['empl_id'];
                $photo = $UserPhoto[0]['empl_photo_img'];
                User::where("cats",$UsrCats)->update(["user_photo"=>"data:image/png;base64,".$photo["data"]]);
                  $photo = "data:image/png;base64,".$photo["data"];
            }
          
            return array_merge(parent::share($request), [
                'auth' => auth()->user() ? [ //if there is a user
                    'user' => [
                        'id' => auth()->user()->id,
                        'username' => ucfirst(auth()->user()->name),
                        //'photo' => $profile ? $profile->getUrl() : ''
                        'photo' => auth()->user()->user_photo,
                        'role' => auth()->user()->role,
                        'office_id' => auth()->user()->office_id
                    ]
                ] : null,
                'flash' => [
                    'message' => fn () => $request->session()->get('message'),
                    'error' => fn () => $request->session()->get('error'),
                ],
            ]);
        }

        return [];
        
    }
}
