<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPlateNoOnVehicleStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vehicle_status', function (Blueprint $table) {
            $table->string('plate_no')->after('vehicles_id')->nullable();
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
            //
            $table->dropColumn('plate_no');
        });
    }
}
