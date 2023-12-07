<?php

use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\EducationController;
use App\Http\Controllers\Backend\ExperienceController;
use App\Http\Controllers\Backend\KategoriArtikelController;
use App\Http\Controllers\Backend\ProjectsController as BackendProjectsController;
use App\Http\Controllers\Backend\StackController;
use App\Http\Controllers\Backend\TagsController;
use App\Http\Controllers\Frontend\ProjectsController;
use App\Http\Controllers\Frontend\WelcomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[WelcomeController::class,'index'])->name('welcome');
Route::prefix('projects')->group(function () {
    Route::get('/',[ProjectsController::class,'index'])->name('projects.list');
    Route::get('/{slug}',[ProjectsController::class,'detail'])->name('projects.detail');
});
Route::middleware(['auth','verified'])->group(function () {
    Route::get('dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::prefix('dashboard')->group(function () {
        // kategori artikel
        Route::resource('kategori-artikel',KategoriArtikelController::class);
        // stack
        Route::resource('stack', StackController::class);
        // tags
        Route::resource('tags', TagsController::class);
        //experiance
        Route::resource('experience', ExperienceController::class);
        // education
        Route::resource('education', EducationController::class);
        // project
        Route::resource('project', BackendProjectsController::class);
        // profile
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});


require __DIR__.'/auth.php';
