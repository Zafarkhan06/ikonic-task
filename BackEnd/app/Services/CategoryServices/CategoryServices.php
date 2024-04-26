<?php

namespace App\Services\CategoryServices;

use App\Repositories\Category\Interfaces\CategoryRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class CategoryServices
{
    protected CategoryRepositoryInterface $categoryRepository;

    /**
     * UserServices  constructor.
     *
     * @param  CategoryRepositoryInterface  $categoryRepository
     */
    public function __construct(
        CategoryRepositoryInterface $categoryRepository,
    ) {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @param  array  $data
     */
    public function firstOrCreate(array $data)
    {
        return $this->categoryRepository->firstOrCreate($data);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     */
    public function findOneBy(array $data, array $with = [])
    {
        return $this->categoryRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = []): mixed
    {
        return $this->categoryRepository->whereIn($column, $data, $with);
    }

    /**
     * @param  array  $columns
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     */
    public function all(
        array $columns = ['*'],
        array $with = [],
        string $orderBy = 'id',
        string $sortBy = 'asc'
    ): Collection {
        return $this->categoryRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     */
    public function create($data)
    {
        return $this->categoryRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     */
    public function update(array $data, string|int $id)
    {
        return $this->categoryRepository->update($data, $id);
    }

    /**
     * @param  string|int  $user_id
     * @return bool
     */
    public function delete(string|int $user_id)
    {
        return $this->categoryRepository->delete($user_id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->categoryRepository->findWhereLike($attribute, $value, $limit);
    }
}
