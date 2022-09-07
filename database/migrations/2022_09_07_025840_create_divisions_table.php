<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDivisionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->id();
            $table->string('department_code')->nullable();
            $table->string('designation_head1')->nullable();
            $table->string('designation_head2')->nullable();
            $table->string('division_code')->nullable();
            $table->string('division_name1')->nullable();
            $table->string('division_name2')->nullable();
            $table->string('division_short_name')->nullable();
            $table->string('effective_date')->nullable();
            $table->string('empl_id')->nullable();
            $table->integer('sort_order_div')->nullable();
            $table->string('subdepartment_code')->nullable();
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
        Schema::dropIfExists('divisions');
    }
}
