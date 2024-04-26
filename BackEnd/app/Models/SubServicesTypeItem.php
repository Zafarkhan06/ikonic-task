<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubServicesTypeItem extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'services_type_id', 'sub_services_type_id'];
    
    public function serviceType()
    {
        return $this->belongsTo(ServicesType::class, 'services_type_id');
    }

    public function subServiceType()
    {
        return $this->belongsTo(SubServicesType::class, 'sub_services_type_id');
    }

    public function itemPrice()
    {
        return $this->hasMany(ItemPrice::class);
    }
}
