<template>
    <Head>
        <title>Participants Page</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="col-md-12 ">
                <div class="col-md-12 bgc-white p-10 bd shadow-sm">
                    <!-- <div class="row">
                        <div class="col-md-1">
                            <label class="col-form-label"><b>Search:</b></label>
                        </div>
                        <div class="col-md-10">
                            <input v-model="search" type="text" class="form-control " placeholder="Search...">
                        </div>
                        <div class="col-md-1 text-end">
                            <button type="button" class="btn btn-outline-primary c-blue-500 cH-white" @click="createClick">
                                <b><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 20 20">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>Add</b>
                            </button>
                        </div>
                    </div> -->
                    <div class="row mT-5">
                        <div class="col-md-1">
                            <label class="col-form-label"><b>Event:</b></label>
                        </div>
                        <div class="col-md-4">
                            <Select2 v-model="filterData.event_id" :options="event" @select="ddl_eventchange($event)" />
                        </div>
                        <div class="col-md-1">
                            <label class="col-form-label"><b>Setup:</b></label>
                        </div>
                        <div class="col-md-5">
                            <Select2 v-model="filterData.settup_id" :options="settupEvent" :settings="{templateResult:categoriesResults, templateSelection:categorySelection}" @select="runFilter($event)" />
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
                <table class="table table-hover table table-bordered">
                    <!-- <thead class="table-dark">
                        <tr>
                            <th width="10%" >Profile</th>
                            <th width="40%" >Participants Name</th>
                            <th width="40%" >Participants Details</th>
                            <th width="10%" style="text-align: center">ACTION</th> 
                        </tr>
                    </thead> -->
                    <tbody>
                        <tr v-for="(eventX, index) in participants.data" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-md-2">
                                        <img class="cover"   :src="`/storage/${eventX.participants_profile}`" alt=""/>
                                    </div>
                                    <div class="col-md-4">
                                        <table>
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
                                         
                                        </table>
                                        
                                    </div>
                                    <div class="col-md-5 c-blue-900">
                                        <b>
                                            <i>{{eventX.participants_details}}</i>
                                        </b>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                </svg>
                                            </button>
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="participants.data <= 0"><td class="text-center text-danger"  colspan="6">No Participants found.</td></tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="participants.next_page_url" :prev="participants.prev_page_url" />
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
        event       : Object,
        settupData  :Object,
        filterDataX : Object,
        can         : Object,
        participants:Object,
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
                                    }),
            filterData              : {
                event_id:this.filterDataX.event_id,
                settup_id:this.filterDataX.settup_id
            },
        }
    },
    async mounted()
    {
         this.filterData.event_id = this.filterDataX.event_id;
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

        ddl_eventchange(event_params)
        {
            this.filterData.settup_id = "";
            this.settupEvent = event_params.settups;
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
        createClick()
        {
            if(this.filterData.settup_id == "" || this.filterData.settup_id == null)
            {

            }
            else
            {
                
                this.$inertia.get('/event-participants/create',  this.filterData);
            }
        },
        runFilter() 
        {
            this.$inertia.get('/event-participants',  this.filterData, {
                preserveState:true
            })
        },
    }

}
</script>