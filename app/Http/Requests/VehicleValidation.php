<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VehicleValidation extends FormRequest
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
            'PLATENO' => 'required|unique:vehicles',
            'TYPECODE' => 'required',
            'FACQCOST'=> 'nullable|regex:/^\d{1,13}(\.\d{1,4})?$/',
            'fuel_limit' => 'required|regex:/^\d{1,13}(\.\d{1,4})?$/'
            
        ];
    }

    public function messages()
    {
        return [
            'PLATENO.required' => 'Plate Number is required!',
            'PLATENO.unique' => 'Plate Number already exists!',
            'TYPECODE.required' => 'Vehicle Type is required!',
            'FACQCOST.regex' => 'Invalid Format!',
            'fuel_limit.required' => 'Fuel is required!'

        ];
    }
}
