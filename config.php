<?php


$db = config('db');

// HTTP
define('HTTP_SERVER', site_url());

// HTTPS
define('HTTPS_SERVER', site_url());

// DIR
define('DIR_APPLICATION', site_dir('catalog/'));
define('DIR_SYSTEM', site_dir('system/'));
define('DIR_DATABASE', site_dir('system/database/'));
define('DIR_LANGUAGE', site_dir('catalog/language/'));
define('DIR_TEMPLATE', site_dir('catalog/view/theme/'));
define('DIR_CONFIG', site_dir('system/config/'));
define('DIR_IMAGE', site_dir('image/'));
define('DIR_CACHE', site_dir('system/cache/'));
define('DIR_DOWNLOAD', site_dir('download/'));
define('DIR_LOGS', site_dir('system/logs/'));

// DB
define('DB_DRIVER', 'mysql');
define('DB_HOSTNAME', $db['hostname']);
define('DB_USERNAME', $db['username']);
define('DB_PASSWORD', $db['password']);
define('DB_DATABASE', $db['database']);
define('DB_PREFIX', $db['prefix']);
