 <template>
    <div class="row gap-20 masonry pos-r">
       <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }}</h3>
           <back-button :href="'/logTimeArrival'"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
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
                <input type="text" v-model="ticket_number" class="form-control" autocomplete="chrome-off" disabled readonly>
                <label for="">Time Of Arrival</label>
                <input type="datetime-local" v-model="form.time_arrival" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.time_arrival">{{ form.errors.time_arrival }}</div>
                <label for="">Odo Reading</label>
                <input type="text" v-model="form.odometer" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.odometer">{{ form.errors.odometer }}</div>
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
                time_arrival:'',
                odometer:'',
            }),
            ticket_number:'',
            pageTitle: "Log Arrival",
            loading:false,
        };
    },
    
    mounted() {
         
           
            if(this.editData)
            {
                this.form.travel_id = this._logTimeArrival.id
                this.form.time_arrival = this._logTimeArrival.log_time_arrival.time_arrival
                this.ticket_number = this._logTimeArrival.ticket_number
            }
            else
            {
                this.form.travel_id = this._logTimeArrival.id
                this.ticket_number = this._logTimeArrival.ticket_number
            }
    },
    methods: {
        submit() {
           
            if (this.editData) {
                this.form.patch("/logTimeArrival/" + this._logTimeArrival.id, this.form);
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

        // showFilter() {
        //     this.filter = !this.filter
        // },

        
    },
   
};
</script>