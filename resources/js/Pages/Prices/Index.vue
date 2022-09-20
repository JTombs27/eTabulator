<template>
    <Head>
        <title>Prices</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Prices</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer"  v-if="can.canCreatePrice">
                    <Link class="btn btn-primary btn-sm" href="/prices/create">Add Price</Link>
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
            <div class="tabe-responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col" style="text-align: right">Gasoline(Regular)</th>
                            <th scope="col" style="text-align: right">Gasoline(Premium)</th>
                            <th scope="col" style="text-align: right">Diesoline</th>
                            <th scope="col" style="text-align: right">Engine Oil</th>
                            <th scope="col" style="text-align: right">Brake Oil</th>
                            <th scope="col" style="text-align: right">Greases</th>
                            <th scope="col" style="text-align: center">Station</th>
                            <th scope="col" style="text-align: right" v-if="can.canEditPrice || can.canDeletePrice">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(prices, index) in price.data" :key="index">
                            <td>{{ new Date(prices.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' }) }}</td>
                            <td class="text-end">{{ Number(prices.regular_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(prices.premium_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(prices.deisoline_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(prices.engine_oil_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(prices.brake_oil_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-end">{{ Number(prices.greases_price).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <td class="text-center" >{{ prices.gasoline.name }}</td>
                            <td style="text-align: right" v-if="can.canEditPrice || can.canDeletePrice">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li v-if="can.canEditPrice">
                                        <Link class="dropdown-item" title="Edit Price!" @click="editprice(prices.id)"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pencil me-2" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg> Edit
                                        </Link>
                                    </li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="can.canDeletePrice">
                                        <Link class="dropdown-item" title="Delete" @click="deleteprice(prices.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-trash me-2 text-danger" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg> Delete
                                        </Link>
                                    </li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="price.links" /> -->
                        <pagination :next="price.next_page_url" :prev="price.prev_page_url" />
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
        price: Object,
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
        editprice(id)
        {
            this.$inertia.get("/prices/"+id+"/edit/");
        },
        deleteprice(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/prices/" + id);
              }
        },
        showFilter() {
            this.filter = !this.filter
        }
    },
};
</script>
