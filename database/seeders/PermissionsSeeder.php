<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionsSeeder extends Seeder
{
    public function run()
    {
        DB::table('permissions')->insert($this->data());
    }

    public function data()
    {
        return array(
<<<<<<< HEAD
            array('id' => 1,'permission_name' => 'can_edit_user'),
            array('id' => 2,'permission_name' => 'can_create_user'),
            array('id' => 3,'permission_name' => 'can_delete_user'),
            array('id' => 4,'permission_name' => 'can_create_vehicle'),
            array('id' => 5,'permission_name' => 'can_create_travel'),
            array('id' => 6,'permission_name' => 'can_approve_travel'),
            array('id' => 7,'permission_name' => 'can_merge_travel'),
            array('id' => 8,'permission_name' => 'can_set_status'),
=======
            // array('id' => 1,'permission_name' => 'can_edit_user'),
            // array('id' => 2,'permission_name' => 'can_create_user'),
            // array('id' => 3,'permission_name' => 'can_delete_user'),
            // array('id' => 4,'permission_name' => 'can_create_vehicle'), // GSO
            // array('id' => 5,'permission_name' => 'can_create_travel'),  //RO
            // array('id' => 6,'permission_name' => 'can_set_status'), // PG-Head
            // array('id' => 7,'permission_name' => 'can_merge_travel'),
            // array('id' => 8,'permission_name' => 'can_merge_driver'), // GSO
            array('id' => 9,'permission_name' => 'can_create_charges'), // Super user
>>>>>>> 94227ed78ab3907fcf4559ceb0853f5a4511da95
        );
    }
}
