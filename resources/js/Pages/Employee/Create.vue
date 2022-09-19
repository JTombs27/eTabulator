<template>
  <Head>
    <title> {{ pageTitle }} Employee</title>
  </Head>
  <div class="row gap-20 masonry pos-r">
    <div class="peers fxw-nw jc-sb ai-c">
        <h3>{{ pageTitle }} Employee</h3> 
        
        <Link href="/employees">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
            <path fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
        </svg>
        </Link>
    </div>

    <div class="col-md-8 col-12">
        <form @submit.prevent="submit()">
            <label>Employee ID</label><small class="text-danger"><strong>(Required)</strong></small>
            <input type="text" class="form-control" :class="{'is-invalid':form.errors.empl_id}" v-model="form.empl_id">
            <div class="text-danger" v-if="form.errors.empl_id">
                {{form.errors.empl_id}}
            </div>
            <label>Courtesy Title</label>
            <input type="text" class="form-control" v-model="form.courtesy_title">
            <label>First name</label><small class="text-danger"><strong>(Required)</strong></small>
            <input type="text" class="form-control" :class="{'is-invalid':form.errors.first_name}" v-model="form.first_name">
            <div class="text-danger" v-if="form.errors.first_name">
                {{form.errors.first_name}}
            </div>
            <label>Middle name</label>
            <input type="text" class="form-control" v-model="form.middle_name">
            <label>Last name</label><small class="text-danger"><strong>(Required)</strong></small>
            <input type="text" class="form-control" :class="{'is-invalid':form.errors.last_name}" v-model="form.last_name">
            <div class="text-danger" v-if="form.errors.last_name">
                {{form.errors.last_name}}
            </div>
            <label>Suffix</label>
            <input type="text" class="form-control" v-model="form.suffix">
            <label>Postfix</label>
            <input type="text" class="form-control" v-model="form.postfix">
            <label>Gender</label><small class="text-danger"><strong>(Required)</strong></small>
            <select 
                v-model="form.gender" 
                class="form-select"
                :class="{'is-invalid':form.errors.gender}">
                <option value="" selected readonly disabled>Select Gender...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <div class="text-danger" v-if="form.errors.gender">
                {{form.errors.gender}}
            </div>
            <label>Birthdate</label><small class="text-danger"><strong>(Required)</strong></small>
            <input type="date" class="form-control" v-model="form.birth_date">
            <div class="text-danger" v-if="form.errors.birth_date">
                {{form.errors.birth_date}}
            </div>
            <div class="col-md-12 mT-10  gap-20">
                <div class="row border-3 border-top">
                    <label for="" class="col-md-4 col-12 my-auto offset-md-2 text-md-end"><b> Select Agency Type</b><small class="text-danger"><strong>(Required)</strong></small></label>
                    <div class="col-md-3 col-6 d-grid">
                        <input type="radio" class="btn-check" name="options-outlined" id="capitol" autocomplete="off" value="0" v-model="form.non_capitol">
                        <label class="btn btn-sm btn-outline-success text-nowrap" for="capitol">
                            <svg v-if="form.non_capitol == false" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                            Capitol Employee 
                        </label>
                    </div>
                    <div class="col-md-3 col-6 d-grid">
                        <input type="radio" class="btn-check" name="options-outlined" id="non-capitol" autocomplete="off" value="1" v-model="form.non_capitol">
                        <label class="btn btn-sm btn-outline-success text-nowrap" for="non-capitol">
                            <svg v-if="form.non_capitol == true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                            Non Capitol Employee
                        </label>
                    </div>
                </div>
            </div>
            <span v-if="form.non_capitol != null">
                <label>Office/Agency</label><small class="text-danger"><strong>(Required)</strong></small>
                <span v-if="form.non_capitol == false">
                    <select 
                        class="form-select" 
                        :class="{'is-invalid': form.errors.department_code}" 
                        @change="loadDivision()" 
                        v-model="form.department_code"
                    >
                        <option value="" selected readonly disabled>Select Office...</option>
                        <option v-for="(item, index) in offices" :key="index" :value="item.id">{{item.short_name}}</option>
                    </select>
                    <div class="text-danger" v-if="form.errors.department_code">
                        {{form.errors.department_code}}
                    </div>
                    <label>Division</label>
                    <select class="form-select" v-model="form.division_code">
                        <option value="" selected readonly disabled>Select Division...</option>
                        <option v-for="(item, index) in divisions" :key="index" :value="item.id">{{item.text}}</option>
                    </select>
                </span>
                <input 
                    v-if="form.non_capitol == true"
                    type="text" 
                    class="form-control"
                    placeholder="Please enter your agency"
                    v-model="form.agency"
                >
                <div class="text-danger" v-if="form.errors.agency">
                    {{form.errors.agency}}
                </div>
              
                <label for="">Position title long</label>
                <input 
                    type="text" 
                    class="form-control"
                    :class="{'is-invalid':form.errors.position_title_long}"
                    v-model="form.position_title_long"
                >
                <div class="text-danger" v-if="form.errors.position_title_long">
                    {{form.errors.position_title_long}}
                </div>
                <label for="">Position title short</label>
                <input 
                    type="text" 
                    class="form-control"
                    :class="{'is-invalid':form.errors.position_title_short}"
                    v-model="form.position_title_short"
                >
                <div class="text-danger" v-if="form.errors.position_title_short">
                    {{form.errors.position_title_short}}
                </div>
                <button type="button" class="btn btn-primary mt-3 pull-right" @click="submit()" :disabled="form.processing">
                    <span v-if="form.processing">
                        <div class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden"></span>
                        </div>
                    </span>
                    <span v-else-if="pageTitle == 'Create'">
                        Submit
                    </span>
                    <span v-else-if="pageTitle == 'Edit'">
                        Save Changes
                    </span>
                </button>
            </span>
        </form>
    </div>
  </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3'
export default {
    
    props: {
        pageTitle: String,
        offices: Array
    },

    data() {
        return {
            form:useForm({
                empl_id:"",
                courtesy_title:"",
                first_name:"",
                middle_name:"",
                last_name:"",
                suffix:"",
                postfix:"",
                gender:"",
                birth_date:null,
                non_capitol:null,
                agency:"",
                department_code:"",
                division_code:"",
                position_title_long:"",
                position_title_short:"",
                
            }),
            divisions:[]
        }
    },

    methods: {
        loadDivision()
        {
            axios.post('/divisions/fetch', {department_code:this.form.department_code})
                .then((response) => {
                    this.divisions = response.data
                })
        },

        submit()
        {
            this.form.post('/employees/store');
        }
    }
}
</script>

<style>

</style>