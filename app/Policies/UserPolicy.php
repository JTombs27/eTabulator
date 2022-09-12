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
        return $user->permissions()->where('permission_name', 'can_delete_user')->exists();
    }

    public function canCreateTravel(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_travel')->exists();
    }

    public function canEditTravel(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_travels')->exists();
    }

    public function canAllowEdit(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_allow_edit')->exists();
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
    }
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
        return $user->permissions()->where('permission_name', 'can_create_drivers')->exists();
    }
    public function canCreateVehicleStatus(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_vehicle_status')->exists();
    }
    public function canEditVehicleStatus(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_vehicle_status')->exists();
    }
    public function canCreateOfficeVehicles(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_office_vehicles')->exists();
    }
    public function canEditOfficeVehicles(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_office_vehicles')->exists();
    }
    public function canViewWhereAbouts(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_view_whereabouts')->exists();
    }

    public function canCreateGasoline(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_create_gasoline')->exists();
    }

    public function canEditGasoline(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_edit_gasoline')->exists();
    }

    public function canDeleteGasoline(User $user)
    {
        return $user->permissions()->where('permission_name', 'can_delete_gasoline')->exists();
    }

    //Added By: Joseph
    public function canViewTravelIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool'])->where('id', auth()->user()->id)->exists();
    }

    public function canViewLogArivalIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewVehicleIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PGSO','peo-motorpool'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewSOAIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool','gasoline-station'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewChargesIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewGasolineIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PGSO','gasoline-station'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewPriceIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool','PGSO'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewUsersIndex(User $user)
    {
        return $user->whereIn('role', ['Admin'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewProjectIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewProjectVehicleIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO'])->where('id', auth()->user()->id)->exists();
    }
    public function canViewReportIndex(User $user)
    {
        return $user->whereIn('role', ['Admin','PGO','PG-HEAD','RO','peo-motorpool'])->where('id', auth()->user()->id)->exists();
    }
    // public function canDeleteDriver(User $user)
    // {
    //     return $user->permissions()->user('permission_name', 'can_delete_drivers')->exists();
    // }
}
