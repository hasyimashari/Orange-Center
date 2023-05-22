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
    public $id_user,$id_pakar,$line_chat;

    /**
     * Create a new event instance.
     */
    // public function __construct()
    public function __construct($id_pakar,$id_user,$line_chat)
    {
        $this-> id_user = $id_user;
        $this-> id_pakar = $id_pakar;
        $this-> line_chat = $line_chat;

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

    public function broadcastOn(): array
    {
        return [
            new Channel('channel_konsultasi.'.$this-> id_pakar)
        ];
    }
}
