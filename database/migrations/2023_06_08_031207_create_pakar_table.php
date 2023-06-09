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
        Schema::create('pakar', function (Blueprint $table) {
            $table->integer('id_pakar', true);
            $table->string('nama_lengkap', 30)->unique('Nama_lengkap');
            $table->date('tanggal_lahir');
            $table->string('asal', 15);
            $table->string('username', 12)->unique('Username');
            $table->string('email', 30)->unique('Email');
            $table->string('password', 60);
            $table->string('no_hp', 15);
            $table->integer('jenis_kelamin')->index('pakar_ibfk_1');
            $table->integer('spesialis')->index('pakar_ibfk_3');
            $table->integer('status_akun')->default(1)->index('pakar_ibfk_2');
            $table->timestamp('created_at')->useCurrentOnUpdate()->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pakar');
    }
};
