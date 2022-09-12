<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDivisionCodeInSoaTravelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('soa_travels', function (Blueprint $table) {
            $table->string('division_code')->nullable()->after('office_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('soa_travels', function (Blueprint $table) {
             $table->dropColumn('division_code');
        });
    }
}
