<?php

namespace App\Repositories\Asset\Interfaces;

use App\Repositories\Base\Interfaces\BaseRepositoryInterface;

interface AssetRepositoryInterface extends BaseRepositoryInterface
{

    /**
     * @param $dataToMatch
     * @param $dataToCreate
     * @return mixed
     */
    public function firstOrCreateByAttribute($dataToMatch, $dataToCreate): mixed;
}
