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
            'username'=> 'admin',
            'password' => bcrypt('12345678'),
        ]);

        
        
    }
}
