<template>
    <Head>
        <title>{{ pageTitle }} travel</title>
    </Head>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Travel</h3> 
            <h3>
                Balance: <u>{{`\u20B1${Number(balance).toLocaleString(undefined, {minimumFractionDigits: 2})}`}}</u>
            </h3>
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
        <div class="row">
            <div class="col-md-4 offset-md-5 offset-4 col-4">
                <h3 class="ms-5 ">From:</h3>
                <input type="text" cl/>
            </div>
        </div>
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <div class="row">
                    
                    <div class="col-md-4">    
                        <div class="form-check ">
                            <label class="form-check-label disable-select" for="is_borrowed_vehicle">
                            Check if borrow vehicle
                            </label>
                            <input class="ml-5 form-check-input" type="checkbox" id="is_borrowed_vehicle" v-model="form.is_borrowed_vehicle" @change="getOffice($event)">
                        </div>
                    </div>
                    <div class="col-md-4">    
                         <div class="form-check">
                             <label class="form-check-label disable-select" for="is_borrowed_fuel">
                                Check if borrow fuel
                             </label>
                            <input class="ml-5 form-check-input" type="checkbox" id="is_borrowed_fuel" v-model="form.is_borrowed_fuel" @change="getOffice($event)">
                        </div>
                    <br>
                    </div>
                    <div>
                        <select type="text" class="form-select">
                            
                        </select>
                    </div>
                    <hr>
                    <div :class="[columnFrom]">
                        <label for="">From</label>
                        <input v-model="form.date_from" type="date" class="form-control" autocomplete="chrome-off" @change="fetchPrice()"/>
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
                <span v-if="form.date_from">
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
                    <br>
                    <div class="position-relative">
                        <label class="col-md-3" for="">Vehicle Name</label>
                        <label class="position-absolute top-0 end-0" for=""><strong>{{ vehicle_status }}</strong></label>
                    </div>
                    <Select2 v-model="form.vehicles_id" :options="officeFiltered" @select="getVehicleDetails($event)" />
                    <div class="fs-6 c-red-500" v-if="form.errors.vehicles_id">{{ form.errors.vehicles_id }}</div>
                    <div class="col-md-12">
                        <br>
                         <div class="form-check ">
                             <label class="form-check-label disable-select" for="carpool">
                                 Tag as carpool
                             </label>
                            <input class="ml-5 form-check-input" type="checkbox" value="" id="carpool" v-model="form.is_carpool">
                        </div>
                    
                        
                    
                        
                        <transition name="fade"  mode="out-in">
                            <span v-if="form.is_borrowed_vehicle || form.is_borrowed_fuel">
                                <br>
                                <label >Borrowed by</label>
                                <Select2 class="js-data-example-ajax" id="office" v-model="form.borrowing_office"/>
                                <div class="fs-6 c-red-500" v-if="form.errors.borrowing_office">{{ form.errors.borrowing_office }}</div>
                            </span>
                        </transition>
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
                    <input v-if="form.showActualDriver" type="text"  v-model="form.actual_driver" class="form-control">
                    <!-- <Select2 
                        v-if="form.showActualDriver"
                        v-model="form.actual_driver" 
                        id="actualDriver" 
                        @select="setActualDriver($event)" 
                    /> -->
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
                    <label for="">Fuel Tank Balance</label>
                    <input type="text" v-model="form.tank_balance" class="form-control">
                    <div class="position-relative">
                        <label class="col-md-3" for="">Gasoline Station</label>
                    </div>
                     <select class="form-select" v-model="form.gasoline_id" @change="fetchPrice()">
                        <option disabled value="">Select Station</option>
                        <option v-for="item, index in gasoline" :value="item.id">{{ item.text }}</option>
                    </select>
                    <div class="position-relative">
                        <label class="col-md-3" for="">Gas Type</label>
                        <label class="position-absolute top-0 end-0" for=""><strong>{{ gasPrice }}</strong></label>
                    </div>
                    <select class="form-select" v-model="form.gas_type"  @change="fetchPrice()">
                            <option value="" disabled></option>
                            <option disabled value="" v-if="!form.gasoline_id">Select Gasoline Station first</option>
                            <option  v-else v-for="item, index in gases" :value="item.id">{{ item.text }}</option>
                    </select>
                    <div class="fs-6 c-red-500" v-if="form.errors.gas_type">{{ form.errors.gas_type }}</div>
                    
                    <div class="position-relative">
                        <label for="">Liter/s</label>
                        <label class="position-absolute top-0 end-0" for=""><strong>{{ fuelMaxLimit }}</strong></label>
                    </div>
                    <input type="text" v-model="form.total_liters" class="form-control" @keyup="fetchPrice()">
                    <div class="fs-6 c-red-500" v-if="form.errors.total_liters">{{ form.errors.total_liters }}</div>
                    <label for="">Price</label>
                    <input type="text" v-model="form.price" class="form-control" :disabled="editData !== undefined">
                    <div class="fs-6 c-red-500" v-if="form.errors.price">{{ form.errors.price }}</div>
                    <label for="">Deduct used during the trip</label>
                    <input type="text" v-model="form.consumed_fuel" class="form-control">
                    <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">Save changes</button>
                </span>
            </form>


        </div>
    </div>

