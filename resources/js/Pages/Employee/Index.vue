<template>
    <Head>
        <title>Employees</title>
    </Head>
    <div class="row gap-10 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>Employees</h3>
            <div class="peers">
                <div class="peer mR-10">
                    <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Search Employee">
                </div>
                <div class="peer">
                    <Link v-if="can.canCreateEmployee" class="btn btn-primary btn-sm" href="/employees/create">Add Employee</Link>
                    <button class="btn btn-primary btn-sm mL-2 text-white" @click="showFilter = true" >Filter</button>
                </div>
            </div>
        </div>
        <transition name="slide-fade" mode="in-out">
            <Filter v-if="showFilter" @closeFilter="showFilter = false">

            </Filter>
        </transition>
        <div class="col-md-12 ">
            <div class="table table-responsive bgc-white p-20 bd shadow-sm mh-100">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data.data" :key="index">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.office }}</td>
                            <td style="text-align: right">
                                <!-- v-if="user.can.edit" -->
                                <div class="dropdown dropstart">
                                  <button class="btn btn-secondary btn-sm action-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                  </button>
                                  <ul class="dropdown-menu action-dropdown" aria-labelledby="dropdownMenuButton1">
                                    <li v-if="can.canEditEmployee"><Link class="dropdown-item" @click="gotoEdit(index)">Edit</Link></li>
                                    <li v-if="can.canDeleteEmployee"><Link class="dropdown-item" @click="gotoDelete(index)">Delete</Link></li>
                                  </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script>
import Filter from '../../Shared/Filter.vue';

export default {
    props: {
        can:Object,
        data: Object
    },
    data() {
        return {
            search: "",
            showFilter:false,
            employee_id:""
        };
    },
    
    methods: {
         gotoEdit(index) {
             
              this.employee_id = this.data.data[index].id
              console.log(this.employee_id)
           
             this.$inertia.get("/employees/" + this.employee_id +"/edit"); 
        },

        gotoDelete(index) {

           this.employee_id = this.data.data[index].id
           console.log(this.employee_id)
          
           /*   this.$inertia.get("/logTimeArrival/" + this.travel_id +"/edit"); */
        },
    },
    components: { Filter }
}
</script>

<style>

</style>