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
            $table->integer('from_user')->nullable()->index('from_user');
            $table->integer('to_pakar')->nullable()->index('to_pakar');
            $table->integer('from_pakar')->nullable()->index('from_pakar');
            $table->integer('to_user')->nullable()->index('to_user');
            $table->text('line_chat');
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
        Schema::dropIfExists('chat');
    }
};
