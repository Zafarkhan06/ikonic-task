<?php

namespace App\Repositories\Asset;

use App\Models\Asset;
use App\Repositories\Asset\Interfaces\AssetRepositoryInterface;
use App\Repositories\Base\BaseRepository;

class AssetRepository extends BaseRepository implements AssetRepositoryInterface
{

    /**
     * @param Asset $asset
     */
    public function __construct(Asset $asset)
    {
        parent::__construct($asset);
    }

    /**
     * @param $dataToMatch
     * @param $dataToCreate
     * @return mixed
     */
    public function firstOrCreateByAttribute($dataToMatch, $dataToCreate):mixed
    {
       return $this->model->firstOrCreate($dataToMatch, $dataToCreate);
    }
}
