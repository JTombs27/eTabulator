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