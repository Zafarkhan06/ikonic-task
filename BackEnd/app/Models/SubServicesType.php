<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubServicesType extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'services_type_id'];
    
    public function serviceType()
    {
        return $this->belongsTo(ServicesType::class, 'services_type_id');
    }

    public function subServicesTypeItems()
    {
        return $this->hasMany(SubServicesTypeItem::class);
    }
}
