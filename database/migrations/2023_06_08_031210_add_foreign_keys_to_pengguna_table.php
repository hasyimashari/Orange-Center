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
        Schema::table('pengguna', function (Blueprint $table) {
            $table->foreign(['jenis_kelamin'], 'pengguna_ibfk_1')->references(['id_jenis_kelamin'])->on('jenis_kelamin')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['status_premium'], 'pengguna_ibfk_3')->references(['id_premium'])->on('status_premium')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['status_akun'], 'pengguna_ibfk_2')->references(['id_status_akun'])->on('status_akun')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pengguna', function (Blueprint $table) {
            $table->dropForeign('pengguna_ibfk_1');
            $table->dropForeign('pengguna_ibfk_3');
            $table->dropForeign('pengguna_ibfk_2');
        });
    }
};
