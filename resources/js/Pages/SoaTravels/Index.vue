<template>
    <Head>
        <title>Soa Travels</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Soa Travels</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer"  v-if="can.canCreateSoaTravel">
                    <Link class="btn btn-primary btn-sm" href="/soatravels/merge">Add Merge</Link>
                    <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button> -->
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Sample Inputs</label>
            <input type="text" class="form-control">
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
 
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Date From</th>
                            <th scope="col">Date To</th>
                            <th scope="col" style="text-align: right">Total Price</th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(soaTravels, index) in soaTravel.data" :key="index">
                            <td>{{ soaTravels.date_from }}</td>
                            <td>{{ soaTravels.date_to }}</td>
                            <td class="text-end">{{ Number(soaTravels.travels_sum_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/soatravels/${soaTravels.id}/details`">Details</Link></li>
                                    <li><Link class="text-danger dropdown-item" @click="deleteSoaTravel(soaTravels.id)">Delete</Link></li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="soaTravel.links" /> -->
                        <pagination :next="soaTravel.next_page_url" :prev="soaTravel.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default {
    components: { Pagination, Filtering },
    props: {
        soaTravel: Object,
        filters: Object,
        can: Object,
    },
    data() {
        return {
            search: this.$props.filters.search,
            confirm: false,
            filter: false,
            showModal: false,
            permissions: [],
            selectedPermissions: [],
            selectedUser: ""
        };
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/soatravels",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
        deleteSoaTravel(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/soatravels/" + id);
              }
        },
        showFilter() {
            this.filter = !this.filter
        }
    },
};
</script>
