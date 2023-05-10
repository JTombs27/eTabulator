<template>
    <Head>
        <title>SCHOOL EVENTS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-12 ">
            <div class="peers fxw-nw jc-sb ai-c bgc-white p-20 bd shadow-sm">
                <b style="font-size:20px;">School Events</b>
                <div class="peers">
                    <!-- <div class="peer mR-5 pT-5">
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
                    </div> -->
                    <!-- <div class="peer mR-10">
                        <input v-model="search" type="text" class="form-control " placeholder="Search...">
                    </div> -->
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
                            <th width="45%">EVENT DESCRIPTION</th>
                            <th width="10%" class="text-center">EVENT START</th>
                            <th width="10%" class="text-center">EVENT END</th>
                            <!-- <th width="10%" >EVENT WALL PAPER</th> -->
                            <th width="5%"  class="text-center">ACTION</th>
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
                            <!-- <td>
                                {{ eventX.background_image }}
                            </td> -->
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
                                    <li><Link class="dropdown-item" :href="`/event-header/edit/`+eventX.id">Edit</Link></li>
                                    <li ><hr class="dropdown-divider action-divider"></li>
                                    <li >
                                        <button class="dropdown-item btn btn-defualt" @click="generateWinners(eventX.id)">Generate Winners</button>
                                    </li>
                                    <li v-if="eventX.can.delete">
                                        <Link class="text-danger dropdown-item" @click="deleteEvent(eventX.id)">Delete</Link>
                                    </li>
                                    <li v-else>
                                        <button class="text-danger dropdown-item btn btn-defualt" disabled>Delete</button>
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
import { useForm } from "@inertiajs/inertia-vue3";

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
            invalid_tempOTP:"",
            form:useForm({
                event_id:""
            })
        }
    },
    methods:
    {
        deleteEvent(event_id)
        {
            const res = confirm("Are you sure to delete this setup?");
            if(res)
            {
                this.form.event_id  = event_id;
                this.form.post("/event-header/delete");
            }
        },
        generateWinners(event_id)
        {
                this.form.event_id  = event_id;
                this.form.post("/event-header/generate-winner");
        }
    }

}
</script>