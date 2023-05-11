<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PenggunaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_user' => $this-> id_user,
            'nama_lengkap' => $this-> nama_lengkap,
            'tanggal_lahir' => $this-> tanggal_lahir,
            'alamat' => $this-> alamat,
            'username' => $this-> username,
            'email' => $this-> email,
            'no_hp'=> $this-> no_hp,
            'jenis_kelamin' => $this-> kelamin-> jenis_kelamin,
            'status_akun' => $this-> status-> status_akun,
        ];
    }
}
