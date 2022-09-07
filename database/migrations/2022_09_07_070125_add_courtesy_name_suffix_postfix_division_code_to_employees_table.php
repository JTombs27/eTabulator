<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCourtesyNameSuffixPostfixDivisionCodeToEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('suffix')->after('last_name')->nullable();
            $table->string('postfix')->after('suffix')->nullable();
            $table->string('courtesy_title')->after('postfix')->nullable();
            $table->string('division_code')->after('department_code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('suffix');
            $table->dropColumn('postfix');
            $table->dropColumn('courtesy_title');
            $table->dropColumn('division_code');
        });
    }
}
