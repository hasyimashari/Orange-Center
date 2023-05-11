<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PakarController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\SuspendController;
use App\Http\Controllers\PembuatController;
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
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/admin', AdminController::class);
    Route::apiResource('/pakar', PakarController::class);
    Route::apiResource('/pengguna', PenggunaController::class);
    Route::put('/suspend_pakar/{id}', [SuspendController::class, 'suspend_pakar']);
    Route::put('/suspend_pengguna/{id}', [SuspendController::class, 'suspend_user']);
    Route::post('/pembuat', [PembuatController::class, 'upmaker']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);