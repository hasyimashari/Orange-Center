<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pakar;
use App\Models\Pengguna;
use Illuminate\Http\Request;

class SuspendController extends Controller
{
    public function suspendPakar(Request $request, $id)
    {
        $data = $request->validate([
            'status_akun' => 'string',
        ]);

        $pakar = Pakar::findorfail($id);
        $pakar->update($data);
    }

    public function suspendUser(Request $request, $id)
    {
        $data = $request->validate([
            'status_akun' => 'string',
        ]);

        $pengguna = Pengguna::findorfail($id);
        $pengguna->update($data);
    }
}
