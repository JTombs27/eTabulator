<style scoped>
    .form-check >.form-check-input{
        float: right;
        margin-right: 0px;
        margin-left: 5px;
    }
    .form-check{
        padding-left: 0px;
    }
</style>
<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Vehicle </h3>
            <back-button :href="backToMyUrl"></back-button>
        </div>
        <div class="col-12"> <h5>Project Description: <small>{{project.description}}</small></h5></div>
        
            <div class="col-md-12 p-20 bgc-white">
                <div class="row">
                    <div class="col-12" style="margin-top:-15px;">
                        <button type="button" v-if="editData === undefined" @click="addNew()" class="btn btn-sm btn-outline-success pull-right">+ Add Vehicle 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <form @submit.prevent="submit()" id="mainForm">
                    <div class="row" v-for="(vehicle, index) in vehiclesGroup" :key="index">
                        <div class="col-12 bgc-white p-10 bd" style="margin-top:10px;">
                            <div class="row">
                                <div class="col-6">
                                    <label for="">Vehicle Selection</label>
                                    <Select2 v-model="vehicle.vehicle_id" :options="vehicles" :disabled="disableVehicle"   /> 
                                    <div class="fs-6 c-red-500" v-if="(form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])">{{ (form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])}}</div>
                                    <!-- <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.vehicle_idX']">{{ form.errors["vehiclesGroup."+index+".vehicle_idX"]}}</div> -->
                                </div>
                                <div class="col-3">
                                    <label for="">Period From</label>
                                    <input type="date" v-model="vehicle.date_from" class="form-control" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_from']">{{ form.errors['vehiclesGroup.'+index+'.date_from'] }}</div>
                                    <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_fromX']">{{ form.errors['vehiclesGroup.'+index+'.date_fromX'] }}</div>
                                </div>
                                <div class="col-3">
                                    <div class="peers fxw-nw jc-sb ai-c">
                                          <label for="">Period To </label>
                                          
                                           <span  @click="removeNode(index)" v-if="(editData === undefined) && (vehiclesGroup.length !== 1)" style="margin-top:-10px;">
                                            
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size: 18px; font-weight: bolder; color:red;" fill="currentColor" class="bi bi-x-lg"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                <path fill-rule="evenodd"
                                                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                            </svg>
                                        </span>
                                    </div>
                                  
                                    <input type="date" v-model="vehicle.date_to" class="form-control" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_to']">{{ form.errors['vehiclesGroup.'+index+'.date_to'] }}</div>
                                    <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_toX']">{{ form.errors['vehiclesGroup.'+index+'.date_toX'] }}</div>
                                </div>
                            </div>
                            <div class="row" style="margin-top:5px;">
                                <div class="col-12 border-top border-bottom" style="padding-top:5px;padding-bottom:6px;">
                                    <div class="row">
                                        <div class="col-3">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div class="form-check form-check-inline">
                                                            <label class="form-check-label" for="borrow_checkbox">Check if vehicle is for borrow: </label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-inline"> 
                                                            <label class="form-check-label" ></label>
                                                            <input class="form-check-input" type="checkbox" id="borrow_checkbox" v-model="vehicle.external_borrow_flag" :checked="vehicle.external_borrow_flag">
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                            <div class="form-check form-check-inline">
                                                            <label class="form-check-label" for="rental_checkbox">Check if borrow includes rental:</label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-check form-check-inline"> 
                                                            <label class="form-check-label" for="rental_checkbox"></label>
                                                            <input class="form-check-input" type="checkbox" id="rental_checkbox" v-model="vehicle.rental_flag" :disabled="!vehicle.external_borrow_flag" :checked="vehicle.rental_flag">
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="col-6">
                                            <label for="">Municipality Selection</label>
                                            <Select2 v-model="vehicle.municipality_id" :options="municipalities" :disabled="!vehicle.external_borrow_flag" @select="loadBarangays(vehicle.municipality_id,index)"  /> 
                                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.municipality_id']">{{form.errors['vehiclesGroup.'+index+'.municipality_id']}}</div>
                                        </div>
                                        <div class="col-3">
                                            <label for="">Barangay Selection</label>
                                            <Select2 v-model="vehicle.barangay_id" :options="barangayGroups[index]" :disabled="!vehicle.external_borrow_flag"   /> 
                                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.barangay_id']">{{form.errors['vehiclesGroup.'+index+'.barangay_id']}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="">Purpose</label>
                                    <textarea type="text" v-model="vehicle.purpose" class="form-control" autocomplete="chrome-off"></textarea>
                                    <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.purpose']">{{ form.errors['vehiclesGroup.'+index+'.purpose'] }}</div>
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

