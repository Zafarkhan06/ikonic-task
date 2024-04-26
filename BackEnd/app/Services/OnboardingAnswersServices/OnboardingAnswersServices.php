<?php

namespace App\Services\OnboardingAnswersServices;

use Illuminate\Database\Eloquent\Collection;
use App\Repositories\OnboardingAnswers\Interfaces\OnboardingAnswersRepositoryInterface;

class OnboardingAnswersServices
{
    protected OnboardingAnswersRepositoryInterface $onboardingAnswersRepository;

    /**
     * OnboardingAnswersServices  constructor.
     *
     * @param  OnboardingAnswersRepositoryInterface  $onboardingAnswersRepository
     */
    public function __construct(
        OnboardingAnswersRepositoryInterface $onboardingAnswersRepository,
    ) {
        $this->onboardingAnswersRepository = $onboardingAnswersRepository;
    }

    /**
     * @param  array  $data
     */
    public function firstOrCreate(array $data)
    {
        return $this->onboardingAnswersRepository->firstOrCreate($data);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     */
    public function findOneBy(array $data, array $with = [])
    {
        return $this->onboardingAnswersRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereIn(string $column, array $data, array $with = []): mixed
    {
        return $this->onboardingAnswersRepository->whereIn($column, $data, $with);
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
        return $this->onboardingAnswersRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     */
    public function create($data)
    {
        return $this->onboardingAnswersRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     */
    public function update(array $data, string|int $id)
    {
        return $this->onboardingAnswersRepository->update($data, $id);
    }
    public function updateOrCreate(array $search, array $attributes): mixed
    {
        return $this->onboardingAnswersRepository->updateOrCreate($search, $attributes);
    }

    /**
     * @param  string|int  $id
     * @return bool
     */
    public function delete(string|int $id)
    {
        return $this->onboardingAnswersRepository->delete($id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     */
    public function findWhereLike(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->onboardingAnswersRepository->findWhereLike($attribute, $value, $limit);
    }
}
