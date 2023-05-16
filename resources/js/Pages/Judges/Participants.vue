<template>
    <Head>
        <title>Participants Page</title>
    </Head>
    <div class="row p-10">
        <div class="col-lg-12 mB-10">
            <span style="color:blue;"><b> PARTICIPANTS  FOR {{ settupData[0]['event_settup_title'] }}</b></span>
        </div>
        <div class="col-lg-12" v-for="(eventX, index) in participants.data" :key="index">
                <div class="row" >
                    <div class="col-lg-12" style="position: absolute;margin-top: 5px;margin-left: 5px;z-index: 9999;">
                        <img class="cover" style="width: 150px;height: 100%; max-height: 200px; border: 1px solid gray;" :src="`/storage/${eventX.participants_profile}`" alt=""/>
                        <br><span class="badge bg-secondary">{{eventX.participants_name}}</span>
                        <br><label class="badge bg-secondary text-left"><i>{{eventX.participants_address}}</i></label>
                        <br><small style="background-color: aquamarine;"> <i>{{eventX.participants_details}}</i> </small>
                    </div>
                    <div class="col-sm-6">
                        <img class="cover" style="width: 100%;height: 280px;opacity: 0.5;background-color: gray;" :src="`/storage/${eventX.participants_profile}`" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="row mB-5 ">
                        <div class="col-lg-5 p-10">
                            <label style="font-size:14px;font-weight:bold;">Criteria</label>
                            <label style="font-size:14px;font-weight:bold;" class="pull-right">%</label>
                        </div>
                        <div class="col" style="padding-top: 10px;">
                            <label style="font-size:14px;font-weight:bold;">Score</label>
                        </div>
                        <div class="col" style="padding-top: 10px;">
                            <label style="font-size:14px;font-weight:bold;" class="pull-right"><span class="badge bg-warning text-dark" style="font-size: 14px;font-weight: bold;">Total :{{ total_percentage +' %' }}</span></label>
                        </div>
                    </div>
                    <div class="col-lg-12 bd mB-5 pX-10 shadow-sm" v-for="(criteria,index) in  criteriaVoteGroup">
                        <div class="row">
                            <div class="col-lg-5 p-10">
                                <label style="font-size:14px;font-weight:bold;">{{ criteria.criteria_description}}</label>
                                <label style="font-size:14px;font-weight:bold;" class="pull-right">{{parseInt(criteria.criteria_percentage) }}%</label>
                            </div>
                            <div class="col-10" style="padding-top: 10px;">
                                <div class="slidecontainer">
                                    <input type="range" @change="computeTotal" style="width:100%;" min="1" :disabled="btnVoteDisabled" :max="criteria.criteria_percentage" v-model="criteria.vote_value" class="slider" >
                                </div>
                            </div>
                            <div class="col-2" style="padding-top: 10px;">
                                <label style="font-size:14px;font-weight:bold;" class="text-dark pull-right">{{criteria.vote_value+' %'}}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 text-end">
                        <pagination :next="participants.next_page_url" :prev="participants.prev_page_url" class="pull-left" />
                        <button @click="btnCastVote" :disabled="btnVoteDisabled" class="btn btn-primary shadow-sm">Save Vote</button>
                    </div>
                </div>
        </div>
       
    </div>
</template>
<style>
.cover {
  object-fit: cover;
  width:150px;
  height:150px;
  transition: transform .2s; 
  border-radius: 10px;
}
@media only screen and (width<= 600px) 
{
  .header-label{
    color:red;
  }
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