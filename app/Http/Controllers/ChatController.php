<?php

namespace App\Http\Controllers;

use App\Events\ChatSender;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    public function storechat(Request $request) {

        $data = $request->validate([
            'user' => 'required|int',            
            'pakar' => 'required|int',
            'line_chat' => 'nullable',
            'sentby_user' => 'int',
            'sentby_pakar' => 'int',
        ]);

        $id_pakar = $request-> pakar;
        $id_user = $request-> user;
        $line_chat = $request-> line_chat;
        $sentby_user = $request->sentby_user;
        $sentby_pakar = $request->sentby_pakar;

        if ($request->$sentby_user!==[]){
            $user_session = DB::table('chat')->where('sentby_user', $sentby_user)->increment('user_session');
        } else {
            $user_session = 1;
        }

        broadcast(new ChatSender($id_pakar, $id_user, $line_chat, $sentby_user, $sentby_pakar, $user_session));

        Chat::create($data);
        return response([
            'message' => $line_chat
        ]);
    }

    public function loadchatpakar(Request $request) {

        $data = $request->validate([
            'user' => 'required|int',            
            'pakar' => 'required|int',
        ]);

        $chat = Chat::where($data)->orderBy('id_chat','asc')->get();
        
        return response([
            'chat' => $chat
        ]);
    }

    public function loadchatuser($request) {

        $data = Chat::where('pakar', $request)->select('sentby_user')->whereNotNull('sentby_user')->orderBy('id_chat','desc')->distinct()->with('pengguna')->get();

        return response([
            'user' => $data
        ]);
    }

    public function checksession(Request $request){
        $data = $request->validate([
            'user' => 'required|int'
        ]);

        $session = Chat::where($data)->orderBy('user_session','desc')->value('user_session');

        return response(([
            'user_session' => $session
        ]));
    }
}
