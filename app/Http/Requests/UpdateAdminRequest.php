<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAdminRequest extends FormRequest
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
            'nama_lengkap' => ['required','string', 'max:30', Rule::unique('Admin')->ignore($this->user())],            
            'username' => ['required','string','max:12', Rule::unique('Admin')->ignore($this->user())],
            'email' => ['required','email','max:30', Rule::unique('Admin')->ignore($this->user())],
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required|date_format:Y-m-d',
            'no_hp' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|max:15',
            'asal' => 'required|string|max:15',
            'password' => 'required|string|max:12',
        ];
    }
}
