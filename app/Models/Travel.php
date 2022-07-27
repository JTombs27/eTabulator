<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon;

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
        'soa_travel',
        'user_id',
        'status',
        'is_carpool',
        'office_id'
        

    ];
    protected $appends = ['travelDate'];
    use HasFactory;

    public function updateTicket()
    {   
        $series = date('y').'-'.sprintf('%06d', $this->id);
        $this->ticket_number = $series;
        $this->save();
    }

    public function getTravelDateAttribute()
    {
        $date_from = $this->date_from;
        $date_to = $this->date_to;

        if(!!$date_to) {
            return (\Carbon\Carbon::parse($date_from)->format('M d')) ."-". (\Carbon\Carbon::parse($date_to)->format('d, Y')); 
        } else {
            return  (\Carbon\Carbon::parse($date_from)->format('M d, Y'));
        }

    }

    public function setStatus($value)
    {
        $this->status = $value;
        $this->save();
        if ($value == 'Disapproved') {
            return 'error';
        }
        return 'message';
    }

    public function driverVehicle()
    {
        return $this->belongsTo(DriverVehicle::class, 'driver_vehicles_id', 'id');
    }
    
    public function logTimeArrival()
    {
        return $this->belongsTo(LogTimeArrival::class, 'id', 'travel_id');
    }

    

    public function charge()
    {
        return $this->belongsToMany(Charge::class, 'office_id', 'office_id');                                                                                                                                                                                                                                                                                                                                                                                    
    }

}
