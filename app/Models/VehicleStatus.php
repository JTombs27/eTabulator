<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleStatus extends Model
{
    use HasFactory;
    protected $table = 'vehicle_status';
    protected $fillable = [
        'vehicle_status_date',
        'condition',
        'plate_no',
        'vehicles_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class,"vehicle_id","id");
    }
   
}
