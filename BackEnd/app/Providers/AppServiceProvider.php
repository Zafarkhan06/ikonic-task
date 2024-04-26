<?php

namespace App\Providers;

use App\Repositories\Asset\AssetRepository;
use App\Repositories\Asset\Interfaces\AssetRepositoryInterface;
use App\Repositories\Bookmark\BookmarkRepository;
use App\Repositories\Bookmark\FolderRepository;
use App\Repositories\Bookmark\Interfaces\BookmarkRepositoryInterface;
use App\Repositories\Bookmark\Interfaces\FolderRepositoryInterface;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\Interfaces\CategoryRepositoryInterface;
use App\Repositories\Users\Interfaces\UserRepositoryInterface;
use App\Repositories\Users\UserRepository;
use App\Repositories\VendorServices\Interfaces\VendorServicesRepositoryInterface;
use App\Repositories\VendorServices\VendorServicesRepository;
use App\Repositories\Media\Interfaces\MediaRepositoryInterface;
use App\Repositories\Media\MediaRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\ItemPriceServices\ItemPriceServicesRepository;
use App\Repositories\OnboardingAnswers\OnboardingAnswersRepository;
use App\Repositories\OnboardingAnswers\Interfaces\OnboardingAnswersRepositoryInterface;
use App\Repositories\ItemPriceServices\Interfaces\ItemPriceServicesRepositoryInterface;
use App\Repositories\VendorProfile\VendorProfileRepository;
use App\Repositories\VendorProfile\Interfaces\VendorProfileRepositoryInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(FolderRepositoryInterface::class, FolderRepository::class);
        $this->app->bind(BookmarkRepositoryInterface::class, BookmarkRepository::class);
        $this->app->bind(AssetRepositoryInterface::class, AssetRepository::class);
        $this->app->bind(VendorProfileRepositoryInterface::class, VendorProfileRepository::class);
        $this->app->bind(VendorServicesRepositoryInterface::class, VendorServicesRepository::class);
        $this->app->bind(MediaRepositoryInterface::class, MediaRepository::class);
        $this->app->bind(OnboardingAnswersRepositoryInterface::class, OnboardingAnswersRepository::class);
        $this->app->bind(ItemPriceServicesRepositoryInterface::class, ItemPriceServicesRepository::class);
    }
}
