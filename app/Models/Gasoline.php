<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gasoline extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function travel()
    {
        return $this->hasMany(Travel::class,"gasoline_id","id");
    }
}
