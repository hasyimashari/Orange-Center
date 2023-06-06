<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegistrationRequest;
use App\Models\Pengguna;

class RegistrationController extends Controller
{
    public function daftar(RegistrationRequest $request)
    {
        $data = $request->validated();

        $data['password'] = bcrypt($data['password']);
        Pengguna::create($data);

        return response([
            'success' => true
        ]);
    }
}
