<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    protected $table = 'travels';
    protected $fillable = [
        'date_from',
        'date_to',
        'driver_vehicles_id',
        'official_passenger',
        'place_to_visit',
        'time_arrival',
        'time_departure',
        'total_liters',
        'purpose',
        'actual_driver',
        'ticket_number',
        'gas_type',
        'user_id',
        'price',
        

    ];
    use HasFactory;

    public function updateTicket()
    {   
        $series = date('y').'-'.sprintf('%06d', $this->id);
        $this->ticket_number = $series;
        $this->save();
    }

}
