   <template>
     

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }}</h3>
            <Link href="/vehicles">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>

        
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <label for="">Plate number</label>
                <input type="text" v-model="PLATENO" class="form-control" autocomplete="chrome-off" disabled readonly>
                <label for="">Condition</label>
                 <select class="form-select md" v-model="form.condition" :disabled="_disbled" :readonly="_disbled">
                    <option disabled value="">Select Status</option>
                    <option>Good Condition</option>
                    <option>On-repair</option>
                    <option>Wasted</option>
                 </select>
                <!-- <input type="text" v-model="form.condition" class="form-control" autocomplete="chrome-off" :disabled="_disbled" :readonly="_disbled"> -->
                <button type="button" class="btn btn-primary mt-3" @click="Edit()" :disabled="form.processing" v-if="_disbled">{{button_text}}</button>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing" v-if="!_disbled">save</button>
            </form>
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
                            <th scope="col">Plate No.</th>
                            <th scope="col">Email</th>
                            <th scope="col" style="width: 30%"></th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users.data" :key="index">
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
                                {{ user.email }}
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
                                    <li v-if="can.canDeleteUser">
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
    <div></div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: {
        vehicle: Object,
    },
    data() {
        return {
            _disbled:true,
            PLATENO:'',
            button_label:'',
            form: useForm({
               id:'',
               vehicle_id:'',
               condition:''
            }),
           
            pageTitle: "Vehicle Status",
            loading:false,
        };
    },
    mounted() {
        this.PLATENO = this.vehicle.PLATENO
        this.form.vehicle_id = this.vehicle.id 
            if(this.vehicle.vehicle_status)
            {
                this.form.id = this.vehicle.vehicle_status.id
                this.form.condition = this.vehicle.vehicle_status.condition
            }
         
            
    },
    methods: {
        submit() {


            if (!!this.vehicle.vehicle_status) {
                this.form.patch("/VehicleStatus/" + this.form.id, this.form);
            } 
            else {
                this.form.post("/VehicleStatus", this.form);
            }

        },

        Edit() {
            
           this._disbled = false
           
        },

        // loadMunicipals() { 
        //     axios.post('/municipalities').then((response) => {
        //         this.municipals = response.data
                
        //     })
        // },

        // loadBarangays() {
        //     axios.post('/barangays', {citymunCode:this.form.citymunCode}).then((response) => {
        //         this.barangays = response.data
        //         this.puroks = []
        //     })
        // },
    },
    computed:{
        button_text(){
            if(!!!this.vehicle.vehicle_status)
            {
                  return "Add"
            }
            else{
                return "Edit"
            }
        }
    }
};
</script>