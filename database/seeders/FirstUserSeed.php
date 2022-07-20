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
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'Administrator',
            'cats' => '0828',
            'email' => 'admin@admin.com',
            'role' => 'Admin',
            'username'=> 'admin',
            'password' => bcrypt('12345678'),
        ],
        [
            'id' => 2,
            'name' => 'RO',
            'cats' => '0828',
            'email' => 'ro@admin.com',
            'role' => 'Basic',
            'username'=> 'ro',
            'password' => bcrypt('12345678'),
        ],
        [
            'id' => 3,
            'name' => 'PG-HEAD',
            'cats' => '0828',
            'email' => 'PG-HEAD@admin.com',
            'role' => 'PG-Head',
            'username'=> 'pghead',
            'password' => bcrypt('12345678'),
        ]);

        
        
    }
}
