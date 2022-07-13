<?php

use App\Http\Controllers\FileHandleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\BarangayController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\Vehicle_statusController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\DriverVehicleController;
use App\Http\Controllers\TravelController;



Auth::routes();


Route::middleware('auth')->group(function() {
    Route::get('/', function () {
        return inertia('Home');
    });

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::prefix('/users')->group(function() {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/create', [UserController::class, 'create'])->can('create', 'App\Model\User');
        Route::get('/{id}/edit', [UserController::class, 'edit']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::patch('/{id}', [UserController::class, 'update']);
        Route::get('/change-password', [UserController::class, 'changePassword']);
        Route::post('/update-password', [UserController::class, 'updatePassword']);
        Route::get('/settings', [UserController::class, 'settings']);
        Route::post('/change-name', [UserController::class, 'changeName']);
        Route::post('/change-photo', [UserController::class, 'changePhoto']);
    });

    //marvin
    Route::prefix('/vehicle_status')->group(function() {
        Route::post('/', [Vehicle_statusController::class, 'store']);
        Route::get('{id}', [Vehicle_statusController::class, 'index']);
        Route::patch('/{id}', [Vehicle_statusController::class, 'update']);
    });
    
    
    //Avatar file upload
    Route::post('/files/upload', [FileHandleController::class, 'uploadAvatar']);
    Route::delete('/files/upload/delete', [FileHandleController::class, 'destroyAvatar']);
    
    
    //Municipalities
    Route::prefix('municipalities')->group(function() {
        Route::post('/',[MunicipalityController::class, 'index']);
    });

    //Barangays
    Route::prefix('barangays')->group(function() {
        Route::post('/',[BarangayController::class, 'index']);
    });

    Route::post('get-all-permissions', [PermissionController::class, 'getAllPermissions']);
    Route::post('update-user-permissions', [PermissionController::class, 'updateUserPermissions']);

    //Vehicles
    Route::prefix('/vehicles')->group(function() {
        Route::get('/', [VehicleController::class, 'index']);
        Route::get('/create', [VehicleController::class, 'create']);
        Route::post('/', [VehicleController::class, 'store']);
        Route::get('/{id}/edit', [VehicleController::class, 'edit']);
        Route::patch('/{id}', [VehicleController::class, 'update']);
        Route::delete('/{id}', [VehicleController::class, 'destroy']);
    });

    Route::prefix('/drivers')->group(function() {
        Route::get('/', [DriverVehicleController::class, 'index']);
        Route::get('/create', [DriverVehicleController::class, 'create']);
    });
    
    Route::prefix('travels')->group(function() {
        Route::get('/', [TravelController::class, 'index']);
        Route::get('create', [TravelController::class, 'create']);
    });
    
});
