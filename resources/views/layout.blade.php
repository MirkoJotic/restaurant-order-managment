<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Order Managment System</title>
        <!-- Styles -->
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
      <div id="app">
        @yield('content')
      </div>
      <script type="text/javascript">
          window.Laravel = { csrfToken: '{{ csrf_token() }}' };
      </script>
      <script src="https://cdn.socket.io/socket.io-1.3.7.js"></script>
      <script src="/js/app.js"></script>
    </body>
</html>
