<?php

namespace App\Filament\Resources\UserResource\Widgets;

use App\Services\UserServices\UserServices;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static bool $isLazy = true;

    protected UserServices $userServices;

    public $users;

    public function boot(UserServices $userServices)
    {
        $this->userServices = $userServices;
    }

    public function mount()
    {
        $this->users = $this->userServices->allUsers()->count();
    }
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', $this->users)
                ->description('Total Users')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('success'),
        ];
    }
}
