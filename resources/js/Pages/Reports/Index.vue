<template>

    <Head>
        <title>Reports</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item w-100">
            <div class="row gap-20">
                <div class="col-md-6">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Travel Report</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <Select2 v-model="office_id" :options="offices" v-if="user.role ==='Admin'|| user.role==='PGO'"/> 
                                </div>
                                <div class="peer">
                                    <button type="button" class="btn btn-primary" @click="print()">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Soa Reports</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash4"></span>
                                </div>
                                <div class="peer">
                                    <span class="
                                            d-ib
                                            lh-0
                                            va-m
                                            fw-600
                                            bdrs-10em
                                            pX-15
                                            pY-15
                                            bgc-blue-50
                                            c-blue-500
                                        ">33%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>


export default ({
    data() {
        return {
            office_id:'',
            user:this.$attrs.auth.user,
            offices:[],
        };
    },
    
    mounted()
    {
        if (this.user.role =='Admin'|| this.user.role =='PGO') {
            this.office_id = null
        } else {
            this.office_id = this.user.office_id
        }
       this.loadOffice()
    },
     methods: {
        loadOffice() 
        { 
            axios.get('/offices/fetch').then((response) => {
                this.offices = response.data
            })
        },

        print() {

            if (!!this.office_id) 
            {
                window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&__flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftravel_report_per_office&standAlone=true&decorate=no&office_id="+this.office_id,"_blank");


            } else 
            {
                window.open(" http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Ftravel_report&standAlone=true&decorate=no","_blank");  
                
            }

        },
    },
});
</script>