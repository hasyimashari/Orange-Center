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
        $data['password'] = bcrypt($data['password']);
        $user = Pengguna::create($data);

        $token = $user -> createToken('main') -> plainTextToken;
        $role = 'usr';

        return response([
            'user' => $user,
            'token' => $token,
            'role' => $role
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::guard('web')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("web")->user();
            $token = $user->createToken('main')->plainTextToken;
            $role = 'adm';
        } 

        elseif (Auth::guard('pkr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("pkr")->user();
            $token = $user->createToken('main')->plainTextToken;
            $role = 'pkr';
        } 
        
        elseif (Auth::guard('usr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("usr")->user();
            $token = $user->createToken('main')->plainTextToken;
            $role = 'usr';
        } 
        
        else {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        } 

        return response([
            'user' => $user,
            'token' => $token,
            'role' => $role
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
