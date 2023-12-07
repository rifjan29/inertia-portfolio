<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelMasterStack extends Model
{
    use HasFactory;
    protected $table = 'master_stack';
    protected $fillable = [
        'name',
        'icon',
    ];
}
