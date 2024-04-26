<?php

namespace App\Repositories\Media;

use App\Models\Media;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Media\Interfaces\MediaRepositoryInterface;

class MediaRepository extends BaseRepository implements MediaRepositoryInterface
{
    /**
     * MediaRepository constructor.
     *
     * @param  Media  $media
     */
    public function __construct(Media $media)
    {
        parent::__construct($media);
    }
}
