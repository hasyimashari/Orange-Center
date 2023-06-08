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
        Schema::create('pembuat_akun_pakar', function (Blueprint $table) {
            $table->integer('id_pembuatan', true);
            $table->integer('id_admin')->index('id_admin');
            $table->integer('id_pakar')->index('id_pakar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pembuat_akun_pakar');
    }
};
