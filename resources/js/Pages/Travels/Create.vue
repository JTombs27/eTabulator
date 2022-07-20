<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Travel</h3>
            <Link href="/travels">
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
                <div class="row">
                    <div :class="[columnFrom]">
                        <label for="">From</label>
                        <input v-model="form.date_from" type="date" class="form-control" autocomplete="chrome-off"/>
                        <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>
                    </div>
                    <Transition name="fade"  mode="out-in">
                        <div class="col-md-6" v-if="form.rangedDate">   
                            <label for="">To</label>
                            <input v-model="form.date_to" type="date" class="form-control" autocomplete="chrome-off"/>
                            <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>
                        </div>
                    </Transition>
                    <div class="col-md-12">
                        <br>
                         <div class="form-check ">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="form.rangedDate">
                            <label class="form-check-label disable-select" for="flexCheckDefault">
                                Check ranged date
                            </label>
                        </div>
                    </div>
                    
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Travel Departure</label>
                        <input v-model="form.time_departure" type="time" class="form-control" autocomplete="chrome-off"/>
                    </div>
                    <div class="col-md-6">
                        <label for="">Travel Arrival</label>
                        <input v-model="form.time_arrival" type="time" class="form-control" autocomplete="chrome-off"/>
                    </div>
                </div>
                <label for="">Vehicle Name</label>
                <Select2 v-model="form.vehicles_id" :options="vehicles" @select="getVehicleDetails()"/>
                <div class="fs-6 c-red-500" v-if="form.errors.vehicles_id">{{ form.errors.vehicles_id }}</div>
                <label>Authorized Driver</label>
                <Select2 id="authorizedDriver" v-model="form.drivers_id"  :options="drivers" @select="setDriverVehicle($event)"/>
                <!-- <input type="text" class="form-control" v-model="driverName"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.driver_vehicles_id">{{ form.errors.driver_vehicles_id }}</div>
                <br>
                <div class="form-check ">
                    <input class="form-check-input" type="checkbox" value="" id="actualDriverBox" v-model="form.showActualDriver">
                    <label class="form-check-label disable-select" for="actualDriverBox">
                        Check to set substitute driver
                    </label>
                </div>
                <label v-if="form.showActualDriver">Actual Driver</label>
                <input type="text" v-model="form.actual_driver" class="form-control" v-if="form.showActualDriver">
                <div class="fs-6 c-red-500" v-if="form.errors.actual_driver">{{ form.errors.actual_driver }}</div>
                <hr>
                <Select2 id="paseengers" @select="appendPassenger($event)" />
                <label for="">Name of Authorized Passenger/s</label>
                <textarea class="form-control" cols="3" v-model="form.official_passenger"></textarea>
                <!-- <input type="text" v-model="form.official_passenger" class="form-control"> -->
                <label for="">Place to visit</label>
                <input type="text" v-model="form.place_to_visit" class="form-control">
                <label for="">Purpose of Travel</label>
                <input type="text" v-model="form.purpose" class="form-control">
                <label for="">Gas Type</label>
                <select class="form-control" v-model="form.gas_type">
                        <option value="GASOLINE">GASOLINE</option>
                        <option value="DIESOLINE">DIESOLINE</option>
                        <option value="ENGINE OIL">ENGINE OIL</option>
                        <option value="BRAKE OIL">BRAKE OIL</option>
                        <option value="GREASES">GREASES</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.gas_type">{{ form.errors.gas_type }}</div>
                <label for="">Liter/s</label>
                <input type="text" v-model="form.total_liters" class="form-control">
                <div class="fs-6 c-red-500" v-if="form.errors.total_liters">{{ form.errors.total_liters }}</div>
                <label for="">Price</label>
                <input type="text" v-model="form.price" class="form-control">
                <div class="fs-6 c-red-500" v-if="form.errors.price">{{ form.errors.price }}</div>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">Save
                    changes</button>
            </form>


        </div>
    </div>

</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';

export default {

    data() {
        return{
            vehicles: [],
            driverName:"",
            form: useForm({
                place_to_visit:'',
                gas_type:'',
                time_arrival:'',
                time_departure:'',
                total_liters:null,
                official_passenger:"",
                driver_vehicles_id:null,
                actual_driver:"",
                date_from:'',
                date_to:'',
                rangedDate:null,
                price:null,
                showActualDriver:false,
                vehicles_id:null,
            }),
            pageTitle:"Create",
            columnFrom:"col-md-12",
            employees:[],
            drivers:[],
        }
    },

    mounted() {
        this.getVehicles();
        $('#paseengers').select2({
            ajax: {
                type:"GET",
                dataType:"json",
                url: "/employees/getEmployees",
                delay:400,
                data:function(data) {
                    return{ search:data.term }
                },
                processResults: function(data, params) {
                    params.page = params.page || 1;

                    return {
                        results: $.map(data, (obj) => {
                            return {
                                id:obj.text,
                                text:obj.text
                            }
                        })
                    }
                },
                cache: true,
            },
            placeholder: 'Search or Add  Passenger',
            // multiple:true,
            tags:true,
            data:[{"text": "", "id":"", "selected": true}]
            
        })

        
        // $("#actualDriver").select2({
        //   tags: true
        // });
    },

    methods:{
        getVehicles(){
            axios.get('/vehicles/getVehicles',{}).then( (response) => {
                this.vehicles = response.data
            })
        },

        getEmployees() {
            axios.get('/employees/getEmployees').then((response) => {
                this.employees = response.data;
            })
        },

        getVehicleDetails() {
            axios.post('/travels/vehicle-details',{travel_date:this.form.travel_date, vehicles_id:this.form.vehicles_id})
                .then((response) => {
                    this.drivers = response.data.map(obj => {
                        let mi = "";
                        if (obj.driver.middle_name) {
                            mi = obj.driver.middle_name.charAt(0);
                        }
                        return {
                            id: obj.driver.empl_id,
                            text: `${obj.driver.first_name} ${mi}. ${obj.driver.last_name}`,
                            dv_id: obj.id
                        }
                        
                    })                     
                })
        },

        appendPassenger(e) {
            // console.log("test")
            let separator = "";
            if (this.form.official_passenger != "") {
                separator = ", ";
                this.form.official_passenger += `${separator}${e.text}`
                return false;
            }
            this.form.official_passenger += `${separator}${e.text}`
        },

        setDriverVehicle($event) {
            this.form.driver_vehicles_id = $event.dv_id;
        },
        
        submit() {
            this.form.post("/travels", this.form);
        }
    },

    watch: {
        'form.rangedDate': function (value) {
            if (value) {
                this.columnFrom = 'col-md-6'
            } else {
                setTimeout(() => {
                    this.columnFrom = 'col-md-12'
                },100)
            }
        }
    }
}
</script>

<style>

</style>