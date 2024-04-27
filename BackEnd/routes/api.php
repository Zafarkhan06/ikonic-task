<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Feedback;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ItemPriceController;
use App\Http\Controllers\ServicesTypeController;
use App\Http\Controllers\VendorServiceController;

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
    Route::post('/feedback', [FeedbackController::class, 'store']);
    Route::get('/get-feedback', [FeedbackController::class, 'index']);
    Route::get('/get-feedbacks', [FeedbackController::class, 'getFeedback']);
    Route::get('get-comments' , [CommentController::class, 'getCommentsByFeedback']);
Route::post('add-comments' , [CommentController::class, 'addCommentToFeedback']);

});

Route::any('{url}', function () {
    return [
        'success' => false,
        'data' => [],
        'message' => 'Error invalid end-point',
    ];
})->where('url', '.*');
