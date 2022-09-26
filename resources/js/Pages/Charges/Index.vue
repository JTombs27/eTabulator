<template>
    <Head>
        <title>Charges</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Charges</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <!-- <div class="peer"  v-if="can.canCreateCharge">
                    <Link class="btn btn-primary btn-sm" href="/charges/create">Add</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div> -->
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Sample Inputs</label>
            <input type="text" class="form-control">
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
 
        <div class="col-12">
            <div class="table responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Office</th>
                            <th scope="col">FUNCCOD</th>
                            <th scope="col">Description(RAAOH)</th>
                            <th scope="col">Description(OOE)</th>
                            <th scope="col" style="text-align: right">Amount</th>
                            <!-- <th scope="col" style="text-align: right" v-if="can.canEditCharge || can.canCreateCharge">Action</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(charges, index) in charge.data" :key="index">
                            <td>{{ charges.office }}</td>
                            <td>{{ charges.ffunccod }}</td>
                            <td>{{ charges.fraodesc }}</td>
                            <td>{{ charges.fooedesc }}</td>
                            <td class="text-end">{{ Number(charges.balance2).toLocaleString(undefined, { minimumFractionDigits: 2,  maximumFractionDigits: 2 }) }}</td>
                            <!-- <td style="text-align: right" v-if="can.canEditCharge || can.canCreateCharge"> -->
                                <!-- v-if="user.can.edit" -->
                                <!-- <div class="dropdown dropstart" v-if="can.canEditCharge || can.canCreateCharge">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li v-if="can.canEditCharge">
                                        <Link class="dropdown-item" title="Edit Charge!" @click="editOffices(charges.id)"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pencil me-2" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg> Edit
                                        </Link>
                                    </li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="can.canDeleteCharge">
                                        <Link class="dropdown-item" title="Delete" @click="deletecharge(charges.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-trash me-2 text-danger" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg> Delete
                                        </Link>
                                    </li>
                                  </ul>
                                </div> -->
                            <!-- </td> -->
                        </tr>
                    </tbody>
                </table>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="soaTravel.links" /> -->
                        <pagination :next="charge.next_page_url" :prev="charge.prev_page_url" />
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
        charge: Object,
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
            selectedUser: "",
        };
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/charges",
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
        editOffices(id)
        {
            this.$inertia.get("/charges/"+id+"/edit/");
        },
        deletecharge(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/charges/" + id);
              }
        },
        showFilter() {
            this.filter = !this.filter
        }
    },
};
</script>
