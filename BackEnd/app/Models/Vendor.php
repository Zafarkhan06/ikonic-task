?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Vendor extends Model
{
    use HasFactory;
    protected $fillable = [
        'designation',
        'business_website',
        'business_address',
        'business_description',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function image(): MorphMany
    {
        return $this->morphMany(Media::class, 'mediaable');
    }

}


