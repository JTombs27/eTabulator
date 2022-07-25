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
            'PLATENO' => 'required',
            'TYPECODE' => 'required',
            'FDATEACQ' => 'required',
            'FACQCOST'=> 'required|regex:/^\d{1,13}(\.\d{1,4})?$/',
            'FDESC' => 'required',
            'condition' => 'required',
            'vehicle_status_date' => 'required'
            
        ];
    }

    public function messages()
    {
        return [
            'PLATENO.required' => 'Plate Number is required!',
            'TYPECODE.required' => 'Vehicle Type is required!',
            'FDATEACQ.required' => 'Date of Acquisition is required!',
            'FACQCOST.required' => 'Acquisition Cost is required!',
            'FDESC.required' => 'Description is required!',
            'condition.required' => 'Vehicle Condition is required!',
            'vehicle_status_date.required' => 'Vehicle Status date is required!',
            
        ];
    }
}
