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
=======
            /*FirstUserSeed::class,
            PermissionUserSeeder::class,*/
            PermissionsSeeder::class,
            /*Municipalities::class,
>>>>>>> 94227ed78ab3907fcf4559ceb0853f5a4511da95
            Barangays::class,
            VehicleSeeder::class,

        ]);
<<<<<<< HEAD
=======

        // \App\Models\User::factory(100)->create();
>>>>>>> 94227ed78ab3907fcf4559ceb0853f5a4511da95
    }
}
