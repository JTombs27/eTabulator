<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office_vehicle extends Model
{
    use HasFactory;
    protected $table = 'vehicle_status';
    protected $fillable = [
        'department_code',
        'plate_no'
    ];
}
