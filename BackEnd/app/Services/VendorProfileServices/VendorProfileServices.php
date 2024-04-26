<?php

namespace App\Services\VendorProfileServices;

use App\Repositories\VendorProfile\Interfaces\VendorProfileRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class VendorProfileServices
{
    protected VendorProfileRepositoryInterface $vendorProfileRepository;

    /**
     * UserServices  constructor.
     *
     * @param  VendorProfileRepositoryInterface  $vendorProfileRepository
     */
    public function __construct(
        VendorProfileRepositoryInterface $vendorProfileRepository,
    ) {
        $this->vendorProfileRepository = $vendorProfileRepository;
    }

    /**
     * @param  array  $data
     */
    public function firstOrCreate(array $data)
    {
        return $this->vendorProfileRepository->firstOrCreate($data);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     */
    public function findOneBy(array $data, array $with = [])
    {
        return $this->vendorProfileRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = []): mixed
    {
        return $this->vendorProfileRepository->whereIn($column, $data, $with);
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
        return $this->vendorProfileRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     */
    public function create($data)
    {
        return $this->vendorProfileRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     */
    public function update(array $data, string|int $id)
    {
        return $this->vendorProfileRepository->update($data, $id);
    }

    /**
     * @param  array  $search
     * @param  array  $attributes
     */
    public function updateOrCreate(array $search, array $attributes): mixed
    {
        return $this->vendorProfileRepository->updateOrCreate($search, $attributes);
    }

    /**
     * @param  string|int  $user_id
     * @return bool
     */
    public function delete(string|int $user_id)
    {
        return $this->vendorProfileRepository->delete($user_id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->vendorProfileRepository->findWhereLike($attribute, $value, $limit);
    }
}
