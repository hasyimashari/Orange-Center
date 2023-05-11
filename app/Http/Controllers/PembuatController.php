<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\PembuatPakarRequest;
use App\Models\PembuatAkunPakar;

class PembuatController extends Controller
{
    public function upmaker(PembuatPakarRequest $request)
    {

        $data = $request->validated();

        /** @var \App\Models\PembuatAkunPakar $user*/
        PembuatAkunPakar::create($data);
        return response([
            'success' => true
        ]);
    }
}
