<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelEducation;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelEducation::latest()->paginate(10);
        return Inertia::render('Education/List',[
            'Education' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Education/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'kabupaten' => 'required',
            'deskripsi' => 'required',
            'tanggal_selesai' => 'required',
        ]);
        try {
            $education = new ModelEducation;
            $education->title = $request->get('title');
            $education->kabupaten = $request->get('kabupaten');
            $education->deskripsi = $request->get('deskripsi');
            $education->tgl_lulus = $request->get('tanggal_selesai');
            $education->save();
            return Redirect::route('education.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e){
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
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
        return Inertia::render('Education/Edit',[
            'dataEducation' => ModelEducation::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'kabupaten' => 'required',
            'deskripsi' => 'required',
            'tgl_lulus' => 'required',
        ]);
        try {
            $education = ModelEducation::find($id);
            $education->title = $request->get('title');
            $education->kabupaten = $request->get('kabupaten');
            $education->deskripsi = $request->get('deskripsi');
            $education->tgl_lulus = $request->get('tgl_lulus');
            $education->update();
            return Redirect::route('education.index')->with('success','Berhasil mengganti data.');
        } catch (Exception $e) {
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e){
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $education = ModelEducation::find($id);
            $education->delete();
            return Redirect::route('education.index')->with('success','Berhasil menghapus data.');
        } catch (Exception $e) {
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e){
            return Redirect::route('education.index')->with('error','Terjadi kesalahan.');
        }
    }
}
