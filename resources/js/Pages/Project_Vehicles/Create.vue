<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Vehicle </h3>
            <Link @click="backToMain()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link>
        </div>
        <div class="col-12"> <h5>Project Description: <small>{{project.description}}</small></h5></div>
        <div class="row">
            <div class="col-12 bgc-white p-20 bd">
                <form @submit.prevent="submit()">
                    <div class="row">
                        <div class="col-6">
                            <label for="">Vehicle Selection</label>
                            <Select2 v-model="form.vehicle_id" :options="vehicles" id="vehicles"  />
                            <div class="fs-6 c-red-500" v-if="form.errors.vehicle_id">{{ form.errors.vehicle_id }}</div>

                        </div>
                        <div class="col-3">
                            <label for="">Period From</label>
                            <input type="date" v-model="form.date_from" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>
                        </div>
                        <div class="col-3">
                            <label for="">Period To</label>
                            <input type="date" v-model="form.date_to" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="">Purpose</label>
                            <input type="text" v-model="form.purpose" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors.purpose">{{ form.errors.purpose }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-right">
                            <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">
                                {{pageTitle=="Add" ? "Save/Create":"Save Changes"}}
                            </button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
        
    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: {
        editData: Object,
        project:Object
    },
    data() {
        return {
            form: useForm({
                vehicle_id: "",
                date_from: "",
                date_to:"",
                purpose:"",
                project_id:"",
                id: null
            }),
            vehicles:[],
            testValue:"",
            pageTitle: "",
            loading:false,
        };
    },
    mounted() {

        if (this.editData !== undefined) 
        {
            this.loading = true
            this.pageTitle = "Edit"
            //this.form.name = this.editData.name
            //this.form.email = this.editData.email
            //this.form.id = this.editData.id
            //this.form.citymunCode = this.editData.citymunCode
            //this.form.brgyCode = this.editData.brgyCode
        } else {
            this.pageTitle = "Add"
        }

        this.loadVehicles()
    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                this.form.patch("/users/" + this.form.id, this.form);
            } else {
                this.form.project_id = this.project.id;
                this.form.post("/projects-vehicle/"+this.project.id+"/store", this.form);
            }

        },

        loadVehicles() { 
            axios.get('/projects-vehicle/vehicles').then((response) => {
                this.vehicles = response.data
            })
        },
    },
};
</script>