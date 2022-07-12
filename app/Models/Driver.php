<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $table = "driver_vehicles";
    protected $guarded = [];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class, 'vehicles_id', 'id');
    }
}