</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';

export default {

    props: {
        editData: Object,
        balance:Number,
        auth:Object
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
                balance:null,
                type_code:null,
                is_borrowed_vehicle:null,
                is_borrowed_fuel:null,
                borrowing_office:null,
                remaining_fuel:null,
                maxLiters:"",
                gasoline_id:null,
                tank_balance:null,
                consumed_fuel:null
            }),
            pageTitle:"Create",
            columnFrom:"col-md-12",
            vehicle_status:"",
            employees:[],
            drivers:[],
            gasPrice:"",
            fuelLimit:null,
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
        await this.loadGasoline()
        // console.log(this.auth.user)
        this.form.balance = this.balance
        if (this.editData !== undefined) {
            _.assign(this.form, {current_liters:this.editData.total_liters})
            this.loading = true
            this.pageTitle = "Edit"
            this.form.place_to_visit = this.editData.place_to_visit
            this.form.gas_type = this.editData.gas_type
            this.form.tank_balance = this.editData.tank_balance
            this.form.consumed_fuel = this.editData.consumed_fuel
            this.form.time_arrival = this.editData.time_arrival
            this.form.time_departure = this.editData.time_departure
            this.form.total_liters = this.editData.total_liters
            this.form.vehicles_id = String(this.editData.driver_vehicle.vehicles_id)
            this.form.driver_vehicles_id = this.editData.driver_vehicle.id
            this.form.official_passenger = this.editData.official_passenger
            this.form.purpose = this.editData.purpose
            this.form.price = this.editData.price
            this.form.drivers_id = this.editData.driver_vehicle.drivers_id
            this.form.date_from = this.editData.date_from
            this.form.gasoline_id = this.editData.gasoline_id
            this.form.office_id = this.editData.office_id
            this.form.is_carpool = Boolean(this.editData.is_carpool)
            this.form.showActualDriver = this.editData.actual_driver ? true : false
            this.form.actual_driver = this.editData.actual_driver ? this.editData.actual_driver : ""
            if (this.editData.date_to) {
                this.form.rangedDate = true
                
            }
            await this.fetchPrice();
            await this.getVehicleDetails();
            await this.showActualDriver();
            setTimeout(() => {
                this.form.date_to = this.editData.date_to
            }, 0);
            
        } else {
            this.pageTitle = "Create"
        }
        this.getVehicles();
        

       
        // $("#actualDriver").select2({
        //   tags: true
        // });
    },

    methods:{
        loadGasoline() {
            axios.get('/prices/fetch').then((response) => {
                this.gasoline = response.data;

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

        formatRepo(repo) {
            return `<div class="text-success">asaas</div>`;
        },

        async fetchPrice() {
            await axios.post('/travels/get-price', 
                {datefilter:this.form.date_from, gasType:this.form.gas_type, gasoline_id:this.form.gasoline_id}
            ).then((response) => {
                this.gasPrice = `Price: \u20B1${parseFloat(response.data).toFixed(2)}`;
                this.form.price =  (Number(response.data) * Number(this.form.total_liters)).toFixed(2);
            })

            if (this.form.vehicles_id) {
                await this.getFuelLimit();
            }

            // if (this.form.vehicles_id) {
            //     console.log('test')
            //     this.getVehicleDetails();
            // }
        },

        


        getVehicles(e){
            
            // axios.post(`/vehicles/getVehicles`).then( (response) => {
            //     this.vehicles = response.data
            // })
            axios.post(`/travels/get-vehicles`).then( (response) => {
                this.vehicles = response.data
                let office = this.auth.user.office_id
                try {
                    if (e.target.checked) {
                        this.vehicles = response.data
                    } else {
                        this.vehicles = _.filter(response.data, (o) => o.office_id == office)
                    }
                } catch (error) {
                    this.vehicles = response.data
                }
            })
        },

        getEmployees() {
            axios.get('/employees/getEmployees').then((response) => {
                this.employees = response.data;
            })
        },

        // getMaxLiters() {
        //     if (this.form.vehicles_id) {
        //         axios.post('/travels/vehicle-details',{vehicles_id:this.form.vehicles_id, date_to: this.form.date_to, date_from: this.form.date_from})
        //         .then((response) => {
        //             this.drivers =  response.data[0].map(obj => {
        //                 this.form.maxLiters = response.data[1] != 0 ? Number(response.data[0][0].vehicle.fuel_limit) - Number(response.data[1]) : ""
        //             })   
                
        //         })
        //     }
        // },

        async getVehicleDetails(e) {
            // console.log(this.editData !== undefined)
            if (this.editData !== undefined) {
                this.form.type_code = this.editData.driver_vehicle.vehicle.TYPECODE
            } else {
                this.form.type_code = e.typeCode;
            }
            await axios.post('/travels/vehicle-details',{vehicles_id:this.form.vehicles_id, date_to: this.form.date_to, date_from: this.form.date_from})
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
                    try {
                        this.vehicle_status = response.data[0] ? `Status: ${response.data[0].vehicle.vehicle_status.condition}`: ""   
                    } catch (error) {
                        this.vehicle_status = "No status available"   
                    }
                })

                if (this.form.date_from) {
                    await this.getFuelLimit();
                }
           
        },

        getFuelLimit() {
            let data = { vehicles_id:this.form.vehicles_id, 
                        date_to: this.form.date_to, 
                        date_from: this.form.date_from, 
                        driver_vehicles_id: this.form.driver_vehicles_id
                        }
            if (this.editData !== undefined) {
                _.assign(data, {id:this.editData.id})
            }
             axios.post('/travels/get-fuel',data)
            .then((response) => {
                this.fuelLimit = response.data
            })
        },
        
        // checkWeek() {
        //     if(this.form.date_to && this.form.date_to) {
        //         this.form.post('/travels/check-week', {date_from:this.form.date_from, date_to:this.form.date_to}, {
        //             onSuccess: page => {
        //                 console.log(page)
        //             }
        //         });
        //     }    
        // },

        showActualDriver(e) {
            console.log(e)
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

        getOffice(e) {
            if (!this.form.is_borrowed_vehicle && !this.form.is_borrowed_fuel) {
                this.form.borrowing_office = null
            }
            if (e.target.checked) {
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
                                        office:obj.office
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
            }
        },
        
        submit() {
            if(this.editData) {
                this.form.patch(`/travels/${this.editData.id}`, this.form);
                // console.log(this.form)
                return false;
            }
            this.form.post("/travels", this.form);
        }
    },

    computed: {
        officeFiltered() {
            return _.filter(this.vehicles, (o) => {
                if (!this.form.is_borrowed_vehicle) {
                    return o.office_id == this.auth.user.office_id 
                } else {
                    return this.vehicles
                }
            })
        },
        fuelMaxLimit() {
            let display = "";
            if (this.fuelLimit == 'Unlimited') {
                display = "No fuel limit"
            } else if (this.fuelLimit != null && this.fuelLimit != 'Unlimited') {
                display = `Remaining weekly fuel limit: ${this.fuelLimit} liters`;
            }
            return display;
        }
    },

    watch: {
        'form.total_liters' : _.debounce(function() {
            this.getFuelLimit();
        }, 1000), 

        'form.rangedDate': function (value) {
            if (value) {
                this.columnFrom = 'col-md-6'
                
            } else {
                setTimeout(() => {
                    this.form.date_to = null
                    this.columnFrom = 'col-md-12'
                },100)
            }
        },
    }
}
</script>

<style>

</style>