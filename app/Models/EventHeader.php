<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class EventHeader extends Model
{
    use HasFactory;
    protected $table = 'event_header';
    protected $guarded = [];
    protected $fillable = [
        'event_title',       
        'event_description' ,
        'background_image'  ,
        'event_from'        ,
        'event_to'          
    ];

    public function event_settup()
    {
        return $this->hasMany(EventSetup::class,"event_id","id");
    }
}
