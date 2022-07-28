<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = "vehicles";
    protected $guarded = [];
    protected $appends = ['date'];

    public function vehicle_status()
    {
        return $this->hasOne(VehicleStatus::class, 'vehicles_id', 'id')->latest();
    }

    public function vehicle_latest_status()
    {
        return $this->hasOne(VehicleStatus::class, 'vehicles_id', 'id')->latest();
    }
    
    public function driverassign()
    {
        return $this->hasMany(DriverVehicle::class, 'vehicles_id', 'id');
    }

    public function getDateAttribute()
    {
        $FDATEACQ = $this->FDATEACQ;
        return  (\Carbon\Carbon::parse($FDATEACQ)->format('M d, Y'));
    }

}
