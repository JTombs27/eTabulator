<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
            'name' => 'required',
            'username' => ['required','alpha', Rule::when(!$this->id,['min:6|unique:users'])],
            'password' => ['confirmed', Rule::when(!$this->id,['required', 'alpha_num', 'min:8'])],
            'permission' => [Rule::when(!$this->id, ['required'])],
            'gasoline_id' => [Rule::requiredIf($this->permission == 'gasoline-station')]
        ];
    }

    public function messages()
    {
        return [
            'permission.required' => 'Permission is required.',
            'gasoline_id.required' => 'Gasoline station is required.'
        ];
    }
}
