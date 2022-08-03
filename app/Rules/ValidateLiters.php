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
        
      
        $fuel = Travel::with(['driverVehicle' => function($q)  {
                        $q->where('vehicles_id', $this->attributes->vehicles_id);
                    }])
                    ->whereHas('driverVehicle', function($q) {
                        $q->where('vehicles_id', $this->attributes->vehicles_id);
                    })
                    ->when(request('date_from') && !request('date_to'), function($q) use($weekStartDate,$weekEndDate){
                        $q->where('date_from', request('date_from'))->whereNull('date_to');
                    })
                    ->when(request('date_from') && request('date_to'), function ($q) use ($weekStartDate,$weekEndDate){
                        $q->whereBetween('date_from', [$weekStartDate,$weekEndDate])
                        ->orWhereBetween('date_to', [$weekStartDate,$weekEndDate]);
                    })
                    ->latest()
                    ->get();
        
        $consumed = $fuel->sum('total_liters');
        // $remainingPerWeek = ($this->fuel_limit * 7) - $consumed;
        // dd($consumed);
        if (request('date_from') && request('date_to')) {
            if ($this->attributes->id) {
                $currentLiters = Travel::findOrFail($this->attributes->id);
                $consumed = $consumed - $currentLiters->total_liters; 
                $allowable = $this->fuel_limit - $consumed;
                return $this->validateWithRange($allowable, $value);
                // return $value <= $allowable && $value != 0;
            }
            // $allowedFuel = $this->fuel_limit - $consumed;
         
            return $this->validateWithRange($consumed, $value);
        } elseif(request('date_from') && !request('date_to')) {
            if ($this->attributes->id) {
                $currentLiters = Travel::findOrFail($this->attributes->id);
                $consumed = $consumed - $currentLiters->total_liters; 
                $allowable = $this->fuel_limit - $consumed;
                return $this->validateFuel($allowable, $value);
                // return $value <= $allowable && $value != 0;
            }
            $allowedFuel = $this->fuel_limit - $consumed;
            return $this->validateFuel($allowedFuel, $value);
        }

        // dd($this->fuel_limit);
        //edit
        
        
        // return $value <= $this->totalLiters && $value != 0;
   
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
    
    protected function validateWithRange($consumed, $value)
    {
        $different_days = date_diff(Carbon::parse(request('date_from')."00:00:00"),Carbon::parse(request('date_to')."24:00:00"))->days;
        if ($different_days > 7) {
            $allowedFuel = ($this->fuel_limit * 7) - $consumed;
            // $this->totalLiters = $this->fuel_limit * 7;
        } else if($different_days <= 7) {
            $allowedFuel = ($this->fuel_limit * $different_days) - $consumed;

            //continue
        } 
        
        return $this->validateFuel($allowedFuel, $value);
        
    }

    protected function validateFuel($allowable, $value)
    {
        dd($allowable);
        $this->totalLiters = $allowable;
        return $allowable >= $value;
    }
}
