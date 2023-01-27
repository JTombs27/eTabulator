<template>
    <Head>
        <title>Users</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Users</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer"  v-if="can.createUser">
                    <Link class="btn btn-primary btn-sm" href="/users/create">Add User</Link>
                </div>
            </div>
        </div>
 
        <div class="col-12">
            <div class="tabl-responsive bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" style="width:10%;">Active</th>
                            <th scope="col" style="width:30%;">Username</th>
                            <th scope="col" style="width:40%;">Name</th>
                            <th scope="col" style="width:10%;">Role</th>
                            <th scope="col" style="text-align: right;width:5%;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users.data" :key="index">
                            <td>
                                <div class="form-check form-switch">
                                    <input 
                                        type="checkbox" 
                                        class="form-check-input" 
                                        role="switch"
                                        :id="user.id" 
                                        :checked="user.is_active"
                                        @change="setStatus($event,user.id)"
                                    >
                                    <label class="form-check-label" :for="user.id"></label>
                                </div>
                            </td>
                            <td>
                                {{ user.username }}
                            </td>
                            <td>
                                <div class="row g-3 align-items-center">
                                    <!-- <div class="col-12 col-lg-auto text-center text-lg-start">						        
                                        <img
                                            class="w-2r bdrs-50p"
                                            :src="user.photo"
                                            alt=""
                                        />
                                    </div> -->
                                    <div class="col-12 col-lg-auto text-center text-lg-start">
                                        <p class="notification-title mb-1">{{ user.name }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{ user.role }}
                            </td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li><Link class="dropdown-item" :href="`/users/${user.id}/edit`">Edit</Link></li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="user.can.delete">
                                        <Link class="text-danger dropdown-item" @click="deleteUser(user.id)">Delete</Link>
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
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="users.next_page_url" :prev="users.prev_page_url" />
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
        users: Object,
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
                "/users",
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
        deleteUser(id) {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) {
                this.$inertia.delete("/users/" + id);
              }
        },
        setStatus(e, item) {
            this.$inertia.patch(`/users/status/${item}`, {is_check:e.target.checked})
        }
    },
};
</script>
