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
        return $this->hasMany(VehicleStatus::class, 'vehicle_id', 'id');
       
    }
    public function vehicle_latest_status()
    {
        return $this->hasOne(VehicleStatus::class, 'vehicle_id', 'id')->latest();
    }
    
    public function driverassign()
    {
        return $this->hasMany(DriverVehicle::class, 'vehicles_id', 'id');
    }


}
