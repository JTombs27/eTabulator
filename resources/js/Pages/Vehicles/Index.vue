<template>
    <Head>
        <title> Vehicles</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Vehicles</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer" v-if="can.canCreateVehicle">
                    <Link class="btn btn-success btn-sm" href="/vehicles/create">Add Vehicles</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Plate No</label>
            <input type="text" v-model="filter1.PLATENO" class="form-control">

            <label>Vehicle Type</label>
            <select class="form-select" v-model="filter1.TYPECODE">
                <option disabled value="">Select Type</option>
                <option value="1">Motorcycle</option>
                <option value="2">Light Vehicle</option>
                <option value="3">Heavy Equipment</option>
            </select>

            <label>Date Acquired</label>
            <input type="date" v-model="filter1.FDATEACQ" class="form-control">

            <label>Description</label>
            <input type="text" v-model="filter1.FDESC" class="form-control">
            
            <div class="col pt-2 mt-2"></div>
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="runFilter()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg> Find</button> &nbsp;
            <button class="btn btn-sm btn-danger mT-5 text-white" @click="reset()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg> Reset</button>

        </filtering>

        <div class="col-12" v-if="vehiclesGroup.length > 0">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2" >
                             <label style="padding-top:auto;padding-bottom:auto;height:100%;">Select Vehicle Status</label>
                        </div>
                        <div class="col-3">
                            <select class="form-select form-sm" v-model="form.condition">
                                <option disabled value=""></option>
                                <option value="Good Condition">Good Condition</option>
                                <option value="In Repair">In Repair</option>
                                <option value="Wasted">Wasted</option>
                            </select>
                        </div>
                        <div class="col-1">
                            <label>Status Date</label>
                        </div>
                        <div class="col-3">
                            <input type="date" class="form-control" v-model="form.vehicle_status_date" autocomplete="chrome-off"/>
                        </div>
                        <div class="col-1">
                            <button type="button" class="btn btn-primary" @click="setStatus()">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">Plate Number</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Date Acquired</th>
                            <th scope="col">Acquisition</th>
                            <th scope="col" >Office</th>
                            <th scope="col">Driver</th>
                            <th scope="col">Description</th>
                            <th scope="col" style="text-align: right"> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vehicle, index) in vehicles.data" :key="index">
                            <th>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" :value="vehicle.id"  :id="vehicle.id" v-model="vehiclesGroup">
                                </div>
                            </th>
                            <td><label style="width:100%;height:100%;" :for="vehicle.id" class="disable-select"> {{vehicle.PLATENO}}</label></td>
                            <td v-if="!!vehicle.vehicle_status" v-html="code(vehicle.TYPECODE, vehicle.vehicle_status.condition)"></td>
                            <td v-else v-html="code(vehicle.TYPECODE, null)"></td>
                            <td> {{vehicle.date}}</td>
                            <td style="text-align: right"> {{ Number(vehicle.FACQCOST).toLocaleString(undefined, {minimumFractionDigits: 2})}}</td>
                            <td v-if="vehicle.driverassign[0]!= null"> {{`${vehicle.driverassign[vehicle.driverassign.length - 1].empl.office.short_name}` }}</td>
                            <td v-else></td>
                            <td v-if="vehicle.driverassign.length != 0"> {{`${vehicle.driverassign[vehicle.driverassign.length - 1].empl.first_name} ${mi(vehicle.driverassign[vehicle.driverassign.length - 1].empl.middle_name)} ${vehicle.driverassign[vehicle.driverassign.length - 1].empl.last_name}`}}</td>
                            <td v-else></td>
                            <td> {{vehicle.FDESC}}</td>
                            <td style="text-align: right">
                                <div class="dropdown downstart">
                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                    </button>
                                    <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                        <li v-if="can.canEditVehicle"><Link class="dropdown-item" :href="`/vehicles/${vehicle.id}/edit`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg> Edit</Link></li>

                                        <li><Link class="dropdown-item" :href="`/VehicleStatus/${vehicle.id}`">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg> Status</Link></li>
                                        <li><span class="dropdown-item" @click="showInfo(vehicle.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                                            </svg> Whereabouts</span></li>
                                        <li><Link class="dropdown-item" :href="`/officeVehicles/${vehicle.id}`">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                                        </svg>&nbsp;Department</Link></li>

                                        <li><Link class="dropdown-item" @click="driverVehicle(vehicle.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                                        </svg> Drivers Assignment</Link></li>

                                        <li> <hr class="dropdown-divider action-divider"></li>
                                        <li v-if="can.canDeleteVehicle"><Link class="text-danger dropdown-item" @click="deleteVehicle(vehicle)" :disabled="vehicle.driver_vehicles !== 0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg> Delete </Link></li>
                                    </ul>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="vehicles.links" /> -->
                        <pagination :next="vehicles.next_page_url" :prev="vehicles.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  <Modal
        v-if="showModal"
        :modalTitle="'Vehicle Whereabouts'"
        :addional_class="'modal-lg'"
        @closeModal="closeModal">
       <table class="table table-hover table-responsive">
                    <thead>
                          <tr>
                            <th scope="col"><h3>Travels</h3></th>
                            <th scope="col"></th>
                            <th scope="col">
                                  <h4><Link v-if="!!noTravel && can.canCreateTravel" class="pull-right" @click="createTravel()"><u>Create Travel</u></Link></h4>
                                  <h4><Link v-if="!noTravel" class="pull-right" @click="goToTravel()"><u>Go to Travel</u></Link></h4>
                            </th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!!noTravel">
                            <td scope="col"></td>
                            <td scope="col"> | </td>
                            <td scope="col">No Latest Travel Data </td>
                         </tr>
                          
                        <tr v-if="!noTravel">
                            <td>Office</td>
                            <td>:</td>
                            <td>{{office}}</td>
                        </tr>
                        <tr  v-if="!noTravel">
                            <td>Description</td>
                            <td>:</td>
                            <td>{{vehicle_desc}}</td>
                        </tr>
                         <tr v-if="!noTravel">
                            <td>Plate Number</td>
                            <td>:</td>
                            <td>{{plate_no}}</td>
                        </tr>
                         <tr v-if="!noTravel">
                            <td>Fuel Type</td>
                            <td>:</td>
                            <td>{{fuel_type}}</td>
                        </tr>
                         <tr v-if="!noTravel">
                            <td>Vehicle Condition</td>
                            <td>:</td>
                            <td>{{vehicle_condition}}</td>
                        </tr>
                        <tr v-if="!noTravel">
                            <td>Travel Date</td>
                            <td>:</td>
                            <td>{{travel_date}}</td>
                        </tr>
                        <tr v-if="!noTravel">
                            <td>Place To Visit</td>
                            <td>:</td>
                            <td>{{place_to_visit}}</td>
                        </tr>
                        <tr v-if="!noTravel">
                            <td>Purpose</td>
                            <td>:</td>
                            <td>{{purpose}}</td>
                        </tr>
                        <tr v-if="!noTravel">
                            <td>Travel Ticket Number</td>
                            <td>:</td>
                            <td>{{ticket_number}}</td>
                        </tr>
                        <tr v-if="!noTravel">
                            <td>Status</td>
                            <td>:</td>
                            <td v-html="statusDisplay(vehicle_status)"></td>
                        </tr>
                    </tbody>
                </table>
               <table class="table table-hover table-responsive">
                    <thead>
                          <tr>
                            <th scope="col"><h3>Project</h3></th>
                            <th scope="col"></th>
                            <th scope="col">
                                <h4><Link v-if="!!noProject && can.canCreateProject" class="pull-right" @click="createProject()"><u>Create Project</u></Link></h4>
                                <h4><Link v-if="!noProject" class="pull-right" @click="goToProject()"><u>Go to Project</u></Link></h4>
                            </th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr v-if="!!noProject">
                            <td scope="col"></td>
                            <td scope="col"> | </td>
                            <td scope="col">No Latest Project Data </td>
                         </tr>
                        <tr v-if="!noProject">
                            <td>Project Description</td>
                            <td>:</td>
                            <td>{{projectDescription}}</td>
                        </tr>
                        <tr  v-if="!noProject">
                            <td>Purpose</td>
                            <td>:</td>
                            <td>{{projectPurpose}}</td>
                        </tr>
                         <tr v-if="!noProject">
                            <td>Borrowed</td>
                            <td>:</td>
                            <td v-html="borrowdisplay(externalBorrow)"></td>
                        </tr>
                         <tr v-if="!!externalBorrow">
                            <td>Munincipality</td>
                            <td>:</td>
                            <td>{{borrowMun}}</td>
                        </tr>
                        <tr v-if="!!externalBorrow">
                            <td>Barangay</td>
                            <td>:</td>
                            <td>{{borrowBrgy}}</td>
                        </tr>
                    </tbody>
                </table>
    </Modal>

