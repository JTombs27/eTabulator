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
                <input type="text" v-model="form.plate_no" class="form-control" autocomplete="chrome-off" readonly>
                <div class="fs-6 c-red-500" v-if="form.errors.plate_no">{{ form.errors.plate_no}}</div>
                <label for="">Office</label>
                <Select2 v-model="form.department_code" id="department_code" />
                <div class="fs-6 c-red-500" v-if="form.errors.office_id">{{ form.errors.office_id }}</div>
                <label for="">Effective Date</label>
                <input type="date" v-model="form.effective_date" class="form-control" autocomplete="chrome-off" >
                <button type="button" class="btn btn-primary mt-3" @click="edit()" :disabled="form.processing">save</button>
            </form>
        </div>
        
    </div>
    <div></div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    props: {
         officevehicle:Object,
    },
    data() {
        return {
            confirm: false,
            filter: false,
            showModal: false,
            _disbled:true,
            button_label:'',
            form: useForm({
                id:"",
                vehicles_id:'',
                plate_no:'',
                department_code:'',
                effective_date:'',
            }),
            pageTitle: "Edit Vehicle Department Assignment",
            loading:false,
        };
    },
    
    mounted() {
           this.form.id = this.officevehicle[0].id
           this.form.vehicles_id = this.officevehicle[0].vehicles_id
           this.form.plate_no = this.officevehicle[0].plate_no
           
           $('#department_code').select2({
            ajax: {
                url: '/offices/fetch',
                dataType:'json',
                delay:500,
                data: function(filter) {
                    return {filter:filter.term};
                },
                processResults: function(data, params) {
                    params.page = params.page || 1;

                    return{
                        results: $.map(data, function(obj) {
                            return {
                                id: obj.id,
                                text: obj.text
                            }
                        })
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
        })

        $('#plate_no').select2({
            ajax: {
                url: '/vehicles/fetch',
                dataType:'json',
                delay:500,
                data: function(filter) {
                    return {filter:filter.term};
                },
                processResults: function(data, params) {
                    params.page = params.page || 1;

                    return{
                        results: $.map(data, function(obj) {
                            return {
                                id: obj.id,npm,
                                text: obj.text
                            }
                        })
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
        })
            
            
    },
    methods: {
        edit() {
           
           this.form.patch("/officeVehicles/"+this.form.id, this.form);
        },
     

       

        // showFilter() {
        //     this.filter = !this.filter
        // },

        
    },
   
};
</script>