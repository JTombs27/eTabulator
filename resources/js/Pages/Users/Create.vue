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
                <div class="col-md-12 mT-10  gap-20">
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
                </div>
                <label for="">Permission</label>
                <select class="form-select" v-model="form.permission">

                    <option value="Admin">Admin</option>
                    <option value="PGO">PGO-Admin</option>
                    <option value="PG-Head">PG-Head</option>
                    <option value="RO">Requestioning Office</option>
                    <option value="PGSO">PGSO</option>
                    <option value="peo-motorpool">PEO Motorpool</option>
                    <option value="gasoline-station">Gasoline Station</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.permission">{{ form.errors.permission }}</div>
                
              <span v-if="form.permission == 'gasoline-station'">
                  <label for="">Gasoline Station</label>
                  <select class="form-select" v-model="form.gasoline_id">
                        <option value="" readonly disabled>Select station</option>
                        <option 
                          v-for="item in stations" 
                          :value="item.id"
                          :key="item.id">
                              {{item.name}}
                        </option>
                  </select>
                  <div class="fs-6 c-red-500" v-if="form.errors.gasoline_id">{{ form.errors.gasoline_id }}</div>
              </span>

                <label for="">Names</label>
                <input type="text" class="form-control" v-model="form.name" v-if="form.permission == 'gasoline-station'">
                <Select2 v-model="form.name" :class="{'d-none':form.permission == 'gasoline-station'}" id="emp_name" @select="selectName($event)"/>
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                
                <span :class="{'d-none':form.permission == 'gasoline-station'}">
                    <label for="">Office</label>
                    <Select2 v-model="form.office_id" id="office" />
                    <div class="fs-6 c-red-500" v-if="form.errors.office_id">{{ form.errors.office_id }}</div>
                </span>

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
                gasoline_id:null,
                permission: "",
                name: "",
                citymunCode:"",
                brgyCode:"",
                purok_id:"",
                email: "",
                password: "",
                password_confirmation:"",
                username:"",
                cats:null,
                id: null,
                office_id:null,
                non_capitol:null
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
    mounted() {
        this.getGasolineStations();
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

        
        
        

        
        $('#office').select2({
            ajax: {
                url: '/offices/fetch',
                dataType:'json',
                delay:500,
                data: function(filter) {
                    return {filter:filter.term};
                },
                processResults: function(data, params) {
                    params.page = params.page || 1;

                    return{
                        results: $.map(data, function(obj) {
                            return {
                                id: obj.id,
                                text: obj.text,
                                office: obj.office
                            }
                        })
                    };
                },
                cache: true
            },
            placeholder: 'Search for an office',
            minimumInputLength: 2,
            templateResult:this.formatOfficeSelection,
            templateSelection:this.formatOffice
        })
        // this.loadOffices();
    },

    methods: {
        selectName($event) {
            this.form.cats = $event.cats
            this.form.office_id = $event.department_code
            $('#office').select2({
                data:[{
                    office:$event.office,
                    id:$event.department_code,
                    text:$event.office,
                    selected:true
                }]
            })
        },

        getGasolineStations() {
            axios.post('/travels/gasoline-station')
                .then((response) => {
                    this.stations = response.data;
                });
        },
        
        fetchEmployees() {
            $("#emp_name").select2({
                ajax : {
                    url: this.urlEmp,
                    dataType:'json',
                    delay:700,
                    data: function(params) {
                        return {filter: params.term};
                    },
                    processResults: function(data, params) {
                        params.page = params.page || 1;

                        return {
                            results: $.map(data, function (obj) {
                                console.log(obj.empl_photo_img.data)
                                return { 
                                    id: obj.employee_name, 
                                    text: obj.employee_name, 
                                    cats:obj.empl_id, 
                                    data:obj.empl_photo_img.data,
                                    position:obj.position_long_title,
                                    department_code:obj.department_code,
                                    office:obj.department_proper_name
                                }
                            })
                        };
                    },
                    cache: true
                },
                data:[{"text": this.form.name, "id":this.form.name, "selected": true}],
                placeholder: 'Search for a repository',
                minimumInputLength: 3,
                templateResult: this.formatRepo,
                templateSelection: this.formatRepoSelection
            })

        },

        formatOffice(repo) {
            return repo.text
        },

        formatOfficeSelection(repo) {
            
            if (repo.loading) {
                return `Searching...`;
            }
            var img = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
            </svg>`;
            
            var $container = $(
            `<div class="d-flex pt-3">
               ${img} <strong style="margin-left:5px">${repo.office}</strong>
            </div>
           `
        
          );
          return $container;
        },

        formatRepo (repo) {
            if (repo.loading) {
                return `Searching...`;
            }
            var img = "";
            if(!repo.data){
                img = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-square bd-placeholder-img flex-shrink-0 me-2 rounded" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg>`
            } else {
                
                img = ` <img class='bd-placeholder-img flex-shrink-0 me-2 rounded'  width='60' src='data:image/png;base64,${repo.data}'/>`
            }
            var $container = $(
                `<div class="d-flex pt-3">
                    ${img}
                    <p class="pb-3 mb-0 small lh-sm border-bottom">
                        <strong class="d-block">${repo.id}</strong>
                        <strong class="d-block">${repo.cats}</strong>
                        ${repo.position}
                    </p>
                </div>
                        `        
          );
          return $container;
        },

        formatRepoSelection (repo) {
          return repo.employee_name || repo.text;
        },

        myChangeEvent(val){
            console.log(val);
        },
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
        },

        loadBarangays() {
            axios.post('/barangays', {citymunCode:this.form.citymunCode}).then((response) => {
                this.barangays = response.data
                this.puroks = []
            })
        },

        loadOffices() {
            axios.get('/offices/fetch').then((response) => {
                this.offices = response.data;

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