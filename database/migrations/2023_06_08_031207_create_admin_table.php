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
        Schema::create('admin', function (Blueprint $table) {
            $table->integer('id_admin', true);
            $table->string('nama_lengkap', 30)->unique('Nama_lengkap');
            $table->date('tanggal_lahir');
            $table->string('asal', 15);
            $table->string('username', 12)->unique('Username');
            $table->string('email', 30)->unique('Email');
            $table->string('password', 60);
            $table->string('no_hp', 15);
            $table->integer('jenis_kelamin')->index('jenis_kelamin_admin');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin');
    }
};
