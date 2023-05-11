<template>
    <Head>
        <title>Students Participants</title>
    </Head>

    <div class="row gap-10 masonry pos-r">
        <div class="col-sm-12 bgc-white p-10 bd shadow-sm">
            <div class="col-lg-12 text-start">
                <Link href="/students" style="font-size:18px;color:#999494;">
                    Home 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right font-bold" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                </link><b>{{events.event_title}}</b>
            </div>
            {{events.event_description}}
        </div>
        <!-- <div class="col-sm-12 bgc-white p-10 bd shadow-sm">
            <div class="col-lg-12 text-start">
                <b>Voting Result</b>
            </div>
            <a href="" v-for="(sumx, index) in summary" style="width: 100%;" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1 mT-5" data-bs-toggle="dropdown">
                <div class="peer mR-10">
                    <img class="w-2r bdrs-50p" :height="30" :width="20" :src="`/storage/${sumx.participants_photo}`" alt="">
                </div>
                <div class="peer"><span class="fsz-sm c-grey-900">{{sumx.participants_name}}</span></div>
                <div class="peer mL-10"><span class="fsz-sm c-grey-900">{{sumx.vote_count}}</span></div>
            </a>
        </div> -->
        <div class="col-sm-12  bgc-white p-20 bd shadow-sm mT-10">
            <div class="row">
                <div class="col-lg-12">
                    <b>List of Participants for</b> <b style="font-size:16px;text-decoration: underline;">{{events.event_settup[0].event_settup_title}}</b>
                </div>
            </div>
            <div class="row mT-5">
                <div class="col-lg-12">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                                <div class="carousel-item p-10" v-for="(eventX, index) in participants" :class="{ active: index==0 }">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img :src="`/storage/${eventX.participants_profile}`" class="cover" alt="...">
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <table>
                                                <tr>
                                                    <td style="width:30%;">
                                                        <label class="c-blue-900" style="font-family: 'Courier New', Courier, monospace;">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts c-blue-700" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                                                            </svg>
                                                            Name
                                                        </label>
                                                    </td>
                                                    <td>:&nbsp;</td>
                                                    <td>
                                                        <b>{{eventX.participants_name}}</b>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label class="c-blue-900" style="font-family: 'Courier New', Courier, monospace;">
                                                        
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill c-blue-700" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                            </svg>
                                                            Address
                                                        </label>
                                                    </td>
                                                    <td>:&nbsp;</td>
                                                    <td>
                                                        <small>{{eventX.participants_address}}</small>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="col-md-12 c-blue-900">
                                            <b>
                                                <i>{{eventX.participants_details}}</i>
                                            </b>
                                        </div>
                                        <div class="col-md-12 mT-10">
                                            <button type="button" :disabled="!canVote" @click="castVote(eventX.settup_id,eventX.id)" class="btn btn-outline-success" style="width: 100%;">
                                                    VOTE<br/>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-fingerprint" viewBox="0 0 16 16">
                                                    <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"/>
                                                    <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"/>
                                                    <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"/>
                                                    <path d="M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"/>
                                                    <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"/>
                                                    </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.cover {
  object-fit: cover;
  width:100%;
  /* height:250px; */
}
.item-list{
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0), rgb(112 112 112));
    border-radius: 10px;
}
</style>
<script>
import Filtering from "@/Shared/Filter";
import Pagination from "@/Shared/Pagination";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    components: { Pagination, Filtering },
    props: {
        events      : Object,
        participants: Object,
        canVote     : Object,
        settup_id   : ""
    },
    data() {
        return {
            pageTitle   :"ACES 2022 SCHOOL CALENDAR OF EVENTS",
            summary     :null,
            form: useForm({
                settup_id:"",
                participants_id:""
           }),

        };
    },
    mounted()
    {
        this.loadSumarry();
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
    methods: 
    {
        castVote(settup_id,participants_id)
        {
            // this.$inertia.post("/students/cast-vote",{
            //     settup_id:settup_id,
            //     participants_id:participants_id
            // });
            this.form.settup_id = settup_id;
            this.form.participants_id = participants_id;
            this.form.post("/students/cast-vote", this.form);

            setTimeout(() => this.loadSumarry(), 2000);
            ;
        },

        loadSumarry()
        {
            axios.get("/students/get-summary/"+this.settup_id).then(response=>{
            if(response.data != null)
                {
                    this.summary  = response.data;
                }});
        }
    },
};
</script>
