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
                <input type="text" v-model="form.plate_no" class="form-control" autocomplete="chrome-off" disabled readonly>
                <label for="">Date</label>
                <input type="date" v-model="form.vehicle_status_date" class="form-control" autocomplete="chrome-off">
                <div class="fs-6 c-red-500" v-if="form.errors.vehicle_status_date">{{ form.errors.vehicle_status_date }}</div>
                <label for="">Condition</label>
                 <select v-model="form.condition"  class="form-select md">
                    <option disabled value="">Select Status</option>
                    <option>Good Condition</option>
                    <option>On-repair</option>
                    <option>Wasted</option>
                 </select>
                 <div class="fs-6 c-red-500" v-if="form.errors.condition">{{ form.errors.condition }}</div>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">save</button>
            </form>
        </div>
        
         <!-- <div class="col-md-8">
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
                <button type="button" class="btn btn-primary mt-3" @click="Edit()" :disabled="form.processing" v-if="_disbled">{{button_text}}</button>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing" v-if="!_disbled">save</button>
            </form>
        </div> -->
       

        
     
      
    </div>
    <div></div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: {
      plate_no : Object,
    },
    data() {
        return {
            
            confirm: false,
            filter: false,
            showModal: false,
            _disbled:true,
            PLATENO:'',
            button_label:'',
            form: useForm({
               id:'',
               vehicle_status_date:'',
               plate_no:'',
               condition:''
            }),
           
            pageTitle: "Add Vehicle Status",
            loading:false,
        };
    },
    
    mounted() {
       // this.plate_no = this.id
        this.form.plate_no = this.plate_no
       
            
            
    },
    methods: {
        submit() {

            //console.log(this.form)
            this.form.post("/VehicleStatus", this.form);

           
            // if (!!this.vehicle.vehicle_status) {
            //     this.form.patch("/VehicleStatus/" + this.form.id, this.form);
            // } 
            // else {
            //    this.form.post("/VehicleStatus", this.form);
            // }
        },
        Edit() {
           this._disbled = false
        },
        // showFilter() {
        //     this.filter = !this.filter
        // },

        
    },
   
};
</script>