<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TravelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date_from' => 'required|date',
            'date_to' => 'required_if:rangedDate,true',
            'total_liters' => 'numeric|max:14',
            'gas_type' => 'required',
            'driver_vehicles_id' => 'required',
            'vehicles_id' => 'required',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'actual_driver' => 'required_if:showActualDriver,true'
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
