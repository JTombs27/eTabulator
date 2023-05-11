<template>
    <Head>
        <title>Participants Page</title>
    </Head>
    <div class="row gap-10 masonry pos-r pX-40">
        <div class="col-lg-12 mT-10">
            <div class="peers fxw-nw jc-sb ai-c">
                <h3><b>List of  Participants of <span style="color:blue;">{{ settupData[0]['event_settup_title'] }}</span></b></h3>
                <div class="peers">
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="tabl-responsive bgc-white p-20 bd shadow-sm">
                <table class="table " style="margin-bottom:0px;">
                    <tr v-for="(eventX, index) in participants.data" :key="index">
                        <td>
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-sm-12 text-center">
                                    <img class="cover" style="width:200px;height: 200px;"   :src="`/storage/${eventX.participants_profile}`" alt=""/>
                                </div>
                                <div class="col-lg-4 col-md-3 col-sm-12">
                                    <table >
                                        <tr>
                                            <td>
                                                <label class="c-blue-900" style="font-family: 'Courier New', Courier, monospace;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts c-blue-700" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                                                    </svg>
                                                    Name
                                                </label>
                                            </td>
                                            <td>:&nbsp;</td>
                                            <td>
                                                <b>{{eventX.participants_name}}</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label class="c-blue-900" style="font-family: 'Courier New', Courier, monospace;">
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill c-blue-700" viewBox="0 0 16 16">
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                    </svg>
                                                    Address
                                                </label>
                                            </td>
                                            <td>:&nbsp;</td>
                                            <td>
                                                <small>{{eventX.participants_address}}</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="col-md-12 c-blue-900">
                                                    <b>
                                                        <i>{{eventX.participants_details}}</i>
                                                    </b>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="row mB-5 ">
                                        <div class="col-lg-5 p-10">
                                            <label style="font-size:14px;font-weight:bold;">Criteria</label>
                                            <label style="font-size:14px;font-weight:bold;" class="pull-right">%</label>
                                        </div>
                                        <div class="col-lg-4" style="padding-top: 10px;">
                                            <label style="font-size:14px;font-weight:bold;">Score</label>
                                        </div>
                                        <div class="col-lg-3" style="padding-top: 10px;">
                                            <label style="font-size:14px;font-weight:bold;" class="pull-right"><span class="badge bg-warning text-dark" style="font-size: 14px;font-weight: bold;">Total :{{ total_percentage +' %' }}</span></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 bd mB-5 pX-10 shadow-sm" v-for="(criteria,index) in  criteriaVoteGroup">
                                        <div class="row">
                                            <div class="col-lg-5 p-10">
                                                <label style="font-size:14px;font-weight:bold;">{{ criteria.criteria_description}}</label>
                                                <label style="font-size:14px;font-weight:bold;" class="pull-right">{{parseInt(criteria.criteria_percentage) }}%</label>
                                            </div>
                                            <div class="col-lg-6" style="padding-top: 10px;">
                                                <div class="slidecontainer">
                                                    <input type="range" @change="computeTotal" style="width:100%;" min="1" :disabled="btnVoteDisabled" :max="criteria.criteria_percentage" v-model="criteria.vote_value" class="slider" >
                                                </div>
                                            </div>
                                            <div class="col-lg-1" style="padding-top: 10px;">
                                                <label style="font-size:14px;font-weight:bold;" class="text-dark pull-right">{{criteria.vote_value+' %'}}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-end">
                                        <button @click="btnCastVote" :disabled="btnVoteDisabled" class="btn btn-primary shadow-sm">Save Vote</button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="participants.data <= 0"><td class="text-center text-danger"  colspan="6">No Participants found.</td></tr>
                
                </table>
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <pagination :next="participants.next_page_url" :prev="participants.prev_page_url" />
            </div>
        </div>
    </div>
</template>
<style>
.cover {
  object-fit: cover;
  width:150px;
  height:150px;
}
</style>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    components: { Pagination, Filtering },
    props:{
        settupData  :Object,
        filterDataX : Object,
        can         : Object,
        participants:Object,
        panelInfo   :Object
    },
    data(){
        return{
            myModal                 : null,
            criteriaVoteGroup       :[],
            actual_liters           : 0,
            invalid_actual_liters   :false,
            settupEvent             :[],
            total_percentage        :0,
            event_id                :"",
            btnVoteDisabled:true,
            form                    :useForm({
                                        event_id    :"",
                                        settup_id   :"",
                                        id          :""
                                    }),
            filterData              : {
                event_id:this.filterDataX.event_id,
                settup_id:this.filterDataX.settup_id,
                id:""
            },
        }
    },
  mounted()
    {
        this.loadCriteria();
    },
    watch:{
        participants:function(value)
        {
            this.loadCriteria();
        }
    },
    methods:
    {
        computeTotal()
        {
            this.total_percentage = 0;
            for(var x=0; x < this.criteriaVoteGroup.length;x++)
            {
                this.total_percentage = (parseInt(this.total_percentage) + parseInt(this.criteriaVoteGroup[x].vote_value));
            }
        },
        loadCriteria()
        {
            axios.post("/panel-judging/get-criteria/for-voting",{settup_id:this.settupData[0].id,participants_id:this.participants.data[0].id,panel_id: this.panelInfo.id})
            .then(response=>
            {
                if(response.data != null)
                {
                    this.criteriaVoteGroup  = response.data.length > 0 ? response.data:null;
                    this.computeTotal();
                    this.btnVoteDisabled    = this.criteriaVoteGroup[0].already_vote == "Y" ? true:false;
                }
            });
        },
        ddl_eventchange(event_params)
        {
            this.settupEvent            = event_params.settups;
            this.filterData.settup_id   = "";
            this.runFilter();
        },
        btnCastVote()
        {
            this.form.event_id  = this.filterData.event_id;
            this.form.settup_id = this.filterData.settup_id;
            var action_route    = '/panel-judging/panel-vote';
            this.form.transform
            (
                (data) =>
                (
                    {
                        data,
                        criteriaVoteGroup: this.criteriaVoteGroup
                    }
                )
            )

            this.form.post(action_route,{
            preserveScroll: true,
            preserveState:true,
            onSuccess: () => 
            {
                this.$inertia.reload({only:['participants']});
            },
            });
        }

    }

}
</script>