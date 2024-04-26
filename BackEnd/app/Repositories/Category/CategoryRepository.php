<?php

namespace App\Repositories\Category;

use App\Models\Category;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Category\Interfaces\CategoryRepositoryInterface;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    /**
     * @param Category $category
     */
    public function __construct(Category $category)
    {
        parent::__construct($category);
    }
}
