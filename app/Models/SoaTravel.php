<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoaTravel extends Model
{
    use HasFactory;

    protected $table = "soa_travels";
    protected $guarded = [];


    protected $appends = ['soaDate'];

    public function getSoaDateAttribute()
    {
        $date_from = $this->date_from;
        $date_to = $this->date_to;

        if($date_from != $date_to) {
            return (\Carbon\Carbon::parse($date_from)->format('M d')) ."-". (\Carbon\Carbon::parse($date_to)->format('d, Y')); 
        } else {
            return  (\Carbon\Carbon::parse($date_from)->format('M d, Y'));
        }

    }

    public function updateTicketNo()
    {   
        $series = 'FOL-'.date('y').'-'.sprintf('%06d', $this->id);
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

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');                                                                                                                     
    }

    public function division()
    {
        return $this->belongsTo(Division::class, 'division_code', 'division_code');                                                                                                                     
    }
}
