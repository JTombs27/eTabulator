<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenerateWinnerProcedure extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $procedure = "DROP PROCEDURE IF EXISTS `sp_generate_winner`;
        CREATE PROCEDURE `sp_generate_winner` (IN par_event_id int)
        BEGIN

        UPDATE event_settup 
        SET participants_id = (
        SELECT B.participants_id
        
        FROM `event_settup` A
                INNER JOIN voting_tbl B
                    ON B.settup_id = A.id
        WHERE A.id = event_settup.id
        GROUP BY A.id,B.participants_id
        ORDER BY COUNT(B.participants_id) DESC LIMIT 1
        )
        WHERE event_id = par_event_id;

        END;";
        \DB::unprepared($procedure);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
