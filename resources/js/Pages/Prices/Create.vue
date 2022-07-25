<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Prices </h3>
            <back-button :href="backToMyUrl"></back-button>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8 p-20 bd">
                <div class="row">
                    <div class="col-12" style="margin-top:-15px;">
                            <button type="button" @click="addNew()" v-if="editData === undefined" class="btn btn-sm btn-secondary pull-right">+</button>
                    </div>
                </div>
                <form @submit.prevent="submit()" id="mainForm">
                        <div class="col-12" style="margin-top:10px;">
                            <div class="input-group">
                                <span class="input-group-text">Date</span>
                                <input type="date" v-model="dates.date" class="form-control" :disabled="disablegasType">
                            </div>   
                            <div class="fs-6 c-red-500" v-if="form.errors['data.date']">{{ form.errors['data.date'] }}</div>
                                
                        </div>
                    <div class="row" v-for="(price, index) in gasTypeGroup" :key="index">
                        <div class="col-12 bgc-white p-10 bd" style="margin-top: 5px;">
                            <div class="row">
                                <div class="col-6">
                                   
                                        <label for="">Gas Type</label>
                                           
                                        <Select2 v-model="price.gas_type" :options="gases" :disabled="disablegasType"   /> 
                                        <div class="fs-6 c-red-500" v-if="(form.errors['gasTypeGroup.'+index+'.gas_type'] || form.errors['gasTypeGroup.'+index+'.gas_typeX'])">{{ (form.errors['gasTypeGroup.'+index+'.gas_type'] || form.errors['gasTypeGroup.'+index+'.gas_typeX'])}}</div>
                                   
                                </div>
                                <div class="col-6">
                                    <label for="">Price</label>
                                        <span  @click="removeNode(index)" v-if="(editData === undefined) && (gasTypeGroup.length !== 1)" style="margin-top:-10px; float: right;">
                                            
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size: 18px; font-weight: bolder; color:red;" fill="currentColor" class="bi bi-x-lg"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                <path fill-rule="evenodd"
                                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                            </svg>
                                        </span>
                                    <input type="text" v-model="price.price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors['gasTypeGroup.'+index+'.price']">{{ form.errors['gasTypeGroup.'+index+'.price'] }}</div>
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
        editData: Object,
    },
    data() {
        return {
            form: useForm(),
            dates:{
                date:new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit", day:"2-digit"}),
            },
            gasTypeGroup:[{
                 gas_type: "",
                 price: "",
                 id: null
            }],
            gases:[{
                id:"Gasoline(Regular)",
                text:"Gasoline(Regular)"
            },{
                id:"Gasoline(Premium)",
                text:"Gasoline(Premium)"
            },{
                id:"Diesoline",
                text:"Diesoline"
            },{
                id:"Engine Oil",
                text:"Engine Oil"
            },{
                id:"Brake Oil",
                text:"Brake Oil"
            },{
                id:"Greases",
                text:"Greases"
            }],
            testValue:"",
            pageTitle: "",
            loading:false,
            disablegasType: false,
            backToMyUrl:"/prices"
        };
    },
    mounted() {

        if (this.editData !== undefined) 
        {
            this.loading            = true;
            this.pageTitle          = "Edit";
            this.gasTypeGroup[0].gas_type    = this.editData.gas_type;
            this.gasTypeGroup[0].price     = this.editData.price;
            this.gasTypeGroup[0].date       = this.editData.date_to;
            this.gasTypeGroup[0].id            = this.editData.id;
            this.disablegasType     = true;

        } else {
            this.pageTitle = "Add";
            this.disablegasType = false;
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                 this.form.transform((data) =>({
                    data,
                    gasTypeGroup: this.gasTypeGroup
                 }))
                 this.form.patch("/prices/"+this.editData.id, this.form);
            } else 
            {
                this.form.transform((data)=>({
                    data: this.dates,
                    gasTypeGroup: this.gasTypeGroup
                }))
                this.form.post("/prices/store", this.form);
            }

        },
        addNew(){
                this.gasTypeGroup.push(useForm({
                    gas_type  : "",
                    price   : "",
                    id          : null
                }));

        },
        removeNode(index){
            this.gasTypeGroup.splice(index,1);
        },
        backToMain()
        {
             this.$inertia.get("/prices");
        }
    },
};
</script>