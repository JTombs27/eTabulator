<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFuelOTPToGasolinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('gasolines', function (Blueprint $table) {
            //
            $table->string('fuelOTP')->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gasolines', function (Blueprint $table) {
            //
            $table->string('fuelOTP');
        });
    }
}
