<template>
    <Head>
        <title>{{ pageTitle }} travel</title>
    </Head>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Travel</h3> 
            <h3>Balance: <u>{{`\u20B1${charges}`}}</u></h3>
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
                <div class="col-md-12">
                    <br>
                     <div class="form-check ">
                         <label class="form-check-label disable-select" for="carpool">
                             Tag as carpool
                         </label>
                        <input class="ml-5 form-check-input" type="checkbox" value="" id="carpool" v-model="form.is_carpool">
                    </div>
                </div>
                <hr>
                <label>Authorized Driver</label>
                <Select2 class="js-data-example-ajax" v-model="form.drivers_id" :options="drivers" @select="setDriverVehicle($event)"/>
                <!-- <input type="text" class="form-control" v-model="driverName"> -->
                <div class="fs-6 c-red-500" v-if="form.errors.driver_vehicles_id">{{ form.errors.driver_vehicles_id }}</div>
                <br>

                <div class="col-md-12">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" value="" id="actualDriverBox" v-model="form.showActualDriver" @change="showActualDriver($event)">
                        <label class="form-check-label disable-select" for="actualDriverBox" id="labelActual">
                            Check to set substitute driver
                        </label>
                    </div>
                </div>
                
                <label v-if="form.showActualDriver">Actual Driver</label>
                <Select2 
                    v-if="form.showActualDriver"
                    v-model="form.actual_driver" 
                    id="actualDriver" 
                    @select="setActualDriver($event)" 
                />
                <div class="fs-6 c-red-500" v-if="form.errors.actual_driver">{{ form.errors.actual_driver }}</div>
                
                <!-- <input type="text" v-model="form.actual_driver" class="form-control" v-if="form.showActualDriver"> -->
                
                <hr>
                <label for="">Name of Authorized Passenger/s</label>
                <textarea class="form-control" cols="3" v-model="form.official_passenger"></textarea>
                <!-- <input type="text" v-model="form.official_passenger" class="form-control"> -->
                <label for="">Place to visit</label>
                <input type="text" v-model="form.place_to_visit" class="form-control">
                <label for="">Purpose of Travel</label>
                <input type="text" v-model="form.purpose" class="form-control">
                <div class="position-relative">
                    <label class="col-md-3" for="">Gas Type</label>
                    <label class="position-absolute top-0 end-0" for=""><strong>{{ gasPrice }}</strong></label>
                </div>
                <select class="form-select" v-model="form.gas_type"  @change="fetchPrice()">
                        <option  v-for="item, index in gases" :value="item.id">{{ item.text }}</option>
                </select>
                <div class="fs-6 c-red-500" v-if="form.errors.gas_type">{{ form.errors.gas_type }}</div>
                <label for="">Liter/s</label>
                <input type="text" v-model="form.total_liters" class="form-control" @keyup="fetchPrice()">
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

    props: {
        editData: Object,
        charges:String
    },

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
                price:0.00,
                showActualDriver:false,
                vehicles_id:null,
                purpose:"",
                drivers_id:null,
                is_carpool:null,
                actual_driver_id:null,
                charges:null
            }),
            pageTitle:"Create",
            columnFrom:"col-md-12",
            employees:[],
            drivers:[],
            gasPrice:"",
            gases:[{
                id:"regular_price",
                text:"Gasoline(Regular)"
            },{
                id:"premium_price",
                text:"Gasoline(Premium)"
            },{
                id:"deisoline_price",
                text:"Diesoline"
            },{
                id:"engine_oil_price",
                text:"Engine Oil"
            },{
                id:"brake_oil_price",
                text:"Brake Oil"
            },{
                id:"greases_price",
                text:"Greases"
            }],
           
        }
    },

    async mounted() {
        this.form.charges = this.charges
        if (this.editData !== undefined) {
            this.loading = true
            this.pageTitle = "Edit"
            this.form.place_to_visit = this.editData.place_to_visit
            this.form.gas_type = this.editData.gas_type
            this.form.time_arrival = this.editData.time_arrival
            this.form.time_departure = this.editData.time_departure
            this.form.total_liters = this.editData.total_liters
            this.form.vehicles_id = String(this.editData.driver_vehicle.vehicles_id)
            this.form.driver_vehicles_id = this.editData.driver_vehicle.id
            this.form.purpose = this.editData.purpose
            this.form.price = this.editData.price
            this.form.drivers_id = this.editData.driver_vehicle.drivers_id
            this.form.date_from = this.editData.date_from
            this.form.date_to = this.editData.date_to
            this.form.office_id = this.editData.office_id
            this.form.is_carpool = Boolean(this.editData.is_carpool)
            this.form.showActualDriver = this.editData.actual_driver ? true : false
            this.form.actual_driver = this.editData.actual_driver
            if (this.editData.date_to) {
                this.form.rangedDate = true
            }
            await this.getVehicleDetails();
            await this.showActualDriver();
            // setTimeout(() => {
            // }, 0);
            
        } else {
            this.pageTitle = "Create"
        }
        this.getVehicles();
       

       
        // $("#actualDriver").select2({
        //   tags: true
        // });
    },

    methods:{
        fetchPrice() {
            axios.post('/travels/get-price', 
                {datefilter:this.form.date_from, gasType:this.form.gas_type}
            ).then((response) => {
                this.gasPrice = `Price: \u20B1${parseFloat(response.data).toFixed(2)}`;
                this.form.price =  Number(response.data) * Number(this.form.total_liters);
            })
        },


        getVehicles(){
            axios.get(`/vehicles/getVehicles/${this.form.vehicles_id}`).then( (response) => {
                this.vehicles = response.data
            })
        },

        getEmployees() {
            axios.get('/employees/getEmployees').then((response) => {
                this.employees = response.data;
            })
        },

        getVehicleDetails() {
            axios.post('/travels/vehicle-details',{vehicles_id:this.form.vehicles_id})
                .then((response) => {
                    this.drivers =  response.data.map(obj => {
                        let _selected = false;
                        if (this.editData != undefined) {
                            _selected = obj.empl.empl_id === this.editData.driver_vehicle.drivers_id
                        }
                        let mi = "";
                        if (obj.empl.middle_name) {
                            mi = obj.empl.middle_name.charAt(0);
                        }
                        return {
                            id: obj.empl.empl_id,
                            text: `${obj.empl.first_name} ${mi}. ${obj.empl.last_name}`,
                            dv_id: obj.id,
                            office_id: obj.empl.department_code,
                            "selected": _selected
                        }
                    })                   
                })
           
        },

        showActualDriver(e) {
            // console.log(e)
            if (true){

                $('#actualDriver').select2({
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
                                        text:obj.text,
                                        cats: obj.cats
                                    }
                                })
                            }
                        },
                        cache: true,
                    },
                    data:[{text: this.form.actual_driver, id:this.form.actual_driver, selected: true}],
                    placeholder: 'Search to add actual driver',
                    minimumInputLength: 3,
               
               })
            }
             
        },

        setActualDriver(e) {
            console.log(e)
            // let separator = "";
            // if (this.form.official_passenger != "") {
            //     separator = ", ";
            //     this.form.official_passenger += `${separator}${e.text}`
            //     return false;
            // }
            // this.form.official_passenger += `${separator}${e.text}`
        },

        setDriverVehicle($event) {
            this.form.driver_vehicles_id = $event.dv_id;
            if (this.editData === undefined) {
                this.form.office_id = $event.office_id;
            }
        },
        
        submit() {
            if(this.editData) {
                this.form.patch(`/travels/${this.editData.id}`, this.form);
                return false;
            }
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
        },
        form:{
            handler(val) {
                console.log("test")
            }
        }
    }
}
</script>

<style>

</style>