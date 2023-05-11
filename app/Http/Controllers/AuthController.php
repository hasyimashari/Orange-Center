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
        $data['password'] = bcrypt($data['password']);
        Pengguna::create($data);

        return response([
            'success' => true
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::guard('web')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("web")->user();
            $role = 'adm';
        } 

        elseif (Auth::guard('pkr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("pkr")->user();
            if ($user['status_akun']===1) {
                $role = 'pkr';
            } else {
                return response([
                    'message' => 'User is suspended'
                ], 422);
            }} 
        
        elseif (Auth::guard('usr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("usr")->user();
            if ($user['status_akun']===1) {
                $role = 'usr';
            } else {
                return response([
                    'message' => 'User is suspended'
                ], 422);
            }} 
        
        else {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        } 

        $token = $user->createToken('main')->plainTextToken;
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
