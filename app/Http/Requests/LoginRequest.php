<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [           
            'email' => 'required|email|string|exists:Admin,email|max:30',
            'password' => 'required|max:12',
        ];

        // return [           
        //     'email' => 'required|email|string|exists:Pakar,email|max:30',
        //     'password' => 'required|max:12',
        // ];

        // return [           
        //     'email' => 'required|email|string|exists:Pengguna,email|max:30',
        //     'password' => 'required|max:12',
        // ];
    }
}
