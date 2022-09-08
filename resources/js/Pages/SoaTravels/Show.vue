<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Travels</h3>
            <div class="peers fxw-nw jc-sb ai-c">
                
                <div class="peer">
                   <Link href="/" @click="back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row p-20 d-flex justify-content-end">
                <div class="bgc-white col-md-12 m-0">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="input-group">
                                <span class="input-group-text">Office</span>
                                <select v-model="form.office_id" class="form-control" @change="loadDivisions($event)">
                                    <option disabled value="">Select Offices</option>
                                    <option v-for="item, index in offices" :value="item.id">{{ item.short_name }}</option>
                                </select>
                            </div>
                            <div class="fs-6 c-red-500" v-if="form.errors.office_id">{{ form.errors.office_id }}</div>
                        </div>
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-text">Divisions</span>
                                <select v-model="form.division_code" class="form-control" >
                                    <option disabled value="">Select Division</option>
                                    <option v-for="item, index in divisions" :value="item.id">{{ item.text }}</option>
                                </select>
                            </div>
                            <div class="fs-6 c-red-500" v-if="form.errors.division_code">{{ form.errors.division_code }}</div>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <span class="input-group-text">From</span>
                                <input type="date" v-model="form.date_from" @change="date_from()" class="form-control">
                            </div>
                            <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <span class="input-group-text">To</span>
                                <input type="date" v-model="form.date_to"  @change="date_to()" class="form-control">
                            </div>
                            <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-primary text-white" @click="submit()" :disabled="form.travels == 0">Merge</button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="bgc-white p-20 bd table table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ticket Number</th>
                            <th scope="col">Invoice Number</th>
                            <th scope="col">Date Fuel</th>
                            <th scope="col">Gas Type</th>
                            <th scope="col">Liters</th>
                            <th scope="col">Actual Liters</th>
                            <th scope="col" style="text-align: right">Price</th>
                            <th scope="col" style="text-align: right">total Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="soa_travel in sortedEmp">
                            <td>{{ soa_travel.ticket_number }}</td>
                            <td>{{ soa_travel.invoice }}</td>
                            <td>{{ soa_travel.date_fueled}}</td>
                            <td v-html="gas(soa_travel.gas_type)"></td>
                            <td>{{ soa_travel.total_liters }}</td>
                            <td>{{ soa_travel.actual_liters }}</td>
                            <td class="text-end">{{ Number(soa_travel.actual_prices).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(soa_travel.price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td>
                                <button class="dropdown-item" @click="invoice(soa_travel)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                    </svg> Add Invoice
                                </button>
                            </td>
                        </tr>
                        <td v-if="!sortedEmp.length" colspan="6">No record found.</td>
                    </tbody>
                </table>
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link"  v-if="this.currentPage > 1" @click="prevPage" preserve-scroll style="color: grey">Previous</button>
                        <button class="page-link"  v-if="this.currentPage <= 1" :disabled='true' @click="prevPage" style="color: grey">Previous</button> 
                    </li>
                    <li class="page-iteme">
                        <button class="page-link" v-if="(this.currentPage*this.pageSize) < this.myLength" @click="nextPage" preserve-scroll style="color: grey">Next</button>
                        <button class="page-link" v-if="(this.currentPage*this.pageSize) >= this.myLength" :disabled='true' @click="nextPage" style="color: grey">Next</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <invoice 
        v-if="invoiceOpen"
        :item="invoiceItem"
        @closeModal="save"
    ></invoice>
</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";
import { computed } from 'vue'
import Invoice from "@/Pages/Travels/Invoice.vue";


export default {
    name: 'Soa Travel',
    components: { Pagination, Filtering , Invoice },
    props: {
        travel: Array,
        auth: Object
    },

    data(){
        return{
            invoiceItem:{},
            invoiceOpen:false,
            Travels: [],
            currentSort:'name',
            currentSortDir:'asc',
            pageSize:10,
            currentPage:1,
            form: useForm({
                date_from: "",
                date_to: "",
                gasoline_id:this.auth.user.gasoline_id,
                travels: [],
                user_id: this.auth.user.id,
                office_id: "",
                division_code: "",
            }),
            offices:[],
            divisions:[],
            temp2:[],
        }
    },
    computed:{
        sortedEmp:function() {
            this.tem2 = []
            let startDate = this.form.date_from;
            let endDate = this.form.date_to;
            let office = this.form.office_id;
            let divisions = this.form.division_code;
            

            if (startDate == "") {
                this.temp2 = []
            } else {
                this.temp2 = this.Travels.filter(function (item) {
                    if (divisions) {
                        if(!!item.division_code) {

                            return item.office_id == office && item.division_code.division_code == divisions
                        }  else {
                            return item.office_id == office
                        }
                    } else {
                        return item.office_id == office
                    }
                } )
                    .filter(item => {
                    let travelDateFrom = item.date_from
                    let travelDateTo = item.date_to
                

                if ( startDate && endDate ) {
                
                    return  (startDate  <= travelDateFrom  && endDate >= travelDateFrom) ;
                    
                }

                if ( startDate && !endDate ) {
                    return startDate <= travelDateFrom;
                }
                    return this.temp2;
                })
            }      
                /*
                if ( !startDate && endDate ) {
                    return travelDateTo <= endDate;
                }*/
            this.form.travels = this.temp2;
            this.myLength = this.temp2.length;
            return this.temp2.sort((a,b) => {
                        let modifier = 1;
                        if(this.currentSortDir === 'desc') modifier = -1;
                        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                        return 0;
                    }
                    ).filter((row, index) => {
                        let start = (this.currentPage-1)*this.pageSize;
                        let end = this.currentPage*this.pageSize;
                        if(index >= start && index < end) return true;
            });
        },
    },

    watch: {
        'form.office_id':function(value) {
            this.loadDivisions(value)
        }
        
    },
    mounted(){
        this.getData();
        this.loadOffices()
        
    },
    methods:{
        back() {
            window.history.back();
        },
        async getData(){
            this.Travels = this.travel;
            this.myLength = this.Travels.length;
        },
        nextPage:function() {
            
            if((this.currentPage*this.pageSize) < this.myLength) this.currentPage++;
        },
        prevPage:function() {
            
            if(this.currentPage > 1) this.currentPage--;
        },
        sort:function(s) {
            if(s === this.currentSort) {
                this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
            }
            this.currentSort = s;
        },
        getTo(){
            var toPage= this.currentPage;
            toPage = toPage*this.pageSize;
            if(toPage>this.myLength){
                toPage = toPage -(toPage-this.myLength);
            }
            return toPage;
        },
        date_from(){
            this.currentPage=1;
        },
        date_to(){
            this.currentPage=1;
        },

        submit() {
                this.form.post("/soatravels", this.form);
        },

        loadOffices() {
            axios.get('/offices/fetch').then((response) => {
                this.offices = response.data;

            })
        },

        async loadDivisions(value) {
            var self = this
            await axios.post('/divisions/fetch', { department_code: value }).then((response) => {
                self.divisions = response.data;

            })
        },

        invoice(item) {
            console.log(item)
            /**
             * if using component use the code below
             * 
             * this.invoiceItem = item; create an array data named invoiceItem
             * this.invoiceOpen = true create boolean data named invoiceOpen
             */
            this.invoiceItem = item;
            this.invoiceOpen = true
        },

        save(_refresh){
            this.invoiceOpen=false
            this.$inertia.visit("/soatravels/merge", {
                preserveState: true,
                onFinish:() => {
                    this.Travels = this.travel
                    this.temp2 = this.Travels
                }
            });

        },

        gas (gas_type) {

            switch(gas_type) {
                case 'premium_price':
                    return "PREMUIM";
                    break
                case 'regular_price':
                    return "REGULAR";
                    break
                case 'deisoline_price':
                    return "DIESOLINE";
                    break
                case 'engine_oil_price':
                    return "ENGINE OIL";
                    break
                case 'brake_oil_price':
                    return "BRAKE OIL";
                    break
                case 'greases_price':
                    return "GREASES";
                    break
                default:
                    return ""
                    break
            }
        },

        /* fetchPrice(soa_travel,gas_type,total_liters) {
           
            
            var xxxx;
            let var_price =  axios.post('/travels/get-price', 
                {datefilter:soa_travel, gasType:gas_type}
            ).then(response => respose.data)
            .then(data => {
                xxxx= (Number(data) * Number(total_liters)).toFixed(2);
                
            
            }) 

            return  xxxx;            
        },*/

    },
    
};
</script>
