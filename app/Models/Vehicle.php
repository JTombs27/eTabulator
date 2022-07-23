<?php

namespace App\Models;

use Faker\Core\Number;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = "vehicles";
    protected $guarded = [];

    public function vehicle_status()
    {
<<<<<<< HEAD
        return $this->hasMany(VehicleStatus::class);
=======
        return $this->hasMany(VehicleStatus::class,"plate_no","PLATENO");
>>>>>>> 4a5928c70f6bfbc2d130dc586ddd0dbcaea98d79
    }
    public function driverassign()
    {
        return $this->hasMany(DriverVehicle::class, 'vehicles_id', 'id');
    }

}
