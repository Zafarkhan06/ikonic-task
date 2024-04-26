<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ServicesType;
use App\Models\SubServicesType;
use App\Models\SubServicesTypeItem;

class SubServicesTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $servicesTypes = ServicesType::all();

        foreach ($servicesTypes as $serviceType) {

            $subServices = [];

            switch($serviceType->name) {
                case 'Hall & Marquee':
                    $subServices = ['Starter', 'Dishes', 'Desserts', 'Drinks']; 
                    break;
            }

            foreach ($subServices as $subService) {
                SubServicesType::create([
                    'name' => $subService,
                    'services_type_id' => $serviceType->id
                ]);
            }
        }
    }
}
