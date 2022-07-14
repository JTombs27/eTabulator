<template>
    <Head>
        <title> Vehicles</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Vehicles</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer">
                    <Link class="btn btn-success btn-sm" href="/vehicles/create">Add Vehicles</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white">Filter</button>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="bcg-white p-20 bd">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Plate Number</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Date Acquired</th>
                            <th scope="col">Acquisition</th>
                            <th scope="col">Description</th>
                            <th scope="col" style="text-align: right"> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(vehicle, index) in vehicles.data" :key="index">
                            <td> {{vehicle.PLATENO}}</td>
                            <td> {{vehicle.TYPECODE}}</td>
                            <td> {{vehicle.FDATEACQ}}</td>
                            <td> {{vehicle.FACQCOST}}</td>
                            <td> {{vehicle.FDESC}}</td>
                            <td style="text-align: right">
                                <div class="dropdown downstart">
                                    <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                    </button>
                                    <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" :href="`/vehicles/${vehicle.id}/edit`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg> Edit</Link></li>

                                        <li><Link class="dropdown-item" :href="`/VehicleStatus/${vehicle.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg> Status</Link></li>

                                        <li><Link class="dropdown-item" :href="`/drivers/${vehicle.id}`">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                                        </svg> Driver Vehicle</Link></li>

                                        <li> <hr class="dropdown-divider action-divider"></li>
                                        <li><Link class="text-danger dropdown-item" @click="deleteVehicle(vehicle)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg> Delete </Link></li>
                                    </ul>
                                
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="vehicles.next_page_url" :prev="vehicles.prev_page_url" />
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
        vehicles: Object
    },

    methods: {
        deleteVehicle(vehicle)
        {
            let text = "Warning! \Are you sure you want to Delete this Vehicle Plate Number " + vehicle.PLATENO;

            if(confirm(text) == true){
                this.$inertia.delete("/vehicles/" + vehicle.id);
            }
        }
    },
})
</script>
 