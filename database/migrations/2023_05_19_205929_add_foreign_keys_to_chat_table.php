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
        Schema::table('chat', function (Blueprint $table) {
            $table->foreign(['from_user'], 'chat_ibfk_2')->references(['id_user'])->on('pengguna')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['to_user'], 'chat_ibfk_4')->references(['id_user'])->on('pengguna')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['from_pakar'], 'chat_ibfk_1')->references(['id_pakar'])->on('pakar')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['to_pakar'], 'chat_ibfk_3')->references(['id_pakar'])->on('pakar')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('chat', function (Blueprint $table) {
            $table->dropForeign('chat_ibfk_2');
            $table->dropForeign('chat_ibfk_4');
            $table->dropForeign('chat_ibfk_1');
            $table->dropForeign('chat_ibfk_3');
        });
    }
};
