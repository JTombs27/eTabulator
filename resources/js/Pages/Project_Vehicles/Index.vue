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
    <div class="col-12">
        <div class="bgc-white p-20 bd">  <b >PROJECT DESCRIPTION: </b> {{ project.description }}</div>
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
                            <tr v-for="(project,index) in projectVehicles.data" :key="index">
                                <td >{{project.description}}</td>
                                <td >
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" title="Edit Project Description!" @click="editProjects(project.id)" class="btn btn-primary btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        </button>
                                        <button type="button" title="View Vehicle Equepments" @click="gotToProjectVehicle(project.id)" class="btn btn-success btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                        </button>
                                        <button type="button" title="Delete Project" @click="deleteProject(project.id)"  class="btn btn-danger btn-sm c-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="projectVehicles.data != null"><td class="text-center" colspan="5">No Data Found</td></tr>
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
    //watch: {
    //    search: _.debounce(function (value) {
    //        this.$inertia.get(
    //            "/projects",
    //            { search: value },
    //            {
    //                preserveScroll: true,
    //                preserveState: true,
    //                replace: true,
    //            }
    //        );
    //    }, 300),
    //},
    methods:{
        createProject(){
            this.$inertia.get("/projects-vehicle/" + this.project.id+"/create");
        },
    //deleteProject(id) 
    //{
    //    let text = "WARNING!\nAre you sure you want to delete the record?";
    //      if (confirm(text) == true) 
    //      {
    //        axios.post("/projects/delete-project",{
    //            'id':id
    //        }).then(response=>{
    //            if(response.data != null)
    //                {
    //                    if(response.data == "success")
    //                    {
    //                        this.$inertia.reload({only:['projects']});
    //                    }
    //                    else{
    //                        saveMessage = "*"+response.data;
    //                    }
    //                }
    //        });
    //      }
    //},
    //insertProject()
    //{
    //   if(this.isEdit == false)
    //   {
    //        axios.post('/projects/create-project', {
    //                        'description' : this.description
    //                    }).then(response=>{
    //                        
    //                        if(response.data != null)
    //                        {
    //                            if(response.data == "success")
    //                            {
    //                                this.closeModal();
    //                                this.saveMessage = "";
    //                                this.$inertia.reload({only:['projects']});
    //                            }
    //                            else{
    //                               this.saveMessage = response.data;
    //                            }
    //                        }
    //                    })
    //   }
    //   else  if(this.isEdit == true)
    //   {
    //        axios.post('/projects/update-project', {
    //                        'description' : this.description,
    //                        'id':this.projectId
    //                    }).then(response=>{
    //                        
    //                        if(response.data != null)
    //                        {
    //                            if(response.data == "success")
    //                            {
    //                                this.closeModal();
    //                                this.saveMessage = "";
    //                                this.$inertia.reload({only:['projects']});
    //                            }
    //                            else{
    //                               this.saveMessage = response.data;
    //                            }
    //                        }
    //                    })
    //   }
    //  
    //},
    //editProjects(projectId)
    //{
    //    var project         = _.find(this.projects.data,{id:projectId})
    //    this.showModal      = true;
    //    this.description    = project.description;
    //    this.isEdit         = true;
    //    this.projectId      = projectId;
    //},
    //gotToProjectVehicle(projectId)
    //{
    //    this.$inertia.get("/projects-vehicle/" + id);
    //}
    //    ,
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
