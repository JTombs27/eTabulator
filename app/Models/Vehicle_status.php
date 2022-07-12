<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle_status extends Model
{
    use HasFactory;
    protected $table = 'vehicle_status';
    protected $fillable = [
        'condition',
        'vehicle_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
   
}
