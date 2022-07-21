<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Charges </h3>
            <back-button :backToURL="backToMyUrl"></back-button>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 p-20 bd">
                <div class="row">
                    <div class="col-12" style="margin-top:-15px;">
                            <button type="button" @click="addNew()" v-if="editData === undefined" class="btn btn-sm btn-secondary pull-right">+</button>
                    </div>
                </div>
                <form @submit.prevent="submit()" id="mainForm">
                    <div class="row" v-for="(office, index) in officeGroup" :key="index">
                        <div class="col-12 bgc-white p-10 bd" style="margin-top:10px;">
                            <div class="row">
                                <div class="col-12">
                                    <div class="peers fxw-nw jc-sb ai-c">
                                        <label for="">Office Selection</label>
                                           <span  @click="removeNode(index)" v-if="(editData === undefined) && (officeGroup.length !== 1)" style="margin-top:-10px;">
                                            
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size: 18px; font-weight: bolder; color:red;" fill="currentColor" class="bi bi-x-lg"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                <path fill-rule="evenodd"
                                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <Select2 v-model="office.office_id" :options="offices" :disabled="disableOffice"   /> 
                                    <div class="fs-6 c-red-500" v-if="(form.errors['officeGroup.'+index+'.office_id'] || form.errors['officeGroup.'+index+'.office_idX'])">{{ (form.errors['officeGroup.'+index+'.office_id'] || form.errors['officeGroup.'+index+'.office_idX'])}}</div>
                                    <!-- <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.vehicle_idX']">{{ form.errors["vehiclesGroup."+index+".vehicle_idX"]}}</div> -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="">Amount</label>
                                    <input type="text" v-model="office.amount" class="form-control" autocomplete="chrome-off" placeholder="00.00">
                                    <div class="fs-6 c-red-500" v-if="form.errors['officeGroup.'+index+'.amount']">{{ form.errors['officeGroup.'+index+'.amount'] }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-primary pull-right mt-3" @click="submit()" :disabled="form.processing">
                                {{pageTitle=="Add" ? "Save/Create":"Save Changes"}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        editData: Object
    },
    data() {
        return {
            form: useForm(),
            officeGroup:[{
                 office_id: "",
                 amount: "",
                 id:""
            }],
            offices:[],
            /*testValue:"",*/
            pageTitle: "",
            loading:false,
            disableOffice: false,
            backToMyUrl:"/charges"
        };
    },
    mounted() {

        if (this.editData !== undefined) 
        {
            this.loading            = true;
            this.pageTitle          = "Edit";
            this.officeGroup[0].office_id    = this.editData.office_id;
            this.officeGroup[0].amount     = this.editData.amount;
            this.officeGroup[0].id            = this.editData.id;
            this.disableOffice     = true;

        } else {
            this.pageTitle = "Add";
            this.disableOffice = false;
        }

        this.loadOffice()
    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                 this.form.transform((data) =>({
                    data,
                    officeGroup: this.officeGroup
                 }))
                 this.form.patch("/charges/"+this.editData.id, this.form);
            } else 
            {
                
                this.form.transform((data)=>({
                    data,
                    officeGroup: this.officeGroup
                }))
                this.form.post("/charges/store", this.form);
            }

        },
        addNew(){
                this.officeGroup.push(useForm({
                    office_id  : "",
                    amount   : "",
                    id          : null
                }));

        },
        removeNode(index){
            this.officeGroup.splice(index,1);
        }
        ,
        loadOffice() 
        { 
            axios.get('/offices/fetch').then((response) => {
                this.offices = response.data
            })
        },
        backToMain()
        {
             this.$inertia.get("/charges");
        }
    },
};
</script>