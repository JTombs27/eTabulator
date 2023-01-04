<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Voting;
use App\Models;
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

    public function voted()
    {
        return $this->hasMany(Voting::class,"id","settup_id");
        // return $this->belongsTo(Voting::class,'settup_id','id');
    }
    public function winner()
    {
        return $this->hasOne(Participant::class, 'id', 'participants_id');
    }
}
