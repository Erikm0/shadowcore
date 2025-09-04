<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('products', ProductController::class);


//egy termék adatai
Route::get('/product/name/{name}', [ProductController::class, 'showByName']);
