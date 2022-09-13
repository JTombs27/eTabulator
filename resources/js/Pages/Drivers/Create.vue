<template>
    <div class="row gap-20 masonry pos-r">
         <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :href="'/drivers/'+Vdriver.id+'/vehicles'"></back-button>
            <!-- <Link @click="back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </Link> -->
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit()">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col">
                                        <div class="col">
                                            <label for="">Vehicle Plate No</label>
                                            <input type="text" v-model="vehicles_plateno" class="form-control" autocomplete="chrome-off" disabled readonly>
                                        </div>

                                        <div class="col">
                                            <label for="" class="col-mb-3 col-form-label">Drivers Name</label>
                                            <Select2 v-model="form.drivers_id" id="emp_name" @select="fetch($event)" />
                                            <div class="fs-6 c-red-500" v-if="form.errors.drivers_id">{{form.errors.drivers_id}}</div>
                                        </div>

                                        <div class="col">
                                            <label for="" class="col-mb-3 col-form-label">Date From</label>
                                            <input type="date" v-model="form.date_from" class="form-control" autocomplete="chrome-off" />
                                            <!-- <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div> -->
                                            <div class="fs-6 c-red-500" v-if="form.errors.date_fromA">{{ form.errors.date_fromA }}</div>
                                        </div>

                                        <div class="col">
                                            <label for="" class="col-mb-3 col-form-label">Date To</label>
                                            <input type="date" v-model="form.date_to" class="form-control" autocomplete="chrome-off" />
                                            <!-- <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div> -->
                                            <div class="fs-6 c-red-500" v-if="form.errors.date_toB">{{ form.errors.date_toB }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer p-1">
                                <button class="btn btn-primary mt-3">Save</button>
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
import BackButton from '../../Shared/BackButton.vue'

export default {
  components: { BackButton },
    name:"driversComponent",
    props:{
        Vdriver: Object
    },
    data() {
        return {
            vehicles: [],
            vehicles_id: "",    
            vehicles_plateno:"",
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
        this.form.vehicles_id   = this.Vdriver.id
        this.vehicles_plateno   = this.Vdriver.PLATENO
        this.pageTitle = "Create Driver Vehicle"

        $("#emp_name").select2({
            ajax : {
                url: "http://122.54.19.172:91//api/PGDDO_Employees",
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
      fetch(e){
        this.form.department_code = e.department;
        //this.form.vehicles_id = e.
      },

      submit(){
        this.form.post("/drivers/"+this.Vdriver.id+"/store");
      },

       back()
        {
             this.$inertia.get("/drivers/" + this.Vdriver.id+"/vehicles");
        }
    }
}
</script>
