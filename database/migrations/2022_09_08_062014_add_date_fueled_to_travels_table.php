<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDateFueledToTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('travels', function (Blueprint $table) {
            $table->date('date_fueled')->nullable()->after('date_to');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('travels', function (Blueprint $table) {
             $table->dropColumn('date_fueled');
        });
    }
}
