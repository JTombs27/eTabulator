<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventSettupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_settup', function (Blueprint $table) {
            $table->id();
            $table->integer('event_id');
            $table->string('event_settup_title');
            $table->integer('participants_id');
            $table->string('event_settup_requirement');
            $table->boolean('event_settup_withpannel');
            $table->boolean('event_settup_withaudience');
            $table->datetime('event_settup_withaudience_vote_open');
            $table->datetime('event_settup_withaudience_vote_closed');
            $table->char('settup_status');
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
        Schema::dropIfExists('event_settup');
    }
}
