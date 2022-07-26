<?php

namespace Database\Seeders;

use Database\Seeders\Barangays;
use Illuminate\Database\Seeder;
use Database\Seeders\FirstUserSeed;
use Database\Seeders\Municipalities;
use Database\Seeders\PermissionsSeeder;
use Database\Seeders\PermissionUserSeeder;
use Database\Seeders\VehicleSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        $this->call([
<<<<<<< HEAD
             FirstUserSeed::class,
            PermissionUserSeeder::class,
             PermissionsSeeder::class,
             Municipalities::class,
             Barangays::class,
             VehicleSeeder::class,
=======
            FirstUserSeed::class,
            PermissionUserSeeder::class,
            PermissionsSeeder::class,
            Municipalities::class,
            Barangays::class,
            VehicleSeeder::class,
>>>>>>> 0dfef4068dd3279be5cd1101ef98576d6ae6533c

        ]);

        // \App\Models\User::factory(100)->create();
    }
}
