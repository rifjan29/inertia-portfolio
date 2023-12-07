<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelKategoriArtikel;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class KategoriArtikelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelKategoriArtikel::latest()->paginate(10);
        return Inertia::render('KategoriArtikel/List',[
            'kategori' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('KategoriArtikel/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:master_kategori_artikel,name'
        ]);
        try {
            $kategori = new ModelKategoriArtikel;
            $kategori->name = $request->get('title');
            $kategori->slug = Str::slug($request->get('title'));
            $kategori->save();
            return Redirect::route('kategori-artikel.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('kategori-artikel.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('KategoriArtikel/Edit',[
            'kategori' => ModelKategoriArtikel::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required'
        ]);
        try {
            $kategori = ModelKategoriArtikel::find($id);
            $kategori->name = $request->get('title');
            $kategori->slug = Str::slug($request->get('title'));
            $kategori->update();
            return Redirect::route('kategori-artikel.index')->with('success','Berhasil mengganti data.');
        } catch (Exception $e) {
            return Redirect::route('kategori-artikel.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $kategori = ModelKategoriArtikel::find($id);
            $kategori->delete();
            return Redirect::route('kategori-artikel.index')->with('success','Berhasil menghapus data.');
        } catch (Exception $e) {
            return Redirect::route('kategori-artikel.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }
}
