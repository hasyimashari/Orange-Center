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
            $table->string('asal', 15);
            $table->string('username', 12);
            $table->string('email', 30);
            $table->string('password', 60);
            $table->string('no_hp', 15);
            $table->integer('jenis_kelamin')->index('jenis_kelamin');
            $table->integer('status_akun')->default(1)->index('status_akun');
            $table->integer('status_premium')->default(1)->index('status_premium');
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
        Schema::dropIfExists('pengguna');
    }
};
