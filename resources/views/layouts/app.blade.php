<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JWT</title>
    <!-- Scripts -->
    @vite('resources/css/app.css')
</head>
<body>
<div id="app" class="p-5">
    @yield('content')
</div>
@vite('resources/js/app.js')
</body>
</html>
