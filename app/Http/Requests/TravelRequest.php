<?php

namespace App\Http\Requests;

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
        $valid = auth()->user()->office_id != '01' && $this->type_code != 3;
        // dd($valid);
        return [
            'date_from' =>['required','date'],
            'date_to' => ['required_if:rangedDate,true', Rule::when($this->rangedDate,['after:date_from'])], 
            'total_liters' => Rule::when($valid,['numeric','max:14']),
            'gas_type' => 'required',
            'driver_vehicles_id' => 'required',
            'vehicles_id' => 'required',
            'actual_driver' => 'required_if:showActualDriver,true',
            'price' => 'lt:charges'
        ];
    }

    public function messages()
    {
        return [
            'date_to.required_if' => 'This field is required for multiple dates',
            'date_from.required' => 'This field is required',
            'driver_vehicles_id.required' => 'This field is required',
            'vehicles_id.required' => 'This field is required',
            'actual_driver.required_if' => 'Actual Driver is Required if the above option is checked'
        ];
    }
}
