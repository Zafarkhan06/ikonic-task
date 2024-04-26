<?php

namespace App\Services\VendorServices;

use App\Repositories\VendorServices\Interfaces\VendorServicesRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class VendorServices
{
    protected VendorServicesRepositoryInterface $verdorServicesRepository;

    /**
     * UserServices  constructor.
     *
     * @param  VendorServicesRepositoryInterface  $verdorServicesRepository
     */
    public function __construct(
        VendorServicesRepositoryInterface $verdorServicesRepository,
    ) {
        $this->verdorServicesRepository = $verdorServicesRepository;
    }

    /**
     * @param  array  $data
     */
    public function firstOrCreate(array $data)
    {
        return $this->verdorServicesRepository->firstOrCreate($data);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     */
    public function findOneBy(array $data, array $with = [])
    {
        return $this->verdorServicesRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = []): mixed
    {
        return $this->verdorServicesRepository->whereIn($column, $data, $with);
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
        return $this->verdorServicesRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     */
    public function create($data)
    {
        return $this->verdorServicesRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     */
    public function update(array $data, string|int $id)
    {
        return $this->verdorServicesRepository->update($data, $id);
    }

    /**
     * @param  string|int  $user_id
     * @return bool
     */
    public function delete(string|int $user_id)
    {
        return $this->verdorServicesRepository->delete($user_id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->verdorServicesRepository->findWhereLike($attribute, $value, $limit);
    }
}
