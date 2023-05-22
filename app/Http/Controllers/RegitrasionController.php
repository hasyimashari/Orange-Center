<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pengguna;
use Illuminate\Http\Request;

class RegitrasionController extends Controller
{
    public function register(Request $request)
    {

        $data = $request->validate([
            'nama_lengkap' => 'required|string|max:30|unique:Pengguna,nama_lengkap',            
            'username' => 'required|string|max:12|unique:Pengguna,username',
            'email' => 'required|email|max:30|unique:Pengguna,email',
            'jenis_kelamin' => 'required',
            'tanggal_lahir' => 'required|date_format:Y-m-d',
            'no_hp' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|max:15',
            'asal' => 'required|string|max:15',
            'password' => 'required|string|max:12',
        ]);

        /** @var \App\Models\Pengguna $user*/
        $data['password'] = bcrypt($data['password']);
        Pengguna::create($data);

        return response([
            'success' => true
        ]);
    }
}
