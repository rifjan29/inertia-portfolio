<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelMasterStack;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class StackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelMasterStack::latest()->paginate(10);
        return Inertia::render('Stack/List',[
            'stack' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Stack/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'icon' => 'required|mimes:png,svg',
        ]);
        try {
            $stack = new ModelMasterStack;
            $stack->name = $request->get('name');
            if ($request->file('icon')) {
                $date = Carbon::now()->format('his');
                $file = $request->file('icon');
                $filename = 'icon-'.$date.'.'.$file->extension();
                $file->storeAs('public/icon',$filename);
                chmod(storage_path('app/public/icon'), 0777);
                $stack->icon = $filename;
            }
            $stack->save();
            return Redirect::route('stack.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('stack.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Stack/Edit',['stack' => ModelMasterStack::find($id)]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'icon' => 'mimes:png,svg',
        ]);
        try {
            $stack = ModelMasterStack::find($id);
            $stack->name = $request->get('name');
            if ($request->hasFile('icon')) {
                Storage::delete('public/icon/'.$stack->icon);
                $date = Carbon::now()->format('his');
                $file = $request->file('icon');
                $filename = 'icon-'.$date.'.'.$file->extension();
                $file->storeAs('public/icon',$filename);
                chmod(storage_path('app/public/icon'), 0777);
                $stack->icon = $filename;
            }
            $stack->update();
            return Redirect::route('stack.index')->with('success','Berhasil mengganti data.');
        } catch (Exception $e) {
            return Redirect::route('stack.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $stack = ModelMasterStack::find($id);
            Storage::delete('public/icon/'.$stack->icon);
            $stack->delete();
            return Redirect::route('stack.index')->with('success','Berhasil menghapus data.');
        } catch (Exception $e) {
            return Redirect::route('stack.index')->with('error','Terjadi kesalahan.');
            //throw $th;
        }
    }
}
