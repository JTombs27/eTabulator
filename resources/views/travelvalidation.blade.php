<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Travel Ticket Validation</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
</head>

<body class="app" >
    @if ($data !== null)
    <div class="col-12 text-center" style="margin-top: 10px;padding-left:20px;padding-right:20px">
        <b><h1>TRAVEL TICKET 
            VALIDATION 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
          </svg></h1></b>
    </div> 
    <div class="col-md-12 p-20">
        <table class="table table-bordered bg-white" >
            <tr><td>Travel Status</td><td>:</td><td><b style="color:{{$data->status == 'Approved' ? 'green':'red'}}">{{$data->status != null ? $data->status:'Pending'}}</b></td></tr>
            <tr><td>Plate Number</td><td>:</td><td><b>{{$data->PLATENO}}</b></td></tr>
            <tr><td>Travel Date</td><td>:</td><td><b>{{$data->date_to != null ? $data->date_from.' To '.$data->date_to:$data->date_from}}</b></td></tr>
            <tr><td>Allowed Liter/s </td><td>:</td><td><b>{{$data->total_liters}} Liter/s</b></td></tr>
            <tr><td>Price </td><td>:</td><td><b>{{ number_format($data->price, 2) }}</b></td></tr>
            <tr><td colspan="3">Drivers Name:</td></tr>
            <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data->first_name.' '.(Str::limit($data->middle_name,1,'.')).' '.$data->last_name}}</b></td></tr>
            <tr><td colspan="3">Vehicle Description:</td></tr>
            <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data->FDESC}}</b></td></tr>
        </table>
    </div> 
        
    @else
            
    @endif
</body>
<script>
   
    window.addEventListener("load", (function () {
       //DIRI PAG LOAD
    }))
</script>
</html>
