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

    public function event(){
        return $this->belongsTo(EventHeader::class,'event_id','id');
    }

    public function voted()
    {
        return $this->hasMany(Voting::class,"settup_id","id");
    }

    public function winner()
    {
        return $this->hasOne(Participant::class, 'id', 'participants_id');
    }

    public function panels(){
        return $this->hasMany(SetupPanel::class,"settup_id","id");
    }

    public function participants()
    {
        return $this->hasMany(Participants::class,"settup_id","id");
    }

    public function criteria()
    {
        return $this->hasMany(CriteriaForJudging::class,"settup_id","id");
    }
}
