<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Participant;
use App\Models\User;
use App\Models\CriteriaForJudging;
class Voting extends Model
{
    use HasFactory;
    protected $table = 'voting_tbl';
    protected $guarded = [];
    protected $fillable = [
        'settup_id'             ,
        'participants_id'       ,
        'user_id'               ,
        'criterria_id'          ,
        'vote_datetime_cast'    ,                  
        'vote_value'    ,                  
    ];

    public function participants_photo()
    {
        return $this->belongsTo(Participant::class,"participants_id","id");
    }

    public function voteCount()
    {
        return $this->belongsTo(User::class,"user_id","id")->select("id");
    }

    public function criteria()
    {
        return $this->belongsTo(CriteriaForJudging::class,"criterria_id","id");
    }

    public function panel()
    {
        return $this->belongsTo(User::class,"user_id","id");
    }
}
