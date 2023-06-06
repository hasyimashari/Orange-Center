<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PembuatAkunPakar;
use Illuminate\Http\Request;

class PembuatController extends Controller
{
    public function pembuatPakar(Request $request)
    {

        $data = $request->validate([
            'id_admin' => 'required|int',            
            'id_pakar' => 'required|int',
        ]);

        /** @var \App\Models\PembuatAkunPakar $user*/
        PembuatAkunPakar::create($data);
        return response([
            'success' => true
        ]);
    }
}
