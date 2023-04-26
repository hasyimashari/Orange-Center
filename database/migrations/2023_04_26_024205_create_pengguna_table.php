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
        Schema::create('pengguna', function (Blueprint $table) {
            $table->integer('id_user', true);
            $table->string('nama_lengkap', 30);
            $table->date('tanggal_lahir');
            $table->string('alamat', 50);
            $table->string('username', 12);
            $table->string('email', 30);
            $table->string('password', 60);
            $table->string('no_hp', 15);
            $table->integer('jenis_kelamin')->index('jenis_kelamin');
            $table->integer('status_akun')->default(1)->index('status_akun');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengguna');
    }
};