<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OnboardingAnswer extends Model
{
    use HasFactory;
    protected $fillable = [
        'answer_1',
        'answer_2',
        'answer_3',
        'answer_4',
        'answer_5',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
