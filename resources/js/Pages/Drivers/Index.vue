<template>
    <Head>
        <title> Drivers Vehicle</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Drivers Vehicle</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-success btn-sm" @click="createDriver()">Add Drivers</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white">Filter</button>
                </div>
            </div>
        </div>
            <div class="col-12">
                <div class="bcg-white p-20 bd">
                    <table class="table">
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
                            <tr v-for="(driver,index) in driver_vehicles.data" :key="index">
                                <td>{{driver.vehicle.PLATENO}}</td>
                                <td> </td>
                                <td>{{driver.date_from}}</td>
                                <td>{{driver.date_to}}</td>
                                <td> </td>
                                <td style="text-align: right">
                                    <div class="dropdown downstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                        </svg>
                                        </button>
                                    
                                    </div>
                                </td>
                            </tr>
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
        }
    }

})
</script>
