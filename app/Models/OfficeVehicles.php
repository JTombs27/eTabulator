<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeVehicles extends Model
{
    use HasFactory;
    protected $table = 'office_vehicle';
    protected $fillable = [
        'department_code',
        'plate_no'
    ];

}
