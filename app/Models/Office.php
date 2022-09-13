<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    use HasFactory;

    protected $table = "offices";
    protected $guarded = [];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'department_code', 'department_code');
    }
    
    public function officeVehicles()
    {
        return $this->hasMany(OfficeVehicles::class,"department_code","department_code");
    }

    public function officeTravelCount()
    {
        return $this->hasMany(Travel::class,"office_id","department_code");
    }

    public function division()
    {
        return $this->hasMany(Division::class, 'department_code', 'department_code');
    }
    
}
