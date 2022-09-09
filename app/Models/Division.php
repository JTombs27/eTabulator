<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    use HasFactory;

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'division_code', 'division_code');
    }
}
