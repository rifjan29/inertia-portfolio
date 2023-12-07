<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelProjects extends Model
{
    use HasFactory;
    protected $table = "projects";
    protected $fillable = [
        'title',
        'slug',
        'url',
        'gambar',
        'deskripsi',
    ];
}
