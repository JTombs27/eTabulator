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
            array('id' => 1,'permission_name' => 'can_edit_user', 'permission_group' => 'User'),
            array('id' => 2,'permission_name' => 'can_create_user', 'permission_group' => 'User'),
            array('id' => 3,'permission_name' => 'can_delete_user', 'permission_group' => 'User'),
            array('id' => 4,'permission_name' => 'can_create_vehicle', 'permission_group' => 'Vehicle'), // GSO
            array('id' => 5,'permission_name' => 'can_create_travel', 'permission_group' => 'Travel'),  //RO
            array('id' => 6,'permission_name' => 'can_set_status', 'permission_group' => 'Travel'), // PG-Head
            array('id' => 7,'permission_name' => 'can_merge_travel', 'permission_group' => 'Travel'),
            array('id' => 8,'permission_name' => 'can_merge_driver', 'permission_group' => 'Driver'), // GSO
            array('id' => 9,'permission_name' => 'can_create_charges', 'permission_group' => 'Charges'), // Super user
            array('id' => 10,'permission_name' => 'can_create_project', 'permission_group' => 'Project'),
            array('id' => 11,'permission_name' => 'can_edit_project', 'permission_group' => 'Project'),
            array('id' => 12,'permission_name' => 'can_delete_project', 'permission_group' => 'Project'),
            array('id' => 13,'permission_name' => 'can_create_project_vehicle', 'permission_group' => 'Project Vehicle'),
            array('id' => 14,'permission_name' => 'can_edit_project_vehicle', 'permission_group' => 'Project Vehicle'),
            array('id' => 15,'permission_name' => 'can_delete_project_vehicle', 'permission_group' => 'Project Vehicle'),
            array('id' => 16,'permission_name' => 'can_create_office_vehicles', 'permission_group' => 'Office Vehicle'),
            array('id' => 17,'permission_name' => 'can_edit_office_vehicles', 'permission_group' => 'Office Vehicle'),
            array('id' => 18,'permission_name' => 'can_create_vehicle_status', 'permission_group' => 'Vehicle Status'),
            array('id' => 19,'permission_name' => 'can_edit_vehicle_status', 'permission_group' => 'Vehicle Status'),
            array('id' => 20,'permission_name' => 'can_create_prices', 'permission_group' => 'Price'), //GSO
            array('id' => 21,'permission_name' => 'can_edit_prices', 'permission_group' => 'Price'), //GSO
            array('id' => 22,'permission_name' => 'can_delete_prices', 'permission_group' => 'Price'), //GSO
            array('id' => 23,'permission_name' => 'can_edit_charges', 'permission_group' => 'Charges'), // Super user
            array('id' => 24,'permission_name' => 'can_delete_charges', 'permission_group' => 'Charges'), // Super user
            array('id' => 25,'permission_name' => 'can_edit_travels', 'permission_group' => 'Travel'), 
            array('id' => 26,'permission_name' => 'can_delete_travels', 'permission_group' => 'Travel'), 
            array('id' => 27,'permission_name' => 'can_delete_drivers', 'permission_group' => 'Driver'), 
            array('id' => 28,'permission_name' => 'can_create_drivers', 'permission_group' => 'Vehicle'), 
            array('id' => 29,'permission_name' => 'can_edit_vehicles', 'permission_group' => 'Vehicle'), 
            array('id' => 30,'permission_name' => 'can_delete_vehicles', 'permission_group' => 'Vehicle'), 
        );

        // }[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23,24,25,26] pgo
        // [5,7,10,11,12,13,14,15,25] ro
        // [6,25,26] pg head
        // [4,8,16,17,18,19,20,21,22,23,24,27,28,29,30] pgso
    }
}
