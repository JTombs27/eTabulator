<?php

namespace App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class ValidateWeek implements Rule
{
    protected $date_from;
    protected $date_to;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($date_from, $date_to)
    {
        $this->date_from = $date_from;
        $this->date_to = $date_to;
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
        $weekStartDate = Carbon::parse($this->date_from)->startOfWeek()->format('Y-m-d');
        $weekEndDate = Carbon::parse($this->date_from)->endOfWeek()->format('Y-m-d');

      
        return $value <= $weekEndDate;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The date should be between ".Carbon::parse($this->date_from)->startOfWeek()->format('M d, Y'). " to ".Carbon::parse($this->date_from)->endOfWeek()->format('M d, Y');
    }
}
