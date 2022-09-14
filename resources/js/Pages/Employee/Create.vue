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
            <input type="text" class="form-control" v-model="form.courtesy_title">
            <div class="col-md-12 mT-10">
                <div class="row">
                    <label for="" class="col-md-4">Select Agency Type</label>
                    <div class="col-md-4">

                        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off">
                        <label class="btn btn-outline-success" for="success-outlined">Capitol Employee</label>
                    </div>
                    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off">
                    <label class="btn btn-outline-success" for="success-outlined">Non Capitol Employee</label>
                </div>
            </div>
            <span>
                <label>Office/Agency</label>
                <select class="form-select" :class="{'is-invalid': form.errors.department_code}">
                    <option value="" selected readonly disabled></option>
                    <option v-for="(item, index) in offices" :key="index" :value="item.id">{{item.short_name}}</option>
                </select>
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
                first_name:"",
                middle_name:"",
                last_name:"",
                empl_id:""
            })
        }
    }
}
</script>

<style>

</style>