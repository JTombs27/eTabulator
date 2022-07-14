<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <Link href="/drivers">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col">
                                        <div class="col">
                                            <label for="">Vehicle Name</label>
                                            <Select2 v-model="form.vehicles_id" :options="vehicles" />
                                                <h3>{{vehicles.PLATENO}}</h3>
                                        </div>

                                        <div class="col">
                                            <label for="">Drivers Name</label>
                                            <Select2 v-model="form.drivers_id" id="emp_name" @select="fetch($event)" />
                                        </div>

                                        <div class="col">
                                            <label for="">Date From</label>
                                            <input type="date" v-model="form.date_from" class="form-control" autocomplete="chrome-off" />
                                            <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>
                                        </div>

                                        <div class="col">
                                            <label for="">Date To</label>
                                            <input type="date" v-model="form.date_to" class="form-control" autocomplete="chrome-off" />
                                            <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer p-1">
                                <button type="button" class="btn btn-primary mt-3" @click="submit()">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm} from "@inertiajs/inertia-vue3"

export default {
    name:"driversComponent",
    data() {
        return {
            vehicles: [],
            vehicles_id: "",
            form: useForm({
                vehicles_id: "",
                drivers_id: "",
                date_from: "",
                date_to: "",
                department_code:"",
            }),
            pageTitle: ""
        }
    },

    mounted() {
        this.pageTitle = "Create"
        this.getVehicles()

        $("#emp_name").select2({
            ajax : {
                url: "http://192.168.9.101:91//api/PGDDO_Drivers",
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
                                id: obj.empl_id, 
                                text: obj.employee_name, 
                                cats:obj.empl_id, 
                                data:obj.empl_photo_img.data,
                                position:obj.position_long_title,
                                department:obj.department_code,
                            }
                        }),
                    };
                },
                cache: true
            },
            placeholder: 'Search for a repository',
            minimumInputLength: 3,
        })
    },

    methods: {
      getVehicles(){
        axios.post('/vehicles/getVehicles').then( response => {
            this.vehicles = response.data
        })
      },

      fetch(e){
        this.form.department_code = e.department;
      },

      submit(){
        this.form.post("/drivers", this.form);
      }
    }
}
</script>
