<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>Log Time Arrival</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
</head>

<body class="app" >
   
    <div class="col-12 text-center" style="margin-top: 30px !important;padding-left:20px;padding-right:20px">
        <b><h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
          </svg></br>Log Time Arrival
        </h1></b>
    </div> 
    <div class="col-12 text-center" style="margin-top: 60px !important;padding-left:20px;padding-right:20px">
      @if ($data == "alert")
          <a href="/logArrivalTime">
                <div class="alert alert-{{ $type }} text-center no-padding" >
                   @if($type == "success")
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    @else
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    @endif
                    <h3>
                    {{ $message }}
                    </h3>
                </div>
            </a>
     @elseif ($data == "confirm")
            <div class="alert alert-{{ $type }} text-center no-padding" >
              <form  method="POST" action="/logArrivalTime/updateLog"> 
                    @csrf
                    <label class="form-label">If this information is correct please confirm</label>
                    
                    <div class="mb-3" style="margin-top:4px !important;">
                        @if($iswith_actualdriver)
                           <label class="form-label">Driver</label>
                          <h3  for="time_arrival" class="form-label">{{$actual_drivername}}</h3>
                        @else
                            <label class="form-label">Driver</label>
                            <h3  for="time_arrival" class="form-label">{{$assign_drivername}}</h3>
                            <label class="form-label">CATS</label>
                            <h3 for="time_arrival" class="form-label">{{$assign_drivercats}}</h3>
                        @endif
                        </div>
                    </div>
                  
                    <input type="text" name="view"  value="cancel" style="display:none !important">
                    <div class="input-group input-group-lg" style="margin-top:4px;">
                        <button type="submit" name="btncancel" class="form-control btn btn-danger btn-block">Cancel</button>
                    </div>
               </form>
               <form  method="POST" action="/logArrivalTime/updateLog"> 
                   @csrf
                    <input type="text" name="view"  value="confirm" style="display:none !important">
                    <input type="text" name="ticket_number" id="ticket_number" value="{{$ticket_number}}" style="display:none !important">
                    <input type="datetime-local" name="time_arrival" value="{{$time_arrival}}" style="display:none !important">
                    <input type="text" name="odometer" value="{{$odometer}}" style="display:none !important">
                    <div class="input-group input-group-lg" style="margin-top:4px;">
                        <button  type="submit" name="btnsubmit" class="form-control btn btn-success btn-block">Confirm</button>
                    </div>
                </form>
            </div>
    @else
           
            <form  method="POST" action="logArrivalTime/updateLog">
            @csrf
           <label for="ticket_number" class="form-label">Type Trip Ticket Number Here</label>
            <div class="input-group input-group-lg">
          
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
                <path d="M2 2h2v2H2V2Z"/>
                <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>
                <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>
                <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>
                <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>
                </svg>                          
           
            <input type="text" class="form-control @error('ticket_number') is-invalid @enderror" value="{{ old('ticket_number') }}" name="ticket_number" id="ticket_number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            </div>
                @error('ticket_number')
                        <div class="fs-6 c-red-500">{{ $message }}</div>
                @enderror
            <div class="mb-3" style="margin-top:4px !important;">
                <label for="time_arrival" class="form-label">Time Of Arrival</label>
                <input type="datetime-local" class="form-control @error('time_arrival') is-invalid @enderror" value="{{ old('time_arrival') }}" name="time_arrival" id="time_arrival" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                @error('time_arrival')
                    <div class="fs-6 c-red-500">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3" style="margin-top:4px !important;">
                <label for="odometer" class="form-label">Odo Reading</label>
                <input type="text" class="form-control @error('odometer') is-invalid @enderror" value="{{ old('odometer') }}" name="odometer" id="odometer" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                @error('odometer')
                    <div class="fs-6 c-red-500">{{ $message }}</div>
                @enderror
            </div>
            <input type="text" name="action" value="confirm" style="display:none !important">
            <div class="input-group input-group-lg" style="margin-top:4px;">
                <button  type="submit" class="form-control btn btn-success btn-block">Submit</button>
            </div>
        </form>
     @endif
       
    </div> 
    <div style="margin-top:20px;">
        <center>
            <div class="text-center">
            <a href="/">Go to login</a>
            </div>
        </center> 
    </div>
   
   
  
</body>
<script>
    window.addEventListener("load", (function () {
    }))
</script>
</html>