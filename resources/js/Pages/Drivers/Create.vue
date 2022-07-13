<template>
    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle}}</h3>
            <Link href="/drivers">
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
                                            <label for="">Vehicle Name</label>
                                            <Select2 v-model="vehicles_id" :options="vehicles" />
                                        </div>

                                        <div class="col">
                                            <label for="">Drivers Name</label>
                                            <Select2 v-model="drivers_id" :options="drivers" />
                                        </div>

                                        <div class="col">
                                            <label for="">Date From</label>
                                            <input type="date" class="form-control" autocomplete="chrome-off" />
                                        </div>

                                        <div class="col">
                                            <label for="">Date To</label>
                                            <input type="date" class="form-control" autocomplete="chrome-off" />
                                        </div>

                                        <div class="col">
                                            <label for="">Office Name</label>
                                            <Select2 v-model="office_id" :options="office" />
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
export default {
    data() {
        return {
            vehicles: [],
            vehicles_id: "",
            office: "",
            office_id: "",
            form: useForm({
                vehicles_id: "",
                drivers_id: "",
                date_from: "",
                date_to: "",
                office_id: ""
            }),
            pageTitle: ""
        }
    },

    mounted() {
        this.pageTitle = "Create"
    }
}
</script>
