<?php

use App\Http\Controllers\FileHandleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\BarangayController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\VehicleStatusController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectVehicleController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\DriverVehicleController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\TravelController;
use App\Http\Controllers\SoaTravelController;
use App\Http\Controllers\OfficeController;
use Illuminate\Support\Facades\Auth;


Auth::routes();
Route::middleware('auth')->group(function() {
    Route::get('/', [HomeController::class, 'index']);

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
    Route::prefix('/VehicleStatus')->group(function() {
        //return inertia('VehicleStatus');
        Route::post('/', [VehicleStatusController::class, 'store']);
        Route::get('{id}', [VehicleStatusController::class, 'index']);
        Route::patch('/{id}', [VehicleStatusController::class, 'update']);
    });

    Route::prefix('/projects')->group(function() {
        Route::get('/', [ProjectController::class, 'index']);
        Route::post('/create-project',[ProjectController::class, 'store']);
        Route::post('/delete-project', [ProjectController::class, 'destroy']);
        Route::post('/update-project', [ProjectController::class, 'update']);
    });
    //Project Vehicles
    Route::prefix('/projects-vehicle')->group(function() {
        Route::get('/{id}/vehicles', [ProjectVehicleController::class, 'index']);
        Route::get('/{id}/create', [ProjectVehicleController::class, 'create']);
        Route::get('/{id}/edit/{vid}', [ProjectVehicleController::class, 'edit']);
        Route::get('/vehicles', [ProjectVehicleController::class, 'getVehicles']);
        Route::post('/{id}/store', [ProjectVehicleController::class, 'store']);
        Route::post('/{id}/update/{vid}', [ProjectVehicleController::class, 'update']);
        Route::post('/delete', [ProjectVehicleController::class, 'destroy']);
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
    Route::prefix('vehicles')->group(function() {
        Route::get('/', [VehicleController::class, 'index']);
        Route::get('/create', [VehicleController::class, 'create']);
        Route::post('/', [VehicleController::class, 'store']);
        Route::get('/{id}/edit', [VehicleController::class, 'edit']);
        Route::patch('/{id}', [VehicleController::class, 'update']);
        Route::post('/{id}', [VehicleController::class, 'destroy']);
        Route::get('/getVehicles', [VehicleController::class, 'getVehicles']);
    });

    // Driver Vehicles
    Route::prefix('/drivers')->group(function() {
        Route::get('/{id}/vehicles', [DriverVehicleController::class, 'index']);
        Route::get('/{id}/create', [DriverVehicleController::class, 'create']);
        Route::post('/{id}/store', [DriverVehicleController::class, 'store']);
        Route::delete('/{id}/delete/{did}', [DriverVehicleController::class, 'destroy']);
    });
    
    Route::prefix('/travels')->group(function() {
        Route::get('/', [TravelController::class, 'index']);
        Route::get('create', [TravelController::class, 'create']);
        Route::post('vehicle-details', [TravelController::class, 'getVehicleDriver']);
        Route::post('/', [TravelController::class, 'store']);
        Route::post('set-status', [TravelController::class, 'setStatus']);
        Route::get('/{id}/edit', [TravelController::class, 'edit']);
    });

    Route::prefix('sync')->group(function() {
        Route::post('employees', [EmployeeController::class, '_sync']);
        Route::post('offices', [OfficeController::class, '_sync']);
    });

    Route::prefix('soatravels')->group(function() {
        Route::get('/', [SoaTravelController::class, 'index']);
        Route::get('/merge', [SoaTravelController::class, 'show']);
        Route::get('/{id}/details', [SoaTravelController::class, 'details']);
        Route::post('/', [SoaTravelController::class, 'store']);
        Route::post('/{id}/remove', [SoaTravelController::class, 'remove']);
        Route::delete('/{id}', [SoaTravelController::class, 'destroy']);
    });


    //for employees
    Route::prefix('employees')->group(function () {
        Route::get('getEmployees', [EmployeeController::class, 'getEmployees']);
    });

    //for Offices
    Route::prefix('offices')->group(function () {
        Route::get('fetch', [OfficeController::class, 'loadOffices']);
    });
    
});
