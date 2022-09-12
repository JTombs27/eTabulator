<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddActualLiterToTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('travels', function (Blueprint $table) {
            $table->double('actual_liter', 10, 2)->nullable()->after('total_liters');
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
            $table->dropColumn('actual_liter');
        });
    }
}
