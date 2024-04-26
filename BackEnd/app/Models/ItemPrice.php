<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemPrice extends Model
{
    use HasFactory;
    
    protected $fillable = ['price', 'services_type_id', 'sub_services_type_id', 'sub_services_type_item_id', 'user_id'];
    
    public function serviceType()
    {
        return $this->belongsTo(ServicesType::class, 'services_type_id');
    }

    public function subServiceType()
    {
        return $this->belongsTo(SubServicesType::class, 'sub_services_type_id');
    }

    public function subServiceTypeItem()
    {
        return $this->belongsTo(SubServicesTypeItem::class, 'sub_services_type_item_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
