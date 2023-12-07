<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelProjectStack extends Model
{
    use HasFactory;
    protected $table = 'projects_stack';
    protected $fillable = [
        'project_id',
        'tag_id',
    ];
}
