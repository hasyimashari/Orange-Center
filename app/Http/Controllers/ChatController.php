<?php

namespace App\Http\Controllers;

use App\Events\ChatSender;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function storechat(Request $request) {

        $data = $request->validate([
            'user' => 'required|int',            
            'pakar' => 'required|int',
            'line_chat' => 'required',
        ]);

        $id_pakar = $request-> pakar;
        $id_user = $request-> user;
        $line_chat = $request-> line_chat;

        broadcast(new ChatSender($id_pakar, $id_user, $line_chat));

        Chat::create($data);
        return response([
            'message' => $line_chat
        ]);
    }

    public function loadchatuser($request) {

        $chat = Chat::where("user", $request)->orderBy('craeted_at','asc')->get();
        
        return response([
            'chat' => $chat
        ]);
    }

    public function loadchatpakar($request) {

        $chat = Chat::where("pakar", $request)->orderBy('craeted_at','asc')->get();
        
        return response([
            'chat' => $chat
        ]);
    }
}
