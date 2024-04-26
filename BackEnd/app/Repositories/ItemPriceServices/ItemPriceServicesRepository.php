<?php

namespace App\Repositories\ItemPriceServices;

use App\Models\ItemPrice;
use App\Repositories\Base\BaseRepository;
use App\Repositories\ItemPriceServices\Interfaces\ItemPriceServicesRepositoryInterface;

class ItemPriceServicesRepository extends BaseRepository implements ItemPriceServicesRepositoryInterface
{
    /**
     * @param ItemPrice $service
     */
    public function __construct(ItemPrice $itemPrice)
    {
        parent::__construct($itemPrice);
    }
}
