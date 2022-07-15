<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employees";
    protected $guarded = [];
    protected $appends = ['full_name'];

    public function getFullNameAttribute()
    {
        $firstname = $this->first_name;
        $lastname = $this->last_name;
        $middlename = $this->middle_name;
        return "$firstname". ' '. "$lastname". ' '. "$middlename";
    }
}
