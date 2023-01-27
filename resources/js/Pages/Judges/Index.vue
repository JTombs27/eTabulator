<template>
    <Head>
        <title>Judge Page</title>
    </Head>
   
    <div class="col-lg-12 pX-20">
        <div class="row ">
            <template  v-for="(setup,index) in tobe_judge.data" :key="index">
                <div class="col-md-4 mT-10" >
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1"><b>{{ setup.settup_info.event_settup_title }}</b></h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">
                                        <img class="cover bdrs-50p" style="width:40px;height: 40px;"   :src="`/storage/${setup.participants_profile}`" alt=""/> No winners yet
                                    </span>
                                </div>
                                <div class="peer" style="cursor: pointer;"> 
                                    <!-- 
                                        &nbsp; -->
                                    <span @click="goToParticipants(setup.settup_info.id)"  class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-700 bgcH-red-100 c-white">View Participants</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
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
        event           : Object,
        filterDataX     : Object,
        can             : Object,
        tobe_judge      :Object,
    },
    data(){
        return{
            settupEvent   :[],
            criteriaGroup :[],
            event_id      :"",
            event_descr   :"",
            settup_descr  :"",
            btnSaveTitle  :"Save All",
            showModal     :false,
            actionTitle   :"Add Criteria",
            actionMode    :"Add",
            total_percentage:0,
            rowIndex_edit:0,
            form          :useForm
                                (
                                    {    
                                        event_id    :""
                                    ,   settup_id   :""
                                    ,   id:""
                                    }
                                ),
            filterData    : 
                            {
                                event_id    :this.filterDataX.event_id,
                                settup_id   :this.filterDataX.settup_id
                            },
        }
    },
  mounted()
    {
        if(this.filterDataX.event_id)
        {
         
            let vm                     = this;
            var parX                   = _.find(this.event,function(o){return o.id ==vm.filterData.event_id});
            this.filterData.event_id   = this.filterDataX.event_id;
            this.filterData.settup_id  = this.filterDataX.settup_id;
            var newData = [];
            for(var x = 0; x < parX.settups.length;x++)
            {
                if(parX.settups[x].id == this.filterData.settup_id)
                {
                    newData.push({id:parX.settups[x].id,text:parX.settups[x].event_settup_title,event_settup_title:parX.settups[x].event_settup_title, selected: true});
                }
                else  if(parX.settups[x].event_settup_withpannel == 1)
                {
                    newData.push({id:parX.settups[x].id,text:parX.settups[x].event_settup_title,event_settup_title:parX.settups[x].event_settup_title});
                }
            }

            $('#settup_select').select2({
                data:newData
            });
        }
        
    },
    watch:{
        // criteriaGroup:_.debounce(function (value) 
        // {
        //    this.total_percentage = this.total_percentage + 20;
        // })
    },
    methods:
    {
        goToParticipants(par_settup)
        {
            this.$inertia.get('/panel-judging/participants',  {settup_id:par_settup});
        }
    }

}
</script>
<!-- <style>
.grad1 {
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(160deg, #2e10d8 10%, #f71d1d 70%, #e3fc55 95%);
}
 body{
  /* background-color: #350c0c !important; */
  background-color: #350c0c !important;
}
</style> -->