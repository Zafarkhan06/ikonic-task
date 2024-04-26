<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ServicesType;

class ServicesTypeSeeder extends Seeder
{
    public function run()
    {
        $services = ['Hall & Marquee', 'Catering', 'Photography', "Clothing's", 'Saloon'];

        foreach ($services as $service) {
            ServicesType::create(['name' => $service]);
        }
    }
}
