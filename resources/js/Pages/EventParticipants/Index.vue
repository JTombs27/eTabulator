<template>
    <Head>
        <title>Participants Page</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-md-12 ">
                <div class="col-md-12 bgc-white p-10 bd shadow-sm">
                    <div class="row">
                        <div class="col-md-4">
                            <label class="form-label"><b>Event:</b></label>
                            <select class="form-select" v-model="event_id" @change="ddl_eventchange">
                                <option v-for="(eventXs,index) in event" :value="eventXs.id" :key="index">{{eventXs.event_title}}</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label"><b>Setup:</b></label>
                            <select class="form-select">
                                <option value="Admin" v-for="(settupX,index) in settupEvent" :key="index">Admin</option>
                            </select>
                        </div>
                        <div class="col-md-2 text-end">
                            <Link class="btn btn-primary" :href="`/event-setup/create/`">Add Setup</Link>
                        </div>
                    </div>
                </div>
            <!-- <div class="peers fxw-nw jc-sb ai-c bgc-white p-10 bd shadow-sm">
                <div class="peers">
                    <div class="peer">
                     
                    </div>
                    <div class="peer">
                      
                    </div>
                </div>
                <div class="peers">
                    <div class="peer"  v-if="can.createUser">
                        <Link class="btn btn-primary" :href="`/event-setup/create/`+eventSetup.id">Add Setup</Link>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="col-12">
            <!-- <div class="tabl-responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th width="35%" >Setup Title</th>
                            <th width="40%" >Setup Requirments</th>
                            <th width="5%" class="text-center">Panel</th>
                            <th width="5%" class="text-center">Audience</th>
                            <th width="10%" class="text-center">Status</th>
                            <th width="5%" style="text-align: right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(eventX, index) in event.data" :key="index">
                            <td>
                                {{ eventX.event_settup_title }}
                            </td>
                            <td>
                                {{ eventX.event_settup_requirement }}
                            </td>
                            <td class="text-center">
                                <svg v-if="eventX.event_settup_withpannel" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                <svg v-if="!eventX.event_settup_withpannel" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                            <td class="text-center">
                                <svg v-if="eventX.event_settup_withaudience" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-square text-success" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                <svg v-if="!eventX.event_settup_withaudience" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                            <td  class="text-center">
                               status
                            </td >
                            <td  class="text-center">
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/event-header/${eventX.id}/edit`">Edit</Link></li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li><a class="dropdown-item" href="#" @click="deleteEventSetup(eventX.id)">Delete</a></li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="settupData.data <= 0"><td class="text-center text-danger"  colspan="6">No Setup data found.</td></tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="settupData.next_page_url" :prev="settupData.prev_page_url" />
                    </div>
                </div>
            </div> -->
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
        event       : Object,
        settupData  :Object,
        filters     : Object,
        can         : Object,
    },
    data(){
        return{
            myModal                 : null,
            actual_liters           : 0,
            invalid_actual_liters   :false,
            settupEvent             :[],
            event_id                :"",
            form                    :useForm({
                                        event_id:"",
                                        settup_id:""
                                    })
        }
    },
    methods:
    {

        deleteEventSetup(settup_id)
        {
            const res = confirm("Are you sure to delete this setup?");
            if(res)
            {
                this.form.event_id  = this.eventSetup.id;
                this.form.settup_id = settup_id;
                this.form.post("/event-setup/delete");
            }
        },

        ddl_eventchange()
        {
            alert(this.event_id);
            //this.settupEvent = event[event_rowIndex].event_settup;
        }
    }

}
</script>