<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArtikelController extends Controller
{
    public function tambahArtikel(Request $request)
    {
        $data = $request -> validate([
            'id_admin' => 'required|int',
            'judul' => 'required|string|max:20',
            'foto' => 'required|image|mimes:jpeg,png,jpg,svg',
            'content' => 'required|string'
        ]);

        $nama_gambar = Str::random(32).".".$request->foto->getClientOriginalExtension();
        $data['foto'] = $nama_gambar;

        Artikel::create($data);
        Storage::disk('public')->put($nama_gambar, file_get_contents($request->foto));
        return response([
            'data' => $data
        ]);
    }

    public function lihatArtikel()
    {
        $data = Artikel::orderBy('id_artikel', 'desc')->get();

        return response([
            'data' => $data
        ]);
    }

    public function editArtikel(Request $request, $id)
    {
        $data = $request -> validate([
            'id_admin' => 'required|int',
            'judul' => 'required|string|max:20',
            'foto' => 'required|image|mimes:jpeg,png,jpg,svg',
            'content' => 'required|string'
        ]);

        $artikel = Artikel::findorfail($id);

        if ($request->foto) {
    
            $storage = Storage::disk('public');
            if($storage->exists($artikel->foto))
                $storage->delete($artikel->foto);

            $nama_gambar = Str::random(32).".".$request->foto->getClientOriginalExtension();
            $data['foto'] = $nama_gambar;

            Storage::disk('public')->put($nama_gambar, file_get_contents($request->foto));
        };

        $artikel -> update($data);

        return response([
            "data" => $artikel
        ]);

    }

    public function hapusArtikel($request)
    {
        $data = Artikel::findorfail($request);

        $storage = Storage::disk('public');
        if($storage->exists($data->foto))
            $storage->delete($data->foto);

        $data -> delete();
    }
}
