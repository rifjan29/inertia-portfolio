<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelExperience;
use App\Models\ModelKategoriArtikel;
use App\Models\ModelMasterStack;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $count_kategori = ModelKategoriArtikel::count();
        $count_stack = ModelMasterStack::count();
        $count_exp = ModelExperience::count();
        return Inertia::render('Dashboard',[
            'kategori' => $count_kategori,
            'stack' => $count_stack,
            'experience' => $count_exp
        ]);
    }
}
