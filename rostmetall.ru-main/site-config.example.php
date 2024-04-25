<?php
if (isset($_SERVER['REQUEST_URI'])) {
    $_SERVER['REQUEST_URI'] = str_replace('/index.php', '/', $_SERVER['REQUEST_URI']);
}
ini_set('error_reporting',  E_ERROR & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

return [
    'protocol' => 'https',
    'hostname' => 'rostmetall.test',
    'root' => __DIR__,
    'legacy' => realpath(__DIR__ . '/../legacy'),
    'production' => false,
    'db' => [
        'hostname' => 'localhost',
        'username' => 'homestead',
        'password' => 'secret',
        'database' => 'rostmetall_test',
        'prefix' => 'oc_',
    ]
];
