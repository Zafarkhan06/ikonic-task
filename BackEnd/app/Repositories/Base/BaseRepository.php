<?php

namespace App\Repositories\Base;

use App\Repositories\Base\Interfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;

class BaseRepository implements BaseRepositoryInterface
{
    protected Model $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Model  $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @param  array  $attributes
     * @return mixed
     */
    public function create(array $attributes): mixed
    {
        return $this->model->create($attributes);
    }

    /**
     * @param  array  $attributes
     * @param  int|string  $id
     * @return mixed
     */
    public function update(array $attributes, int|string $id): object
    {
        return tap($this->model->find($id))->update($attributes);
    }

    /**
     * @param  array  $where
     * @param  array  $attributes
     * @return int
     */
    public function updateWhere(array $where, array $attributes): int
    {
        return $this->model->where($where)->update($attributes);
    }

    /**
     * @param  string  $column
     * @param  array  $values
     * @param  array  $attributes
     * @return int
     */
    public function updateWhereIn(string $column, array $values, array $attributes): int
    {
        return $this->model->whereIn($column, $values)->update($attributes);
    }

    /**
     * @param  array  $search
     * @param  array  $attributes
     * @return mixed
     */
    public function updateOrCreate(array $search, array $attributes): mixed
    {
        return $this->model->updateOrCreate($search, $attributes);
    }

    /**
     * @param  array  $columns
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     * @return mixed
     */
    public function all(array $columns = ['*'], array $with = [], string $orderBy = 'id', string $sortBy = 'asc'): mixed
    {
        return $this->model->with($with)->orderBy($orderBy, $sortBy)->get($columns);
    }

    /**
     * @param  array  $columns
     * @param  array  $where
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     * @return mixed
     */
    public function allWhere(
        array $columns = ['*'],
        array $where = [],
        array $with = [],
        string $orderBy = 'id',
        string $sortBy = 'asc'
    ): mixed {
        return $this->model->query()->select($columns)->where($where)->with($with)->orderBy($orderBy, $sortBy)->get();
    }

    /**
     * @param  int|string  $id
     * @param  array  $with
     * @return mixed
     */
    public function find(int|string $id, $with = []): mixed
    {
        return $this->model->with($with)->find($id);
    }

    /**
     * @param  int|string  $id
     * @return mixed
     *
     * @throws ModelNotFoundException
     */
    public function findOneOrFail(int|string $id): mixed
    {
        return $this->model->findOrFail($id);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     * @return mixed
     */
    public function findBy(array $data, array $with = [], string $orderBy = 'id', string $sortBy = 'asc'): mixed
    {
        return $this->model->where($data)->with($with)->orderBy($orderBy, $sortBy)->get();
    }

    /**
     * @param  array  $data
     * @param  array  $with
     * @param  array  $withCount
     * @return mixed
     */
    public function findOneBy(array $data, array $with = [], array $withCount = []): mixed
    {
        return $this->model->where($data)->with($with)->withCount($withCount)->first();
    }

    /**
     * @param  array  $data
     * @param  array  $with
     * @param  array  $withCount
     * @return mixed
     */
    public function findOneSoftDeletedRecordBy(array $data, array $with = [], array $withCount = []): mixed
    {
        return $this->model->withTrashed()->where($data)->with($with)->withCount($withCount)->first();
    }

    /**
     * @param  string  $lookingFor
     * @param  string  $lookingAt
     * @param  string|int  $value
     * @return int
     */
    public function hasOneEntry(string $lookingFor, string $lookingAt, string|int $value): int
    {
        return $this->model->select($lookingFor)->where($lookingAt, $value)->count() > 0 ? 1 : 0;
    }

    /**
     * @param  array  $data
     * @return mixed
     *
     * @throws ModelNotFoundException
     */
    public function findOneByOrFail(array $data): mixed
    {
        return $this->model->where($data)->firstOrFail();
    }

    /**
     * @param  array  $data
     * @param  int  $perPage
     * @return LengthAwarePaginator
     *
     * @throws \Psr\Container\ContainerExceptionInterface
     * @throws \Psr\Container\NotFoundExceptionInterface
     */
    public function paginateArrayResults(array $data, int $perPage = 50): LengthAwarePaginator
    {
        $page = request()->get('page', 1);
        $offset = ($page * $perPage) - $perPage;

        return new LengthAwarePaginator(
            array_slice($data, $offset, $perPage, false),
            count($data),
            $perPage,
            $page,
            [
                'path' => request()->url(),
                'query' => request()->query(),
            ]
        );
    }

    /**
     * @param  int|string  $id
     * @return bool
     */
    public function delete(int|string $id): bool
    {
        return $this->model->find($id)->delete();
    }

    /**
     * @param  array  $data
     * @return bool
     */
    public function deleteWhere(array $data): bool
    {
        return $this->model->where($data)->delete();
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @return bool
     */
    public function deleteWhereIn(string $column, array $data): bool
    {
        return $this->model->whereIn($column, $data)->delete();
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = [], string $orderBy = 'id', string $sortBy = 'asc'): mixed
    {
        return $this->model->whereIn($column, $data)->with($with)->orderBy($orderBy, $sortBy)->get();
    }

    /**
     * @param  array  $data
     * @return mixed
     */
    public function firstOrCreate(array $data): mixed
    {
        return $this->model->firstOrCreate($data);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     * @return Collection<Model>
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10): Collection
    {
        $collection = $this->model->query();

        if (! blank($value)) {
            $collection->where($attribute, 'LIKE', "%{$value}%");
        }

        // bring back all results
        if ($limit != 0) {
            $collection->limit($limit);
        }

        return $collection->orderBy($attribute)->get();
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  array  $columns
     * @param  array  $where
     * @param  int|string  $limit
     * @return Collection|array
     */
    public function findWhereLikeAndWhere(
        string $attribute,
        int|string $value,
        array $columns = ['*'],
        array $where = [],
        int|string $limit = 10
    ): Collection|array {
        $collection = $this->model->query()->select($columns);

        if (! blank($value)) {
            $collection->where($attribute, 'LIKE', "%{$value}%");
        }

        // bring back all results
        if ($limit != 0) {
            $collection->limit($limit);
        }

        if (! blank($where)) {
            $collection->where($where);
        }

        return $collection->orderBy($attribute)->get();
    }

    /**
     * @param  array  $data
     * @param  array  $with
     * @param  string  $checkBy
     * @return mixed
     */
    public function findLatestOneBy(array $data, array $with = [], string $checkBy = 'created_at'): mixed
    {
        return $this->model->where($data)->with($with)->latest($checkBy)->first();
    }

    /**
     * @param  array  $attributes
     * @return mixed
     */
    public function insert(array $attributes): mixed
    {
        return $this->model->query()->insert($attributes);
    }

    /**
     * @param  array  $data
     * @return bool
     */
    public function recordExists(array $data): bool
    {
        return $this->model->query()->where($data)->exists();
    }

    /**
     * @return mixed
     */
    public function newModelInstance(): mixed
    {
        return new $this->model();
    }
}
