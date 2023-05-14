<template>
    <Head>
       <title>{{ pageTitle }} Event Setup</title>
   </Head>
   <div class="row gap-20 masonry pos-r">
        <div class="col-md-8">
            <div class="peers fxw-nw jc-sb ai-c">
                <h3>{{ pageTitle }} Event Setup</h3>
                <Link :href="`/event-setup/`+event.id">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
                </Link>
            </div>
        </div>
           <form @submit.prevent="submit()">
            <div class="row">
                <div class="col-md-8">
                    <div class="alert alert-primary" role="alert">
                        {{event.event_title}}
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Setup Title</label>
                            <input type="text" v-model="form.event_settup_title" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_settup_title">{{ form.errors.event_settup_title }}</div>
                        </div>
                        <div class="col-md-12 mT-5">
                            <label for="">Setup Requirements</label>
                            <textarea type="text" v-model="form.event_settup_requirement" class="form-control" autocomplete="chrome-off"></textarea>
                            <div class="fs-6 c-red-500" v-if="form.errors.event_settup_requirement">{{ form.errors.event_settup_requirement }}</div>
                        </div>
                        <div class="col-md-4 mT-10">
                            <div class="form-check form-switch text-start">
                                
                                <input 
                                    type="checkbox" 
                                    class="form-check-input" 
                                    role="switch"
                                    v-model="form.event_settup_withaudience"
                                    id="event_settup_withaudience"
                                  
                                >
                                <label class="form-check-label" for="event_settup_withaudience">With Audience</label>
                            </div>
                        </div>
                        <div class="col-md-4 mT-10">
                            <div class="form-check form-switch text-start">
                                
                                <input 
                                    type="checkbox" 
                                    class="form-check-input" 
                                    role="switch"
                                    v-model="form.event_settup_withpannel"
                                    id="event_settup_withpannel"
                                >
                                <label class="form-check-label" for="event_settup_withpannel">With Panel</label>
                            </div>
                        </div>
                        <div class="col-md-4 mT-10" v-if="false">
                            <div class="form-check form-switch text-start">
                                
                                <input 
                                    type="checkbox" 
                                    class="form-check-input" 
                                    role="switch"
                                    v-model="form.event_settup_withcreteria"
                                    id="event_settup_withcreteria"
                                >
                                <label class="form-check-label" for="event_settup_withcreteria">With Creteria</label>
                            </div>
                        </div>
                        <div class="col-md-6 mT-10" v-if="false">
                            <label for="">Audience Vote Open:</label>
                            <input type="date" :disabled="!form.event_settup_withaudience" v-model="form.event_settup_withaudience_vote_open" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_settup_withaudience_vote_open">{{ form.errors.event_settup_withaudience_vote_open }}</div>
                        </div>
                        
                        <div class="col-md-6 mT-10"  v-if="false">
                            <label for="">Audience Vote Close:</label>
                            <input type="date" :disabled="!form.event_settup_withaudience" v-model="form.event_settup_withaudience_vote_closed" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_settup_withaudience_vote_closed">{{ form.errors.event_settup_withaudience_vote_closed }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 text-end">
                    <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">
                    <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">Save
                        changes</button>
                </div>
              
            </div>
        </form>
   </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import axios from "axios";

import { computed } from '@vue/runtime-core';

export default {
  
   props: {
       editData: Object,
       event: Object,
   },
   data() {
       return {
           form: useForm({
               id:null,
               event_settup_title                       :"",
               event_settup_requirement                 :"",
               event_settup_withpannel                  :false,
               event_settup_withaudience                :false,
                event_settup_withaudience_vote_open     :"",
               event_settup_withaudience_vote_closed    :"",
               event_settup_withcreteria                :false,
               settup_status                            :"",
               event_id                                 :this.event.id
           }),
           url:'../images/bg.jpg',
           pageTitle:"",

       };
   },
   mounted() 
   {
        if(this.editData !== null)
        {
            this.pageTitle = "Edit";
            this.form.id                                    = this.editData.id
            this.form.event_settup_title                    = this.editData.event_settup_title
            this.form.event_settup_requirement              = this.editData.event_settup_requirement
            this.form.event_settup_withpannel               = this.editData.event_settup_withpannel == 1 ? true:false;
            this.form.event_settup_withaudience             = this.editData.event_settup_withaudience   == 1 ? true:false;
            this.form.event_settup_withaudience_vote_open   = this.editData.event_settup_withaudience_vote_open
            this.form.event_settup_withaudience_vote_closed = this.editData.event_settup_withaudience_vote_closed
            this.form.event_settup_withcreteria             = this.editData.event_settup_withcreteria == 1 ? true:false;
            this.form.settup_status                         = this.editData.settup_status
        }
        else{
            this.pageTitle = "Create";
        }
   },

   methods: {
       onFileChange(e){
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
       },
      
       submit() {

           if (this.editData !== undefined) 
           {
               this.form.post("/event-setup/update", this.form);
           } else {
               this.form.post("/event-setup/create-setup", this.form);
           }

       }
   },

   watch: {
       showPassword: function(value) {
           if (value) {
               this.passwordType = 'text'
           } else {
               this.passwordType = 'password'
           }
       },
   },

   computed: {
       urlEmp() {
           if (this.form.non_capitol == false) {
               return `http://122.54.19.172:91//api/PGDDO_Employees`
           } else if(this.form.non_capitol == true) {
               return `/employees/fetch`
           }
       }
   }
};
</script>