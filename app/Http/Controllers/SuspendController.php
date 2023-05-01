<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SuspendRequest;
use App\Models\Pakar;
use App\Models\Pengguna;
use Illuminate\Http\Request;

class SuspendController extends Controller
{
    public function suspend_pakar(SuspendRequest $request, $id)
    {
        $data = $request->validated();

        $pakar = Pakar::findorfail($id);
        $pakar->update($data);
    }

    public function suspend_user(SuspendRequest $request, $id)
    {
        $data = $request->validated();

        $pengguna = Pengguna::findorfail($id);
        $pengguna->update($data);
    }
}
