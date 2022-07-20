<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travels', function (Blueprint $table) {
            $table->id();
            $table->integer('driver_vehicles_id');
            $table->string('ticket_number');
            $table->date('travel_date');
            $table->longText('place_to_visit')->nullable();
            $table->longText('purpose')->nullable();
            $table->string('time_departure',45)->nullable();
            $table->string('time_arrival',45)->nullable();
            $table->string('gas_type',45);
            $table->integer('total_liters');
            $table->integer('user_id');
            $table->longText('official_passenger')->nullable();
            $table->integer('soa_travel')->nullable();
            $table->string('actual_driver',45)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('travels');
    }
}
