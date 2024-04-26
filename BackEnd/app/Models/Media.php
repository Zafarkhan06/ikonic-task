<?php

namespace App\Models;

use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Media extends Model
{
    use HasFactory;
    protected $fillable = [
        'mediaable_type',
        'mediaable_id',
        'name',
        'hash_name',
        'path',
        'disk',
        'size',
        'type',
    ];
    public function extension()
    {
        return File::extension($this->name);
    }

    public function getSize()
    {
        $string = $this->size;
        $pattern = '/\d+/'; // Regular expression to match numbers
        preg_match($pattern, $string, $matches);
        $number = $matches[0];
        return $number;
    }

    public function temporaryUrl()
    {
        return 'storage/'. $this->path;
    }

    public function mediaable(): MorphTo
    {
        return $this->morphTo();
    }
}
