<?php

namespace App\Services\AssetServices;

use App\Repositories\Asset\Interfaces\AssetRepositoryInterface;

class AssetService
{

    private AssetRepositoryInterface $assetRepository;

    /**
     * @param AssetRepositoryInterface $assetRepository
     */
    public function __construct(AssetRepositoryInterface $assetRepository)
    {
        $this->assetRepository = $assetRepository;
    }

    /**
     * @param $dataToMatch
     * @param $dataToCreate
     * @return mixed
     */
    public function firstOrCreateByAttribute($dataToMatch, $dataToCreate): mixed
    {
        return $this->assetRepository->firstOrCreateByAttribute($dataToMatch, $dataToCreate);
    }
}
