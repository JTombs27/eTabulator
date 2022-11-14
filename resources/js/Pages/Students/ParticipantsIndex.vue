<template>
    <Head>
        <title>Users</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="col-sm-12 bgc-white p-10 bd shadow-sm">
            <div class="col-lg-12 text-start">
                <Link href="/event-header" style="font-size:18px;color:#999494;">
                    Home 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right font-bold" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                </link><b>{{events.event_title}}</b>
            </div>
            <div class="col-lg-12 text-start">
                <p>{{events.event_description}}</p>
            </div>
            <hr/>
            <div class="col-lg-12">
                <h3></h3>
            </div>
        </div>
 
        <div class="col-sm-12  bgc-white p-20 bd shadow-sm mT-10">
            <div class="row">
                <div class="col-lg-12">
                    <b>List of Participants for</b> <b style="font-size:16px;text-decoration: underline;">{{events.event_settup[0].event_settup_title}}</b>
                </div>
            </div>
            <div class="row mT-5" v-for="(event_x, index) in events" :key="index">
                <div class="col-sm-12" >
                    <button class="btn btn-outline-primary p-15 text-start" style="width:100%;" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseExample`+index" aria-expanded="false" aria-controls="collapseExample">
                        <b>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                            </svg>
                            Sample Participants</b>
                    </button>
                    <div class="collapse" :id="`collapseExample`+index">
                        <div class="card card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <b>Sample Participants</b>
                                </div>
                            </div>
                            <hr style="margin-top:5px; margin-bottom: 5px;"/>
                            <a :href="`/event-participants/to-students/`+event_x.id" class="alert alert-primary" style="margin-top:3px; margin-bottom: 3px;" v-for="(settupX,settupIndex) in event_x.settups" :key="settupIndex" role="alert">
                               
                                <b>Sample Participants{{settupX.id}}</b>
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
        settup: Object,
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
