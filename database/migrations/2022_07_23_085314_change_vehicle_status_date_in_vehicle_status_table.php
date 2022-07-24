<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeVehicleStatusDateInVehicleStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vehicle_status', function (Blueprint $table) {
            $table->date('vehicle_status_date')->nullable()->change()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vehicle_status', function (Blueprint $table) {
             $table->date('vehicle_status_date')->change();
        });
    }
}
