<template>

    <div class="row gap-20 masonry pos-r">
        <div class="peers fxw-nw jc-sb ai-c">
            <h3>{{ pageTitle }} Station </h3>
            <back-button :href="backToMyUrl"></back-button>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 p-20 bd">
                <form @submit.prevent="submit()" id="mainForm">
                    <div class="row">
                        <div class="col-12 bgc-white p-10 bd" style="margin-top:10px;">
                            <div class="row">
                                <div class="col-12">
                                    <label for="">Station Name</label>
                                    <input type="text" v-model="form.name" class="form-control" autocomplete="chrome-off">
                                    <div class="fs-6 c-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-primary pull-right mt-3" @click="submit()" :disabled="form.processing">
                                {{pageTitle=="Add" ? "Save/Create":"Save Changes"}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useForm } from "@inertiajs/inertia-vue3";
export default {
    props: {
        editData: Object
    },
    data() {
        return {
            form: useForm({
                name:'',
                id:'',
            }),
            /*testValue:"",*/
            pageTitle: "",
            loading:false,
        };
    },
    mounted() {

        if (this.editData !== undefined) 
        {
            this.loading            = true;
            this.pageTitle          = "Edit";
            this.form.name     = this.editData.name;
            this.form.id            = this.editData.id;

        } else {
            this.pageTitle = "Add";
        }

    },

    methods: {
        submit() {

            if (this.editData !== undefined) 
            {
                this.form.patch("/gasolines/"+this.editData.id, this.form);
            } else 
            {
                this.form.post("/gasolines/store", this.form);
            }

        },
    },
};
</script>