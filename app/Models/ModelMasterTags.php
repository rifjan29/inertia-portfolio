<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelMasterTags extends Model
{
    use HasFactory;
    protected $table = 'master_tag';
    protected $fillable = [
        'name',
        'slug',
    ];
}
