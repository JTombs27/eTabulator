   <template>
     

    <div class="row gap-20 masonry pos-r">
        
        <div class="peers fxw-nw jc-sb ai-c">
             <h3>{{ pageTitle }}</h3>
             
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
                </div>
                <div class="peer" >
                    <!-- <Link class="btn btn-primary btn-sm">Log Arrival</Link> -->
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                    &nbsp;&nbsp;
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
            </div>
           
        </div>

       <filtering v-if="filter" @closeFilter="filter=false">
            <label>Sample Inputs</label>
            <input type="text" class="form-control">
              <button class="btn btn-sm btn-primary mT-5 text-white">Filter</button>
        </filtering>
 
 
        <div class="col-12">
            <div class="bgc-white p-20 bd">
                
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ticket No.</th>
                            <th scope="col">Date From</th>
                            <th scope="col">Date TO</th>
                            <th scope="col">Time Arrival</th>
                            <th scope="col" style="text-align: right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr v-for="(log,index) in _logTimeArrival.data" :key="index">
                            <td>{{log.ticket_number}}</td>
                            <td>{{log.date_from}}</td>
                            <td>{{log.date_to}}</td>
                            <td>{{ifnull(log.log_time_arrival)}}</td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li v-if="Showlog(log.log_time_arrival)"><Link class="dropdown-item" @click="gotoLogArrival(index)">Log Arrival</Link></li>
                                    <li v-if="ShowEdit(log.log_time_arrival)"><Link class="dropdown-item" @click="gotoEditLog(index)">Edit Log</Link></li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <pagination :next="_logTimeArrival.next_page_url" :prev="_logTimeArrival.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>

        
     
      
    </div>
    <div></div>
</template>
<script>

import { useForm } from "@inertiajs/inertia-vue3";
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
export default {
    components: { Pagination, Filtering },
    props: {
       _logTimeArrival : Object,
    },
    data() {
        return {
          //  search: this.$props.filters.search,
            confirm: false,
            filter: false,
            showModal: false,
            _disbled:true,
            button_label:'',
            pageTitle: "Driver's Log Time of Arrival",
            loading:false,
        };
    },
     watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/LogTimeArrival",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    mounted() {
       
        console.log(this._logTimeArrival)
        // this.plate_no = this.vehicle_status.plate_no
        // this.form.plate_no = this.plate_no
            // if(this.vehicle.vehicle_status)
            // {
            //     this.form.id = this.vehicle.vehicle_status.id
            //     this.form.condition = this.vehicle.vehicle_status.condition
            // }
         
            
    },
    methods: {
       
       
        showFilter() {
            this.filter = !this.filter
        },

        gotoLogArrival(index) {
             this.travel_id = this._logTimeArrival.data[index].id
             this.$inertia.get("/logTimeArrival/" + this.travel_id +"/create");
        },

        gotoEditLog(index) {
             this.travel_id = this._logTimeArrival.data[index].id
             this.$inertia.get("/logTimeArrival/" + this.travel_id +"/edit");
        },

        ifnull(data) {
           if(!!data)
           {
                return data.time_arrival
           }
           else
           {
               return ""
           }
        },

        ShowEdit(data) {
           if(!!data)
           {
                return true
           }
           else
           {
               return false
           }
        },
         Showlog(data) {
           if(!!data)
           {
                return false
           }
           else
           {
               return true
           }
        },

    },
    // computed:{
    //     button_text(){
    //         if(!!!this.vehicle.vehicle_status)
    //         {
    //               return "Add"
    //         }
    //         else{
    //             return "Edit"
    //         }
    //     }
    // }
};
</script>