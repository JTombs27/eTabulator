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
                <div class="peer">
                    <Link class="btn btn-success btn-sm" href="/vehicles/create">Add Vehicles</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Plate No</label>
            <input type="text" class="form-control">

            <label>Vehicle Type</label>
            <select class="form-select">
                <option disabled value="">Select Type</option>
                <option value="1">Motorcycle</option>
                <option value="2">Light Vehicle</option>
                <option value="3">Heavy Equipment</option>
            </select>

            <label>Date Acquired</label>
            <input type="date" class="form-control">

            <label>Description</label>
            <input type="text" class="form-control">
            
            <button class="btn btn-sm btn-primary mT-5 text-white" >Filter</button>
        </filtering>

        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h7>Select Vehicle Status</h7>
                    <div class="row">
                        <div class="col">
                            <label>Vehicle Type</label>
                            <select class="form-select">
                                <option disabled value=""></option>
                                <option value="Good Condition">Good Condition</option>
                                <option value="In Repair">In Repair</option>
                                <option value="Wasted">Wasted</option>
                            </select>
                        </div>
                        <div class="col">
                            <label>Status Date</label>
                            <input type="date" class="form-control" autocomplete="chrome-off">
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
                            <td> {{vehicle.PLATENO}}</td>
                            <td v-html="code(vehicle.TYPECODE)"></td>
                            <td> {{vehicle.FDATEACQ}}</td>
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
                                        <li><Link class="dropdown-item" :href="`/vehicles/${vehicle.id}/edit`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg> Edit</Link></li>

                                        <li><Link class="dropdown-item" :href="`/VehicleStatus/${vehicle.id}`">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">
                                            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg> Status</Link></li>
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
                                        <li><Link class="text-danger dropdown-item" @click="deleteVehicle(vehicle)" :disabled="vehicle.driver_vehicles !== 0">
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

</template>

<script>
import Pagination from "@/Shared/Pagination";
import Filtering from "@/Shared/Filter";

export default ({
    components: { Pagination, Filtering},
    props: {
        vehicles: Object,
        filters: Object
    },
    data() {
        return {
            driverid: "",
            search: this.$props.filters.search,
            filter:false

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
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),

    },

    

    methods: {
        code (code) {
            switch(code) {
                case '1':
                    return "<span class='badge bg-info'>Motorcycle</span>"
                    break
                case '2':
                    return "<span class='badge bg-success'>Light Vehicle</span>"
                    break
                case '3':
                    return "<span class='badge bg-danger'>Heavy Equipment</span>"
                    break
                default:
                    return ""
                    break
            }
        },
        driverVehicle(driverid)
        {
            this.$inertia.get("/drivers/" + driverid+"/vehicles");
        },
        
        deleteVehicle(vehicle)
        {
            let text = "Warning! \Are you sure you want to Delete this Vehicle Plate Number " + vehicle.PLATENO;

            if(confirm(text) == true) {
                this.$inertia.post("/vehicles/" + vehicle.id);
            }
        },
        showFilter()
        {
            this.filter = !this.filter
        }
    },


})
</script>
 
