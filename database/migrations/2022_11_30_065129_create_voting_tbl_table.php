<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVotingTblTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('voting_tbl', function (Blueprint $table) {
            $table->id();
            $table->integer('settup_id');
            $table->integer('participants_id');
            $table->integer('user_id');
            $table->integer('criterria_id');
            $table->integer('vote_datetime_cast');
            $table->integer('vote_value');
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
        Schema::dropIfExists('voting_tbl');
    }
}
