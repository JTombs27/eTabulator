<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    use HasFactory;

    protected $table = "offices";
    protected $guarded = [];

    public function officeVehicles()
    {
        return $this->hasMany(OfficeVehicles::class,"department_code","department_code");
    }
    
}
