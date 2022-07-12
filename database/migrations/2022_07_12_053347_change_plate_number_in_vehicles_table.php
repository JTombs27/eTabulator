<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangePlateNumberInVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->renameColumn('plate_number', 'PLATENO')->change();
            $table->renameColumn('vehicle_type', 'TYPECODE')->change();
            $table->renameColumn('date_acquired', 'FDATEACQ')->change();
            $table->renameColumn('acquisition_cost', 'FACQCOST')->change();
            $table->renameColumn('description','FDESC')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->renameColumn('PLATENO','plate_number')->change();
            $table->renameColumn('TYPECODE','vehicle_type')->change();
            $table->renameColumn('FDATEACQ','date_acquired')->change();
            $table->renameColumn('FACQCOST','acquisition_cost')->change();
            $table->renameColumn('FDESC','description')->change();

        });
    }
}
