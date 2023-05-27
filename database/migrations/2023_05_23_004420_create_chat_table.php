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
            $table->integer('sentby_user')->nullable()->index('chat_ibfk_3');
            $table->integer('sentby_pakar')->nullable()->index('sentby_pakar');
            $table->text('line_chat')->nullable();
            $table->timestamp('created_at')->useCurrentOnUpdate()->useCurrent();
            $table->integer('user_session')->default(1);
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
