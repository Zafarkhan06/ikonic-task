<?php

namespace App\Filament\Resources\UserResource\Widgets;

use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class UserOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            //
        ];
    }

    public function view()
    {
        return 'filament::widgets.total-users-widget';
    }

    public function getData()
    {
        // Implement code to fetch the total number of users from your database
        $totalUsers = User::count(); // Replace 'User' with your actual User model class

        return ['totalUsers' => $totalUsers];
    }
}
