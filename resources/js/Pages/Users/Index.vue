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
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                </div>
            </div>
        </div>

        <filtering v-if="filter" @closeFilter="filter=false">
            <label>Sample Inputs</label>
            <input type="text" class="form-control">
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="">Filter</button>
        </filtering>
 
        <div class="col-12">
            <div class="bgc-white p-20 bd shadow-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Active</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col" style="width: 30%">Permissions</th>
                            <th scope="col" style="text-align: right">Action</th>
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
                            <td>
                                <div class="badge bg-info me-1" v-for="permission in user.permissions">
                                    {{ permission.permission_name }}
                                </div>
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
                                    <li><a class="dropdown-item" href="#" @click="editPermissions(user.id)">Permissions</a></li>
                                    <li><hr class="dropdown-divider action-divider"></li>
                                    <li v-if="can.canDeleteUser && !user.can.delete">
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

    <Modal 
        v-if="showModal" 
        :modalTitle="'Permissions'" 
        :addional_class="'modal-lg'"
        :showSaveButton="true"
        @closeModal="closeModal"
        @saveModal="updatePermissions">
        <div class="row pb-3">
            <div class="col-md-4">
                <div class="form-check">
                  <input class="form-check-input " type="checkbox" @change="selectOption($event, 'all')" id="flexCheckDefault">
                  <label class="form-check-label disable-select" for="flexCheckDefault">
                    Select all
                  </label>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input " type="checkbox" @change="selectOption($event,'pghead')" id="pgheadPermission">
                    <label class="form-check-label disable-select" for="pgheadPermission">
                        PG-Head 
                    </label>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input " type="checkbox"  @change="selectOption($event,'pgo')" id="pgoPermission">
                    <label class="form-check-label disable-select" for="pgoPermission">
                        PGO 
                    </label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input " type="checkbox" name="flexRadioDefault" @change="selectOption($event,'ro')" id="roPermission">
                    <label class="form-check-label disable-select" for="roPermission">
                        RO 
                    </label>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input " type="checkbox" name="flexRadioDefault" @change="selectOption($event,'pgso')" id="pgsoPermission">
                    <label class="form-check-label disable-select" for="pgsoPermission">
                        PGSO 
                    </label>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input " type="checkbox" name="flexRadioDefault" @change="selectOption($event,'gasoline-station')" id="gasoline-station">
                    <label class="form-check-label disable-select" for="gasoline-station">
                        Gasoline Station 
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="permission, index in permissions" class="col-md-4 mb-3">
                <h4> {{ index }} </h4>
                <div v-for="item in permission" class="form-check checkbox-list">
                    <input type="checkbox" class="form-check-input specific" v-model="selectedPermissions" :value="item.id" :id="`permission${item.id}`"> 
                    <label class="form-check-label disable-select" :for="`permission${item.id}`">{{ item.permission_name }}</label>
                </div>
            </div>
        </div>
    </Modal>
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
        showFilter() {
            this.filter = !this.filter
        },
        editPermissions(userId) {
            var vm = this
            var user = _.find(this.users.data, { id: userId })
            this.showModal = true
            this.selectedUser = userId
            this.selectedPermissions = []

            _.forEach(user.permissions, function(e) {
                vm.selectedPermissions.push(e.id)
            })

            this.getAllPermissions()
        },
        updatePermissions() {
           
            
            this.$inertia.post('update-user-permissions', {
                    'user_id' : this.selectedUser,
                    'permissions' : this.selectedPermissions
                }, {
                replace: true,
            })
            $("#modal").hide();
            $('body').removeClass('modal-open');
            $('body').css("overflow","scroll");
            $('.modal-backdrop').remove();
            this.showModal = false
        },
        closeModal() {
            
            this.showModal = false
        },
        async getAllPermissions() {
            await axios.post('get-all-permissions').then( response => {
                this.permissions = _.groupBy(response.data, 'permission_group');
            })
        },

        setStatus(e, item) {
            this.$inertia.patch(`/users/status/${item}`, {is_check:e.target.checked})
        },

        selectOption(e, Permission_type) {
             console.log(Permission_type)
            if (e.target.checked) {
                if (Permission_type == 'all') {
                    const newArr = [];
                    const selected = _.flatMapDepth(this.permissions, function (e) {
                        // return e.id;
                        _.forEach(e, function(value) {
                            // return value.id
                            var final_id = _.map(value);
                            newArr.push(final_id[0]) 
                        })
                    });
                    this.selectedPermissions = newArr;
                } else if (Permission_type == 'pgo') {

                    this.selectedPermissions = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23,24,25,26,31];

                } else if (Permission_type == 'ro') {

                    this.selectedPermissions = [5,7,10,11,12,13,14,15,25];

                } else if (Permission_type == 'pghead') {

                    this.selectedPermissions = [6,25,26];

                } else if (Permission_type == 'pgso') {

                    this.selectedPermissions = [4,8,16,17,18,19,20,21,22,23,24,27,28,29,30,31,33,34,35];

                } else if (Permission_type == 'peo-motorpool') {

                    this.selectedPermissions = [18, 19];

                } else if (Permission_type == 'gasoline-station') {

                    this.selectedPermissions = [20,21,22];

                }

            } else {
                this.selectedPermissions = [];
            }
        }
    },
};
</script>
