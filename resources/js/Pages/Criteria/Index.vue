<template>
    <Head>
        <title>Criteria Page</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-md-12 ">
                <div class="col-lg-12">
                    <div class="peers fxw-nw jc-sb ai-c">
                        <h3><b>List of Criteria for Judging</b></h3>
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
                            <!-- <th width="10%">ID</th> -->
                            <th width="70%">CRITERIA DESCRIPTION</th>
                            <th width="20%" class="text-center">CRITERIA PERCENTAGE</th>
                            <th width="10%"  class="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(criteria, index) in criteria_list.data" :key="index">
                            <!-- <td>{{criteria.id  }}</td> -->
                            <td>{{criteria.criteria_description  }}</td>
                            <td class="text-center">{{criteria.criteria_percentage  }} %</td>
                            <td class="text-center"> 
                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" @click="editRowClick(index)" class="btn btn-outline-primary btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteSettupCriteria(criteria.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="criteria_list.data.length <= 0"><td class="text-center text-danger"  colspan="6">No Set of Criteria for Judging!</td></tr>
                    </tbody>
                </table>

                <div class="row">
                    <div class="col-md-6">
                        <pagination :next="criteria_list.next_page_url" :prev="criteria_list.prev_page_url" />
                    </div>
                    <div class="col-md-6 text-end pT-20" v-if="criteria_list.data.length >= 1">
                        <Label><b>Total Percentage: {{ criteria_list.data[0]["total_percentage"] }} %</b></Label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Modal 
        v-if="showModal" 
        :modalTitle ="actionTitle" 
        :buttonTitle="btnSaveTitle"
        @closeModal ="closeModal"
        :showBtn    = "true"
        @saveModal="saveCriteria"
    >
        <div class="row">
            <div class="col-lg-12 mT-5">
                <table class="table bgc-white table-bordered shadow-sm">
                    <tbody>
                        <tr><td width="30%"><b>Criteria for Event</b></td> <td  width="5%">:</td><td  width="65%">{{ event_descr }}</td></tr>
                        <tr><td width="30%"><b>Criteria for Settup</b></td><td  width="5%">:</td><td  width="65%"><b>{{ settup_descr }}</b></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-12">
            <div class="peers fxw-nw jc-sb ai-c">
                    <label for="exampleInputEmail1" class="form-label"><b>Setup Total Percentage: <span style="text-decoration:underline;">{{ total_percentage }} %</span> </b></label>
                    <button type="button" v-if="actionMode == 'Add'" @click="addNew()" class="btn btn-sm btn-outline-primary">+ Add</button>
            </div>
        </div>
        <template v-for="(criteria, index) in criteriaGroup" :key="index">
            <div class="row">
                <div class="col-md-12 pT-5">
                    <div class="peers fxw-nw jc-sb ai-c">
                        <label for="exampleInputEmail1" class="form-label"><b>Criteria {{ index +1 }}</b><span class="c-red-500">*</span></label>
                        
                        <span v-if="criteriaGroup.length >1"  @click="removeNode(index)" style="margin-top:-10px;">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size: 18px; font-weight: bolder; color:red;" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                    </span>
                    
                    </div>
                </div>
                <div class="col-md-12 ">
                    <div class="row">
                        <div class="col-md-12">
                            <input type="text" class="form-control" placeholder="Enter Criteria Description.."  v-model="criteria.criteria_description" />
                            <div class="form-text text-danger" v-if="(form.errors['criteriaGroup.'+index+'.criteria_description'])">{{ (form.errors['criteriaGroup.'+index+'.criteria_description'])}}</div>
                        </div>
                    </div>
                   
                </div>
                <div class="col-lg-12">
                    <div class="row mT-5">
                        <div class="col-md-6">
                            <input type="number" class="form-control" @change="computeTotal"  placeholder="Enter Percentage.."  v-model="criteria.criteria_percentage" />
                            <div class="form-text text-danger" v-if="(form.errors['criteriaGroup.'+index+'.criteria_percentage'])">{{ (form.errors['criteriaGroup.'+index+'.criteria_percentage'])}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Modal>
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
        criteria_list   :Object,
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
        addNew()
        {
            
            this.criteriaGroup.push(useForm({
                criteria_description  : "",
                criteria_percentage   : 0,
                settup_id             : this.filterData.settup_id,
                id                    : null
            }));
            this.computeTotal();

        },
        computeTotal()
        {
            this.total_percentage = 0;
            if(this.criteria_list.data.length > 0)
            {
                if(this.actionMode == "Add")
                {
                    this.total_percentage = this.criteria_list.data[0].total_percentage;
                }
                else{
                    this.total_percentage = this.criteria_list.data[this.rowIndex_edit].total_percentage - this.criteria_list.data[this.rowIndex_edit].criteria_percentage;
                }
            }

            for(var x=0; x < this.criteriaGroup.length;x++)
            {
                this.total_percentage = (parseInt(this.total_percentage) + parseInt(this.criteriaGroup[x].criteria_percentage));
            }
        },
        removeNode(index)
         {
            this.criteriaGroup.splice(index,1);
            this.computeTotal();
        },
        deleteSettupCriteria(par_id)
        {
            const res = confirm("Are you sure to delete this creteria?"+par_id);
            if(res)
            {
                this.form.reset();
                this.form.event_id  = this.filterData.event_id;
                this.form.settup_id = this.filterData.settup_id;
                this.form.id        = par_id;
                this.form.post("/criteria/delete",this.form);
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
        closeModal() 
        {
            this.showModal = false;
            $("#modal").hide();
            $('body').removeAttr('style');

            $('.modal-backdrop').remove();
        },
        saveCriteria()
        {
            if(this.total_percentage <=100)
            {
                this.form.event_id  = this.filterData.event_id;
            this.form.settup_id = this.filterData.settup_id;
            var action_route = this.actionMode == "Add" ? '/criteria/save-all-criteria': '/criteria/update';
            this.form.transform
            (
                (data) =>
                (
                    {
                        data,
                        criteriaGroup: this.criteriaGroup
                    }
                )
            )

                this.form.post(action_route,{
                preserveScroll: true,
                onSuccess: () => 
                {
                    this.closeModal();
                    this.showModal = false;
                    
                    this.$inertia.reload({only:['criteria_list']});
                },
                });
            }
            else
            {
                alert("CANT SAVE!\nTotal Percentage must be 100%.");
            }
            
        },
        editRowClick(rowIndex)
        {
            this.actionMode     = "Edit";
            this.btnSaveTitle   = "Update";
            this.criteriaGroup  = [];
            var event_data      = $('#ddl_event').select2('data');
            var setup_data      = $('#settup_select').select2('data');
            this.rowIndex_edit  = rowIndex;
            if(event_data)
            {
                this.event_descr = event_data[0].text;
            }
            
            if(setup_data)
            {
                this.settup_descr = setup_data[0].text;
            }
            let vm = this
            this.criteriaGroup.push(useForm({
                criteria_description  : vm.criteria_list.data[rowIndex]["criteria_description"],
                criteria_percentage   : vm.criteria_list.data[rowIndex]["criteria_percentage"],
                settup_id             : vm.criteria_list.data[rowIndex]["settup_id"],
                id                    : vm.criteria_list.data[rowIndex]["id"]
            }));
            this.computeTotal();

            this.showModal = true;
        },
        createClick()
        {
            this.form.clearErrors();
            if(this.filterData.settup_id == "" || this.filterData.settup_id == null)
            {

            }
            else
            {
                this.btnSaveTitle   = "Save All";
                this.actionMode     = "Add";
                this.criteriaGroup  = [];
                var event_data = $('#ddl_event').select2('data');
                var setup_data = $('#settup_select').select2('data');

                if(event_data)
                {
                    this.event_descr = event_data[0].text;
                }
                
                if(setup_data)
                {
                    this.settup_descr = setup_data[0].text;
                }

                this.addNew();
                this.showModal = true;
            }
        },
        runFilter() 
        {
            this.$inertia.get('/criteria',  this.filterData, {
                preserveState:true
            })
        },
    }

}
</script>