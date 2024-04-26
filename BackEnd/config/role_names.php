<?php

return [
    'roles' => [
        'admin'        => 'Admin',
        'vendor_admin' => 'VendorAdmin',
        'user'         => 'User',
    ],

    'permissions' => [
        'user.create',
        'user.view',
        'user.viewAny',
        'user.update',
        'user.delete',
        'user.deleteAny',

        'admin' => [
            'user.create',
            'user.view',
            'user.viewAny',
            'user.update',
            'user.delete',
            'user.deleteAny',
        ],

        'vendor' => [
            'user.create',
            'user.view',
        ],
     ]
];
