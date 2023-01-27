<?php

namespace App\Models;

use App\Models\Permission;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable implements HasMedia, MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    protected $fillable = [
        'name',
        'email',
        'username',
        'cats',
        'password',
        'citymunCode',
        'brgyCode',
        'role',
        'is_active',
        'office_id',
        'gasoline_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function permissions() {
        // dd($this);
        return $this->belongsToMany(Permission::class);
    }

    // public function setPasswordAttribute($value)
    // {
    //     $this->attributes['password'] = bcrypt($value);
    // }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('avatars')
            ->singleFile();
    }
    
    public function setStatus($value)
    {
        try {
            $this->is_active = $value;
            $this->save();
            return true;
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
