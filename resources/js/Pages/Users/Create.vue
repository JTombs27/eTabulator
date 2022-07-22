<template>

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
                <label for="">Names</label>
                <Select2 v-model="form.name" id="emp_name" @select="selectName($event)"/>
                <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                <label for="">Office</label>
                <Select2 v-model="form.office_id" id="office" :options="offices"/>
                <div class="fs-6 c-red-500" v-if="form.errors.office_id">{{ form.errors.office_id }}</div>

                <label for="">Permission</label>
                <select class="form-select" v-model="form.permission">

                    <option value="Admin">Admin</option>
                    <option value="Basic">Basic</option>
                    <option value="PG-Head">PG-Head</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.permission">{{ form.errors.permission }}</div>

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

export default {
    props: {
        editData: Object,
    },
    data() {
        return {
            form: useForm({
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
            }),
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
        if (this.editData !== undefined) {
            this.loading = true
            this.pageTitle = "Edit"
            this.form.name = this.editData.name
            this.form.username = this.editData.username
            this.form.email = this.editData.email
            this.form.id = this.editData.id
            this.form.permission = this.editData.role
        } else {
            this.pageTitle = "Create"
        }

        $("#emp_name").select2({
            ajax : {
                url: `${process.env.MIX_API_URL}/PGDDO_Employees`,
                dataType:'json',
                delay:700,
                data: function(params) {
                    return {filter: params.term};
                },
                processResults: function(data, params) {
                    params.page = params.page || 1;

                    return {
                        results: $.map(data, function (obj) {
                            return { 
                                id: obj.employee_name, 
                                text: obj.employee_name, 
                                cats:obj.empl_id, 
                                data:obj.empl_photo_img.data,
                                position:obj.position_long_title
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
        this.loadOffices();
    },

    methods: {
        selectName($event) {
            this.form.cats = $event.cats
        },

        formatRepo (repo) {
        if (repo.loading) {
            return repo.text;
        }
        var img = "";
        console.log(repo.isNull)
        if(!repo.data){
            
            img = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-square bd-placeholder-img flex-shrink-0 me-2 rounded" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
            </svg>`
        }else{
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
        }
    }
};
</script>