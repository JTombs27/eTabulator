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
            array('id' => '1','user_id' => '1','permission_id' => '1','created_at' => NULL,'updated_at' => NULL),
            array('id' => '2','user_id' => '1','permission_id' => '2','created_at' => NULL,'updated_at' => NULL),
            array('id' => '3','user_id' => '1','permission_id' => '3','created_at' => NULL,'updated_at' => NULL),
            array('id' => '4','user_id' => '1','permission_id' => '4','created_at' => NULL,'updated_at' => NULL),
            array('id' => '5','user_id' => '1','permission_id' => '29','created_at' => NULL,'updated_at' => NULL),
            array('id' => '6','user_id' => '1','permission_id' => '30','created_at' => NULL,'updated_at' => NULL),
            array('id' => '7','user_id' => '1','permission_id' => '31','created_at' => NULL,'updated_at' => NULL),
            array('id' => '8','user_id' => '1','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('id' => '9','user_id' => '1','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('id' => '10','user_id' => '1','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('id' => '11','user_id' => '1','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('id' => '12','user_id' => '1','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('id' => '13','user_id' => '1','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('id' => '14','user_id' => '1','permission_id' => '28','created_at' => NULL,'updated_at' => NULL),
            array('id' => '15','user_id' => '1','permission_id' => '9','created_at' => NULL,'updated_at' => NULL),
            array('id' => '16','user_id' => '1','permission_id' => '23','created_at' => NULL,'updated_at' => NULL),
            array('id' => '17','user_id' => '1','permission_id' => '24','created_at' => NULL,'updated_at' => NULL),
            array('id' => '18','user_id' => '1','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('id' => '19','user_id' => '1','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('id' => '20','user_id' => '1','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('id' => '21','user_id' => '1','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('id' => '22','user_id' => '1','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('id' => '23','user_id' => '1','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('id' => '24','user_id' => '1','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('id' => '25','user_id' => '1','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('id' => '26','user_id' => '1','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('id' => '27','user_id' => '1','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('id' => '28','user_id' => '1','permission_id' => '20','created_at' => NULL,'updated_at' => NULL),
            array('id' => '29','user_id' => '1','permission_id' => '21','created_at' => NULL,'updated_at' => NULL),
            array('id' => '30','user_id' => '1','permission_id' => '22','created_at' => NULL,'updated_at' => NULL),
            array('id' => '31','user_id' => '3','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('id' => '32','user_id' => '3','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('id' => '33','user_id' => '3','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('id' => '34','user_id' => '4','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('id' => '35','user_id' => '4','permission_id' => '6','created_at' => NULL,'updated_at' => NULL),
            array('id' => '36','user_id' => '4','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('id' => '37','user_id' => '4','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('id' => '38','user_id' => '4','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('id' => '39','user_id' => '4','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('id' => '40','user_id' => '4','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('id' => '41','user_id' => '4','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('id' => '42','user_id' => '4','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('id' => '43','user_id' => '4','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('id' => '44','user_id' => '4','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('id' => '45','user_id' => '4','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('id' => '46','user_id' => '4','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('id' => '47','user_id' => '4','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('id' => '48','user_id' => '4','permission_id' => '25','created_at' => NULL,'updated_at' => NULL),
            array('id' => '49','user_id' => '4','permission_id' => '26','created_at' => NULL,'updated_at' => NULL),
            array('id' => '50','user_id' => '5','permission_id' => '4','created_at' => NULL,'updated_at' => NULL),
            array('id' => '51','user_id' => '5','permission_id' => '8','created_at' => NULL,'updated_at' => NULL),
            array('id' => '52','user_id' => '5','permission_id' => '16','created_at' => NULL,'updated_at' => NULL),
            array('id' => '53','user_id' => '5','permission_id' => '17','created_at' => NULL,'updated_at' => NULL),
            array('id' => '54','user_id' => '5','permission_id' => '18','created_at' => NULL,'updated_at' => NULL),
            array('id' => '55','user_id' => '5','permission_id' => '19','created_at' => NULL,'updated_at' => NULL),
            array('id' => '56','user_id' => '5','permission_id' => '20','created_at' => NULL,'updated_at' => NULL),
            array('id' => '57','user_id' => '5','permission_id' => '21','created_at' => NULL,'updated_at' => NULL),
            array('id' => '58','user_id' => '5','permission_id' => '22','created_at' => NULL,'updated_at' => NULL),
            array('id' => '59','user_id' => '5','permission_id' => '23','created_at' => NULL,'updated_at' => NULL),
            array('id' => '60','user_id' => '5','permission_id' => '24','created_at' => NULL,'updated_at' => NULL),
            array('id' => '61','user_id' => '5','permission_id' => '27','created_at' => NULL,'updated_at' => NULL),
            array('id' => '62','user_id' => '5','permission_id' => '28','created_at' => NULL,'updated_at' => NULL),
            array('id' => '63','user_id' => '5','permission_id' => '29','created_at' => NULL,'updated_at' => NULL),
            array('id' => '64','user_id' => '5','permission_id' => '30','created_at' => NULL,'updated_at' => NULL),
            array('id' => '65','user_id' => '2','permission_id' => '5','created_at' => NULL,'updated_at' => NULL),
            array('id' => '66','user_id' => '2','permission_id' => '7','created_at' => NULL,'updated_at' => NULL),
            array('id' => '67','user_id' => '2','permission_id' => '10','created_at' => NULL,'updated_at' => NULL),
            array('id' => '68','user_id' => '2','permission_id' => '11','created_at' => NULL,'updated_at' => NULL),
            array('id' => '69','user_id' => '2','permission_id' => '12','created_at' => NULL,'updated_at' => NULL),
            array('id' => '70','user_id' => '2','permission_id' => '13','created_at' => NULL,'updated_at' => NULL),
            array('id' => '71','user_id' => '2','permission_id' => '14','created_at' => NULL,'updated_at' => NULL),
            array('id' => '72','user_id' => '2','permission_id' => '15','created_at' => NULL,'updated_at' => NULL),
            array('id' => '73','user_id' => '2','permission_id' => '25','created_at' => NULL,'updated_at' => NULL)
        );
    }
}
 