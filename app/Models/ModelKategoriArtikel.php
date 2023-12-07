<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelKategoriArtikel extends Model
{
    use HasFactory;
    protected $table = 'master_kategori_artikel';
    protected $fillable = [
        'name',
        'slug',
    ];
}
