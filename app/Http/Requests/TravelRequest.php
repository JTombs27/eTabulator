<?php

namespace App\Http\Requests;

use App\Models\Vehicle;
use App\Rules\ValidateLiters;
use App\Rules\ValidateWeek;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TravelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return auth()->user()->role != 'PGO' && $this->type_code != 3;
        return true;
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      
        // dd($this);
        // dd($this->price < 1);
        $fuel_limit = Vehicle::where('id', $this->vehicles_id)->first(['fuel_limit']);
        // dd($fuel_limit->fuel_limit);
        // dd($this->vehicles_id);
        $valid = auth()->user()->office_id != '01';
        // dd($valid);
        return [
            'vehicles_id' => 'required',
            'date_from' =>['required','date'],
            'balance' => 'required',
            'date_to' => [Rule::when($this->rangedDate,
                            [
                                'required', 
                                'after:date_from', 
                                // new ValidateWeek($this->date_from, $this->date_to)
                            ])
                        ], 
            'total_liters' => 
                        Rule::when($valid && $fuel_limit->fuel_limit != 0, [
                            'numeric',

                            function($attribute, $value, $fail) {
                                if ($this->total_liters <= 0) {
                                    $fail('Total liters should be greater than zero.');
                                }
                            },
                            // function($attr, $value, $fail) {

                            //     if ($this->date_from && $this->date_to) {
                            //         $different_days = date_diff(Carbon::parse("$this->date_from 00:00:00"),Carbon::parse("$this->date_to 24:00:00"))->days;
                            //         $validLiters = false;
                            //         $max_fuel = 0;
                            //         if ($different_days > 7) {
                            //             $validLiters = (14 * 7) < $value;
                            //             $max_fuel = 14 * 7;
                            //         } else if($different_days <= 7 && $value > ($different_days * 14)) {
                            //             $validLiters = (14 * $different_days) < $value;
                            //             $max_fuel = 14 * $different_days;
                            //         }                        
                            //         if ($validLiters) {
                            //             $fail("Fuel exceeds the limitation. Maximum fuel should not greater than $max_fuel liters");
                            //         }
                            //     } else if ($this->date_from && !$this->date_to) {
                            //     if ($value > 14) {
                            //         $fail("Fuel exceeds the limitation. Maximum fuel should not greater than 14 liters");
                            //     }
                            //     }
                            // },

                            new ValidateLiters($this, $fuel_limit->fuel_limit)
                        ]),
            'gas_type' => 'required',
            'driver_vehicles_id' => 'required',
            
            'actual_driver' => 'required_if:showActualDriver,true',
            'price' => [
                        function($attribute, $value, $fail) {
                            if (!$this->balance) {
                                $fail('Please select charge first.');
                            }
                        },
                        'lte:balance'],
            'borrowing_office' => Rule::requiredIf($this->is_borrowed_fuel)
        ];
    }

    public function messages()
    {
        return [
            'date_to.required_if' => 'This field is required for multiple dates',
            'date_from.required' => 'This field is required',
            'balance.required' => 'Please select charge.',
            'driver_vehicles_id.required' => 'This field is required',
            'vehicles_id.required' => 'This field is required',
            'actual_driver.required_if' => 'Actual Driver is Required if the above option is checked',
            'borrowing_office.required' => 'Please select a borrowing office',
            'price.lt' => 'The price must be less than total balance.',
        ];
    }
}
