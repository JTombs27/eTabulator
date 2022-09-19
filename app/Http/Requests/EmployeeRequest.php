<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends FormRequest
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
            'first_name' => ['required'],
            'last_name' => ['required'],
            'non_capitol' => ['required'],
            // 'department_code' => [Rule::requiredIf($this->non_capitol == 0)],
            'department_code' => ['required'],
            // 'agency' => [Rule::requiredIf($this->non_capitol == 1)],
            'gender' => ['required'],
            'birth_date' => ['required'],
            'empl_id' => ['required', 'unique:employees,empl_id'],
            'position_title_long' => ['required'],
            'position_title_short' => ['required']

        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'First name is required',
            'last_name.required' => 'Last name is required',
            'non_capitol.required' => 'Employee type is required',
            'department_code.required' => 'Office is required',
            'agency.required' => 'Agency is required',
            'gender.required' => 'Agency is required',
            'birth_date.required' => 'Birthdate is required',
            'position_title_long.required' => 'This field is required',
            'position_title_short.required' => 'This field is required',
            'empl_id.required' => 'Employee ID is required',
            'empl_id.unique' => 'Employee ID has already been taken.',
        ];
    }
}
