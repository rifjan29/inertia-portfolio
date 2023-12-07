<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelExperience extends Model
{
    use HasFactory;
    protected $table = 'experience';
    protected $fillable = [
        'title',
        'perusahaan',
        'deskripsi',
        'tanggal_mulai',
        'tanggal_akhir',
    ];

}
