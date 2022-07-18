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
            'total_liters' => 'numeric'
        ];
    }

    public function messages()
    {
        return [
            'date_to.required_if' => 'This field is required for multiple dates',
            'date_from.required' => 'This field is required'
        ];
    }
}
