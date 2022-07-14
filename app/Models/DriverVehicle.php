<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DriverVehicle extends Model
{
    use HasFactory;

    public function driver()
    {
        return $this->belongsTo(Employee::class, 'drivers_id', 'empl_id');
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class, 'vehicles_id', 'id');
    }

    public function office()
    {
        return $this->belongsTo(Office::class, 'department_code', 'id');
    }
}
