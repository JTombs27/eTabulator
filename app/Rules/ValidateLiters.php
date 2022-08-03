<?php

namespace App\Rules;

use App\Models\Travel;
use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class ValidateLiters implements Rule
{

    protected $attributes;
    protected $totalLiters;
    protected $fuel_limit;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($attributes, $fuel_limit)
    {
       $this->attributes = $attributes;
       $this->fuel_limit = $fuel_limit;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $weekStartDate = Carbon::parse(request('date_from'))->startOfWeek()->format('Y-m-d');
        $weekEndDate = Carbon::parse(request('date_from'))->endOfWeek()->format('Y-m-d');
        
      
        $fuel = Travel::whereBetween('date_from', [$weekStartDate,$weekEndDate])
                    ->with(['driverVehicle' => function($q)  {
                        $q->where('vehicles_id', $this->attributes->vehicles_id);
                    }])
                    ->whereHas('driverVehicle', function($q) {
                        $q->where('vehicles_id', $this->attributes->vehicles_id);
                    })
                    ->when(request('date_to'), function ($q) use ($weekStartDate,$weekEndDate){
                        $q->orWhereBetween('date_to', [$weekStartDate,$weekEndDate]);
                    })
                    ->latest()
                    ->get();
      
        $consumed = $fuel->sum('total_liters');

        //edit
        if ($this->attributes->id) {
            $currentLiters = Travel::findOrFail($this->attributes->id);
            $consumed = $consumed - $currentLiters->total_liters;
            $allowable = $this->fuel_limit - $consumed;
            $this->totalLiters = $allowable;
            return $value <= $allowable && $value != 0;
        }

     

        $this->totalLiters = ($this->fuel_limit - $consumed);
        
        return $value <= $this->totalLiters && $value != 0;
   
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "Maximum liters available: ". $this->totalLiters." liters";
    }
}
