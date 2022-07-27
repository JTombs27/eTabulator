<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeTimeArrivalInLogTimeArrivalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('log_time_arrival', function (Blueprint $table) {
            $table->dateTime('time_arrival')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('log_time_arrival', function (Blueprint $table) {
            $table->dateTime('time_arrival')->change();
        });
    }
}
