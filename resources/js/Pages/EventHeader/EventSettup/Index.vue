<template>
    <Head>
        <title>SCHOOL EVENTS</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-12 ">
            <div class="peers fxw-nw jc-sb ai-c bgc-white p-10 bd shadow-sm">
                <b style="font-size:12px;">
                    <Link href="/event-header" style="font-size:18px;color:#999494;">
                        Event Header 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right font-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                    </link>
                    {{eventSetup.event_title}}
                </b>
                <div class="peers">
                    <div class="peer"  v-if="can.createUser">
                        <Link class="btn btn-primary" :href="`/event-setup/create/`+eventSetup.id">Add Setup</Link>
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
                            <th width="35%" >Setup Title</th>
                            <th width="40%" >Setup Requirments</th>
                            <th width="5%" class="text-center">Panel</th>
                            <th width="5%" class="text-center">Audience</th>
                            <th width="10%" class="text-center">Winner</th>
                            <th width="5%" style="text-align: right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(eventX, index) in settupData.data" :key="index">
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
                            <td  class="text-center" v-if="eventX.winner != null">
                                <img  :src="`/storage/${eventX.winner.participants_profile}`"  class="w-2r bdrs-50p" style="border: 1.5px solid green;" :height="30" :width="20"  alt="...">
                                <br/><small style="font-size: 10px;">{{ eventX.winner.participants_name }}</small>
                            </td >
                            <td  class="text-center" v-else>
                                <img class="w-2r bdrs-50p" src="http://127.0.0.1:8000/storage/profile/default/photo.png" alt=""><br/> <small>No Winner</small>
                            </td >
                            <td  class="text-center">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/event-setup/${eventSetup.id}/edit/${eventX.id}`">Edit</Link></li>
                                    <li><button class="dropdown-item" @click="showParticipants(eventX.id)">Voting Summary</button></li>
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
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="settupData.next_page_url" :prev="settupData.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <modal 
        v-if="showModal" 
        :modalTitle = "'Voting Summary'"
        :addional_class="'modal-lg'"
        :buttonTitle="'Save'"
        :showBtn =false
        @closeModal     ="closeModal"
        @saveModal      ="closeModal"
    >
        <div class="row">
            <!-- <div class="col-lg-12 " style="padding-top: 10px;padding-bottom: 10px;">
                <label style="font-size: 14px;"><b>Supply Officer </b>: <span style="font-size: 16px;" class="badge bg-secondary">{{ suppy_officer }}</span></label>
            </div> -->
            <div class="col-lg-12 bgc-white bd p-10">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col" class="text-center" style="width:10%;">PIC</th>
                            <th scope="col" style="width:60%;">Participants Name</th>
                            <th class="text-center" scope="col" style="width:30%;padding-left:0px ;padding-right: 0px;"><small>VOTES</small></th>
                        </tr>
                    </thead>
                    <tbody class="bgc-grey-300">
                        <tr v-for="(participant, index) in participants.data" :key="index">
                            <td class="text-center" >  <img  :src="`/storage/${participant.participants_profile}`"  class="w-2r bdrs-50p" style="border: 1.5px solid green;" :height="30" :width="20"  alt="..."></td>
                            <td>{{ participant.participants_name }}</td>
                            <td class="">
                                <div class="row" v-if="participant.votings != null" v-for="(voting,v_index) in participant.votings" :key="v_index">
                                    <template v-if="voting.panel != null && v_index == 0 && voting.criteria != null">
                                        <div class="col-lg-12" ><small><b>{{  voting.panel.name }}</b></small></div>
                                    </template>
                                    <template v-if ="voting.panel != null && v_index > 0 && voting.criteria != null">
                                        <div class="col-lg-12"  v-if="participant.votings[v_index - 1].panel != null"><small><b>{{  participant.votings[v_index - 1].panel.id != voting.panel.id ? voting.panel.name:""}}</b></small></div>
                                    </template>
                                   
                                    <div class="col-lg-8 text-left" v-if="voting.criteria != null">{{ voting.criteria.criteria_description}}</div>
                                    <div class="col-lg-8 text-left" v-else>Audience</div>
                                    <div class="col-lg-4">{{ voting.criteria != null ? voting.vote_value+'%': voting.vote_value}}</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </modal>
</template>

<script>

import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    components: { Pagination, Filtering },
    props:{
        eventSetup: Array,
        settupData:Object,
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
                event_id:"",
                settup_id:""
            }),
            showModal:false,
            participants:[]

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
        showParticipants(settup_id)
        {
            let vm = this
            axios.post("/panel-judging/get-criteria/list",{settup_id:settup_id})
            .then(response=>
            {
                if(response.data != null)
                {
                  vm.participants = response.data
                  vm.showModal = true
                }
            });
        },
        closeModal() 
        {
            this.showModal  = false;
        },

        
    }

}
</script>