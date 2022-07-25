<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Charge extends Model
{
    use HasFactory;

    protected $table = "charges";
    protected $guarded = [];

    public function office()
    {
        return $this->belongsTo(Office::class, 'office_id', 'department_code');
    }

    public function deductCharge($value)
    {
        // Ako ni Jade. -Raymart
        try {
            $this->amount -=  $value;
            $this->save();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
