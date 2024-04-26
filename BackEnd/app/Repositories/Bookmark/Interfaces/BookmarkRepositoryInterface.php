<?php

namespace App\Repositories\Bookmark\Interfaces;

use App\Repositories\Base\Interfaces\BaseRepositoryInterface;

interface BookmarkRepositoryInterface extends BaseRepositoryInterface
{

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed;

    /**
     * @return mixed
     */
    public function getBookmarks(): mixed;

    /**
     * @param $id
     * @param $userId
     * @return mixed
     */
    public function findByUser($id, $userId): mixed;

}
