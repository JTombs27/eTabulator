<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Voting;
class Participant extends Model
{
    use HasFactory;
    protected $table = 'participants';
    protected $guarded = [];
    // protected $fillable = [
    //     'settup_id'                ,
    //     'participants_name'        ,
    //     'participants_address'     ,
    //     'participants_details'     ,
    //     'participants_profile'     ,                  
    // ];

    public function votings(){
        return $this->hasMany(Voting::class,"participants_id","id");
    }

    public function settup(){
        return $this->belongsTo(EventSetup::class, 'settup_id', 'id');
    }
}
