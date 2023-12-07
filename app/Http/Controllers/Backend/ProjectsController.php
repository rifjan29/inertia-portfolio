<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\ModelMasterStack;
use App\Models\ModelProjects;
use App\Models\ModelProjectStack;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ModelProjects::latest()->paginate(10);
        return Inertia::render('Backend/Projects/List',['Projects' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stack = ModelMasterStack::all()->map(function($item)  {
            return [
                'value' => $item->id,
                'label' => $item->name
            ];
        });

        return Inertia::render('Backend/Projects/Create',['Stack' => $stack]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'stack.*' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required',
        ]);
        try {
            $project = new ModelProjects;
            $project->title = $request->get('title');
            $project->slug =  Str::slug($request->get('title'));
            $project->url = $request->get('url');
            if ($request->file('gambar')) {
                $date = Carbon::now()->format('his');
                $file = $request->file('gambar');
                $filename = 'gambar-'.$date.'.'.$file->extension();
                $file->storeAs('public/gambar',$filename);
                chmod(storage_path('app/public/gambar'),0777);
                $project->gambar = $filename;

            }
            $project->deskripsi = $request->get('deskripsi');
            $project->save();
            for ($i=0; $i < count($request->get('stack')); $i++) {
                $projectStack = new ModelProjectStack;
                $projectStack->project_id = $project->id;
                $projectStack->tag_id = $_POST['stack'][$i];
                $projectStack->save();
            }

            return Redirect::route('project.index')->with('success','Berhasil menambahkan data.');
        } catch (Exception $e) {
            return Redirect::route('project.index')->with('error','Terjadi kesalahan.');
        } catch (QueryException $e) {
            return Redirect::route('project.index')->with('error','Terjadi kesalahan.');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
