<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMunicipalityIdToProjectVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_vehicles', function (Blueprint $table) {
            //
            $table->string("municipality_id")->nullable()->change();
            $table->string("barangay_id")->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_vehicles', function (Blueprint $table) {
            //
            $table->integer("municipality_id")->nullable()->change();
            $table->integer("barangay_id")->nullable()->change();
        });
    }
}
