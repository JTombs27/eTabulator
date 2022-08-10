<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBalanceToTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('travels', function (Blueprint $table) {
            $table->decimal('total_liters',10,2)->change();
            $table->decimal('tank_balance', 10, 2)->after('total_liters')->nullable();
            $table->decimal('consumed_fuel', 10, 2)->after('tank_balance')->nullable();
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
            $table->integer('total_liters')->change();
            $table->dropColumn('tank_balance');
            $table->dropColumn('consumed_fuel');
        });
    }
}
