<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FirstUserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert($this->data());
    }

    public function data()
    {
        return array(
         array(
        'id' => 1,
        'name' => 'Administrator',
        'cats' => '0828',
        'is_active' => true,
        'email' => 'admin@admin.com',
        'role' => 'Admin',
        'username'=> 'admin',
        'password' => bcrypt('12345678')),
        
        array(
            'id' => 2,
            'name' => 'RO',
            'cats' => '0828',
            'email' => 'ro@admin.com',
            'role' => 'RO',
            'is_active' => true,
            'username'=> 'ro',
            'password' => bcrypt('12345678')
        ),
        array(
            'id' => 3,
            'name' => 'PG-HEAD',
            'cats' => '0828',
            'is_active' => true,
            'email' => 'PG-HEAD@admin.com',
            'role' => 'PG-Head',
            'username'=> 'pghead',
            'password' => bcrypt('12345678')
        ),
        array(
            'id' => 4,
            'name' => 'PGO',
            'cats' => '0828',
            'is_active' => true,
            'email' => 'pgoAdmin@admin.com',
            'role' => 'PGO',
            'username'=> 'pgoadmin',
            'password' => bcrypt('12345678')
        ),
        array(
            'id' => 5,
            'name' => 'PGSO',
            'cats' => '0828',
            'is_active' => true,
            'email' => 'pgsoAdmin@admin.com',
            'role' => 'PGSO',
            'username'=> 'pgsoadmin',
            'password' => bcrypt('12345678')
        )
        );
    }
}
