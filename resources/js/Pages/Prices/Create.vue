<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Prices </h3>
            <back-button :href="backToMyUrl"></back-button>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8 p-20 bd">
                <form @submit.prevent="submit()" id="mainForm">
                        <div class="col-12 mt-2">
                            <div class="input-group">
                                <span class="input-group-text">Station</span>

                                <select class="form-select md" v-model="form.gasoline_id" :disabled="disablegasType">
                                    <option disabled value="">Select Station</option>
                                    <option v-for="item, index in gasoline" :value="item.id">{{ item.text }}</option>
                                </select>
                            </div>   
                            <div class="fs-6 c-red-500" v-if="form.errors.gasoline_id">{{ form.errors.gasoline_id }}</div>      
                        </div>
                        <div class="col-12 mt-3">
                            <div class="input-group">
                                <span class="input-group-text">Date</span>
                                <input type="date" v-model="form.date" class="form-control" :disabled="disablegasType">
                            </div>   
                            <div class="fs-6 c-red-500" v-if="form.errors.date">{{ form.error.date }}</div>      
                        </div>
                    <div class="row">
                        <div class="col-12 bgc-white p-10 bd mt-2">
                            <div class="row">
                                <div class="col-6">
                                        <label for="" class="mb-2">Gas Type</label>  
                                        <input type="text" disabled class="form-control" value="Gasoline(Premium)" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <label for=""  class="mb-2">Price</label>
                                    <input type="text" v-model="form.premium_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.premium_price">{{ form.errors.premium_price }}</div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">                      
                                        <input type="text" disabled class="form-control" value="Gasoline(Regular)" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <input type="text" v-model="form.regular_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.regular_price">{{ form.errors.regular_price }}</div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">                      
                                        <input type="text" disabled class="form-control" value="Diesoline" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <input type="text" v-model="form.deisoline_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.deisoline_price">{{ form.errors.deisoline_price }}</div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">                      
                                        <input type="text" disabled class="form-control" value="Engine Oil" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <input type="text" v-model="form.engine_oil_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.engine_oil_price">{{ form.errors.engine_oil_price }}</div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">                      
                                        <input type="text" disabled class="form-control" value="Braek Oil" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <input type="text" v-model="form.brake_oil_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.brake_oil_price">{{ form.errors.brake_oil_price }}</div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-6">                      
                                        <input type="text" disabled class="form-control" value="Greases" autocomplete="chrome-off">
                                </div>
                                <div class="col-6">
                                    <input type="text" v-model="form.greases_price" class="form-control" placeholder="0.00" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.greases_price">{{ form.errors.greases_price }}</div>
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
            form: useForm({
                premium_price:'',
                regular_price:'',
                deisoline_price:'',
                engine_oil_price:'',
                brake_oil_price:'',
                greases_price:'',
                date:new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit", day:"2-digit"}),
                gasoline_id:''
            }),
            gasoline:[],
            pageTitle: "",
            disablegasType:false,
            loading:false,
            backToMyUrl:"/prices"
        };
    },
    mounted() {

        if (this.editData !== undefined) 
        {
            this.loading            = true;
            this.pageTitle          = "Edit";
            this.form.premium_price    = this.editData.premium_price;
            this.form.regular_price     = this.editData.regular_price;
            this.form.deisoline_price       = this.editData.deisoline_price;
            this.form.engine_oil_price       = this.editData.engine_oil_price;
            this.form.brake_oil_price       = this.editData.brake_oil_price;
            this.form.greases_price       = this.editData.greases_price;
            this.form.gasoline_id       = this.editData.gasoline_id;
            this.form.id            = this.editData.id;   
            this.disablegasType = true;
        } else {
            this.pageTitle = "Add";
            this.disablegasType = false;
        }

        this.loadGasoline()

    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                this.form.patch("/prices/"+this.form.id, this.form);
            } else 
            {
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
        },
        loadGasoline() {
            axios.get('/prices/fetch').then((response) => {
                this.gasoline = response.data;

            })
        }
    },
};
</script>