<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->defaultItems() as $item) {
            Category::query()->firstOrCreate([
                'key' => $item['key'],
                'title' => $item['title']
            ]);
        }
    }

    private function defaultItems()
    {
        return [
            [
                'key' => 'card',
                'title' => 'Cardiology',
            ],
            [
                'key' => 'derm',
                'title' => 'Dermatology',
            ],
            [
                'key' => 'em',
                'title' => 'Emergency Medicine',
            ],
            [
                'key' => 'endo',
                'title' => 'Endocrinology',
            ],
            [
                'key' => 'ent',
                'title' => 'Ear, Nose and Throat',
            ],
            [
                'key' => 'gast',
                'title' => 'Gastroenterology',
            ],
            [
                'key' => 'gs',
                'title' => 'General Surgery',
            ],
            [
                'key' => 'id',
                'title' => 'Infectious Diseases',
            ],
            [
                'key' => 'neur',
                'title' => 'Neurology/Neurosurgery',
            ],
            [
                'key' => 'ob',
                'title' => 'OB/GYN',
            ],
            [
                'key' => 'onc',
                'title' => 'Oncology',
            ],
            [
                'key' => 'oph',
                'title' => 'Ophthalmology',
            ],
            [
                'key' => 'orth',
                'title' => 'Orthopedic',
            ],
            [
                'key' => 'ped',
                'title' => 'Pediatrics',
            ],
            [
                'key' => 'plas',
                'title' => 'Plastics',
            ],
            [
                'key' => 'pul',
                'title' => 'Pulmonology',
            ],
            [
                'key' => 'pc',
                'title' => 'Primary Care',
            ],
            [
                'key' => 'psy',
                'title' => 'Psychiatry',
            ],
            [
                'key' => 'covid',
                'title' => 'COVID-19',
            ],
        ];
    }
}