</template>

<script>
import Pagination from "@/Shared/Pagination";
import Filtering from "@/Shared/Filter";
import { useForm } from "@inertiajs/inertia-vue3";

export default ({
    components: { Pagination, Filtering},
    props: {
        can: Object,
        vehicles: Object,
        filters: Object,
        can: Object
    },
    data() {
        return {
            driverid: "",
            search: this.$props.filters.search,
            filter:false,
            vehiclesGroup:[],
            form:useForm({
                condition:"",
                vehicle_status_date:""
            }),
            showModal: false,
            travel_info:{

            },
            office:"",
            vehicle_desc:"",
            plate_no:"",
            fuel_type:"",
            vehicle_condition:"",
            travel_date:"",
            place_to_visit:"",
            purpose:"",
            ticket_number:"",
            vehicle_status:"",
            noTravel:false,

            filter1: useForm({
                PLATENO:"",
                TYPECODE:"",
                FDATEACQ:"",
                FDESC:""
            }),

            noProject:false,
            externalBorrow:false,
            projectDescription:"",
            projectPurpose:"",
            borrowMun:"",
            borrowBrgy:""
        }
    },
    computed: {
        mi() {
            return value => value ? `${value.charAt(0)}.` : "";
        },

    },
     watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/vehicles",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: false,
                    replace: true,
                }
            );
        }, 300)
    },
    methods: {
        code (code,status) {

           var stats = this.status(status); 

            switch(code) {
                case '1':
                    return "<span>Motorcycle</span>"+stats;
                    break
                case '2':
                    return "<span>Light Vehicle</span>"+stats;
                    break
                case '3':
                    return "<span>Heavy Equipment</span>"+stats;
                    break
                default:
                    return ""
                    break
            }
        },

        status (status) {
            if (status == "Good Condition") {
                return "<small><span class='badge rounded-pill bg-success'>✔</span></small>"
            } else if (status == "On-repair") {
                return "<small><span class='badge rounded-pill bg-warning text-black'>⚙️</span></small>"
            } else if (status == "Wasted") {
                return "<small><span class='badge rounded-pill bg-danger'>🗑️</span></small>"
            }
            return ""
        },

        borrowdisplay (code) {
            switch(code) {
                case false:
                    return "<span> No </span>"
                    break
                case true:
                    return "<span> Yes </span>"
                    break
                default:
                    return ""
                    break
            }
        },
        
        driverVehicle (driverid)
        {
            this.$inertia.get("/drivers/" + driverid+"/vehicles");
        },

        deleteVehicle (vehicle)
        {
            let text = "Warning! \Are you sure you want to Delete this Vehicle Plate Number " + vehicle.PLATENO;

            if(confirm(text) == true) {
                this.$inertia.delete("/vehicles/" + vehicle.id);
            }
        },

        showFilter ()
        {
            this.filter = !this.filter
        },

        runFilter () {
            this.$inertia.get('/vehicles', this.filter1,{preserveState:true})
        },

        reset () {
            this.filter = {}
            this.$inertia.get('/vehicles')

        },
        setStatus () {
            axios.post('/vehicles/set-status', {
                "condition":this.form.condition,
                "vehicle_status_date":this.form.vehicle_status_date,
                "vehiclesGroup":this.vehiclesGroup
            }).then(response=>{

                if(response.data != null)
                {
                    if(response.data == "success")
                    {
                        alert("Status Successfully Set");
                        this.vehiclesGroup = [];
                        this.$inertia.reload({only:['vehicles']});
                    }
                    else{
                        this.saveMessage = response.data;
                    }
                }
            })

        }, 
        showInfo (id)
        {
            
            axios.post('/vehicles/getWhereAboutsTravel/'+id).then((response) => {

                this.travel_info = response.data[0]
                if(response.data != "Error")
                {
                      this.noTravel = false
                      this.office = response.data[0].driver_vehicle.office.office
                      this.vehicle_desc =response.data[0].driver_vehicle.vehicle.FDESC
                      this.plate_no =response.data[0].driver_vehicle.vehicle.PLATENO
                      this.fuel_type =response.data[0].gas_type
                      this.vehicle_condition=response.data[0].driver_vehicle.vehicle.vehicle_status.condition
                      this.travel_date=response.data[0].travelDate
                      this.place_to_visit=response.data[0].place_to_visit
                      this.purpose=response.data[0].purpose
                      this.ticket_number=response.data[0].ticket_number
                      this.vehicle_status=response.data[0].status
                }
                else{
                      this.noTravel = true
                      this.office ="",
                      this.vehicle_desc ="",
                      this.plate_no ="",
                      this.fuel_type ="",
                      this.vehicle_condition="",
                      this.travel_date="",
                      this.place_to_visit="",
                      this.purpose="",
                      this.ticket_number="",
                      this.vehicle_status=""

                }
                 this.showModal = true


            });
            this.noProject = true

             axios.post('/vehicles/getWhereAboutsProject/'+id).then((response) => {
                  this.project_info = response.data[0]
                 if(response.data[0][0] == "Error" || response.data[0][0] == undefined)
                 {
                       this.noProject = true
                       this.externalBorrow = false
                       this.projectDescription = ""
                       this.projectPurpose = ""
                       this.borrowMun  = ""
                       this.borrowBrgy = ""
                 }
                 else{
                       this.noProject = false
                       if(response.data[1] == 1)
                       {
                              this.externalBorrow = true

                              this.borrowMun  =  response.data[0][0].project_vehicles[0].municipality.citymunDesc
                              this.borrowBrgy = response.data[0][0].project_vehicles[0].barangay.brgyDesc
                       }
                       else{
                            this.externalBorrow = false
                       }
                       this.projectDescription = response.data[0][0].description
                       this.projectPurpose =    response.data[0][0].project_vehicles[0].purpose



                 }
                  this.showModal = true
             });


        },

        statusDisplay (code) {
            switch(code) {
                case 'Approved':
                    return "<span class='badge bg-success'>Approved</span>"
                    break
                case 'Disapproved':
                    return "<span class='badge bg-danger'>Disapproved</span>"
                    break
                case null:
                    return "<span class='badge bg-warning'>Pending</span>"
                    break
                default:
                    return ""
                    break
            }
        },
        createProject () {
             $('body').css("overflow","scroll");
             $('.modal-backdrop').remove();
             $('body').removeClass('modal-open');
           this.$inertia.get("/projects/create/");
           this.showModal = false

       },

       goToProject () {
             $('body').css("overflow","scroll");
             $('.modal-backdrop').remove();
             $('body').removeClass('modal-open');
           this.$inertia.get("/projects");
           this.showModal = false

       },

       createTravel () {
             $('body').css("overflow","scroll");
             $('.modal-backdrop').remove();
             $('body').removeClass('modal-open');
           this.$inertia.get("/travels/create/");
           this.showModal = false

       },
       
       goToTravel(){
             $('body').css("overflow","scroll");
             $('.modal-backdrop').remove();
             $('body').removeClass('modal-open');
           this.$inertia.get("/travels");
           this.showModal = false

       },

        closeModal() {
          
            this.showModal = false

        },

    },


})
</script>

