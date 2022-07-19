<template>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Merge Travels</h3>
            <div class="peers">
                <div class="peer mR-5">
                    <div class="input-group">
                        <span class="input-group-text">From</span>
                        <input type="date" v-model="form.date_from" @change="date_from()" class="form-control">
                    </div>
                    <div class="fs-6 c-red-500" v-if="form.errors.date_from">{{ form.errors.date_from }}</div>
                </div>
                <div class="peer mR-5">
                    <div class="input-group">
                        <span class="input-group-text">To</span>
                        <input type="date" v-model="form.date_to"  @change="date_to()" class="form-control">
                    </div>
                    <div class="fs-6 c-red-500" v-if="form.errors.date_to">{{ form.errors.date_to }}</div>
                </div>
                <div class="peer">
                    <button class="btn btn-primary text-white" @click="submit()" :disabled="form.travels == 0">Merge</button>
                </div>
                <div class="peer">
                    <Link class="btn btn-danger text-white" href="/soatravels">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ticket Number</th>
                            <th scope="col">Travel Date</th>
                            <th scope="col">Time Departure</th>
                            <th scope="col">Time Arrival</th>
                            <th scope="col">Gas Type</th>
                            <th scope="col">Liters</th>
                            <th scope="col" style="text-align: right">Price</th>
                            <!-- <th scope="col">Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="soa_travel in sortedEmp">
                            <td>{{ soa_travel.ticket_number }}</td>
                            <td>{{ soa_travel.travelDate}}</td>
                            <td>{{ soa_travel.time_departure }}</td>
                            <td>{{ soa_travel.time_arrival }}</td>
                            <td>{{ soa_travel.gas_type }}</td>
                            <td>{{ soa_travel.total_liters }}</td>
                            <td class="text-end">{{ Number(soa_travel.price).toLocaleString("en") }}</td>
                            <!-- <td>
                                <button class="btn btn-secondary btn-sm action-btn" v-if="soa_travel.soa_travel !== null" @click="remove(soa_travel)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
                                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                                    </svg> remove
                                </button>
                            </td> -->
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

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";
import { computed } from 'vue'


export default {
    name: 'Soa Travel',
    components: { Pagination, Filtering },
    props: {
        travel: Array,
        auth: Object
    },

    data(){
        return{
            Travels: [],
            currentSort:'name',
            currentSortDir:'asc',
            pageSize:10,
            currentPage:1,
            form: useForm({
                date_from: "",
                date_to: "",
                travels: [],
                user_id: this.auth.user.id,
                office_id: this.auth.user.office_id,
            }),
            temp2:[],
        }
    },
    computed:{
        sortedEmp:function() {
            
            let startDate = this.form.date_from;
            let endDate = this.form.date_to;

            if ( startDate == "" ) {
                this.temp2;
            } else {

                this.temp2 = this.Travels.filter(item => item.soa_travel === null)
                .filter(item => {
                    const travelDateFrom = item.date_from
                    const travelDateTo = item.date_to
                if ( startDate && endDate ) {
                    if(!!travelDateTo) {
                        return startDate <= travelDateFrom && travelDateTo <= endDate;
                    } else {
                        return startDate <= travelDateFrom && travelDateFrom <= endDate;
                    }
                }
                /*if ( startDate && !endDate ) {
                    return startDate <= travelDateFrom;
                }
                if ( !startDate && endDate ) {
                    return travelDateTo <= endDate;
                }*/
                    return this.temp2
                })

            }
            this.form.travels = this.temp2.filter(item => item.soa_travel === null)
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
    mounted(){
        this.getData();
    },
    methods:{
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
            this.$inertia.visit("/soatravels", {method: 'post', data:this.form});
            
        },

        /*remove(soa_travel) {
                this.item = soa_travel;
            let text = "WARNING!\nAre you sure you want to Remove the tag?";
              if (confirm(text) == true) {
                this.$inertia.visit("/soatravels/remove", {method: 'post', data:this.item}) ;
              }
        },*/
    },
    
};
</script>
