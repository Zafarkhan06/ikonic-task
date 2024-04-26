<?php

namespace App\Repositories\Bookmark;

use App\Models\Folder;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Bookmark\Interfaces\FolderRepositoryInterface;

class FolderRepository extends BaseRepository implements FolderRepositoryInterface
{

    /**
     * @param Folder $folder
     */
    public function __construct(Folder $folder)
    {
        parent::__construct($folder);
    }

    /**
     * @param int $folderId
     * @param int $userId
     * @return mixed
     */

    public function findByUser(int $folderId, int $userId):mixed
    {
        return $this->model->where('user_id', $userId)->where('id', $folderId)->first();
    }
}
