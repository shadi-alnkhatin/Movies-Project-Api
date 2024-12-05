<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\RegisterController;

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


// Movie API Routes
Route::get('/movies', [MovieController::class, 'index']);            // List all movies
Route::get(action: [MovieController::class, 'detail'],uri: '/movies/{id}', );       // Get movie details by ID
Route::get('/favorites', [MovieController::class, 'favoriteList'])    // User's favorite movies (requires authentication)
    ->middleware('auth:sanctum');                                      // Apply auth middleware for protection
Route::get('/movies/search', [MovieController::class, 'search']);      // Search for movies
Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});
