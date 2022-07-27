<template>
    <head >
        <title >Projects</title>
        
    </head>
   <div class="peers fxw-nw jc-sb ai-c">
       <h1 style="font-size:20px !important;font-weight: bold;">Projects</h1>
        <div class="peers">
            <div class="peer mR-10">
                <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
            </div>
            <div class="peer" >
                <button class="btn btn-primary btn-sm" :disabled="can.canCreateProject !== true" href="#" @click="createProject()"><i class="fa fa-add"></i>Add Project</button>
                <!-- <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button> -->
            </div>
        </div>
    </div>
    <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th style="width:90%">Project Description</th>
                            <th style="text-align: center;width:10%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr style="padding-top:0px !important; padding-bottom:0px !important;" v-for="(project,index) in projects.data" :key="index">
                                <td     style="padding-top:5px !important; padding-bottom:5px !important;">{{project.description}}</td>
                                <td     style="padding-top:5px !important; padding-bottom:5px !important;" class="text-center">
                                    <div class="dropdown dropstart">
                                        <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <button class="dropdown-item" :disabled="can.canEditProject !== true" title="Edit Project Description!" @click="editProjects(project.id)" > 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                    </svg> Edit
                                                </button>
                                            </li>
                                             <li class="border-top bg-warning">
                                                <Link class="dropdown-item"  title="View Vehicle Equipments" @click="gotToProjectVehicle(project.id)"> 
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                    </svg> 
                                                    <span v-if="project.project_vehicles != 0" class="position-absolute top-20 start-0 translate-middle badge rounded-pill bg-primary">
                                                        {{project.project_vehicles.length}}
                                                        <span class="visually-hidden">unread messages</span>
                                                    </span>
                                                    Vehicle Equipments
                                                </Link>
                                            </li>
                                            <li><hr class="dropdown-divider action-divider"></li>
                                            <li >
                                                <!-- title="Delete Project"  :class="!can.canDeleteProject || (can.canDeleteProject && project.project_vehicles != 0) ? '':'bg-danger'" :disabled="project.project_vehicles != 0 || can.canDeleteProject !== true" -->
                                                <button class="dropdown-item ch-back "  @click="deleteProject(project.id)" :disabled="!can.canDeleteProject || (can.canDeleteProject && project.project_vehicles != 0)"> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                    </svg> Delete
                                                </button>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                             <tr v-if="projects.data == 0"><td class="text-center" colspan="5">No Data Found</td></tr>
                    </tbody>
                </table>
                <pagination :next="projects.next_page_url" :prev="projects.prev_page_url" />
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                       
                    </div>
                </div>
            </div>
        </div>

    <Modal 
        v-if="showModal" 
        :modalTitle="'Projects'" 
        @closeModal="closeModal"
        @saveModal="insertProject"
    >
        <div class="col-12">
            <label for="exampleInputEmail1" class="form-label">Project Description</label>
            <textarea type="text" class="form-control" id="description" v-model="form.description"></textarea>
            <div id="emailHelp" class="form-text text-danger">{{saveMessage}}</div>
        </div>
        <div class="col-12 ">
            <button @click="addNew()" class="btn btn-sm btn-outline-primary pull-right">+ Add Vehicle 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck-front-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
                </svg>
            </button>
        </div>
        <div class="col-12">
            <div class="row" v-for="(vehicle, index) in vehiclesGroup" :key="index">
                <div class="col-12 bgc-white p-10 border-top" style="margin-top:10px;">
                    <div class="row">
                        <div class="col-12">
                            <div class="peers fxw-nw jc-sb ai-c">
                                    <label for="">Vehicle Selection </label>
                                    
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
                            <Select2 v-model="vehicle.vehicle_id" :settings="{ dropdownParent:myModal}" :options="vehicles" :disabled="disableVehicle"   /> 
                            <div class="fs-6 c-red-500" v-if="(form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])">{{ (form.errors['vehiclesGroup.'+index+'.vehicle_id'] || form.errors['vehiclesGroup.'+index+'.vehicle_idX'])}}</div>
                        </div>
                        <div class="col-6">
                            <label for="">Period From</label>
                            <input type="date" v-model="vehicle.date_from" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_from']">{{ form.errors['vehiclesGroup.'+index+'.date_from'] }}</div>
                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_fromX']">{{ form.errors['vehiclesGroup.'+index+'.date_fromX'] }}</div>
                        </div>
                        <div class="col-6">
                            <div class="peers fxw-nw jc-sb ai-c">
                                <label for="">Period To </label>
                            </div>
                            
                            <input type="date" v-model="vehicle.date_to" class="form-control" autocomplete="chrome-off">
                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_to']">{{ form.errors['vehiclesGroup.'+index+'.date_to'] }}</div>
                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.date_toX']">{{ form.errors['vehiclesGroup.'+index+'.date_toX'] }}</div>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-12">
                            <label for="">Purpose</label>
                            <textarea type="text" v-model="vehicle.purpose" class="form-control" autocomplete="chrome-off"></textarea>
                            <div class="fs-6 c-red-500" v-if="form.errors['vehiclesGroup.'+index+'.purpose']">{{ form.errors['vehiclesGroup.'+index+'.purpose'] }}</div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </Modal>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    components: { Pagination, Filtering },
    props: {
        projects: Object,
        filters: Object,
        can: Object,
    },
    data() {
        return {
            form: useForm({
                description:"",
                id:null
            }),
            vehiclesGroup:[],
            vehicles:[],
            search: this.$props.filters.search,
            confirm: false,
            filter: false,
            showModal:false,
            isEdit:false,
            projectId:"",
            description:"",
            saveMessage:"",
            myModal:""
        };
    }, 
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/projects",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    mounted() {
        // $('body').removeClass('modal-open');
        // $('body').css("overflow","scroll");
        // $('.modal-backdrop').remove();
        if (this.editData !== undefined) 
        {
           this.loading            = true;
           this.pageTitle          = "Edit";
           this.vehiclesGroup[0].vehicle_id    = this.editData.vehicle_id;
           this.vehiclesGroup[0].date_from     = this.editData.date_from;
           this.vehiclesGroup[0].date_to       = this.editData.date_to;
           this.vehiclesGroup[0].purpose       = this.editData.purpose;
           this.vehiclesGroup[0].project_id    = this.editData.project_id;
           this.vehiclesGroup[0].id            = this.editData.id;
           this.disableVehicle     = true;

        } else {
            this.pageTitle = "Add";
            this.disableVehicle = false;
        }

        //this.loadVehicles()
    },
    methods:{
        addNew(){

                this.vehiclesGroup.push(useForm({
                    vehicle_id  : "",
                    date_from   : "",
                    date_to     :"",
                    purpose     :"",
                    project_id  :"",
                    id          : null
                }));

        },
         removeNode(index){
            this.vehiclesGroup.splice(index,1);
        },
        createProject(){
           //this.vehiclesGroup = [];
           //this.isEdit      = false;
           //this.showModal   = true;
           //this.description = "";
           //this.saveMessage = "";
           this.$inertia.get("/projects/create/");
        },
        editProjects(projectId)
        {
            // var project                 = _.find(this.projects.data,{id:projectId})
            // this.showModal              = true;
            // this.form.description       = project.description;
            // this.form.id                = projectId;
            // this.isEdit                 = true;
            // this.projectId              = projectId;
            this.$inertia.get("/projects/create/"+projectId);
        },
        deleteProject(id) 
        {
            let text = "WARNING!\nAre you sure you want to delete the record?";
              if (confirm(text) == true) 
              {
                axios.post("/projects/delete-project",{
                    'id':id
                }).then(response=>{
                    if(response.data != null)
                        {
                            if(response.data == "success")
                            {
                                this.$inertia.reload({only:['projects']});
                            }
                            else{
                                saveMessage = "*"+response.data;
                            }
                        }
                });
              }
        },
        insertProject()
        {
           if(this.isEdit == false)
           {
                axios.post('/projects/create-project', this.form).then(response=>{
                                
                                if(response.data != null)
                                {
                                    if(response.data == "success")
                                    {
                                        this.closeModal();
                                        this.saveMessage = "";
                                        this.$inertia.reload({only:['projects']});
                                    }
                                    else{
                                       this.saveMessage = response.data;
                                    }
                                }
                            })
           }
           else  if(this.isEdit == true)
           {
                axios.post('/projects/update-project', {
                                'description' : this.description,
                                'id':this.projectId
                            }).then(response=>{
                                
                                if(response.data != null)
                                {
                                    if(response.data == "success")
                                    {
                                        this.closeModal();
                                        this.saveMessage = "";
                                        this.$inertia.reload({only:['projects']});
                                    }
                                    else{
                                       this.saveMessage = response.data;
                                    }
                                }
                            })
           }
          
        },
        gotToProjectVehicle(projectId)
        {
            this.$inertia.get("/projects-vehicle/" + projectId+"/vehicles");
        }
        ,
         closeModal() {
            $("#modal").hide();
            $('body').removeClass('modal-open');
            $('body').css("overflow","scroll");
            $('.modal-backdrop').remove();
            this.showModal = false;
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
