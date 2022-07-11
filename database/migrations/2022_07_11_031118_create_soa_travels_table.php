<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoaTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('soa_travels', function (Blueprint $table) {
            $table->id();
            $table->DATE('date_from');
            $table->DATE('date_to');
            $table->integer('raaoh_id')->unsigned()->nullable();
            $table->string('cafoa_number');
            $table->integer('ooe_id')->unsigned()->nullable();
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
        Schema::dropIfExists('soa_travels');
    }
}
