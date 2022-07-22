<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionUserSeeder extends Seeder
{
    public function run()
    {
        DB::table('permission_user')->insert($this->data());
    }

    public function data()
    {
        return array(
            array('user_id' => 1,'permission_id' => 1),
            array('user_id' => 1,'permission_id' => 2),
            array('user_id' => 1,'permission_id' => 3),
            array('user_id' => 1,'permission_id' => 4),
            array('user_id' => 1,'permission_id' => 5),
            array('user_id' => 1,'permission_id' => 6),
            array('user_id' => 1,'permission_id' => 7),
            array('user_id' => 1,'permission_id' => 8),
            array('user_id' => 1,'permission_id' => 8),
            array('user_id' => 1,'permission_id' => 8),
            array('user_id' => 3,'permission_id' => 8),
            array('user_id' => 2,'permission_id' => 5),
        );
    }
}
 