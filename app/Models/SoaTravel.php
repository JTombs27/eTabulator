<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoaTravel extends Model
{
    use HasFactory;

    protected $table = "soa_travels";
    protected $guarded = [];

    public function updateTicketNo()
    {   
        $series = 'SOA-'.date('y').'-'.sprintf('%06d', $this->id);
        $this->ticket_no = $series;
        $this->save();
    }

    public function travels()
    {
        return $this->hasMany(Travel::class,"soa_travel","id");
    }

    public function office()
    {
        return $this->belongsTo(Office::class, 'office_id', 'department_code');                                                                                                                     
    }
}
