<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    sleep(1);
    return Inertia::render('home', ['name' => 'Ruslan']);
})->name('home');*/

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

//Route::inertia('/', 'home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
