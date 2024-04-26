<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Bookmark extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsToMany
     */
    public function folders(): BelongsToMany
    {
        return $this->belongsToMany(Folder::class);
    }

    /**
     * @return BelongsTo
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }
}
