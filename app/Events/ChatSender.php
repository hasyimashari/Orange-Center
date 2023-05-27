<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatSender implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $id_user,$id_pakar,$line_chat, $sentby_user, $sentby_pakar, $user_session;

    /**
     * Create a new event instance.
     */
    // public function __construct()
    public function __construct($id_pakar,$id_user,$line_chat, $sentby_user, $sentby_pakar, $user_session)
    {
        $this-> id_user = $id_user;
        $this-> id_pakar = $id_pakar;
        $this-> line_chat = $line_chat;
        $this-> sentby_user = $sentby_user;
        $this-> sentby_pakar = $sentby_pakar;
        $this-> user_session = $user_session;

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

    public function broadcastOn(): array
    {
        return [
            new Channel('channel_konsultasi.'.$this-> id_pakar.".".$this->id_user)
        ];
    }
}
