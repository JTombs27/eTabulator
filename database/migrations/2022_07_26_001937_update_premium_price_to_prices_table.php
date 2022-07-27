<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePremiumPriceToPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('prices', function (Blueprint $table) {
            $table->decimal("premium_price",10,2)->nullable()->change();
            $table->decimal("deisoline_price",10,2)->after('regular_price')->nullable();
            $table->decimal("engine_oil_price",10,2)->after('deisoline_price')->nullable();
            $table->decimal("brake_oil_price",10,2)->after('engine_oil_price')->nullable();
            $table->decimal("greases_price",10,2)->after('brake_oil_price')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prices', function (Blueprint $table) {
            $table->decimal("premium_price",10,2)->nullable()->change();
        });
    }
}
