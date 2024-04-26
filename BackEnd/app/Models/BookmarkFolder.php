<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BookmarkFolder extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     * @return BelongsTo
     */
    public function bookmark(): BelongsTo
    {
        return $this->belongsTo(Bookmark::class);
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
