<?php

return [

//    'paths' => ['*', 'api/*', 'sanctum/csrf/'],
//
//    'allowed_methods' => ['*'],
//
//    'allowed_origins' => ['*'],
//
//    'allowed_headers' => ['*'],
//
//    'exposed_headers' => [],
//
//    'max_age' => 0,
//
//    'supports_credentials' => false,

    'paths' => ['*','api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['content-type', 'accept', 'x-custom-header'],

    'exposed_headers' => ['x-custom-response-header'],

    'max_age' => 0,

    'supports_credentials' => false,

];
