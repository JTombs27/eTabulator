<template>
    <Head>
       <title>{{ pageTitle }} Participants</title>
   </Head>
   <div class="row gap-20 masonry pos-r">
       <div class="peers fxw-nw jc-sb ai-c">
           <h3>{{ pageTitle }} Participants</h3>
           <Link :href="`/event-participants?event_id=`+event_id+`&settup_id=`+settup_id">
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
               viewBox="0 0 16 16">
               <path fill-rule="evenodd"
                   d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
               <path fill-rule="evenodd"
                   d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
           </svg>
           </Link>
       </div>
       
     
           <form @submit.prevent="submit()">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Participants Name</label>
                            <input type="text" v-model="form.participants_name" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.participants_name">{{ form.errors.participants_name }}</div>
                        </div>
                        <div class="col-md-12">
                            <label for="">Participants Address</label>
                            <input type="text" v-model="form.participants_address" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.participants_address">{{ form.errors.participants_address }}</div>
                        </div>
                        <div class="col-md-12 mT-5">
                            <label for="">Other Details</label>
                            <textarea type="text"  v-model="form.participants_details" class="form-control" autocomplete="chrome-off"></textarea>
                            <div class="fs-6 c-red-500" v-if="form.errors.participants_details">{{ form.errors.participants_details }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12 mT-5">
                            <label for="">Participants Picture</label>
                            <input type="file" @change="onFileChange" @input="form.participants_profile = $event.target.files[0]" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.participants_profile">{{ form.errors.participants_profile }}</div>
                        </div>
                        <div class="col-md-12 p-10 ">
                            <dic class="row">
                                <div class="col-lg-2">
                                    Preview:
                                </div>
                                <div class="col-lg-10 text-center preview" :style="`height:180px;background-image: url(`+url+`)`">
                                    <svg v-if="url == ''" xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg>
                                </div>
                            </dic>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 text-end">
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
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
    EditorContent,
  },
   props: {
       editData: Object,
       settup_id:"",
       event_id:""
   },
   data() {
       return {
           form: useForm({
                id                      :null,
                settup_id               :"",
                participants_name       :"",
                participants_address    :"",
                participants_details    :"",
                participants_profile    :"",
                event_id                :this.event_id
           }),
           url:'',
           editor: null,

       };
   },
   mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })
    //    if (this.editData !== undefined) {
    //        this.loading = true
    //        this.pageTitle = "Edit"
    //        this.form.name = this.editData.name
    //        this.form.username = this.editData.username
    //        this.form.email = this.editData.email
    //        this.form.id = this.editData.id
    //        this.form.gasoline_id = this.editData.gasoline_id
    //        this.form.cats = this.editData.cats
    //        this.form.office_id = this.editData.office_id
    //        this.form.permission = this.editData.role
    //        if (this.editData.office_id) {
    //            $('#office').select2({
    //                data:[{text: this.editData.office.office, id:this.editData.office_id}],
    //            })
    //        }
    //    } else {
    //        this.pageTitle = "Create"
    //    }
    //    $('#office').select2({
    //        ajax: {
    //            url: '/offices/fetch',
    //            dataType:'json',
    //            delay:500,
    //            data: function(filter) {
    //                return {filter:filter.term};
    //            },
    //            processResults: function(data, params) {
    //                params.page = params.page || 1;

    //                return{
    //                    results: $.map(data, function(obj) {
    //                        return {
    //                            id: obj.id,
    //                            text: obj.text,
    //                            office: obj.office
    //                        }
    //                    })
    //                };
    //            },
    //            cache: true
    //        },
    //        placeholder: 'Search for an office',
    //        minimumInputLength: 2,
    //        templateResult:this.formatOfficeSelection,
    //        templateSelection:this.formatOffice
    //    })
       // this.loadOffices();
   },
   beforeUnmount() {
    this.editor.destroy()
  },

   methods: {
       onFileChange(e){
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
       },
       submit() {

           if (this.editData !== undefined) {
               this.form.patch("/event-participants/" + this.form.id, this.form);
           } else {
              //this.form.background_image = "";
               this.form.settup_id = this.settup_id;
               this.form.post("/event-participants/create-participant", this.form);
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
<style>
    .preview{
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: contain !important;
            box-sizing: border-box !important;
    }
</style>