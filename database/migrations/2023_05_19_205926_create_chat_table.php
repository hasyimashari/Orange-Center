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
        Schema::create('chat', function (Blueprint $table) {
            $table->integer('id_chat', true);
            $table->integer('user')->index('user');
            $table->integer('pakar')->index('pakar');
            $table->text('line_chat');
            $table->timestamp('created_at')->useCurrentOnUpdate()->useCurrent();
            $table->foreign(['user'], 'chat_ibfk_2')->references(['id_user'])->on('pengguna')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['pakar'], 'chat_ibfk_1')->references(['id_pakar'])->on('pakar')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chat');
    }
};
