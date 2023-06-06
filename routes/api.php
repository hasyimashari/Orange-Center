<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PakarController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\SuspendController;
use App\Http\Controllers\PembuatController;
use App\Http\Controllers\PermintaanController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UpgradeAkunController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        $user = $request->user();
        $user->kelamin->get();
        return $user;
    });

    Route::apiResource('/admin', AdminController::class);
    Route::apiResource('/pakar', PakarController::class);
    Route::apiResource('/pengguna', PenggunaController::class);

    Route::put('/suspend_pakar/{id}', [SuspendController::class, 'suspendPakar']);
    Route::put('/suspend_pengguna/{id}', [SuspendController::class, 'suspendUser']);
    
    Route::post('/pembuat', [PembuatController::class, 'pembuatPakar']);
    
    Route::post('/sendChat', [ChatController::class, 'storechat']);
    Route::post('/getChatFromPakar/{id}', [ChatController::class, 'loadchatuser']);
    Route::post('/load_chat_pakar', [ChatController::class, 'loadchatpakar']);
    Route::post('/get_user_session', [ChatController::class, 'checksession']);
    
    Route::post('/buatPermintaan', [PermintaanController::class, 'tambah']);
    Route::get('/permintaan', [PermintaanController::class, 'dataPermintaan']);
    Route::post('/permintaan_saya/{id}', [PermintaanController::class, 'permintaanSaya']);
    Route::post('/edit_permintaan_saya/{id}', [PermintaanController::class, 'edit']);
    Route::put('/delete_permintaan_saya/{id}', [PermintaanController::class, 'hapus']);
    Route::put('/autoDelete', [PermintaanController::class, 'autoHapus']);
    Route::post('/sendReminder', [PermintaanController::class, 'sendEmailReminder']);
    
    Route::post('/tambah_artikel', [ArtikelController::class, 'tambahArtikel']);
    Route::get('/artikel', [ArtikelController::class, 'lihatArtikel']);
    Route::put('/hapus_artikel/{id}', [ArtikelController::class, 'hapusArtikel']);
    Route::post('/edit_artikel/{id}', [ArtikelController::class, 'editArtikel']);
    
    Route::put('/upgrade_akun_user/{id}', [UpgradeAkunController::class, 'upgradePremium']);
    Route::put('/cek_status_premium', [UpgradeAkunController::class, 'downgradePremium']);
    
    Route::post('/logout', [LoginController::class, 'keluar']);
});

Route::post('/register', [RegistrationController::class, 'daftar']);
Route::post('/login', [LoginController::class, 'masuk']);