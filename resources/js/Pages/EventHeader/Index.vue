<template>
    <Head>
        <title>SCHOOL EVENTS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-12 ">
            <div class="peers fxw-nw jc-sb ai-c bgc-white p-20 bd shadow-sm">
                <b style="font-size:20px;">School Events</b>
                <div class="peers">
                    <div class="peer mR-5 pT-5">
                        <label style="font-weight:bold;">Calendar Year:</label>
                    </div>
                    <div class="peer mR-10">
                        <select class="form-select">
                            <option value="Admin">Admin</option>
                            <option value="PGO">PGO-Admin</option>
                            <option value="PG-Head">PG-Head</option>
                            <option value="RO">Requestioning Office</option>
                            <option value="PGSO">PGSO</option>
                            <option value="peo-motorpool">PEO Motorpool</option>
                            <option value="gasoline-station">Gasoline Station</option>
                        </select>
                    </div>
                    <div class="peer mR-10">
                        <input v-model="search" type="text" class="form-control " placeholder="Search...">
                    </div>
                    <div class="peer"  v-if="can.createUser">
                        <Link class="btn btn-primary" href="/event-header/create">Add Event</Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="tabl-responsive bgc-white p-20 bd shadow-sm">
                <!-- <hr style="margin-top: 5px;" /> -->
                <table class="table table-hover table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th width="30%">EVENT TITLE</th>
                            <th width="35%">EVENT DESCRIPTION</th>
                            <th width="12%" class="text-center">EVENT START</th>
                            <th width="10%" class="text-center">EVENT END</th>
                            <th width="10%" >EVENT WALL PAPER</th>
                            <th width="3%"  class="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(eventX, index) in events.data" :key="index">
                            <td>
                                {{ eventX.event_title }}
                            </td>
                            <td>
                                {{ eventX.event_description }}
                            </td>
                            <td class="text-center">
                                {{ eventX.event_from }}
                            </td>
                            <td class="text-center">
                                {{ eventX.event_to }}
                            </td>
                            <td>
                                {{ eventX.background_image }}
                            </td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/event-setup/`+eventX.id">Event Setup</Link></li>
                                    <li><Link class="dropdown-item" :href="`/event-setup/`+eventX.id">Edit</Link></li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="can.canDeleteUser && !eventX.can.delete">
                                        <Link class="text-danger dropdown-item" @click="deleteUser(eventX.id)">Delete</Link>
                                    </li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="events.data <= 0"><td class="text-center text-danger"  colspan="6">No School Events data found.</td></tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="events.next_page_url" :prev="events.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default {
    components: { Pagination, Filtering },
    props:{
        events: Object,
        filters: Object,
        can: Object,
    },
    data(){
        return{
            myModal: null,
            actual_liters: 0,
            invalid_actual_liters:false,
            fuelOTP:localStorage.getItem("fuelOTP"),
            tempOTP:"",
            invalid_tempOTP:""
        }
    },
    methods:
    {

        openConfirmation()
        {
            if(localStorage.getItem("fuelOTP") === null)
            {
                this.invalid_tempOTP    = "";
                this.tempOTP            = "";
                this.actual_liters      = this.TravelData.data[0].liters;
                this.myModal            = new window.bootstrap.Modal(document.getElementById('myModal'))
                this.myModal.show()
            }
            else
            {
                    this.invalid_actual_liters = false;
                    const today = new Date();
                    const date  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    if(localStorage.getItem("fuelOTP_date")  < date)
                    {
                        this.fuelOTP = null;
                        localStorage.removeItem('fuelOTP');
                        localStorage.removeItem('fuelOTP_date');
                        localStorage.removeItem('fuelOTP_date');
                        this.openConfirmation();
                    }
                    else
                    {
                        this.actual_liters = this.TravelData.data[0].liters;
                        this.myModal       = new window.bootstrap.Modal(document.getElementById('myModal'))
                        this.myModal.show()
                    }
            }
        },
        confirm()
        {
            let vm = this;
            if(localStorage.getItem("fuelOTP") === null)
            {
                if(this.tempOTP.trim() == "")
                {
                    this.invalid_tempOTP = "Gasoline OTP is required to continue!";
                }
                else
                {
                    axios.get('/travelTicket/OTP/'+this.TravelData.data[0].gasoline_id+'/'+this.tempOTP)
                    .then(response=>
                    {              
                        if(response.data != null)
                        {
                            if(response.data == "success")
                            {
                                const today = new Date();
                                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                                vm.fuelOTP = vm.tempOTP;
                                localStorage.setItem("fuelOTP",vm.tempOTP);
                                localStorage.setItem("fuelOTP_date",date);
                                localStorage.setItem("gasoline_id",vm.TravelData.data[0].gasoline_id);
                                this.actual_liters  = this.TravelData.data[0].liters;
                               
                            }
                            else{
                                this.invalid_tempOTP = "You have entered an incorrect OTP!";
                            }
                        }
                    })
                }
            }
            else if(localStorage.getItem("gasoline_id") == this.TravelData.data[0].gasoline_id)
            {
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
            else{
                alert("Mismatch Gasoline Station! \nPLease Double check Gas Station in the ticket.");
            }
            
        }
    }

}
</script>