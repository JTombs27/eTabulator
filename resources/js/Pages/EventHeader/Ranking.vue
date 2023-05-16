<template>
    <Head>
        <title>Event Ranking</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-12 bgc-white p-20 bd shadow-sm ">
            <div class="peers fxw-nw jc-sb ai-c ">
                <b style="font-size:14px;">
                    <Link href="/event-header" style="font-size:18px;color:#999494;">
                        Event Header 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right font-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                    </link>
                    Event Ranking
                </b>
            </div>
        </div>
        <div class="col-12 bgc-white p-20 bd shadow-sm mT-5">
            <div class="row">
                <div class="col-lg-12">
                    <small style="font-size: 18px; font-weight: bold;">{{ event_detail.event_title }}</small>
                </div>
            </div>
            <table class="table table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th scope="col" class="text-center" style="width:10%;">RANK</th>
                        <th scope="col" style="width:40%;">PARTICIPANTS NAME</th>
                        <th class="text-center" scope="col" style="width:50%;padding-left:0px ;padding-right: 0px;"><small>VOTES</small></th>
                    </tr>
                </thead>
                <tbody class="bgc-blue-100">
                    <tr v-for="(event_settup,index) in events" :key="index">
                        <td colspan="3">
                            <b>{{ event_settup.event_settup_title }}</b>
                            <div class="row" v-if="event_settup.participants != null">
                                <template v-for="(participant,index_p) in event_settup.participants" :key="index_p">
                                    <div class="col-lg-2 pL-20 text-center" style="vertical-align: middle !important;">
                                        <span style="padding-top: 5px;" v-if="index_p == 0">{{   index_p +1 }}</span>  
                                        <span style="padding-top: 5px;" v-else>{{  event_settup.participants[index_p-1].percentage_v == participant.percentage_v ? (index_p+1)-1:index_p +1 }}</span>    
                                        <img  :src="`/storage/${participant.participants_profile}`"  class="w-2r pull-right" style="border: 1.5px solid green;" :height="35" :width="100"  alt="...">
                                    </div>
                                    <div class="col-lg-4 pT-10" style="vertical-align: middle !important;height: 40px;" >
                                        {{ participant.participants_name }}
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="progress" style="height: 35px;">
                                            <div class="progress-bar" role="progressbar" :style="{'width':participant.percentage_v+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ parseFloat(participant.percentage_v).toFixed(2)}}%</div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="row" v-for="(event_settup,index) in events" :key="index">
                <div class="col-12">
                    <b>{{ event_settup.event_settup_title }}</b>
                    <div class="row" v-if="event_settup.participants != null">
                        <template v-for="(participant,index_p) in event_settup.participants" :key="index_p">
                            <div class="col-lg-1 pL-10">
                                <img  :src="`/storage/${participant.participants_profile}`"  class="w-2r pull-right" style="border: 1.5px solid green;" :height="35" :width="100"  alt="...">
                            </div>
                            <div class="col-lg-5 pT-10" style="vertical-align: middle !important;height: 40px;" >
                                {{ participant.participants_name }}
                            </div>
                            <div class="col-lg-6">
                                <div class="progress" style="height: 35px;">
                                    <div class="progress-bar" role="progressbar" :style="{'width':participant.percentage_v+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ participant.percentage_v }}%</div>
                                </div>
                            </div>
                        </template>
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
        events: Object,
        event_detail:Object
    },
    data(){
        return{
           
        }
    },
    methods:
    {
    }

}
</script>