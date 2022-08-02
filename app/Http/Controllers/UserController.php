<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\TemporaryFile;
use App\Models\Travel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    protected function resourceAbilityMap()
    {
        return array_merge(parent::resourceAbilityMap(), [
            'canDeleteUser' => 'canDeleteUser'
        ]);
    } 

    public function index(Request $request)
    {
        return inertia('Users/Index', [
            //returns an array of users with name field only
            "users" => $this->model
                ->with('permissions')
                ->when($request->search, function ($query, $searchItem) {
                    $query->where('name', 'like', '%' . $searchItem . '%');
                })
                ->orderBy('name', 'asc')
                ->simplePaginate(8)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'permissions' => $user->permissions,
                    'is_active' => $user->is_active,
                    'email' => $user->email,
                    'name' => $user->name,
                    'photo' => $user->user_photo,
                    "can" => [
                        'delete' => Travel::where('user_id', $user->id)->exists()
                    ],
                ]),
            "filters" => $request->only(['search']),
            "can" => [
                'createUser' => auth()->user()->can('create', User::class),
                'canDeleteUser' => auth()->user()->can('canDeleteUser', User::class),
                
            ],
        ]);
    }

    public function create()
    {
        return inertia('Users/Create');
    }

    public function store(UserRequest $request)
    {
        $attributes = $request->validated();
     
        //transactions are functions that are used when you want to CRUD multiple table simultaneously
        //this will help rollback all changes if one of the table breaks which saves time to clean the mess
        DB::beginTransaction();
        try {

            $attributes['password'] = bcrypt($request->password);
            $attributes['cats'] = $request->cats;
            $attributes['role'] = $request->permission;
            $attributes['office_id'] = $request->office_id;
            $attributes['is_active'] = true;
            $newUser = $this->model->create($attributes);
            $user = User::find($newUser->id);

            if ($request->permission == 'PGO') {
                //1,2,3 are all available permissions for the admin
                $user->permissions()->sync([5,6,7,8,10,11,12,13,14,15,16,17,18,19,25,26]);
            } elseif ($request->permission == 'RO') {
                $user->permissions()->sync([5,7,10,11,12,13,14,15,25]);
            } elseif ($request->permission == 'PGSO') {
                $user->permissions()->sync([4,8,16,17,18,19,20,21,22,23,24,27,28,29,30]);
            } elseif ($request->permission == 'PG-Head') {
                $user->permissions()->sync([6,25,26]);
            } elseif ($request->permission == 'Admin') {
                $user->permissions()->sync([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
            } else {
                //specify an Array of permissions id here manually
                $user->permissions()->sync([]);
            }

            DB::commit();

        } catch (\Exception $e) {
            DB::rollback();
            return redirect('/users')->with('error', $e);
        }

        return redirect('/users')->with('message', 'User created');
    }

    public function edit(Request $request, $id)
    {
        // $data = DB::table('users')>where('id', $id)->first();

        return inertia('Users/Create', [
            "editData" => $this->model
                        ->with('office')
                        ->findOrFail($id),
            
        ]);
    }

    public function update(UserRequest $request)
    {
        $data = $this->model->findOrFail($request->id);
        $validated = $request->safe()->only(['password']);
        $validated['office_id'] = $request->office_id;
        $validated['username'] = $request->username;
        if ($request->password) {
            $validated['password'] = bcrypt($request->password);
        } else {
            
            $validated['password'] = $data->password;
        }
        // $data->update([
        //     'name' => $request->name,
        //     'permission' => $request->permission,
        //     'username' => $request->username,
        //     'password' => $password,
        //     'office' => 
        // ]);
        $data->update($validated);

        return redirect('/users')->with('message', 'User updated');
    }

    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        return redirect('/users')->with('message', 'User deleted');
    }

    public function changePassword()
    {
        return inertia("Users/ChangePassword");
    }

    public function updatePassword(Request $request)
    {
        $old = $request->old;
        $new = $request->new;
        $confirm = $request->confirm;

        if (!Hash::check($old, auth()->user()->password)) {
            return back()->with('error', 'Wrong Credentials');
        }

        if ($new !== $confirm) {
            return back()->with('error', 'Not the same');
        }

        $user = $this->model->findOrFail(auth()->user()->id);
        $user->password = bcrypt($new);
        $user->save();

        return back()->with('message', 'Password Updated');
    }

    public function settings()
    {
        return inertia('Users/Settings');
    }

    public function changeName(Request $request)
    {
        $data = $this->model->findOrFail(auth()->user()->id);
        $data->update([
            'name' => $request->name,
        ]);

        return redirect('/users/settings')->with('message', 'User updated');
    }

    public function changePhoto(Request $request)
    {
        $data = $this->model->findOrFail(auth()->user()->id);

        $temporaryFile = TemporaryFile::where('folder', $request->folder)->first();

        if ($temporaryFile) {
            $data->addMedia(storage_path('app/avatars/tmp/' . $request->folder . '/' . $temporaryFile->filename))
                ->toMediaCollection('avatars');

            rmdir(storage_path('app/avatars/tmp/' . $request->folder));
            $temporaryFile->delete();
        }

        return redirect('/users/settings')->with('message', 'User updated');
    }
    
    public function setStatus(Request $request, $id)
    {
        $status = $request->is_check ? 'activated':'deactivated';
        $status1 = $request->is_check ? 'activating':'deactivating';
        $user = $this->model->findOrFail($id)->setStatus($request->is_check);
        if (!$user) {
            return redirect('/users')->with('error', "Error while $status1 the user account");
        }
        return redirect('/users')->with('message', "User account $status ");
    }
}
