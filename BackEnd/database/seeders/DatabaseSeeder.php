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

            PermissionSeeder::class,
            RoleSeeder::class

        ]);

        $user = User::updateOrCreate(
            ['email' => 'iambestcandidate@ikonic.com'],
            [
                'name'     => 'IKONIC Admin',
                'password' => bcrypt('123456789'),
            ]
        );

        $user->assignRole('VendorAdmin');
    }
}
