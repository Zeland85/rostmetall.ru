<?php
if (isset($_SERVER['REQUEST_URI'])) {
    $_SERVER['REQUEST_URI'] = str_replace('/index.php', '/', $_SERVER['REQUEST_URI']);
}
//ini_set('error_reporting',  E_ERROR & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

return [
    'protocol' => 'https',
    'hostname' => 'rostmetall.ru',
    'root' => __DIR__,
    'legacy' => realpath(__DIR__ . '/../legacy'),
    'production' => true,
    'db' => [
        'hostname' => 'localhost',
        'username' => 'rm_production',
        'password' => 'Ghy1KLmE',
        'database' => 'rm_production',
        'prefix' => 'oc_',
    ]
];
