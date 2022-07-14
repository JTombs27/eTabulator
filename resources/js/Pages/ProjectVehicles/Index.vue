<template>
    <head >
        <title >Project Vehicles</title>
    </head>
   <div class="peers fxw-nw jc-sb ai-c">
        <h1 style="font-size:18px !important;">PROJECT VEHICLES </h1>
        <div class="peers">
            <div class="peer mR-10">
                <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search...">
            </div>
            <div class="peer" >
                <a class="btn btn-primary btn-sm" href="#" @click="createProject()">Add Vehicle</a>
                <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter()">Filter</button>
                
            </div>
        </div>
    </div>
    <div class="col-12 bgc-white p-20 bd">
        <div class="row">
                <div class="col-10">  <b >PROJECT DESCRIPTION: </b> {{ project.description }}</div>
                <div class="col-2 text-right">
                    <button class="btn btn-danger btn-sm mL-2 text-white pull-right" @click="goToProjects()"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                            Back To Projects</button>
                </div>
        </div> 
    </div>
   
    <div class="col-12">
            <div class="bgc-white p-20 bd">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th style="width:15%">PLATE NUMBER</th>
                            <th style="width:55%">PURPOSE</th>
                            <th style="width:10%">FROM</th>
                            <th style="width:10%">TO</th>
                            <th style="text-align: center;width:10%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-for="(projectVehicle,index) in projectVehicles.data" :key="index">
                                <td >{{projectVehicle.vehicles.PLATENO}}</td>
                                <td >{{projectVehicle.purpose}}</td>
                                <td >{{projectVehicle.date_from}}</td>
                                <td >{{projectVehicle.date_to}}</td>
                                <td class="text-center">
                                    
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" title="Edit Project Description!" @click="editProjects(projectVehicle.id)" class="btn btn-primary btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        </button>
                                        <button type="button" title="Delete Project" @click="deleteProject(projectVehicle.id)"  class="btn btn-danger btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="projectVehicles.data == 0"><td class="text-center" colspan="5">No Data Found</td></tr>
                    </tbody>
                </table>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <!-- read the explanation in the Paginate.vue component -->
                        <!-- <pagination :links="users.links" /> -->
                        <pagination :next="projectVehicles.next_page_url" :prev="projectVehicles.prev_page_url" />
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";

export default {
    components: { Pagination, Filtering },
    props: {
        projectVehicles: Object,
        filters: Object,
        can: Object,
        project:Object
    },
    data() {
        return {
            search: this.$props.filters.search,
            confirm: false,
            filter: false
        };
    }, 
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/projects-vehicle/" + this.project.id+"/vehicles",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods:{
        createProject(){
            this.$inertia.get("/projects-vehicle/" + this.project.id+"/create");
        },
        goToProjects(){
             this.$inertia.get("/projects");
        },
        deleteProject(id) 
        {
            let text = "WARNING!\nAre you sure you want to delete the record?";
            if (confirm(text) == true) 
            {
                axios.post("/projects-vehicle/delete",{
                    'id':id
                }).then(response=>{
                    if(response != null)
                        {
                            if(response.data.message == "success")
                            {
                                this.$inertia.reload({this:['projectVehicles','flash']});
                            }
                            else{
                                alert("*"+response.data.message );
                            }
                        }
                });
            }
        },
        editProjects(projectId)
        {
            this.$inertia.get("/projects-vehicle/" + this.project.id+"/edit/"+projectId);
        },
        closeModal() {
            $("#modal").hide();
            $('body').removeClass('modal-open');
            $('body').css("overflow","scroll");
            $('.modal-backdrop').remove();
            this.showModal = false;
        }
    }
}
</script>
