<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pengguna;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UpgradeAkunController extends Controller
{
    public function upgradePremium($request)
    {
        $akun_user = Pengguna::findorfail($request);
        $akun_user->update(['status_premium' => 2]);
    }

    public function downgradePremium()
    {
        $premiumKD = Pengguna::whereDate('created_at', '<=', Carbon::now()->subDays(30));
        $premiumKD->update(['status_premium' => 1]);
    }
}
