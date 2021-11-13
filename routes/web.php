<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\Cors;


Route::resource('produtos', ProductController::class)->middleware(Cors::class);

Route::get('search', [ProductController::class, 'search']);

Route::get('select/{id}', [ProductController::class, 'select']);