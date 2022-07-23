<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <back-button :href="'/vehicles'"></back-button>
            <!-- <Link href="/vehicles">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </Link> -->
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
                                            <label >Plate Number</label>
                                            <input type="text" v-model="form.PLATENO" class="form-control" autocomplete="chrome-off">
                                            <div class="fs-6 c-red-500" v-if="form.errors.PLATENO">{{ form.errors.PLATENO }}</div>
                                        </div>
                                        <div class="col-mb-3">
                                            <label class="col-mb-3 col-form-label">Vehicle Type</label>
                                            <select class="form-select md" v-model="form.TYPECODE">
                                                <option disabled value="">Select Type</option>
                                                <option >Motorcycle</option>
                                                <option >Light Vehicle</option>
                                                <option >Heavy Equipment</option>
                                            </select>
                                            <div class="fs-6 c-red-500" v-if="form.errors.TYPECODE">{{ form.errors.TYPECODE }}</div>
                                        </div>
                                        <div class="col">
                                            <label class="col-mb-3 col-form-label">Date Acquired</label>
                                            <input type="date" v-model="form.FDATEACQ" class="form-control" autocomplete="chrome-off">
                                            <div class="fs-6 c-red-500" v-if="form.errors.FDATEACQ">{{ form.errors.FDATEACQ }}</div>
                                        </div>
                                        <div class="col">
                                            <label class="col-mb-3 col-form-label">Acquisition Cost</label>
                                            <input type="text" v-model="form.FACQCOST" class="form-control" autocomplete="chrome-off">
                                            <div class="fs-6 c-red-500" v-if="form.errors.FACQCOST">{{ form.errors.FACQCOST }}</div>
                                        </div>
                                        <div class="col">
                                            <label class="col-mb-3 col-form-label">Description</label>
                                            <input type="text" v-model="form.FDESC" class="form-control" autocomplete="chrome-off">
                                            <div class="fs-6 c-red-500" v-if="form.errors.FDESC">{{ form.errors.FDESC }}</div>
                                        </div>
                                        <div class="col-mb-3">
                                            <label class="col-mb-3 col-form-label">Vehicle Condition</label>
                                            <select class="form-select md" v-model="form.condition">
                                                <option disabled value="">Select Type</option>
                                                <option >Good Condition</option>
                                                <option >In Repair</option>
                                                <option >Wasted</option>
                                            </select>
                                            <div class="fs-6 c-red-500" v-if="form.errors.condition">{{ form.errors.condition }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="modal-footer p-1">
                                    <div class="from-check" v-if="pageTitle === 'Create Vehicles'">
                                        <input class="form-check-input" type="checkbox" v-model="form.checkadd" name="checkbox" id="checkbox" >
                                        <label class="form-check-label" for="checkbox" > Add Driver Vehicle</label>
                                    </div>
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
        editData: Object,
        Vdriver: Object
    }, 

    data() {
        return {
            form: useForm ({
                PLATENO: "",
                TYPECODE: "",
                FDATEACQ: "",
                FACQCOST: "",
                FDESC: "",
                checkadd: "",
                condition:""
            }),
        pageTitle: "",
        // isDisabled:false
        }
    },

    mounted() {
        if( !!this.editData ) {
            this.pageTitle = "Edit Vehicles"
            this.form.PLATENO = this.editData.PLATENO
            this.form.TYPECODE = this.editData.TYPECODE
            this.form.FDATEACQ = this.editData.FDATEACQ
            this.form.FACQCOST = this.editData.FACQCOST
            this.form.FDESC = this.editData.FDESC
            this.form.id = this.editData.id
        } else {
            this.pageTitle = "Create Vehicles"
        }
    },

    methods: {
        submit() {
            if( !!this.editData ) {
                this.form.patch("/vehicles/" + this.form.id, this.form);
            } else {
                this.form.post("/vehicles", this.form);
            }
        },

        addDriver()
        {
            
        }
    }
})
</script>
