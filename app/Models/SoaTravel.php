<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoaTravel extends Model
{
    use HasFactory;

    protected $table = "soa_travels";
    protected $guarded = [];

    public function travels()
    {
        return $this->hasMany(Travel::class,"soa_travel","id");
    }
}
