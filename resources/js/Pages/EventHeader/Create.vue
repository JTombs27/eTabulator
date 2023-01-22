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
                            <div class="fs-6 c-red-500" v-if="form.errors.event_from">{{ form.errors.event_from }}</div>
                        </div>
                        <div class="col-md-6 mT-5">
                            <label for="">Event To:</label>
                            <input type="date" v-model="form.event_to" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.event_to">{{ form.errors.event_to }}</div>
                        </div>
                        <div class="col-md-12 mT-5">
                            <label for="">Event Description</label>
                            <textarea type="text" @input="displayContent" v-model="form.event_description" class="form-control" autocomplete="chrome-off"></textarea>
                           
                            <div class="fs-6 c-red-500" v-if="form.errors.event_description">{{ form.errors.event_description }}</div>
                        </div>
                        <div class="col-md-12 mT-5" v-if="false">
                            <label for="">Event Background Image</label>
                            <input type="file" @change="onFileChange" @input="form.background_image = $event.target.files[0]" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.background_image">{{ form.errors.background_image }}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-12 p-10 ">
                            <div class="col-md-12 p-10" :style="'background-image:url('+url+'); background-size:100% 100%'">
                                <h3>{{form.event_title}}</h3>
                                <div v-html="form.event_description" ></div>
                                <editor-content :editor="editor" />
                            </div>
                        </div>
                    </div>
                </div> -->
                
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
       if (this.editData !== undefined) 
       {
           this.loading = true
            this.form.id                    = this.editData.id
            this.form.event_title           = this.editData.event_title
            this.form.event_description     = this.editData.event_description
            this.form.event_from            = this.editData.event_from
            this.form.event_to              = this.editData.event_to
            this.form.background_image      = this.editData.background_image
            this.url                        =  "../"+this.form.background_image
            this.pageTitle                  = "Edit"
        }
        else {
           this.pageTitle = "Create"
       }
   
   },
   beforeUnmount() {
    this.editor.destroy()
  },

   methods: 
   {
       onFileChange(e){
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
       },
       submit() {

           if (this.editData !== undefined) 
           {
               this.form.post("/event-header/update", this.form);
           } else {
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