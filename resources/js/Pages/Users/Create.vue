<template>
     <Head>
        <title>{{ pageTitle }} users</title>
    </Head>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} users</h3>
            <Link href="/users">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <!-- <div class="col-md-12 mT-10  gap-20">
                    <div class="row">
                        <label for="" class="col-md-4 col-12 my-auto offset-md-2 text-md-start"><b> Select Agency Type</b><small class="text-danger"><strong>(Required)</strong></small></label>
                        <div class="col-md-3 col-6 d-grid">
                            <input type="radio" class="btn-check" name="options-outlined" id="capitol" autocomplete="off" value="0" v-model="form.non_capitol">
                            <label class="btn btn-sm btn-outline-success text-nowrap" for="capitol">
                                <svg v-if="form.non_capitol == false" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                                Fetch from API 
                            </label>
                        </div>
                        <div class="col-md-3 col-6 d-grid">
                            <input type="radio" class="btn-check" name="options-outlined" id="non-capitol" autocomplete="off" value="1" v-model="form.non_capitol">
                            <label class="btn btn-sm btn-outline-success text-nowrap" for="non-capitol">
                                <svg v-if="form.non_capitol == true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                                Fetch from database
                            </label>
                        </div>
                    </div>
                </div> -->
                <label for="">Permission</label>
                <select class="form-select" v-model="form.permission">
                    <option value="Admin">Admin</option>
                    <option value="Pannel">Pannel</option>
                    <option value="Student">Student</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.permission">{{ form.errors.permission }}</div>

                <label for="">Names</label>
                <input type="text" class="form-control" v-model="form.name" >
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                <label for="">Username</label>
                <input type="text" v-model="form.username" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.username">{{ form.errors.username }}</div>
                <label for="">Password</label>
                <input :type="passwordType" v-model="form.password" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.password">{{ form.errors.password }}</div>
                <label for="">Confirm Password</label>
                <input :type="passwordType" v-model="form.password_confirmation" class="form-control" autocomplete="chrome-off">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="showPassword">
                  <label class="form-check-label" for="flexCheckDefault">
                    Show Password
                  </label>
                </div>
                <div class="fs-6 c-red-500" v-if="form.errors.password">{{ form.errors.password }}</div>
                <input type="hidden" v-model="form.id" class="form-control" autocomplete="chrome-off">
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">Save
                    changes</button>
            </form>


        </div>
    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
import axios from "axios";
import { computed } from '@vue/runtime-core';

export default {
    props: {
        editData: Object,
    },
    data() {
        return {
            form: useForm({
                gasoline_id             :null,
                permission              : "",
                name                    : "",
                citymunCode             :"",
                brgyCode                :"",
                purok_id                :"",
                email                   : "",
                password                : "",
                password_confirmation   :"",
                username                :"",
                cats                    :null,
                id                      : null,
                office_id               :null,
                non_capitol             :null
            }),
            stations:[],
            municipals:[],
            barangays:[],
            offices:[],
            employees:[],
            testValue:"",
            pageTitle: "",
            showPassword:null,
            loading:false,
            passwordType:"password",

        };
    },
    mounted() 
    {
        if (this.editData !== undefined) {
            this.loading = true
            this.pageTitle = "Edit"
            this.form.name = this.editData.name
            this.form.username = this.editData.username
            this.form.email = this.editData.email
            this.form.id = this.editData.id
            this.form.gasoline_id = this.editData.gasoline_id
            this.form.cats = this.editData.cats
            this.form.office_id = this.editData.office_id
            this.form.permission = this.editData.role
            if (this.editData.office_id) {
                $('#office').select2({
                    data:[{text: this.editData.office.office, id:this.editData.office_id}],
                })
            }
        } else {
            this.pageTitle = "Create"
        }
    },

    methods: 
    {
        
        submit() {

            if (this.editData !== undefined) {
                this.form.patch("/users/" + this.form.id, this.form);
            } else {
                this.form.post("/users", this.form);
            }

        },

        loadMunicipals() { 
            axios.post('/municipalities').then((response) => {
                this.municipals = response.data
                
            })
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

        'form.permission': function(value) {
            if (value != 'gasoline-station') {
                this.form.gasoline_id = null
            }
        },

        'form.non_capitol': function() {
            this.fetchEmployees();
        }
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