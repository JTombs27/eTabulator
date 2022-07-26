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
            'username' => ['required','alpha','min:6',Rule::unique('users')->ignore($this->id)],
            'password' => [Rule::required('users')->ignore($this->id), 'alpha_num', 'min:8', 'confirmed'],
            'permission' => ['required'],
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'permission.required' => 'Permission is required.',
        ];
    }
}
