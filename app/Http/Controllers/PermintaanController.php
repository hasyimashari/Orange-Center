<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditPermintaanRequest;
use App\Http\Requests\StorePermintaanRequest;
use App\Mail\ReminderEmail;
use App\Models\Permintaan;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class PermintaanController extends Controller
{
    public function tambah(StorePermintaanRequest $request) {

        $data = $request->validated();

        $nama_gambar = Str::random(32).".".$request->foto_produk->getClientOriginalExtension();
        $data['foto_produk'] = $nama_gambar;
        
        Permintaan::create($data);
        Storage::disk('public')->put($nama_gambar, file_get_contents($request->foto_produk));

        return response([
            'data' => $data
        ]);
    }

    public function dataPermintaan() {

        $data = Permintaan::orderBy('id_permintaan', 'desc')->with('pengguna')->get();

        return response([
            'data' => $data
        ]);
    }
    
    public function permintaanSaya($request)
    {
        $data = Permintaan::where('id_user', $request)->orderBy('id_permintaan', 'desc')->with('pengguna')->get();

        return response([
            'data' => $data
        ]);
    }

    public function edit(EditPermintaanRequest $request, $id)
    {
        $data = $request -> validate([

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

    public function hapus($request)
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
