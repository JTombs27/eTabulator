<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Travel Details</h3>
            <div class="peers fxw-nw jc-sb ai-c">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
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
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ticket Number</th>
                            <th scope="col">Travel Date</th>
                            <th scope="col">Gas Type</th>
                            <th scope="col">Liters</th>
                            <th scope="col" style="text-align: right">Total Price</th>
                            <!-- <th scope="col">Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(detailTravels, index) in travels.data" :key="index">
                            <td>{{ detailTravels.ticket_number }}</td>
                            <td>{{ detailTravels.travelDate}}</td>
                            <td>{{ detailTravels.gas_type }}</td>
                            <td>{{ detailTravels.total_liters }}</td>
                            <td class="text-end">{{ Number(detailTravels.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</td>
                            <td>
                                <button class="btn btn-secondary btn-sm action-btn" v-if="detailTravels.soa_travel !== null" @click="remove(detailTravels)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
                                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                                    </svg> remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
               <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="soaTravel.links" /> -->
                        <pagination :next="travels.next_page_url" :prev="travels.prev_page_url" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";


export default {
    name: 'Travel Details',
    components: { Pagination, Filtering },
    props: {
        travels: Object,
        filters: Object,
        soaTravelId: Object,
    },

    data(){
        return{
            search: this.$props.filters.search,
            confirm: false,
            filter: false,
            form: useForm({
                date_from: "",
                date_to: "",
                travels: [],
            }),
            temp2:[],
        }
    },
     watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/soatravels/"+this.soaTravelId+"/details",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
   
    methods:{
        back() {
            window.history.back();
        },
        showFilter() {
            this.filter = !this.filter
        },
        /*submit() {
            this.$inertia.visit("/soatravels", {method: 'post', data:this.form});
            
        },*/

        remove(detailTravels) {
                this.item = detailTravels;
            let text = "WARNING!\nAre you sure you want to Remove the tag?";
              if (confirm(text) == true) {
                this.$inertia.post("/soatravels/"+this.soaTravelId+"/remove", this.item) ;
              }
        }
    },
    
};
</script>
