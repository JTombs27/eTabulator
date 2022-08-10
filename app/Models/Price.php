<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function gasoline()
    {
        return $this->belongsTo(Gasoline::class, 'gasoline_id', 'id');
    }
}
