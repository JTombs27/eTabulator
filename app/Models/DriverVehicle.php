<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DriverVehicle extends Model
{
    use HasFactory;
    protected $table = "driver_vehicles";
    protected $guarded = [];

    public function empl()
    {
        return $this->belongsTo(Employee::class, 'drivers_id', 'empl_id');
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class, 'vehicles_id', 'id');
    }

    public function office()
    {
        return $this->belongsTo(Office::class, 'department_code', 'department_code');
    }

    public function travel()
    {
        return $this->hasMany(Travel::class, 'driver_vehicles_id', 'id');
    }
}
