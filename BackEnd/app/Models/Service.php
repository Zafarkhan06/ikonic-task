<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use App\Models\ServiceType;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'currency',
        'area',
        'description',
        'status',
        'user_id',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function image(): MorphMany
    {
        return $this->morphMany(Media::class, 'mediaable');
    }
}
