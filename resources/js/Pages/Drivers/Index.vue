<template>
    <Head>
        <title> Drivers Assignment</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Drivers Assignment</h3>
            <div class="peers">
                <div class="peer">
                    <Link class="btn btn-success btn-sm" @click="createDriver()">Add Drivers</Link>
                </div>
            </div>
        </div>
            <div class="col-12">
                <div class="bgc-white p-20 bd">
                    <div class="peer">
                    <Link class="btn btn-danger btn-sm pull-right" href="/vehicles">Return to Vehicles</Link>
                </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Vehicle Plate Number</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Date From</th>
                                <th scope="col">Date To</th>
                                <th scope="col">Office Name</th>
                               <th scope="col" style="text-align: right"> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in driver_vehicles.data" :key="index">
                                <td>{{item.vehicle.PLATENO}}</td>
                                <td> {{`${item.driver.first_name} ${mi(item.driver.middle_name)} ${item.driver.last_name}`}}</td>
                                <td>{{item.date_from}}</td>
                                <td>{{item.date_to}}</td>
                                <td> {{item.office.office}}</td>
                                <td style="text-align: right">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" title="Delete Project" @click="deleteDriver(item.id)" :disabled="item"  class="btn btn-danger btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
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


export default ({
    components: { Pagination},
    props: {
        driver_vehicles: Object,
        Vdriver: Object
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
