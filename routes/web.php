<?php

use App\Http\Controllers\FileHandleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\BarangayController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\TravelValidationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\EventHeaderController;
use App\Http\Controllers\EventParticipantsController;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\CriteriaForJudgingController;
use App\Http\Controllers\SetupPanelController;
use App\Http\Controllers\JudgingController;
use Illuminate\Support\Facades\Auth;


Auth::routes();
Route::middleware('auth')->group(function() {
    Route::get('/', [HomeController::class, 'index']);

    Route::prefix('/users')->group(function() {
        Route::get('/', [UserController::class, 'index'])->can('canViewUsersIndex', 'App\Model\User');
        Route::post('/', [UserController::class, 'store']);
        Route::get('/create', [UserController::class, 'create'])->can('create', 'App\Model\User');
        Route::get('/{id}/edit', [UserController::class, 'edit'])->can('create', 'App\Model\User');
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::patch('/{id}', [UserController::class, 'update'])->can('create', 'App\Model\User');
        Route::get('/change-password', [UserController::class, 'changePassword']);
        Route::post('/update-password', [UserController::class, 'updatePassword']);
        Route::get('/settings', [UserController::class, 'settings']);
        Route::post('/change-name', [UserController::class, 'changeName']);
        Route::post('/change-photo', [UserController::class, 'changePhoto']);
        Route::patch('/status/{id}', [UserController::class, 'setStatus']);
    });

    
    Route::prefix('/event-header')->group(function() {
        Route::get('/', [EventHeaderController::class, 'index'])->can('canViewProjectIndex', 'App\Model\User');
        Route::get('/create', [EventHeaderController::class, 'create']);//->can('canCreateProject', 'App\Model\User');
        Route::get('/edit/{id}', [EventHeaderController::class, 'edit']);
        Route::post('/create-event',[EventHeaderController::class, 'store']);//->can('canCreateProject', 'App\Model\User');
        Route::post('/update',[EventHeaderController::class, 'update']);
        Route::post('/delete',[EventHeaderController::class, 'destroy']);
        Route::post('/generate-winner',[EventHeaderController::class, 'generateWinner']);
    });

    Route::prefix('/event-setup')->group(function() {
        Route::get('/{event_id}',[EventHeaderController::class, 'eventSetup']);//->can('canCreateProject', 'App\Model\User');
        Route::get('/create/{event_id}',[EventHeaderController::class, 'createEventSetup']);//->can('canCreateProject', 'App\Model\User');
        Route::get('{event_id}/edit/{id}',[EventHeaderController::class, 'editEventSetup']);
        //->can('canCreateProject', 'App\Model\User');
        Route::post('/create-setup',[EventHeaderController::class, 'storeSetup']);//->can('canCreateProject', 'App\Model\User');
        Route::post('/update',[EventHeaderController::class, 'updateSetup']);//->can('canCreateProject', 'App\Model\User');
        Route::post('/delete',[EventHeaderController::class, 'destroySetup']);//->can('canCreateProject', 'App\Model\User');
    });


    Route::prefix('/event-participants')->group(function() {
        Route::get('',[EventParticipantsController::class, 'index']);//->can('canCreateProject', 'App\Model\User');
        Route::get('/create',[EventParticipantsController::class, 'create']);
        Route::get('/edit',[EventParticipantsController::class, 'edit']);
        Route::post('/create-participant',[EventParticipantsController::class, 'store']);
        Route::post('/update',[EventParticipantsController::class, 'update']);
        Route::post('/delete',[EventParticipantsController::class, 'destroy']); 
    });

    Route::prefix('/criteria')->group(function() {
        Route::get('',[CriteriaForJudgingController::class, 'index']);//->can('canCreateProject', 'App\Model\User');
        Route::get('/create',[CriteriaForJudgingController::class, 'create']);
        Route::post('/save-all-criteria',[CriteriaForJudgingController::class, 'store']);
        Route::post('/delete',[CriteriaForJudgingController::class, 'destroy']); 
        Route::post('/update',[CriteriaForJudgingController::class, 'update']);
    });

    Route::prefix('/panel')->group(function() {
        Route::get('',[SetupPanelController::class, 'index']);//->can('canCreateProject', 'App\Model\User');
        Route::get('/create',[SetupPanelController::class, 'create']);
        Route::get('/edit/{id}',[SetupPanelController::class, 'edit']);
        Route::post('/store-panel',[SetupPanelController::class, 'store']);
        Route::post('/delete',[SetupPanelController::class, 'destroy']); 
        Route::post('/update',[SetupPanelController::class, 'update']);
    });

    Route::prefix('/panel-judging')->group(function() 
    {
        Route::get('/',[JudgingController::class, 'index']);
        Route::get('/participants',[JudgingController::class, 'getPariticipants']);
        Route::post('/panel-vote',[JudgingController::class, 'vote']);
        Route::post('/get-criteria/for-voting',[JudgingController::class, 'getCriteria']);
        Route::post('/get-criteria',[JudgingController::class, 'getParticipants']);
        Route::post('/get-criteria/list',[JudgingController::class, 'getPariticipantsList']);
    });

    Route::prefix('/students')->group(function() {
        Route::get('/',[StudentsController::class, 'index']);//->can('canCreateProject', 'App\Model\User');
        Route::post('/cast-vote',[StudentsController::class, 'vote']);
        Route::get('/get-summary/{settup_id}',[StudentsController::class, 'voteSummary']);
        Route::get('/to-students/{settup_id}',[StudentsController::class, 'getEventParticipants']);
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


    //for Offices
    Route::prefix('offices')->group(function () {
        Route::get('fetch', [OfficeController::class, 'loadOffices']);
    });

    //for Divisions
    Route::prefix('divisions')->group(function () {
        Route::post('fetch', [DivisionController::class, 'loadDivisions']);
    });
    

    //for api
Route::prefix('/reports')->group(function() {
    Route::get('/', [ReportController::class, 'index'])->can('canViewReportIndex', 'App\Model\User');
    Route::get('/tripTicket', [TravelController::class, 'tripTicket']);
    Route::get('/travel', [ReportController::class, 'travels']);
    Route::get('/soa_travel', [ReportController::class, 'soa_travels']);
    Route::get('/statement_of_account', [SoaTravelController::class, 'statement_of_account']);
    Route::get('/total_soa', [SoaTravelController::class, 'total_soa']);
});

});

Route::get('/travelTicket', [TravelValidationController::class, 'index']);
Route::patch('/travelTicket/{id}/{actual_liters}', [TravelValidationController::class, 'update']);
Route::get('/travelTicket/OTP/{gasoline_id}/{fuelOTP}', [TravelValidationController::class, 'validateOTP']);
Route::get('/sample_charge', [ChargeController::class, 'sampleCharge']);
Route::get('/balance', [ChargeController::class, 'balance']);
Route::get('/soaReport', [SoaTravelController::class, 'soaReport']);