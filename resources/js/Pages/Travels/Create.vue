<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Travel</h3>
            <Link href="/users">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
            </Link>
        </div>
        <div class="col-md-8">
            <form @submit.prevent="submit()">
                <label for="">Travel Date</label>
                <input v-model="form.travel_date" type="date" class="form-control" autocomplete="chrome-off"/>
                <label for="">Vehicle Name</label>
                <Select2 v-model="vehicles_id" :options="vehicles" @select="getVehicleDetails"/>
                <button type="button" class="btn btn-primary mt-3" @click="submit()" :disabled="form.processing">Save
                    changes</button>
            </form>


        </div>
    </div>

</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';

export default {

    data() {
        return{
            vehicles: [],
            vehicles_id:null,
            form: useForm({
                travel_date:null,
            }),
            pageTitle:"Create",
        }
    },

    mounted() {
        this.getVehicles();
    },

    methods:{
        getVehicles(){
            axios.post('/vehicles/getVehicles').then( response => {
                this.vehicles = response.data
            })
        },

        getVehicleDetails() {
            axios.post('/travels/vehicle-details',{travel_date:this.form.travel_date, vehicles_id:this.vehicles_id})
                .then((response) => {

                })
        },

        submit() {

        }
    }
}
</script>

<style>

</style>