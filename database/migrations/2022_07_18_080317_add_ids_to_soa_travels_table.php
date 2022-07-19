<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdsToSoaTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('soa_travels', function (Blueprint $table) {
            $table->string('office_id')->after('ooe_id');
            $table->string('user_id')->after('office_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('soa_travels', function (Blueprint $table) {
            $table->dropColumn('office_id');
            $table->dropColumn('user_id');
        });
    }
}
