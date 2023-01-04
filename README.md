There is no font package included here, if you want to add icon/s go to https://icons.getbootstrap.com/ then copy the HTML SVG for performance.

Laravel 8 + Inertiajs + vue3

To install:

1.  composer update
2.  npm install
3.  copy .env.example .env <- setup your database and config the .env
4.  php artisan key:generate
5.  php artisan migrate
6.  php artisan db:seed <-this will add user admin@admin.com/12345678
7.  php artisan storage:link
8.  Open xampp and run
9.  Open this in Visual Studio then in terminal run php artisan serve --host  yourNetworkIP --port 8078
10. Open Andriod studio change the IP in mainActivity into yourNetworkIP:port (ex. 192.168.6.85:8078)
11. Rebuild your app in andriod studio and copy the APK from the build debug and install to your phone
12. Test the mobile App