<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ServicesType;
use App\Models\SubServicesType;
use App\Models\SubServicesTypeItem;

class SubServicesItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $allServices = ServicesType::with('subServices')->get();

        foreach($allServices as $services) {
            switch($services->name) {
                case 'Hall & Marquee':
                    foreach($services->subServices as $subServices) {

                        $subServicesItems = [];

                        switch ($subServices->name) {
                            case 'Starter':
                                $subServicesItems = [
                                    'Hot Soup', 
                                    'Chicken Drumstick', 
                                    'Vegetables Cutles', 
                                    'Potato Puffs', 
                                    'Shimla Mirch Qeema', 
                                    'Chicken Zeera Bites'
                                ];

                                break;
                            case 'Dishes':
                                $subServicesItems = [   
                                    'Chicken Korma', 
                                    'Chicken Karahi', 
                                    'Mutton Karahi', 
                                    'Chicken Pulao', 
                                    'Chicken White Korma', 
                                    'Degi Chicken Korma', 
                                    'Shahi Chicken Korma', 
                                    'Garlic and Egg Fried Rice', 
                                    'Vegetable Rice', 
                                    'Chinese Rice', 
                                    'Palak Paneer', 
                                    'Palak Gosht', 
                                    'Keema Matar'
                                ];

                                break;
                            case 'Desserts':
                                $subServicesItems = [
                                    'Kheer',
                                    'Ice Cream',
                                    'Gajar Halwa',
                                    'Zarda',
                                    'Fruit Trifle',
                                    'Badam Halwa'
                                ];

                                break;
                            case 'Drinks':
                                $subServicesItems = [
                                    'Coke/Sprite', 
                                    'Green Tea', 
                                    'Mint Margareta', 
                                    'Simple tea',
                                    'Elaichi Chai'
                                ];

                                break;
                        }

                        foreach ($subServicesItems as $item) {
                            SubServicesTypeItem::create([
                                'name' => $item,
                                'services_type_id' => $services->id,
                                'sub_services_type_id' => $subServices->id
                            ]);
                        }
                    }
            }
        }

    }
}
