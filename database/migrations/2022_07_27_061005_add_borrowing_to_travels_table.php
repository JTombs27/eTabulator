<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBorrowingToTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('travels', function (Blueprint $table) {
            $table->boolean('is_borrowed_fuel')->after('is_carpool')->nullable();
            $table->boolean('is_borrowed_vehicle')->after('is_borrowed_fuel')->nullable();
            $table->string('borrowing_office')->after('is_borrowed_vehicle')->nullable();
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
            $table->dropColumn('is_borrowed_fuel');
            $table->dropColumn('is_borrowed_vehicle');
            $table->dropColumn('borrowing_office');
        });
    }
}
