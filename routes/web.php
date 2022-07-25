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
use App\Http\Controllers\TravelValidationController;
use App\Http\Controllers\SoaTravelController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\OfficeVehiclesController;
use App\Http\Controllers\ChargeController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\LogTimeArrivalContoller;
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
        Route::patch('/status/{id}', [UserController::class, 'setStatus']);
    });

    //marvin
    Route::prefix('/VehicleStatus')->group(function() {
        //return inertia('VehicleStatus');
        Route::post('/', [VehicleStatusController::class, 'store']);
        Route::get('/{id}/Create', [VehicleStatusController::class, 'Create']);
        Route::get('{id}', [VehicleStatusController::class, 'index']);
        Route::patch('/{id}', [VehicleStatusController::class, 'update']);
        Route::get('/{id}/edit', [VehicleStatusController::class, 'edit']);
       
    });

    Route::prefix('/officeVehicles')->group(function() {
         Route::get('/{id}', [OfficeVehiclesController::class, 'index']);
         Route::get('/{id}/create', [OfficeVehiclesController::class, 'create']);
         Route::post('/', [OfficeVehiclesController::class, 'store']);
         Route::get('/{id}/edit', [OfficeVehiclesController::class, 'edit']);
         Route::get('/{id}/back', [OfficeVehiclesController::class, 'back']);
         Route::patch('/{id}', [OfficeVehiclesController::class, 'update']);
        // Route::post('/', [OfficeVehiclesController::class, 'store']);
        // Route::get('/{id}/Create', [OfficeVehiclesController::class, 'Create']);
       
       // Route::patch('/{id}', [OfficeVehiclesController::class, 'update']);
    });

    Route::prefix('/logTimeArrival')->group(function() {
        Route::get('/', [LogTimeArrivalContoller::class, 'index']);
        Route::get('/{id}/create', [LogTimeArrivalContoller::class, 'create']);
        Route::get('/{id}/edit', [LogTimeArrivalContoller::class, 'edit']);
        Route::post('/', [LogTimeArrivalContoller::class, 'store']);
        Route::patch('/{id}', [LogTimeArrivalContoller::class, 'update']);
       
    });

    Route::prefix('/projects')->group(function() {
        Route::get('/', [ProjectController::class, 'index']);
        Route::get('/create', [ProjectController::class, 'create']);
        Route::get('/create/{id}', [ProjectController::class, 'create']);
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
        Route::get('/getVehicles/{id}', [VehicleController::class, 'getVehicles']);
        Route::get('fetch', [OfficeController::class, 'loadVehicles']);
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
        Route::patch('/{id}', [TravelController::class, 'update']);
    });

    Route::prefix('sync')->group(function() {
        Route::post('employees', [EmployeeController::class, '_sync']);
        Route::post('offices', [OfficeController::class, '_sync']);
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
    

    //for Charges
    Route::prefix('charges')->group(function () {
        Route::get('/', [ChargeController::class, 'index']);
        Route::get('/create', [ChargeController::class, 'create']);
        Route::post('/store', [ChargeController::class, 'store']);
        Route::get('/{id}/edit', [ChargeController::class, 'edit']);
        Route::patch('/{id}', [ChargeController::class, 'update']);
        Route::delete('/{id}', [ChargeController::class, 'destroy']);
    });

     //for Price
    Route::prefix('prices')->group(function () {
        Route::get('/', [PriceController::class, 'index']);
        Route::get('/create', [PriceController::class, 'create']);
        Route::post('/store', [PriceController::class, 'store']);
        Route::get('/{id}/edit', [PriceController::class, 'edit']);
        Route::patch('/{id}', [PriceController::class, 'update']);
        Route::delete('/{id}', [PriceController::class, 'destroy']);
    });
    
});

    //for api
Route::prefix('/reports')->group(function() {
    Route::get('/tripTicket', [TravelController::class, 'tripTicket']);
});

Route::prefix('/travelTicket')->group(function() {
    Route::get('/validate-travel/{id}', [TravelValidationController::class, 'index']);
});