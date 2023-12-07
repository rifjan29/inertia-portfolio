<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelEducation extends Model
{
    use HasFactory;
    protected $table = 'education';
    protected $fillable = [
        'title',
        'kabupaten',
        'tgl_lulus',
        'deskripsi',
    ];
}
