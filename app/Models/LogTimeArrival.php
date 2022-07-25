<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogTimeArrival extends Model
{
    use HasFactory;
    protected $table = "log_time_arrival";
    protected $guarded = [];

    public function travel()
    {
        return $this->belongsTo(Travel::class, 'travel_id', 'id');
    }
}
