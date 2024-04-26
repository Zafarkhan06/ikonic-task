<?php

namespace App\Services\UserServices;

use App\Models\User;
use App\Repositories\Users\Interfaces\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Hash;

class UserServices
{
    protected UserRepositoryInterface $userRepository;

    /**
     * UserServices  constructor.
     *
     * @param  UserRepositoryInterface  $userRepository
     */
    public function __construct(
        UserRepositoryInterface $userRepository,
    ) {
        $this->userRepository = $userRepository;
    }

    /**
     * @param  array  $data
     * @return User
     */
    public function firstOrCreateUser(array $data): User
    {
        return $this->userRepository->firstOrCreate($data);
    }

    public function findOneUserById(int $id)
    {
        return $this->userRepository->findBy(['id' => $id]);
    }

    /**
     * @param  array  $data
     * @param  array  $with
     * @return User|null
     */
    public function findOneUserBy(array $data, array $with = []): ?User
    {
        return $this->userRepository->findOneBy($data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $with
     * @return mixed
     */
    public function whereUsersIn(string $column, array $data, array $with = []): mixed
    {
        return $this->userRepository->whereIn($column, $data, $with);
    }

    /**
     * @param  string  $column
     * @param  array  $data
     * @param  array  $without
     * @return mixed
     */
    public function whereUsersInWithoutRelations(string $column, array $data, array $without = []): mixed
    {
        return $this->userRepository->whereInUsersWithoutRelations($column, $data, $without);
    }

    /**
     * @param  array  $columns
     * @param  array  $with
     * @param  string  $orderBy
     * @param  string  $sortBy
     * @return Collection<User>
     */
    public function allUsers(
        array $columns = ['*'],
        array $with = [],
        string $orderBy = 'id',
        string $sortBy = 'asc'
    ): Collection {
        return $this->userRepository->all($columns, $with, $orderBy, $sortBy);
    }

    /**
     * @param $data
     * @return User
     */
    public function createUser($data): User
    {
        return $this->userRepository->create($data);
    }

    /**
     * @param  string|int  $id
     * @param  array  $data
     * @return User
     */
    public function updateUserDetails(array $data, string|int $id): User
    {
        return $this->userRepository->update($data, $id);
    }

    /**
     * @param  string|int  $id
     * @param  string  $password
     * @return User
     */
    public function updatePassword(string $password, string|int $id): User
    {
        return $this->userRepository->update([
            'password' => Hash::make($password),
        ], $id);
    }

    /**
     * @param  string|int  $user_id
     * @return bool
     */
    public function deleteUser(string|int $user_id)
    {
        return $this->userRepository->delete($user_id);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  int|string  $limit
     * @return Collection<User>
     */
    public function findWhereLikeUser(string $attribute, int|string $value, int|string $limit = 10)
    {
        return $this->userRepository->findWhereLike($attribute, $value, $limit);
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  array  $notIncluding
     * @param  int|string  $limit
     * @return Collection
     */
    public function allUsersWhereFieldLikeNotIncluding(
        string $attribute,
        int|string $value,
        array $notIncluding = [],
        int|string $limit = 10
    ): Collection {
        return $this->userRepository->getAllUsersWhereLikeNotIncluding($attribute, $value, $notIncluding, $limit);
    }

    /**
     * @param  array  $data
     * @return bool
     */
    public function userExists(array $data): bool
    {
        return $this->userRepository->recordExists($data);
    }

    /**
     * @param  array  $adminIds
     * @param  string|int  $groupId
     * @param  int  $limit
     * @param  bool  $isYouth
     * @param  array  $columns
     * @return Collection|array
     */
    public function getLatestGroupMembers(
        array $adminIds,
        string|int $groupId,
        int $limit,
        bool $isYouth,
        array $columns
    ): Collection|array {
        return $this->userRepository->getLatestGroupMembers(
            $adminIds,
            $groupId,
            $limit,
            $isYouth,
            $columns
        );
    }

    /**
     * @param  array  $adminIds
     * @param  string|int  $groupId
     * @param  bool  $isYouth
     * @param  array  $columns
     * @return Builder
     */
    public function getGroupMembers(
        array $adminIds,
        string|int $groupId,
        bool $isYouth,
        array $columns
    ): Builder {
        return $this->userRepository->getGroupMembers(
            $adminIds,
            $groupId,
            $isYouth,
            $columns,
        );
    }

    /**
     * @param  array  $groupAdminIds
     * @param  int|string  $groupId
     * @param  bool  $isYouth
     * @param  string|null  $searchMember
     * @return Builder
     */
    public function getGroupMembersWithSearch(
        array $groupAdminIds,
        int|string $groupId,
        bool $isYouth,
        string|null $searchMember
    ): Builder {
        /*
         * This returns a similar result to getLatestGroupMembers, but we want it in a
         * query builder to paginate it, rather than a collection
         */
        return $this->userRepository->getGroupMembersWithSearch(
            $groupAdminIds,
            $groupId,
            $isYouth,
            $searchMember
        );
    }

    /**
     * @param  array  $adminIds
     * @param  string|int  $groupId
     * @param  array  $columns
     * @return Builder
     */
    public function getAllGroupNonAdminMembers(
        array $adminIds,
        string|int $groupId,
        array $columns
    ): Builder {
        return $this->userRepository->getAllGroupNonAdminMembers(
            $adminIds,
            $groupId,
            $columns,
        );
    }

    /**
     * @param  string  $attribute
     * @param  int|string  $value
     * @param  array  $columns
     * @param  array  $where
     * @param  int|string  $limit
     * @return Collection<User>
     */
    public function findWhereLikeAndWhereUser(
        string $attribute,
        int|string $value,
        array $columns = ['*'],
        array $where = [],
        int|string $limit = 10
    ) {
        return $this->userRepository->findWhereLikeAndWhere(
            $attribute,
            $value,
            $columns,
            $where,
            $limit
        );
    }
}
