

<template>
  
    <div class="row bg-white" v-if="TravelData.data.length >= 1">
        <div class="col-12 text-center bg-white" style="margin-top: 10px !important;padding-left:20px;padding-right:20px">
            <b><h1>TRAVEL TICKET 
                VALIDATION 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
            </svg></h1></b>
            
        </div> 
        <div class="col-md-12 p-20 bg-white" >
            
            <table class="table table-bordered" >
                <tbody>
                <tr><td>Travel Status</td><td>:</td><td><b :style="'color:'+(TravelData.data[0].status == 'Approved' || TravelData.data[0].status == 'Fueled'? 'green':'red')">{{TravelData.data[0].status != null ? TravelData.data[0].status:'Pending'}}</b></td></tr>
                <tr><td>Plate Number</td><td>:</td><td><b>{{TravelData.data[0].PLATENO}}</b></td></tr>
                <tr><td>Travel Date</td><td>:</td><td><b>{{TravelData.data[0].date_to != null ? TravelData.data[0].date_from+' To '+TravelData.data[0].date_to:TravelData.data[0].date_from}}</b></td></tr>
                <tr><td>Allowed Liter/s </td><td>:</td><td><b>{{TravelData.data[0].liters}} Liter/s</b></td></tr>
                <tr><td>Gasoline Station </td><td>:</td><td><b>{{TravelData.data[0].gasoline_station}}</b></td></tr>
                <tr><td>Gas Type </td><td>:</td><td><b>
                        <span v-if="TravelData.data[0].gas_type == 'premium_price'"> Gasoline (Premium)</span>
                        <span v-if="TravelData.data[0].gas_type == 'breaj_oil_price'"> Break Oil</span>
                        <span v-if="TravelData.data[0].gas_type == 'regular_price'"> Gasoline (Regular)</span>
                        <span v-if="TravelData.data[0].gas_type == 'deisoline_price'"> Deisoline</span>
                        <span v-if="TravelData.data[0].gas_type == 'engine_oil_price'"> Engine Oil</span>
                        <span v-if="TravelData.data[0].gas_type == 'greases_price'"> Greases</span>
                    </b></td></tr>
                <tr><td>Price</td><td>:</td><td><b>₱ {{ TravelData.data[0].price}}</b></td></tr>
                <tr><td colspan="3">Drivers Name:</td></tr>
                <tr><td colspan="3" style="padding-left: 20px;"><b>{{  (TravelData.data[0].actual_driver == null || TravelData.data[0].actual_driver == "") ? TravelData.data[0].first_name+' '+TravelData.data[0].middle_name+' '+ TravelData.data[0].last_name:TravelData.data[0].actual_driver}}</b></td></tr>
                <tr><td colspan="3">Vehicle Description:</td></tr>
                <tr><td colspan="3" style="padding-left: 20px;"><b>{{ TravelData.data[0].FDESC}}</b></td></tr>
            </tbody>
            </table>
        </div>
        <div class="col-md-12 text-left pR-20" style="margin-top: -15px;padding-bottom:5px !important;">
            <button type="button" v-if="TravelData.data[0].status == `Approved`" @click="openConfirmation()" class="btn btn-success c-white pull-right">Confirm Fueled 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fuel-pump-diesel-fill" viewBox="0 0 16 16">
                    <path d="M4.974 9.806h.692c.306 0 .556.063.75.19.198.127.343.317.437.568.096.252.144.565.144.941 0 .284-.027.53-.083.74-.053.21-.133.386-.241.528a.986.986 0 0 1-.412.315 1.575 1.575 0 0 1-.595.103h-.692V9.806Z"/>
                    <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM4 9v5h1.796c.496 0 .906-.099 1.23-.297.327-.197.571-.484.732-.86.161-.377.242-.828.242-1.356 0-.525-.08-.973-.242-1.344a1.775 1.775 0 0 0-.725-.85C6.71 9.098 6.296 9 5.796 9H4Z"/>
                </svg>
            </button>
        </div>
    </div> 
    <div class="col-12 text-center p-30 text-danger" v-if="TravelData.data.length == 0">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-square-fill c-red" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>
        <br><br>
        <h5>YOU HAVE SCANNED AN INVALID TRAVEL TICKET</h5>
    </div>
    <div class="modal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-center">
                <div v-if="TravelData.data[0].status == 'Approved'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <h3>PLEASE CONFIRM</h3>
                   <p>This action will update the travel ticket have been fueled.</p>
                   <div class="row">
                        <label class="col-7 col-form-label">Enter Actual Liters Fueled: </label>
                        <div class="col-5">
                            <input type="number" v-model="actual_liters" class="form-control" autocomplete="chrome-off">
                        </div>
                        <label v-if="invalid_actual_liters" class="form-control text-danger text-sm" >Should not be greater than in the travel Ticket.</label>
                    </div>
                </div>
                <div v-if="TravelData.data[0].status == 'Fueled'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#2dcf2b" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    <h3>SUCCESSFULLY CONFIRMED</h3>
                    <p>Transaction of this travel ticket successfully completed.</p>
                </div>
            </div>
            <div class="modal-footer text-center" v-if="TravelData.data[0].status == 'Approved'">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">NO</button> &nbsp;
                <button type="button" @click="confirm()" class="btn btn-primary">CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:{
        TravelData:Object
    },
    data(){
        return{
            myModal: null,
            actual_liters: 0,
            invalid_actual_liters:false
        }
    },
    methods:
    {

        openConfirmation()
        {
            this.actual_liters = this.TravelData.data[0].liters;
            this.myModal= new window.bootstrap.Modal(document.getElementById('myModal'))
            this.myModal.show()
            // $('body').removeClass('modal-open');
            // $('body').css("overflow","scroll");
            // $('.modal-backdrop').remove();
        },
        confirm()
        {
            let vm = this;
            if(this.actual_liters > this.TravelData.data[0].liters)
            {
                this.invalid_actual_liters = true;
            }
            else{
                this.invalid_actual_liters = false;
                axios.patch('/travelTicket/'+this.TravelData.data[0].id+'/'+this.actual_liters)
                .then(response=>
                {
                                    
                    if(response.data != null)
                    {
                        if(response.data == "success")
                        {
                        vm.$inertia.reload({only:['TravelData']});
                        setTimeout(function(){
                            vm.myModal.hide()
                        },1500);
                            
                        }
                        else{
                            //vm.saveMessage = response.data;
                            alert(response.data);
                        }
                    }
                })
            }
            
        }
    }

}
</script>