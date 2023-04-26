<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Admin;
use App\Models\Pakar;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function Psy\debug;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // $data = $request->validated();

        // /** @var \App\Models\Admin $user*/
        // $user = Admin::create([
        //     'nama_lengkap' => $data['nama_lengkap'],
        //     'username' => $data['username'],
        //     'jenis_kelamin' => $data['jenis_kelamin'],
        //     'tanggal_lahir' => $data['tanggal_lahir'],
        //     'no_hp' => $data['no_hp'],
        //     'alamat' => $data['alamat'],
        //     'email' => $data['email'],
        //     'password' => bcrypt($data['password'])
        // ]);

        // $token = $user -> createToken('main') -> plainTextToken;

        // return response([
        //     'Admin' => $user,
        //     'token_id' => $token
        // ]);

        // ==============================

        // $data = $request->validated();

        // /** @var \App\Models\Pakar $user*/
        // $user = Pakar::create([
        //     'nama_lengkap' => $data['nama_lengkap'],
        //     'username' => $data['username'],
        //     'jenis_kelamin' => $data['jenis_kelamin'],
        //     'tanggal_lahir' => $data['tanggal_lahir'],
        //     'no_hp' => $data['no_hp'],
        //     'alamat' => $data['alamat'],
        //     'email' => $data['email'],
        //     'password' => bcrypt($data['password'])
        // ]);

        // $token = $user -> createToken('main') -> plainTextToken;

        // return response([
        //     'Pakar' => $user,
        //     'token_id' => $token
        // ]);

        // ==============================

        $data = $request->validated();

        /** @var \App\Models\Pengguna $user*/
        $user = Pengguna::create([
            'nama_lengkap' => $data['nama_lengkap'],
            'username' => $data['username'],
            'jenis_kelamin' => $data['jenis_kelamin'],
            'tanggal_lahir' => $data['tanggal_lahir'],
            'no_hp' => $data['no_hp'],
            'alamat' => $data['alamat'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user -> createToken('main') -> plainTextToken;

        return response([
            'Pengguna' => $user,
            'token_id' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        // $credentials = $request->validated();
        // if (!Auth::attempt($credentials)) {
        //     return response([
        //         'message' => 'Provided password is incorrect'
        //     ], 422);
        // }

        // /** @var \App\Models\Pakar $user */
        // $user = Auth::user();
        // $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user' => $user,
        //     'token' => $token
        // ]);

        // ====================================

        // $credentials = $request->validated();
        // if (!Auth::attempt($credentials)) {
        //     return response([
        //         'message' => 'Provided password is incorrect'
        //     ], 422);
        // }

        // /** @var \App\Models\Pakar $user */
        // $user = Auth::user();
        // $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user' => $user,
        //     'token' => $token
        // ]);

        // ====================================

        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided password is incorrect'
            ], 422);
        }

        /** @var \App\Models\Pengguna $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

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
