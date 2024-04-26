<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicesType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    public function subServices()
    {
        return $this->hasMany(SubServicesType::class);
    }

    public function subServiceItems()
    {
        return $this->hasManyThrough(SubServicesItem::class, SubServicesType::class);
    }

}


