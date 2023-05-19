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
        Schema::create('permintaan', function (Blueprint $table) {
            $table->integer('id_permintaan', true);
            $table->integer('id_user')->index('id_user');
            $table->binary('foto_produk');
            $table->string('judul', 20);
            $table->text('deskripsi');
            $table->integer('stock');
            $table->bigInteger('budget');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permintaan');
    }
};
