<template>
    <Head>
        <title> Drivers Assignment</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Drivers Assignment:  <span style="color:brown"> {{ this.form.plate_no}}</span></h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                     <Link class="btn btn-success btn-sm" @click="createDriver()">Add Drivers</Link>
                    <back-button class="pull-right" :href="'/vehicles'"></back-button>&nbsp;&nbsp;
                </div>
            </div>
        </div>

            <div class="col-12">
                <div class="bgc-white p-20 bd">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Office Name</th>
                               <th scope="col" style="text-align: right"> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in driver_vehicles.data" :key="index">
                                <td> {{`${item.empl.first_name} ${mi(item.empl.middle_name)} ${item.empl.last_name}`}}</td>
                                <td>{{item.date}}</td>
                                <td> {{item.office.short_name}}</td>
                                <td style="text-align: right">
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <button class="dropdown-item ch-back "  @click="deleteDriver(item.id)" :disabled="item.travel.length !== 0"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg> Delete
                                            </button>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="driver_vehicles.data == 0"><td class="text-center" colspan="5">No Data Found</td></tr>
                        </tbody>
                    </table>

                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <!-- read the explanation in the Paginate.vue component -->
                            <!-- <pagination :links="drivers.links" /> -->
                            <pagination :next="driver_vehicles.next_page_url" :prev="driver_vehicles.prev_page_url" />
                        </div>
                    </div>
                </div>
            </div>   
    </div>

</template>

<script>
import Pagination from "@/Shared/Pagination";
import { useForm} from "@inertiajs/inertia-vue3"

export default ({
    components: { Pagination},
    props: {
        driver_vehicles: Object,
        Vdriver: Object
    },
    data() {
        return {
            PLATENO:"",
            form: useForm({
                plate_no:""
            })
        }
    },

    mounted() {
        this.form.plate_no = this.Vdriver.PLATENO
    },

    methods: {
        createDriver()
        {
            this.$inertia.get("/drivers/" + this.Vdriver.id+"/create");
        },

        deleteDriver(id)
        {
        
            let text = "Warning! \nAre you sure you want to Delete the Driver ";

            if (confirm(text) == true) {
                this.$inertia.delete("/drivers/" + this.Vdriver.id+"/delete/" + id);
            }
        }
    },

     computed: {
        mi() {
            return value => value ? `${value.charAt(0)}.` : "";
        },

    }



})
</script>
