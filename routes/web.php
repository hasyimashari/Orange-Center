<?php

use App\Events\ChatSender;
use App\Events\TestEvent;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/send', function(){
    broadcast(new ChatSender(9, 7, 'test', 7, null, 18));
});

Route::get('/test', function(){
    broadcast(new TestEvent());
});

