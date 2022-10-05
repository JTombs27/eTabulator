<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Sign In - Your System Name</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
    <style>
        .strokeme {
          color: #00419b;
          font-weight: bold;
          /* text-shadow: -1px -1px 0 #79a6e5, 1px -1px 0 #79a6e5, -1px 1px 0 #79a6e5, 1px 1px 0 #79a6e5; */
        }
    </style>
</head>

<body class="app">
    <div id="loader">
        <div class="spinner"></div>
    </div>
    <div class="peers ai-s fxw-nw h-100vh">
        <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv"
            style='background-image:url("images/bg.jpg"); background-size:100% 100%'>
            <div class="row mt-3 ms-3" style="color: rgb(52, 52, 52); display: block;">
                <div class="col-md-6">
                <h1 class="strokeme display-5">EQUIPMENT MANAGEMENT SYSTEM</h1>
                </div>
            </div>
            <div class="pos-a centerXY">
                <div class="row text-center">
                    <div>
                        <img class="mw-50" src="images/logo.png" alt="">
                    </div>
                </div>
                <!-- <div class="row" style="color:white;">
                    <h1 class="strokeme">EQUIPMENT MANAGEMENT SYSTEM</h1>
                </div> -->
            </div>
        </div>
        <div class="col-12 col-md-3 peer pX-40 pY-80 h-100 scrollable pos-r border-startr" style="min-width:320px; background-color:rgb(2 65 150);">
            <div class="row text-center" id="mobile-logo">
                <div class="col-offset-5 mb-1">
                    <img class="img-fluid" src="images/logo.png" alt="">
                    <h3>EQUIPMENT MANAGEMENT SYSTEM</h3>
                </div>
            </div>
            <h4 class="fw-300 text-light mB-10">Login</h4>
            @if (count($errors) > 0)
            <div class="alert alert-danger" style="margin-bottom: unset; padding: .3rem;">
                @foreach($errors->all() as $message)
                <small class="text-danger"><strong>
                        <p style="margin-bottom: unset;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16"
                                role="img" aria-label="Warning:">
                                <path
                                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            {{ $message }}</p>
                    </strong></small>
                @endforeach
            </div>
            @endif
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="mb-3">
                    <label class="text-normal text-light form-label">Username</label>
                    <input type="text" name="username" class="form-control" value="{{ old('username') }}">
                </div>
                <div class="mb-3">
                    <label class="text-normal text-light form-label">Password</label>
                    <input type="password" id="password" class="form-control" name="password" value="{{ old('password') }}">
                </div>
                <div class="form-check">
                  <input class="form-check-input disable-select" type="checkbox" onchange="showMyPassword(this)" id="showPassword">
                  <label class="form-check-label text-light" for="showPassword">
                    Show Password
                  </label>
                </div>
                <div class="">
                    <div class="peers ai-c jc-sb fxw-nw">
                        <div class="peer">
                            <div class="checkbox checkbox-circle checkbox-info peers ai-c"><input type="checkbox"
                                    id="inputCall1" name="inputCheckboxesCall" class="peer"> <label for="inputCall1"
                                    class="peers peer-greed js-sb ai-c form-label"><span
                                        class="peer peer-greed text-light">Remember Me</span></label></div>
                        </div>
                        <div class="peer"><button type="submit" class="btn btn-primary btn-color">Login</button></div>
                    </div>
                </div>
            </form>
            <div style="margin-top:10px;">
                <center>
                    <div class="peers ai-c jc-sb fxw-nw">
                        <a href="/logArrivalTime" class="text-light">Log your arrival ? - for drivers only.</a>
                    </div>
                </center>
            </div>
        </div>
    </div>
</body>


<script>
    window.addEventListener("load", (function () {
        const t = document.getElementById("loader");
        setTimeout((function () {
            t.classList.add("fadeOut")
        }), 300)
    }))

    function showMyPassword(e) {
        if (e.checked) {
            document.getElementById('password').setAttribute("type","text") 
        } else {
            document.getElementById('password').setAttribute("type","password") 
        }
    }

    var x = document.getElementById("mobile-logo");

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

</script>
</html>
