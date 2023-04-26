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
            $table->date('tanggal-lahir');
            $table->string('alamat', 50);
            $table->string('username', 12)->unique('Username');
            $table->string('email', 30)->unique('Email');
            $table->string('password', 12);
            $table->string('no_hp', 15);
            $table->integer('jenis_kelamin')->index('pakar_ibfk_1');
            $table->integer('status_akun')->index('pakar_ibfk_2');
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
