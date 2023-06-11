<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>


## Group Project by C6
- PRASETIA WAHYU RAMADHAN 212410103043 as Project Manager
- ANANDA SALSABILA 212410103009 as System Analys
- LINTANG ARSA NAURA 212410103019 as Designer
- HASYIM ASHARI ABDUL MUKTI 212410103008 as Programmer
- CHRISTIAN KENT WIJAYA 212410103024 as Tester

## cara isntall 
- clone project
```bash
git clone "https://github.com/hasyimashari/Orange-Center.git"
```
- install laravel depedencies
```bash
composer install
```
- ubah .env.example menjadi .env
- generate key
```bash
php artisan key:generate
```
- jalankan migrasi
```bash
php artisan migrate
```
- isi pusher dan mail pada .env sesuai dengan milik kalian

- masuk ke dricetory react folder
```bash
cd react
```
- install react depedencies
```bash
npm install
```
- install pusher echo
```bash
npm install --save-dev laravel-echo pusher-js
```
- buat .env file
```bash
VITE_API_BASE_URL=http://localhost:8000

BROADCAST_DRIVER=pusher

PUSHER_APP_ID=websocket
PUSHER_APP_KEY=websocket
PUSHER_APP_SECRET=1010
PUSHER_HOST=localhost
PUSHER_PORT=6001
PUSHER_SCHEME=http
PUSHER_APP_CLUSTER=mt1
#atau isi dengan pusher kalian

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

## Run project
- run command dibawah secara bersamaan
- start backend
```bash
php artisan server
```
- start websocket
```bash
php artisan websockets:serve
```
- start queue
```bash
php artisan queue:listen
```
- start forntend pada directory react folder
```bash
npm run dev
```
