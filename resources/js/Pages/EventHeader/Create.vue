<template>
    <Head>
       <title>{{ pageTitle }} Events</title>
   </Head>
   <div class="row gap-20 masonry pos-r">
       <div class="peers fxw-nw jc-sb ai-c">
           <h3>{{ pageTitle }} Event</h3>
           <Link href="/event-header">
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
                            <label for="">Event Title</label>
                            <input type="text" v-model="form.event_title" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_title">{{ form.errors.event_title }}</div>
                        </div>
                        <div class="col-md-6 mT-5">
                            <label for="">Event From:</label>
                            <input type="date" v-model="form.event_from" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_description">{{ form.errors.event_description }}</div>
                        </div>
                        <div class="col-md-6 mT-5">
                            <label for="">Event To:</label>
                            <input type="date" v-model="form.event_to" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_from">{{ form.errors.event_from }}</div>
                        </div>
                        <div class="col-md-12 mT-5">
                            <label for="">Event Description</label>
                            <textarea type="text" @input="displayContent" v-model="form.event_description" class="form-control" autocomplete="chrome-off"></textarea>
                           
                            <div class="fs-6 c-red-500" v-if="form.errors.event_to">{{ form.errors.event_to }}</div>
                        </div>
                        <div class="col-md-12 mT-5">
                            <label for="">Event Background Image</label>
                            <input type="file" @change="onFileChange" @input="form.background_image = $event.target.files[0]" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.background_image">{{ form.errors.background_image }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12 p-10 ">
                            <div class="col-md-12 p-10" :style="'background-image:url('+url+'); background-size:100% 100%'">
                                <h3>{{form.event_title}}</h3>
                                <div v-html="form.event_description" ></div>
                                <editor-content :editor="editor" />
                            </div>
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
   },
   data() {
       return {
           form: useForm({
               id:null,
               event_title:"",
               event_description:"",
               event_from:"",
               event_to:"",
               background_image:""
           }),
           url:'../images/bg.jpg',
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

    //    getGasolineStations() {
    //        axios.post('/travels/gasoline-station')
    //            .then((response) => {
    //                this.stations = response.data;
    //            });
    //    },
       
      
       submit() {

           if (this.editData !== undefined) {
               this.form.patch("/event-header/" + this.form.id, this.form);
           } else {
              //this.form.background_image = "";
               this.form.post("/event-header/create-event", this.form);
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