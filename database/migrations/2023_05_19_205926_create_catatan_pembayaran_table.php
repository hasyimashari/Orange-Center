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
        Schema::create('catatan_pembayaran', function (Blueprint $table) {
            $table->integer('id_pembayaran', true);
            $table->integer('id_user')->index('id_user');
            $table->date('tanggal_pembayaran');
            $table->date('tanggal_berakhir');
            $table->integer('metode_pembayaran')->index('metode_pembayaran');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('catatan_pembayaran');
    }
};
