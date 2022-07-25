<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRentalFlagToProjectvehiclesTable extends Migration
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
           
            $table->boolean('external_borrow_flag')->after('purpose');
            $table->boolean('rental_flag')->after('external_borrow_flag');
            $table->integer('municipality_id')->after('rental_flag');
            $table->integer('barangay_id')->after('municipality_id');
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
            $table->dropColumn('external_borrow_flag');
            $table->dropColumn('rental_flag');
            $table->dropColumn('municipality_id');
            $table->dropColumn('barangay_id');
        });
    }
}
