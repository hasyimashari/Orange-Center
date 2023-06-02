<?php

namespace App\Console\Commands;

use App\Mail\ReminderEmail;
use App\Models\Pengguna;
use App\Models\Permintaan;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendReminderEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder:emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email notification to user about reminders';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $datas = Permintaan::whereDate('created_at', '=', Carbon::today()->subDays(7))->with('pengguna')->get();

        $databaru = [];
        foreach ($datas as $data) {
            $databaru[$data->id_user][] = $data->toArray();
        }

        foreach ($databaru as $id_user => $datas) {
            $this->sendEmailToUser($id_user);
        }
    }

    private function sendEmailToUser($id_user) {

        $user = Pengguna::find($id_user);

        Mail::to($user)->send(new ReminderEmail());
    }
}
