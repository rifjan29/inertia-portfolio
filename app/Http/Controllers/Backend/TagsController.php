<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelMasterTags;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Exception;


class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelMasterTags::latest()->paginate(10);
        return Inertia::render('Tags/List',['tags' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tags/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:master_tag,name',
        ]);
        try {
            $tags = new ModelMasterTags;
            $tags->name = $request->get('name');
            $tags->slug = Str::slug($request->get('name'));
            $tags->save();
            return Redirect::route('tags.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('tags.index')->with('error','Terjadi Kesalahan.');
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
        return Inertia::render('Tags/Edit',[
            'tags' => ModelMasterTags::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);
        try {
            $tags = ModelMasterTags::find($id);
            $tags->name = $request->get('name');
            $tags->slug = Str::slug($request->get('name'));
            $tags->update();
            return Redirect::route('tags.index')->with('success','Berhasil mengganti data.');
        } catch (Exception $e) {
            return Redirect::route('tags.index')->with('error','Terjadi Kesalahan.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $tags = ModelMasterTags::find($id);
            $tags->delete();
            return Redirect::route('tags.index')->with('success','Berhasil menghapus data.');
        } catch (Exception $e) {
            return Redirect::route('tags.index')->with('error','Terjadi Kesalahan.');
        }
    }
}
