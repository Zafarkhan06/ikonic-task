<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([

            CategorySeeder::class,
            ServicesTypeSeeder::class,
            PermissionSeeder::class,
            SubServicesTypeSeeder::class,
            SubServicesItemsSeeder::class,
            RoleSeeder::class

        ]);

        $user = User::updateOrCreate(
            ['email' => 'admin@muntazim.com'],
            [
                'name'     => 'Test User',
                'password' => bcrypt('123456789'),
            ]
        );

        $user->assignRole('Admin');
    }
}
