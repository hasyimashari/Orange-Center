<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePermintaanRequest extends FormRequest
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
            'id_user' => 'required|int',
            'foto_produk' => 'required|image|mimes:jpeg,png,jpg,svg',
            'nama_produk' => 'required|string|max:20',
            'deskripsi' => 'required|string',
            'budget' => 'required|int',
            'stock' => 'required|int',
        ];
    }
}
