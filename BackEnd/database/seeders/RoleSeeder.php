<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (config('role_names.roles') as $roleName) {
            $role = Role::firstOrCreate([
                'name'       => $roleName,
                'guard_name' => 'web',
            ]);

            if ($roleName == 'Admin') {
                $role->givePermissionTo(config('role_names.permissions.admin'));
            }
        }
    }
}