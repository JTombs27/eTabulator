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
            array('user_id' => '1','permission_id' => '1','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '2','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '3','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '4','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '29','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '30','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '31','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '28','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '9','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '23','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '24','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '20','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '21','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '1','permission_id' => '22','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '3','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '3','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '3','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '4','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '4','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '20','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '21','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '22','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '23','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '24','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '27','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '28','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '29','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '5','permission_id' => '30','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('user_id' => '2','permission_id' => '25','created_at' => NULL,'updated_at' => NULL)
        );
    }
}
 