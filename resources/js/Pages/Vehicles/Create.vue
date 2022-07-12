<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <Link href="/vehicles">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col">
                                        <div class="col">
                                            <label>Plate Number</label>
                                            <input type="text" v-model="form.PLATENO" class="form-control" autocomplete="chrome-off" placeholder="platenumber">
                                        </div>
                                        <div class="col">
                                            <label>Vehicle Type</label>
                                            <input type="text" v-model="form.TYPECODE" class="form-control" autocomplete="chrome-off" placeholder="vehicle type">
                                        </div>
                                        <div class="col">
                                            <label>Date Acquired</label>
                                            <input type="date" v-model="form.FDATEACQ" class="form-control" autocomplete="chrome-off" placeholder="date acquired">
                                        </div>
                                        <div class="col">
                                            <label>Acquisition Cost</label>
                                            <input type="text" v-model="form.FACQCOST" class="form-control" autocomplete="chrome-off" placeholder="acquisition">
                                        </div>
                                        <div class="col">
                                            <label>Description</label>
                                            <input type="text" v-model="form.FDESC" class="form-control" autocomplete="chrome-off" placeholder="description">
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="modal-footer p-1">
                                    <button type="button" class="btn btn-primary mt-3" @click="submit()">Save</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useForm} from "@inertiajs/inertia-vue3"

export default ({
    props: {
        editData: Object
    }, 

    data() {
        return {
            form: useForm({
                PLATENO: "",
                TYPECODE: "",
                FDATEACQ: "",
                FACQCOST: "",
                FDESC: "",
            }),
        pageTitle: ""
        }
    },

    mounted() {
        if(!!this.editData){
            this.pageTitle = "Edit"
            this.form.PLATENO = this.editData.PLATENO
            this.form.TYPECODE = this.editData.TYPECODE
            this.form.FDTAEACQ = this.editData.FDTAEACQ
            this.form.FACQCOST = this.editData.FACQCOST
            this.form.FDESC = this.editData.FDESC
            this.form.id = this.editData.idFACQCOST
        }else{
            this.pageTitle = "Create"
        }
    },

    methods: {
        submit() {
            if(!!this.editData){
                this.form.patch("/vehicles/" + this.form.id, this.form);
            }else{
                this.form.post("/vehicles", this.form);
            }
        }
    }
})
</script>
