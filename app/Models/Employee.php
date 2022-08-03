<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employees";
    protected $guarded = [];
    
    public function getFullNameAttribute()
    {
        $mi = "";
        if($this->middle_name) {
            $mi = substr($this->middle_name, 0, 1);
        }
        return "{$this->first_name} {$mi}. {$this->last_name}";
    }

    public function office()
    {
        return $this->belongsTo(Office::class, 'department_code', 'department_code');
    }

    public function driverV()
    {
        return $this->hasOne(DriverVehicle::class, 'department_code', 'department_code');
    }

}
