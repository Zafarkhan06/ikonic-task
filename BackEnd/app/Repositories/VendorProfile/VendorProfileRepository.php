<?php

namespace App\Repositories\VendorProfile;

use App\Models\Vendor;
use App\Repositories\Base\BaseRepository;
use App\Repositories\VendorProfile\Interfaces\VendorProfileRepositoryInterface;

class VendorProfileRepository extends BaseRepository implements VendorProfileRepositoryInterface
{
    /**
     * @param Vendor $vendor
     */
    public function __construct(Vendor $vendor)
    {
        parent::__construct($vendor);
    }
}
