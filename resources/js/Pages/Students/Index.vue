<template>
    <Head>
        <title>Users</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="col-sm-12 bgc-white p-10 bd shadow-sm text-center">
            <b>{{pageTitle}}</b>
        </div>
 
        <div class="col-sm-12  bgc-white p-20 bd shadow-sm mT-10">
            <div class="row mT-5" v-for="(event_x, index) in events" :key="index">
                <div class="col-sm-12" >
                    <button class="btn btn-outline-primary p-15" style="width:100%;" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseExample`+index" aria-expanded="false" aria-controls="collapseExample">
                       {{event_x.event_title}}
                    </button>
                    <div class="collapse" :id="`collapseExample`+index">
                        <div class="card card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    {{event_x.event_description}}
                                </div>
                            </div>
                            <hr style="margin-top:5px; margin-bottom: 5px;"/>
                            <a :href="`/event-participants/to-students/`+settupX.id" class="alert alert-primary" style="margin-top:3px; margin-bottom: 3px;" v-for="(settupX,settupIndex) in event_x.settups" :key="settupIndex" role="alert">
                                <!-- padding-top: 3px;padding-bottom: 3px; -->
                                <b>{{settupX.event_settup_title}}</b>
                                <!-- <div class="progress" style="height:15px;">
                                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div> -->
                            </a>
                        </div>
                    </div>
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
        events: Object,
        can: Object,
    },
    data() {
        return {
            confirm: false,
            filter: false,
            showModal: false,
            permissions: [],
            selectedPermissions: [],
            selectedUser: "",
            pageTitle:"ACES 2022 SCHOOL CALENDAR OF EVENTS"
        };
    },
    watch: {
        search: _.debounce(function (value) {
            this.$inertia.get(
                "/users",
                { search: value },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
    },
    methods: {
        
    },
};
</script>
