 <template>
     

    <div class="row gap-20 masonry pos-r">
       <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }}</h3>
           <back-button :href="'/VehicleStatus/'+vehicleid+''"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg></back-button>
        </div> 
        <div class="col-md-8">
            <form @submit.prevent="submit()">
               
                <label for="">Ticket number</label>
                <input type="text" v-model="form.ticket_number" class="form-control" autocomplete="chrome-off" disabled readonly>
                <div class="fs-6 c-red-500" v-if="form.errors.ticket_number">{{ form.errors.ticket_number }}</div>
                <label for="">Time Of Arrival</label>
                <input type="datetime-local" v-model="form.time_arrival" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.time_arrival">{{ form.errors.time_arrival }}</div>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">save</button>
            </form>
        </div>
    
      
    </div>
    <div></div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: {
         _logTimeArrival:Object,
         editData : Object
    },
    data() {
        return {
            confirm: false,
            filter: false,
            showModal: false,
            _disbled:true,
            button_label:'',
            form: useForm({
                travel_id:'',
                ticket_number:'',
                time_arrival:'',
            }),

            pageTitle: "Log Arrival",
            loading:false,
        };
    },
    
    mounted() {

          console.log(this.editData)
            if(this.editData)
            {
                this.form.travel_id = this._logTimeArrival.travel_id
                this.form.ticket_number = this._logTimeArrival.ticket_number
                this.form.time_arrival = this._logTimeArrival.time_arrival
            }
            else
            {
                this.form.travel_id = this._logTimeArrival.travel_id
                this.form.ticket_number = this._logTimeArrival.ticket_number
            }
    },
    methods: {
        submit() {
             console.log(this._logTimeArrival.travel_id)
            console.log(this.form.travel_id)
            if (this.editData) {
                this.form.patch("/logTimeArrival/" + this.form.travel_id, this.form);
            } 
            else {
               this.form.post("/logTimeArrival", this.form);
            }
        },
        Edit() {
           this._disbled = false
        },

       back(){

           this.$inertia.get("/officeVehicles/" +this.form.vehicles_id +"/create");
       }

        // showFilter() {
        //     this.filter = !this.filter
        // },

        
    },
   
};
</script>