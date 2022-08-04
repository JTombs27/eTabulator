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
    protected $consumedFuel;
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
        $fuel = Travel::where('driver_vehicles_id', $this->attributes->driver_vehicles_id)
                        ->whereBetween('date_from', [$weekStartDate,$weekEndDate])
                    // ->when(request('date_from') && !request('date_to'), function($q) use($weekStartDate,$weekEndDate){
                    //     $q->where('date_from', request('date_from'))->whereNull('date_to');
                    // })
                    // ->when(request('date_from') && request('date_to'), function ($q) use ($weekStartDate,$weekEndDate){
                    //     $q->whereBetween('date_from', [$weekStartDate,$weekEndDate]);
                    // })
                    ->where(function($q) {
                        $q->whereNull('status')->orWhere('status', 'Approved');
                    })
                    ->latest()
                    ->get();
        
        $consumed = $fuel->sum('total_liters');
        $remainingPerWeek = ($this->fuel_limit * 7) - $consumed;
        // dd($remainingPerWeek);
  
        if (request('date_from') && request('date_to')) {

            if ($this->attributes->id) {

                $currentLiters = Travel::findOrFail($this->attributes->id);
                $remainingPerWeek = $remainingPerWeek + $currentLiters->total_liters; 

            }
            // $allowedFuel = $this->fuel_limit - $consumed;
         
            return $this->validateWithRange($remainingPerWeek, $value);
            
        } elseif(request('date_from') && !request('date_to')) {
            $allowedFuel = $this->fuel_limit;
            if ($this->attributes->id) {

                $currentLiters = Travel::findOrFail($this->attributes->id);

                $remainingPerWeek = $remainingPerWeek + $currentLiters->total_liters; 


                // return $this->validateFuel($allowable, $value);

            }

            // $allowedFuel = ($this->fuel_limit * 7) - $consumed;
            

            if ($remainingPerWeek < $allowedFuel) {
                $allowedFuel = $remainingPerWeek;
                
            }

            return $this->validateFuel($allowedFuel, $value);
        }
   
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        if ($this->totalLiters < 1) {
            return "This vehicle reached out the maximum weekly limit of fuel.";
        }
        return "Maximum liters available: ". $this->totalLiters." liters";
    }
    
    protected function validateWithRange($remainingPerWeek, $value)
    {
        $different_days = date_diff(Carbon::parse(request('date_from')."00:00:00"),Carbon::parse(request('date_to')."24:00:00"))->days;

        if ($different_days > 7) {

            $allowedFuel = $remainingPerWeek;

        } else if($different_days <= 7) {

            $allowedFuel = $this->fuel_limit * $different_days;

            if ($remainingPerWeek < $allowedFuel) {
                $allowedFuel = $remainingPerWeek;
            } else {
                $allowedFuel = $this->fuel_limit * $different_days;
            }
      
        } 
        
        return $this->validateFuel($allowedFuel, $value);
        
    }

    protected function validateFuel($allowable, $value)
    {
        // dd($allowable);
        $this->totalLiters = floatval($allowable);
        return $allowable >= $value;
    }
}
