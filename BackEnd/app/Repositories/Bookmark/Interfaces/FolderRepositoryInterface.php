<?php

namespace App\Repositories\Bookmark\Interfaces;

use App\Repositories\Base\Interfaces\BaseRepositoryInterface;

interface FolderRepositoryInterface extends BaseRepositoryInterface
{

    /**
     * @param int $folderId
     * @param int $userId
     * @return mixed
     */
    public function findByUser( int $folderId, int $userId): mixed;
}
