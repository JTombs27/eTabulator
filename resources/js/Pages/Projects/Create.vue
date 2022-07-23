<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Project </h3>
            <back-button :href="'/projects'"></back-button>
        </div>
    </div>
     <div class="col-md-12 p-20 bgc-white bd">
        <form @submit.prevent="submit()" id="mainForm">
            <div class="col-12 border-bottom" v-if="editData !== undefined && vehiclesGroup.length > 0">
                <div class="col-12 c-info">
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square text-info" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <b> Ledger of vehicle assigned in this project.</b>
                    </label>
                </div>
                <table class="table table-bordered bg-white" style="margin-top:5px;" >
                    <thead>
                        <th style="width:30%;">Vehicle/Plate Number</th>
                        <th style="width:50%;">Purpose</th>
                        <th style="width:20%;">Period Duration From:To</th>
                    </thead>
                    <tbody>
                        <tr v-for="(vehicle, index) in vehiclesGroup" :key="index">
                           <td>{{vehicle.vehicles.PLATENO}}</td>
                           <td>{{vehicle.purpose}}</td>
                           <td>{{vehicle.date_from+' To '+vehicle.date_to}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12">
                <div class="peers fxw-nw jc-sb ai-c">
                     <label for="exampleInputEmail1" class="form-label">Project Description</label>
                     <button type="button" v-if="editData === undefined" @click="addNew()" class="btn btn-sm btn-outline-primary">+ Add Vehicle 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="col-12" style="margin-top: 5px;">
                <textarea type="text" class="form-control" v-model="form.description" id="description" ></textarea>
                <div class="form-text text-danger">{{form.errors["data.description"]}}</div>
            </div>
            
            <div class="col-12" v-if="editData === undefined">
                <div class="row" v-for="(vehicle, index) in vehiclesGroup" :key="index">
                    <div class="col-12 bgc-white p-10 border-top" style="margin-top:10px;">
                        <div class="row">
                            <div class="col-6">
                                <label for="">Vehicle Selection</label>
                                <Select2 v-model="vehicle.vehicle_id" :options="vehicles"   /> 
                                <div class="form-text text-danger" v-if="(form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])">{{ (form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])}}</div>
                                <!-- <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.vehicle_idX']">{{ form.errors["vehiclesGroup."+index+".vehicle_idX"]}}</div> -->
                            </div>
                            <div class="col-3">
                                <label for="">Period From</label>
                                <input type="date" v-model="vehicle.date_from" class="form-control" autocomplete="chrome-off">
                                <div class="form-text text-danger" v-if="form.errors['vehiclesGroup.'+index+'.date_from']">{{ form.errors['vehiclesGroup.'+index+'.date_from'] }}</div>
                                <div class="form-text text-danger" v-if="form.errors['vehiclesGroup.'+index+'.date_fromX']">{{ form.errors['vehiclesGroup.'+index+'.date_fromX'] }}</div>
                            </div>
                            <div class="col-3">
                                <div class="peers fxw-nw jc-sb ai-c">
                                        <label for="">Period To </label>
                                        
                                        <span  @click="removeNode(index)" style="margin-top:-10px;">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="font-size: 18px; font-weight: bolder; color:red;" fill="currentColor" class="bi bi-x-lg"
                                            viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                            <path fill-rule="evenodd"
                                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                        </svg>
                                    </span>
                                </div>
                                
                                <input type="date" v-model="vehicle.date_to" :disabled="editData !== undefined" class="form-control" autocomplete="chrome-off">
                                <div class="form-text text-danger" v-if="form.errors['vehiclesGroup.'+index+'.date_to']">{{ form.errors['vehiclesGroup.'+index+'.date_to'] }}</div>
                                <div class="form-text text-danger" v-if="form.errors['vehiclesGroup.'+index+'.date_toX']">{{ form.errors['vehiclesGroup.'+index+'.date_toX'] }}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="">Purpose</label>
                                <textarea type="text" v-model="vehicle.purpose" class="form-control" autocomplete="chrome-off"></textarea>
                                <div class="form-text text-danger" v-if="form.errors['vehiclesGroup.'+index+'.purpose']">{{ form.errors['vehiclesGroup.'+index+'.purpose'] }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="button" class="btn btn-primary pull-right" @click="submit()" :disabled="form.processing">
                        {{pageTitle=="Add" ? "Save/Create":"Save Changes"}}
                    </button>
                </div>
            </div>
          </form>
     </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
  props: {
        editData: Object,
        project:Object,
        can: Object,
    },
    data(){
        return{
            form: useForm({
                description:"",
                id:null
            }),
            vehiclesGroup:[],
            vehicles:[],
            pageTitle:"Add"
        }
    },
    mounted() 
    {
        
        if(this.editData !== undefined)
        {
            this.pageTitle = "Edit"
            this.form.description = this.editData.description;
            this.form.id = this.editData.id;
            this.vehiclesGroup = this.editData.project_vehicles;
        }
        else{
            this.pageTitle = "Add"
        }

         this.loadVehicles()
        
    },
     methods:{
        addNew()
        {
            
            this.vehiclesGroup.push(useForm({
                vehicle_id  : "",
                date_from   : "",
                date_to     :"",
                purpose     :"",
                project_id  :"",
                id          : null
            }));

        },
        removeNode(index)
         {
            this.vehiclesGroup.splice(index,1);
        },
        submit() {

            if (this.editData !== undefined) 
            {
                 this.form.transform((data) =>({
                    data,
                    vehiclesGroup: this.vehiclesGroup
                 }))
                 this.form.post('/projects/update-project', this.form);
            } else 
            {
                this.form.transform((data)=>({
                    data,
                    vehiclesGroup: this.vehiclesGroup
                }))
                this.form.post('/projects/create-project', this.form);
            }

        },
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
        }
     }
}
</script>
