<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePakarRequest extends FormRequest
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
            'username' => 'required|string|max:12|unique:Pakar,username'.$this->id_pakar,
            'email' => 'required|email|max:30|unique:Pakar,email'.$this->id_pakar,
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required|date_format:Y-m-d',
            'no_hp' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|max:15',
            'alamat' => 'required|string|max:50',
            'password' => 'required|confirmed|string|max:12',
        ];
    }
}