</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        editData: Object,
        project:Object
    },
    data() {
        return {
            form: useForm(),
            vehiclesGroup:[{
                 vehicle_id             : "",
                 date_from              : "",
                 date_to                :"",
                 purpose                :"",
                 external_borrow_flag   :false,
                 rental_flag            :false,
                 municipality_id        :0,
                 barangay_id            :0,
                 project_id             :this.project.id,
                 id                     : null
            }],
            vehicles:[],
            municipalities:[],
            barangayGroups:[[]],
            testValue:"",
            pageTitle: "",
            loading:false,
            disableVehicle: false,
            backToMyUrl:"/projects-vehicle/" + this.project.id+"/vehicles"
        };
    },
    mounted() {
        this.loadVehicles();
        this.loadMunicipality();
        if (this.editData !== undefined) 
        {
            this.loading            = true;
            this.pageTitle          = "Edit";
            this.vehiclesGroup[0].vehicle_id    = this.editData.vehicle_id;
            this.vehiclesGroup[0].date_from     = this.editData.date_from;
            this.vehiclesGroup[0].date_to       = this.editData.date_to;
            this.vehiclesGroup[0].purpose       = this.editData.purpose;
            this.vehiclesGroup[0].project_id    = this.editData.project_id;

            this.vehiclesGroup[0].external_borrow_flag    = this.editData.external_borrow_flag;
            this.vehiclesGroup[0].rental_flag    = this.editData.rental_flag;
            this.vehiclesGroup[0].municipality_id    = this.editData.municipality_id;
            this.loadBarangays(this.editData.municipality_id,0);
            this.vehiclesGroup[0].barangay_id    = this.editData.barangay_id;
            this.loa
            this.vehiclesGroup[0].id            = this.editData.id;
            this.disableVehicle     = true;

        } else {
            this.pageTitle = "Add";
            this.disableVehicle = false;
        }

       
       
    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                 this.form.project_id = this.editData.project_id;
                 this.form.transform((data) =>({
                    data,
                    vehiclesGroup: this.vehiclesGroup
                 }))
                 this.form.post("/projects-vehicle/"+this.project.id+"/update/"+this.editData.id, this.form);
            } else 
            {
                this.form.project_id = this.project.id;
                this.form.transform((data)=>({
                    data,
                    vehiclesGroup: this.vehiclesGroup
                }))
                this.form.post("/projects-vehicle/"+this.project.id+"/store", this.form);
            }

        },
        addNew()
        {
                this.vehiclesGroup.push(useForm({
                 vehicle_id             : "",
                 date_from              : "",
                 date_to                :"",
                 purpose                :"",
                 external_borrow_flag   :false,
                 rental_flag            :false,
                 municipality_id        :0,
                 barangay_id            :0,
                 project_id             :this.project.id,
                 id                     : null
                }));
            this.barangayGroups.push([]);
        },
        removeNode(index){
            this.vehiclesGroup.splice(index,1);
            this.barangayGroups.splice(index,1);
        }
        ,
        loadVehicles() 
        { 
            axios.get('/projects-vehicle/vehicles').then((response) => {
                var data = []
                response.data.forEach(element => {
                    if(this.editData !== undefined)
                    {
                         data.push(element);
                    }
                    else if(element.condition.condition == "Good Condition")
                    {
                        data.push(element);
                    }
                });
                
                this.vehicles = data;
            })
        },
       loadMunicipality()
        {
            axios.post('/municipalities').then((response) => {
                this.municipalities = response.data;
            });
        },
        loadBarangays(citymunCode,index)
        {
            axios.post('/barangays',{citymunCode:citymunCode}).then((response) => {
                console.log(response.data);
                 this.barangayGroups[index] = response.data;
            });
        },
        backToMain()
        {
             this.$inertia.get("/projects-vehicle/" + this.project.id+"/vehicles");
        }
    },
};
</script>