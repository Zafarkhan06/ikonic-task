<?php

namespace App\Repositories\VendorServices;

use App\Models\Service;
use App\Repositories\Base\BaseRepository;
use App\Repositories\VendorServices\Interfaces\VendorServicesRepositoryInterface;

class VendorServicesRepository extends BaseRepository implements VendorServicesRepositoryInterface
{
    /**
     * @param Service $service
     */
    public function __construct(Service $service)
    {
        parent::__construct($service);
    }
}
