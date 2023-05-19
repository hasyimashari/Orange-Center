<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePakarRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nama_lengkap' => 'required|string|max:30',            
            'username' => 'required|string|max:12|unique:Pakar,username',
            'spesialis' => 'required',
            'email' => 'required|email|max:30|unique:Pakar,email',
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required|date_format:Y-m-d',
            'no_hp' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|max:15',
            'asal' => 'required|string|max:15',
            'password' => 'required|string|max:12',
            'status_akun' => 'required',
        ];
    }
}
