<?php

namespace App\Repositories\Users;

use App\Models\User;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Users\Interfaces\UserRepositoryInterface;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * UserRepository constructor.
     *
     * @param  User  $user
     */
    public function __construct(User $user)
    {
        parent::__construct($user);
    }
}
