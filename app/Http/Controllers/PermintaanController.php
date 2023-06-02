<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\ReminderEmail;
use App\Models\Pengguna;
use App\Models\Permintaan;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class PermintaanController extends Controller
{
    public function tambahPermintaan(Request $request) {

        $data = $request->validate([
            'id_user' => 'required|int',
            'foto_produk' => 'required|image|mimes:jpeg,png,jpg,svg',
            'nama_produk' => 'required|string|max:20',
            'deskripsi' => 'required|string',
            'budget' => 'required|int',
            'stock' => 'required|int',
        ]);

        $nama_gambar = Str::random(32).".".$request->foto_produk->getClientOriginalExtension();
        $data['foto_produk'] = $nama_gambar;
        
        Permintaan::create($data);
        Storage::disk('public')->put($nama_gambar, file_get_contents($request->foto_produk));
        return response([
            'data' => $data
        ]);
    }

    public function lihatSemuaPermintaan() {

        $data = Permintaan::orderBy('id_permintaan', 'desc')->with('pengguna')->get();

        return response([
            'data' => $data
        ]);
    }
    
    public function lihatPermintaanSaya($request)
    {
        $data = Permintaan::where('id_user', $request)->orderBy('id_permintaan', 'desc')->with('pengguna')->get();

        return response([
            'data' => $data
        ]);
    }

    public function editPermintaan(Request $request, $id)
    {
        $data = $request -> validate([
            'id_user' => 'required|int',
            'foto_produk' => 'required|image|mimes:jpeg,png,jpg,svg',
            'nama_produk' => 'required|string|max:20',
            'deskripsi' => 'required|string',
            'budget' => 'required|int',
            'stock' => 'required|int',
        ]);

        $permintaan_saya = Permintaan::findorfail($id);

        if($request->foto_produk) {

            $storage = Storage::disk('public');
            if($storage->exists($permintaan_saya->foto_produk))
                $storage->delete($permintaan_saya->foto_produk);

            $nama_gambar = Str::random(32).".".$request->foto_produk->getClientOriginalExtension();
            $data['foto_produk'] = $nama_gambar;

            $storage->put($nama_gambar, file_get_contents($request->foto_produk));
        };

        $permintaan_saya -> update($data);

    }

    public function hapusPermintaan($request)
    {
        $permintaan_saya = Permintaan::findorfail($request);

        $storage = Storage::disk('public');
        if($storage->exists($permintaan_saya->foto_produk))
            $storage->delete($permintaan_saya->foto_produk);

        $permintaan_saya -> delete();

    }

    public function autoHapus()
    {
        Permintaan::where('created_at', '<', Carbon::now()->subDays(10))->delete();

    }

    public function sendEmailReminder()
    {
        $permintaanKL = Permintaan::whereDate('created_at', '=', Carbon::today()->subDays(7))->with('pengguna')->get();

        foreach ($permintaanKL as $data) {
            Mail::to($data->pengguna)->send(new ReminderEmail());
        }

    }

}
