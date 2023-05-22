<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\PakarController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\SuspendController;
use App\Http\Controllers\PembuatController;
use App\Http\Controllers\RegitrasionController;
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
    Route::post('/logout', [LogoutController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        $user = $request->user();
        $user->kelamin->get();
        return $user;
    });

    Route::apiResource('/admin', AdminController::class);
    Route::apiResource('/pakar', PakarController::class);
    Route::apiResource('/pengguna', PenggunaController::class);
    Route::put('/suspend_pakar/{id}', [SuspendController::class, 'suspend_pakar']);
    Route::put('/suspend_pengguna/{id}', [SuspendController::class, 'suspend_user']);
    Route::post('/pembuat', [PembuatController::class, 'upmaker']);
    Route::post('/sendChat', [ChatController::class, 'storechat']);
});

Route::post('/register', [RegitrasionController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);