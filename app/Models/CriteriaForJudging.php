<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CriteriaForJudging extends Model
{
    use HasFactory;
    protected $table    = 'criteria_for_judging';
    protected $guarded  = [];
    // protected $fillable = [
    //     'event_title',       
    //     'event_description' ,
    //     'background_image'  ,
    //     'event_from'        ,
    //     'event_to'          
    // ];
}
