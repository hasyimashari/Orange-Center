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
        Schema::table('pakar', function (Blueprint $table) {
            $table->foreign(['jenis_kelamin'], 'pakar_ibfk_1')->references(['id_jenis_kelamin'])->on('jenis_kelamin');
            $table->foreign(['spesialis'], 'pakar_ibfk_3')->references(['id_spesialis'])->on('spesialis');
            $table->foreign(['status_akun'], 'pakar_ibfk_2')->references(['id_status_akun'])->on('status_akun');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pakar', function (Blueprint $table) {
            $table->dropForeign('pakar_ibfk_1');
            $table->dropForeign('pakar_ibfk_3');
            $table->dropForeign('pakar_ibfk_2');
        });
    }
};
