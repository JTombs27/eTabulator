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
        return $this->hasOne(VehicleStatus::class);
    }
    public function driver()
    {
        return $this->hasMany(Driver::class, 'drivers_id', 'id');
    }

}
