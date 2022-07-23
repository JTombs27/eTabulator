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
        return $this->belongsTo(Employee::class, 'department_code', 'id');
    }
    public function officeVehicle()
    {
        return $this->hasMany(OfficeVehicles::class,"department_code","department_code");
    }
}
