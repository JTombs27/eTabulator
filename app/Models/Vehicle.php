<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = "vehicles";
    protected $guarded = [];

    public function vehicle_status()
    {
        return $this->hasOne(Vehicle_status::class);
    }
    public function driver()
    {
        return $this->hasMany(Driver::class, 'drivers_id', 'id');
    }
}
