<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSetup extends Model
{
    use HasFactory;
    protected $table = 'event_settup';
    protected $guarded = [];
    protected $fillable = [
        'event_id'                             ,
        'event_settup_title'                   ,
        'event_settup_requirement'             ,
        'event_settup_withpannel'              ,
        'event_settup_withaudience'            ,
        'event_settup_withaudience_vote_open'  ,
        'event_settup_withaudience_vote_closed' ,
        'settup_status'                        
    ];
}
