<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\Pengguna $user*/
        $user = Pengguna::create([
            'nama_lengkap' => $data['nama'],
            'username' => $data['username'],
            'jenis_kelamin' => $data['jenis_kelamin'],
            'tanggal_lahir' => $data['tanggal_lahir'],
            'no_hp' => $data['no_hp'],
            'alamat' => $data['alamat'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);

        $token = $user -> createToken('main') -> plainTextToken;

        return response([
            'pengguna' => $user,
            'token_id' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credential = $request->validated();

        if (!Auth::attempt($credential)) {
            return response([
                'message' => "Email atau Password tidak sesuai"
            ]);
        }

        /** @var \App\Models\Pengguna $user */
        $user = Auth::user();
        $token = $user -> createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);

    }

    public function logout(Request $request){

        /** @var User $user */
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
