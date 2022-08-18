<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOdometerToLogTimeArrivalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('log_time_arrival', function (Blueprint $table) {
            $table->string('odometer')->nullable()->after('travel_id');
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
            $table->string('odometer')->nullable()->after('travel_id');
        });
    }
}
