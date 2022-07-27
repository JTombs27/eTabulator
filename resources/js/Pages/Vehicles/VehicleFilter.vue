<template>
<filtering v-if="filter" @closeFilter="filter=false">
            <label>Plate No</label>
            <input type="text" v-model="filter.PLATENO" class="form-control">

            <label>Vehicle Type</label>
            <select class="form-select" v-model="TYPECODE">
                <option disabled value="">Select Type</option>
                <option value="1">Motorcycle</option>
                <option value="2">Light Vehicle</option>
                <option value="3">Heavy Equipment</option>
            </select>

            <label>Date Acquired</label>
            <input type="date" v-model="filter.FDATEACQ" class="form-control">

            <label>Description</label>
            <input type="text" v-model="filter.FDESC" class="form-control">
            
            <button class="btn btn-sm btn-primary mT-5 text-white" @click="runFilter()">Find</button>
        </filtering>
</template>

<script>
import Filtering from "@/Shared/Filter";
import { useForm } from "@inertiajs/inertia-vue3";

export default ({
    components: { Filtering },
    props:{
        filters: Object 
    },
    data() {
        return{
            filter:useForm({
                PLATENO:"",
                FDESC:""
            })
        }
    },

    methods: {
        runFilter() {

        }
    },
})
</script>
