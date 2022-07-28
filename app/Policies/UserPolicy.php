<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->email == "admin@admin.com";
    }

    public function canDeleteUser(User $user)
    {
        return $user->permissions()->where('id', 3)->exists();
    }

    public function canCreateTravel(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_travel')->exists();
    }

    public function canSetStatus(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_set_status')->exists();
    }

    public function canCreateSoaTravel(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_merge_travel')->exists();
    }

    public function canCreateCharge(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_charges')->exists();
    }

    public function canEditCharge(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_charges')->exists();
    }

    public function canDeleteCharge(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_charges')->exists();
    }

    public function canCreateProject(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_project')->exists();
    }
    public function canEditProject(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_project')->exists();
    }
    public function canDeleteProject(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_project')->exists();
    }

    public function canCreateProjectVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_project_vehicle')->exists();
    }
    public function canEditProjectVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_project_vehicle')->exists();
    }
    public function canDeleteProjectVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_project_vehicle')->exists();
    }
    public function canCreatePrice(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_prices')->exists();
    }
    public function canCreateVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_vehicle')->exists();
    }
    public function canEditPrice(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_prices')->exists();
    }
    public function canDeletePrice(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_prices')->exists();
    }

    public function canDeleteTravel(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_travels')->exists();

    public function canEditVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_vehicles')->exists();
    }
    public function canDeleteVehicle(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_vehicles')->exists();
    }
    public function canCreateDriver(User $user)
    {
        return $user->permissions()->user('permission_name', 'can_create_drivers')->exists();
    }
    public function canDeleteDriver(User $user)
    {
        return $user->permissions()->user('permission_name', 'can_delete_drivers')->exists();
    }
}
