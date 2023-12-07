<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelExperience;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelExperience::latest()->paginate(10);
        return Inertia::render('Experience/List',[
            'experience' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Experience/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'perusahaan' => 'required',
            'deskripsi' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_akhir' => 'required',
        ]);
        try {
            $exp = new ModelExperience;
            $exp->title = $request->get('title');
            $exp->perusahaan = $request->get('perusahaan');
            $exp->deskripsi = $request->get('deskripsi');
            $exp->tanggal_mulai = $request->get('tanggal_mulai');
            $exp->tanggal_akhir = $request->get('tanggal_akhir');
            $exp->save();
            return Redirect::route('experience.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('experience.index')->with('success','Berhasil mengganti data.');
        } catch (QueryException $e){
            return Redirect::route('experience.index')->with('success','Berhasil mengganti data.');
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
        return Inertia::render('Experience/Edit',[
            'dataExperience' => ModelExperience::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'perusahaan' => 'required',
            'deskripsi' => 'required',
            'tanggal_mulai' => 'required',
            'tanggal_akhir' => 'required',
        ]);
        try {
            $exp = ModelExperience::find($id);
            $exp->title = $request->get('title');
            $exp->perusahaan = $request->get('perusahaan');
            $exp->deskripsi = $request->get('deskripsi');
            $exp->tanggal_mulai = $request->get('tanggal_mulai');
            $exp->tanggal_akhir = $request->get('tanggal_akhir');
            $exp->update();
            return Redirect::route('experience.index')->with('success','Berhasil mengganti data.');
        } catch (Exception $e) {
             return Redirect::route('experience.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e){
             return Redirect::route('experience.index')->with('error','Terjadi kesalahan.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $exp = ModelExperience::find($id);
            $exp->delete();
            return Redirect::route('experience.index')->with('success','Berhasil menghapus data.');
        } catch (Exception $e) {
            return Redirect::route('experience.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e){
            return Redirect::route('experience.index')->with('error','Terjadi kesalahan.');
        }
    }
}
