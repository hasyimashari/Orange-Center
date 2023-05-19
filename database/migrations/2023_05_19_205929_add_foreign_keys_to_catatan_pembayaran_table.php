<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catatan_pembayaran', function (Blueprint $table) {
            $table->foreign(['id_user'], 'catatan_pembayaran_ibfk_2')->references(['id_user'])->on('pengguna')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['metode_pembayaran'], 'catatan_pembayaran_ibfk_1')->references(['id_metode'])->on('metode_pembayaran')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catatan_pembayaran', function (Blueprint $table) {
            $table->dropForeign('catatan_pembayaran_ibfk_2');
            $table->dropForeign('catatan_pembayaran_ibfk_1');
        });
    }
};
