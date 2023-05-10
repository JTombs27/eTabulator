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
                            <div @click="goToParticipants(settupX.id)" class="alert alert-primary" style="margin-top:3px; margin-bottom: 3px;cursor: pointer;" v-for="(settupX,settupIndex) in event_x.settups" :key="settupIndex" role="alert">
                                <label style="padding-top:7px !important;font-weight: bold;">{{settupX.event_settup_title}}</label>
                                <template v-if="settupX.winner != null ? true:false" style="">
                                    <br><b><small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark-star text-success" viewBox="0 0 16 16">
                                            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                        </svg>
                                    </small></b><img  :src="`/storage/${settupX.winner.participants_profile}`"  class="w-2r bdrs-50p" style="border: 1.5px solid green;" :height="30" :width="20"  alt="..."> <small style="color:orange;text-shadow: 1em;text-decoration: underline;">&nbsp;{{settupX.winner.participants_name}}&nbsp;</small>
                                </template>
                            </div>
                            <!-- <a :href="`/students/to-students/`+settupX.id" class="alert alert-primary" style="margin-top:3px; margin-bottom: 3px;" v-for="(settupX,settupIndex) in event_x.settups" :key="settupIndex" role="alert">
                              
                                <label style="padding-top:7px !important;font-weight: bold;">{{settupX.event_settup_title}}</label><img class="w-2r bdrs-50p pull-right" src="http://127.0.0.1:8000/storage/profile/default/photo.png" alt="">
                                <template v-if="settupX.winner != null ? true:false" style="">
                                    <br><b><small>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark-star text-success" viewBox="0 0 16 16">
                                            <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                        </svg>
                                    </small></b><img  :src="`/storage/${settupX.winner.participants_profile}`"  class="w-2r bdrs-50p" style="border: 1.5px solid green;" :height="30" :width="20"  alt="..."> <small style="color:orange;text-shadow: 1em;text-decoration: underline;">&nbsp;{{settupX.winner.participants_name}}&nbsp;</small>
                                </template>
                            </a> -->
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
            pageTitle:"SCHOOL CALENDAR OF EVENTS"
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
        goToParticipants(settup_id)
        {
            location.href =`/students/to-students/`+settup_id;
        }
    },
};
</script>
