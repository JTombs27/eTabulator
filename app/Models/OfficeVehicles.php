<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeVehicles extends Model
{
    use HasFactory;
    protected $table = 'office_vehicles';
    protected $fillable = [
        'vehicles_id',
        'department_code',
        'plate_no',
        'effective_date',
        'office_owner'
    ];

    public function vehicle()
    {
        return $this->hasOne(Vehicle::class, 'id', 'vehicles_id');
    }

    public function office()
    {
        return $this->belongsTo(Office::class, 'department_code', 'department_code');
    }
    public function update_owner()
    {
        $this->office_owner = 0; 
        $this->save();
    }

}
