<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|string|email|max:30',
            'password' => 'required|max:12',
        ]);
        
        if (Auth::guard('web')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("web")->user();
            $user->kelamin->get();
            $role = 'adm';
        } 

        elseif (Auth::guard('pkr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("pkr")->user();
            $user->kelamin->get();
            $user->status->get();
            if ($user['status_akun']===1) {
                $role = 'pkr';
            } else {
                return response([
                    'message' => 'akun pakar sedang di suspend'
                ], 422);
            }} 
        
        elseif (Auth::guard('usr')->attempt($credentials)) {
            /** @var User $user */
            $user = Auth::guard("usr")->user();
            $user->kelamin->get();
            $user->status->get();
            if ($user['status_akun']===1) {
                $role = 'usr';
            } else {
                return response([
                    'message' => 'akun pengguna sedang di suspend'
                ], 422);
            }} 
        
        else {
            return response([
                'message' => 'data yang diberikan kurang tepat'
            ], 422);
        } 

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token,
            'role' => $role
        ]);
    }
}
