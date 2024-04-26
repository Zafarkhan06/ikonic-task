<?php

use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FolderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\VendorServiceController;
use App\Http\Controllers\ServicesTypeController;
use App\Http\Controllers\ItemPriceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::get('/get-user-details', [AuthController::class, 'getUserDetails'])->name('get-user-details');

Route::post('/create-service', [VendorServiceController::class, 'createService'])->name('create-service');
Route::get('/get-services', [VendorServiceController::class, 'getAllServices'])->name('get-services');

// get services , sub services and their items
Route::get('/get-services-type', [ServicesTypeController::class, 'getAllServicesType'])->name('get-services-type');
Route::get('/get-sub-services-type', [ServicesTypeController::class, 'getSubServicesType'])->name('get-sub-services-type');

// set price for each items
Route::post('/item-price', [ItemPriceController::class, 'setItemPrice'])->name('item-price');



Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/forget-password', [AuthController::class, 'forgotPassword'])->name('forget-password');

Route::post('/update-vendor', [VendorController::class, 'updateVendor'])->name('update-vendor');
Route::put('/reset-password', [AuthController::class, 'resetPassword'])->name('reset-password');
Route::post('/verify-email', [AuthController::class, 'verifyEmail'])->name('verify-email');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/session', [AuthController::class, 'isSession']);
    });

    Route::post('/profile', [AuthController::class, 'updateProfile']);
    Route::post('/upload/profile', [AuthController::class, 'updateProfile']);
    Route::post('/profile/details', [AuthController::class, 'updateProfileDetails']);
    Route::post('/email-asset', [AuthController::class, 'emailAsset']);

    Route::group(['prefix' => 'category'], function () {
        Route::post('/store', [CategoryController::class, 'store']);
        Route::get('/get', [CategoryController::class, 'get']);
        Route::get('/all', [CategoryController::class, 'all']);
    });

    Route::prefix('folder')->group(function () {
        Route::post('/store', [FolderController::class, 'store']);
        Route::put('/update/{id}', [FolderController::class, 'update']);
        Route::get('/bookmarks', [FolderController::class, 'bookmarks']);
        Route::get('/list', [FolderController::class, 'list']);
        Route::delete('/delete/{id}', [FolderController::class, 'destroy']);
    });

    Route::prefix('bookmark')->group(function () {
        Route::post('/store', [BookmarkController::class, 'store']);
        Route::get('/list', [BookmarkController::class, 'getList']);
        Route::delete('/delete', [BookmarkController::class, 'destroy']);
        Route::get('/assets', [BookmarkController::class, 'assets']);
        Route::post('/copy-to-folder', [BookmarkController::class, 'copyToFolder']);
    });
});

Route::any('{url}', function () {
    return [
        'success' => false,
        'data' => [],
        'message' => 'Error invalid end-point',
    ];
})->where('url', '.*');
