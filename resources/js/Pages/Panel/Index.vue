<template>
    <Head>
        <title>Panel Page</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-md-12 ">
                <div class="col-lg-12">
                    <div class="peers fxw-nw jc-sb ai-c">
                        <h3><b>List of  Panel to Judge Setup</b></h3>
                        <div class="peers">
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-12 bgc-white p-10 bd shadow-sm">
                    <div class="row mT-5">
                        <div class="col-md-1">
                            <label class="col-form-label"><b>Event:</b></label>
                        </div>
                        <div class="col-md-4">
                            <Select2 id="ddl_event" v-model="filterData.event_id" :options="event" @select="ddl_eventchange($event)" />
                        </div>
                        <div class="col-md-1">
                            <label class="col-form-label"><b>Setup:</b></label>
                        </div>
                        <div class="col-md-5">
                            <Select2 id="settup_select" class="js-data-example-ajax" v-model="filterData.settup_id" :options="settupEvent" :settings="{templateResult:categoriesResults, templateSelection:categorySelection}" @select="runFilter($event)" />
                        </div>
                        <div class="col-md-1 text-end">
                            
                            <button type="button" class="btn btn-outline-primary c-blue-500 cH-white" @click="createClick">
                                <b><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 20 20">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>Add</b>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        <div class="col-12">
            <div class="tabl-responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th class="text-center" width="10%">PROFILE</th>
                            <th width="35%">PANEL NAME</th>
                            <th width="55%" class="text-center">PANEL INFORMATION</th>
                            <th width="10%"  class="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(panel, index) in panel_list.data" :key="index">
                            <td class="text-center"> <img class="cover bdrs-50p" style="width:50px;height: 50px;"   :src="`/storage/${panel.profile_path}`" alt=""/></td>
                            <td class="text-middle">{{panel.user_information.name  }}</td>
                            <td class="">{{panel.panel_info}}</td>
                            <td class="text-center"> 
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" @click="editRowClick(panel.id)" class="btn btn-outline-primary btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteSettupCriteria(panel.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="panel_list.data <= 0"><td class="text-center text-danger"  colspan="6">No Set of Panel!</td></tr>
                    </tbody>
                </table>

                <div class="row">
                    <div class="col-md-6">
                        <pagination :next="panel_list.next_page_url" :prev="panel_list.prev_page_url" />
                    </div>
                    <div class="col-md-6 text-end" v-if="panel_list.data.length >= 1">
                        <Label>{{ panel_list.data[0]["total_percentage"] }}</Label>
                    </div>
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
        panel_list      :Object,
    },
    data(){
        return{
            settupEvent   :[],
            criteriaGroup :[],
            event_id      :"",
            rowIndex_edit :0,
            form: useForm({
                id            :null,
                settup_id     :this.settup_id,
                event_id        : this.event_id
           }),
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
    },
    methods:
    {
        deleteSettupCriteria(par_id)
        {
            const res = confirm("Are you sure to delete this Panel?");
            if(res)
            {
                this.form.reset();
                this.form.event_id  = this.filterData.event_id;
                this.form.settup_id = this.filterData.settup_id;
                this.form.id        = par_id;
                this.form.post("/panel/delete",this.form);
            }
        },

        ddl_eventchange(event_params)
        {
            this.settupEvent            = _.filter(event_params.settups,function(o){return o.event_settup_withpannel == 1});
            this.filterData.settup_id   = "";
            this.runFilter();
        },

        categoriesResults(state)
        {
            if (state.loading) {
                return `Searching...`;
            }

            var $container = $(
                `<div><span class="mL-10">${state.event_settup_title}</span></div>`
            );

            return $container;
        },
        categorySelection(state) 
        {
            if (!state.selected) {
                return "Search Setup"
            }
            var $container = $(
                `<div><span class="mL-10">${state.event_settup_title}</span></div>`
            );

            return $container;
        },
        editRowClick(par_id){
            if(this.filterData.event_id == "" || this.filterData.settup_id == "")
            {   
                alert("Please select filters!");
            }
            else{
                window.location = "/panel/edit/"+par_id+"?event_id="+this.filterData.event_id+'&settup_id='+this.filterData.settup_id;
            }
        },
        createClick(){
            if(this.filterData.event_id == "" || this.filterData.settup_id == "")
            {   
                alert("Please select filters!");
            }
            else{
                window.location = "/panel/create?event_id="+this.filterData.event_id+'&settup_id='+this.filterData.settup_id;
            }
        },
        runFilter() 
        {
            this.$inertia.get('/panel',  this.filterData, {
                preserveState:true
            })
        },
    }

}
</script>