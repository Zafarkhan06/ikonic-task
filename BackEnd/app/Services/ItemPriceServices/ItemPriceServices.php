<?php

namespace App\Services\ItemPriceServices;

use App\Repositories\ItemPriceServices\Interfaces\ItemPriceServicesRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class ItemPriceServices
{
    protected ItemPriceServicesRepositoryInterface $itemPriceServicesRepository;

    /**
     * UserServices  constructor.
     *
     * @param  ItemPriceServicesRepositoryInterface  $itemPriceServicesRepository
     */
    public function __construct(
        ItemPriceServicesRepositoryInterface $itemPriceServicesRepository,
    ) {
        $this->itemPriceServicesRepository = $itemPriceServicesRepository;
    }

    /**
     * @param  array  $data
     */
    public function firstOrCreate(array $data)
    {
        return $this->itemPriceServicesRepository->firstOrCreate($data);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     */
    public function findOneBy(array $data, array $with = [])
    {
        return $this->itemPriceServicesRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = []): mixed
    {
        return $this->itemPriceServicesRepository->whereIn($column, $data, $with);
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
        return $this->itemPriceServicesRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     */
    public function create($data)
    {
        $existingRecords = $this->itemPriceServicesRepository
            ->whereIn('user_id', [$data['user_id']])
            ->whereIn('services_type_id', [$data['service_id']])
            ->all();
        foreach ($existingRecords as $record) {
            $this->itemPriceServicesRepository->delete($record->id);
        }
    
        $itemPriceData = [
            'user_id'          => $data['user_id'],
            'services_type_id' => $data['service_id'],
        ];

        foreach($data['data'] as $subService) {
            $itemPriceData['sub_services_type_id'] = $subService['sub_service_id'];
            
            foreach($subService['items'] as $items) {
                $itemPriceData['sub_services_type_item_id'] = $items['item_id'];
                $itemPriceData['price'] = $items['price'];

                $this->itemPriceServicesRepository->create($itemPriceData);
            }
        }
        // return $this->itemPriceServicesRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     */
    public function update(array $data, string|int $id)
    {
        return $this->itemPriceServicesRepository->update($data, $id);
    }

    /**
     * @param  string|int  $user_id
     * @return bool
     */
    public function delete(string|int $user_id)
    {
        return $this->itemPriceServicesRepository->delete($user_id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->itemPriceServicesRepository->findWhereLike($attribute, $value, $limit);
    }
}
