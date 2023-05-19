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
        Schema::table('pembuat_akun_pakar', function (Blueprint $table) {
            $table->foreign(['id_pakar'], 'pembuat_akun_pakar_ibfk_2')->references(['id_pakar'])->on('pakar')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign(['id_admin'], 'pembuat_akun_pakar_ibfk_1')->references(['id_admin'])->on('admin')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pembuat_akun_pakar', function (Blueprint $table) {
            $table->dropForeign('pembuat_akun_pakar_ibfk_2');
            $table->dropForeign('pembuat_akun_pakar_ibfk_1');
        });
    }
};
