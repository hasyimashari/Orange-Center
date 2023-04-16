<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'nama' => 'required|string|max:30',            
            'username' => 'required|string|max:12',
            'email' => 'required|email|max:30',
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required|date',
            'no_hp' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|max:15',
            'alamat' => 'required|string|max:50',
            'password' => 'required|max:12',
        ];
    }
}
