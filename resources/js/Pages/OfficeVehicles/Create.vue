 <template>
     

    <div class="row gap-20 masonry pos-r">
       <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }}</h3>
            <Link href="/officeVehicles">
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
                <label for="">Plate Number</label>
                <Select2 v-model="form.plate_no" id="plate_no"/>
                <div class="fs-6 c-red-500" v-if="form.errors.plate_no">{{ form.errors.plate_no}}</div>
                <label for="">Department Name</label>
                <Select2 v-model="form.department_code" id="department_code"/>
                <div class="fs-6 c-red-500" v-if="form.errors.plate_no">{{ form.errors.plate_no}}</div>
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
         offices : Object,
         vehicles:Object,
    },
    data() {
        return {
            confirm: false,
            filter: false,
            showModal: false,
            _disbled:true,
            button_label:'',
            form: useForm({
                plate_no:'',
                department_code:'',
            }),
           
            pageTitle: "Assign Vehicle To Department",
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