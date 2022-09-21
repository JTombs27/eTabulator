<?php

namespace App\Http\Middleware;

use App\Models\User;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        if (!File::exists(storage_path('app/public/profile'))) {
            Storage::makeDirectory('public/profile');
        }
 
        if (auth()->check()) {
            //$profile =  User::where('id', auth()->user()->id)->first()->getFirstMedia('avatars');
            $UsrCats = auth()->user()->cats;
            $photo = null;
            
            $UsrPhotoExst = User::where('id', auth()->user()->id)->whereNotNull('user_photo')->exists();
            if (!$UsrPhotoExst) {
                if (auth()->user()->cats) {
                    $UserPhoto =  Http::get("http://122.54.19.172:91//api/PGDDOEmployeePhoto?empl_id=".$UsrCats)->collect();
                    // $cats = $UserPhoto[0]['empl_id'];
                    if (count($UserPhoto) != 0) {
                        $photo = $UserPhoto[0]['empl_photo_img'];
                    } else {
                        $photo = [
                            'IsNull' => true
                        ];
                    }

                    $photoData = "";
                    if ($photo['IsNull']) {
                       User::where('id', auth()->user()->id)
                            ->update(["user_photo" => "storage/profile/default"]);
                    } else {
                        $file_path = "storage/profile/employee_$UsrCats";
                        $image = $photo["data"];
                        Storage::disk('profile')->put("employee_$UsrCats/photo.png", base64_decode($image));
                        User::where('id', auth()->user()->id)->update(["user_photo"=> "$file_path"]);
                    }
                } else {
                    User::where('id', auth()->user()->id)
                            ->update(["user_photo" => "storage/profile/default"]);
                }
            }
            
            
            return array_merge(parent::share($request), [
                'auth' => auth()->user() ? [ //if there is a user
                    'user' => [
                        'id' => auth()->user()->id,
                        'username' => ucfirst(auth()->user()->name),
                        //'photo' => $profile ? $profile->getUrl() : ''
                        'photo' => asset(auth()->user()->user_photo."/photo.png"),
                        'role' => auth()->user()->role,
                        'office_id' => auth()->user()->office_id,
                        'gasoline_id' => auth()->user()->gasoline_id
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
