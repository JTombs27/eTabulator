<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Travel Ticket Validation</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
</head>

<body class="app " >
    <div class="row">
        
        @if ($data !== null)
        <div class="col-12 bg-white p-30 text-center" style="margin-top: 10px;">
            <b><h1>TRAVEL TICKET VALIDATION</h1></b>
        </div> 
        <div class="col-12 p-30">
            <table class="table table-bordered">
             <tr><td>Travel Status</td><td>:</td><td><b style="color:{{$data->status == 'Approved' ? 'green':'red'}}">{{$data->status != null ? $data->status:'Pending'}}</b></td></tr>
             <tr><td>Plate Number</td><td>:</td><td><b>{{$data->PLATENO}}</b></td></tr>
             <tr><td>Travel Date</td><td>:</td><td><b>{{$data->date_to != null ? $data->date_from.' To '.$data->date_to:$data->date_from}}</b></td></tr>
             <tr><td colspan="3">Drivers Name:</td></tr>
             <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data->first_name.' '.(Str::limit($data->middle_name,1,'.')).' '.$data->last_name}}</b></td></tr>
             <tr><td colspan="3">Vehicle Description:</td></tr>
             <tr><td colspan="3" style="padding-left: 20px;"><b>{{$data->FDESC}}</b></td></tr>
            </table>
        </div> 
          
        @else
                
        @endif
    </div> 
    
</body>
<script>
   
    window.addEventListener("load", (function () {
       //DIRI PAG LOAD
    }))
</script>
</html>
