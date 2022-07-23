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
            // array('id' => 1,'permission_name' => 'can_edit_user'),
            // array('id' => 2,'permission_name' => 'can_create_user'),
            // array('id' => 3,'permission_name' => 'can_delete_user'),
            // array('id' => 4,'permission_name' => 'can_create_vehicle'), // GSO
            // array('id' => 5,'permission_name' => 'can_create_travel'),  //RO
            // array('id' => 6,'permission_name' => 'can_set_status'), // PG-Head
            // array('id' => 7,'permission_name' => 'can_merge_travel'),
            // array('id' => 8,'permission_name' => 'can_merge_driver'), // GSO
            // array('id' => 9,'permission_name' => 'can_create_charges'), // Super user
            array('id' => 10,'permission_name' => 'can_create_project'),
            array('id' => 11,'permission_name' => 'can_edit_project'),
            array('id' => 12,'permission_name' => 'can_delete_project'),
            array('id' => 13,'permission_name' => 'can_create_project_vehicle'),
            array('id' => 14,'permission_name' => 'can_edit_project_vehicle'),
            array('id' => 15,'permission_name' => 'can_delete_project_vehicle'),
            array('id' => 16,'permission_name' => 'can_create_office_vehicles'),
            array('id' => 17,'permission_name' => 'can_edit_office_vehicles'),
            array('id' => 18,'permission_name' => 'can_create_vehicle_status'),
            array('id' => 19,'permission_name' => 'can_edit_vehicle_status'),
        );
    }
}
