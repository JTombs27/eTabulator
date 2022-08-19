<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Travel Ticket Validation</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
</head>

<body class="app" >
    <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    @if ($data !== null)
    <div class="col-12 text-center" style="margin-top: 30px !important;padding-left:20px;padding-right:20px">
        <b><h1>TRAVEL TICKET 
            VALIDATION 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
          </svg></h1></b>
    </div> 
    <div class="col-md-12 p-20">
        <table class="table table-bordered bg-white" >
            <tr><td>Travel Status</td><td>:</td><td><b style="color:{{$data[0]['status'] == 'Approved' ? 'green':'red'}}">{{$data[0]['status'] != null ? $data[0]['status']:'Pending'}}</b></td></tr>
            <tr><td>Plate Number</td><td>:</td><td><b>{{$data[0]['PLATENO']}}</b></td></tr>
            <tr><td>Travel Date</td><td>:</td><td><b>{{$data[0]['date_to'] != null ? $data[0]['date_from'].' To '.$data[0]['date_to']:$data[0]['date_from']}}</b></td></tr>
            <tr><td>Allowed Liter/s </td><td>:</td><td><b>{{$data[0]['liters']}} Liter/s</b></td></tr>
            <tr><td>Gasoline Station </td><td>:</td><td><b>{{$data[0]['gasoline_station']}}</b></td></tr>
            <tr><td>Gas Type </td><td>:</td><td><b>
                
                    @switch ($data[0]['gas_type'])
                        @case ('premium_price')
                            Gasoline (Premium)
                            @break
                        @case('breaj_oil_price')
                            Break Oil
                            @break
                        @case ('regular_price')
                            Gasoline (Regular)
                            @break
                        @case ('deisoline_price')
                            Deisoline
                            @break
                        @case ('engine_oil_price')
                            Engine Oil
                            @break
                        @case('break_oil_price')
                            Break Oil
                            @break
                        @case('greases_price')
                            Greases
                            @break
                        @default:
                           NO CATEGORY
                    
                    @endswitch

                </b></td></tr>
            <tr><td>Price</td><td>:</td><td><b>₱ {{$data[0]['price']}}</b></td></tr>
            <tr><td colspan="3">Drivers Name:</td></tr>
            <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data[0]['first_name'].' '.(Str::limit($data[0]['middle_name'],1,'.')).' '.$data[0]['last_name']}}</b></td></tr>
            <tr><td colspan="3">Vehicle Description:</td></tr>
            <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data[0]['FDESC']}}</b></td></tr>
        </table>
    </div>
    <div class="col-md-12 text-left pR-20" style="margin-top: -15px;padding-bottom:5px !important;">
        <button type="button" onclick="showConfirmModal()" class="btn btn-success c-white pull-right">Confirm Fueled 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fuel-pump-diesel-fill" viewBox="0 0 16 16">
                <path d="M4.974 9.806h.692c.306 0 .556.063.75.19.198.127.343.317.437.568.096.252.144.565.144.941 0 .284-.027.53-.083.74-.053.21-.133.386-.241.528a.986.986 0 0 1-.412.315 1.575 1.575 0 0 1-.595.103h-.692V9.806Z"/>
                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM4 9v5h1.796c.496 0 .906-.099 1.23-.297.327-.197.571-.484.732-.86.161-.377.242-.828.242-1.356 0-.525-.08-.973-.242-1.344a1.775 1.775 0 0 0-.725-.85C6.71 9.098 6.296 9 5.796 9H4Z"/>
              </svg>
        </button>
    </div> 
        
    @else
            
    @endif
</body>
<script>
    
    window.addEventListener("load", (function () {
       //DIRI PAG LOAD
    }))
    function showConfirmModal(){
        var myModal = new bootstrap.Modal(document.getElementById('myModal'))
        myModal.show();
    }
</script>
</html>
