<template>

    <Head>
        <title>Home</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <!-- <div class="masonry-item w-100">
            <div class="row gap-20">
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Total Visits</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash"></span>
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
                                            bgc-green-50
                                            c-green-500
                                        ">+10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Total Page Views</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash2"></span>
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
                                            bgc-red-50
                                            c-red-500
                                        ">-7%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Unique Visitor</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash3"></span>
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
                                            bgc-purple-50
                                            c-purple-500
                                        ">~12%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Bounce Rate</h6>
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
        </div> -->
        <div class="masonry-item w-100">
            <div class="row">
                <div class="col-md-4">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Fuel Utilizations</h6>
                        </div>
                        <div class="col-12">
                            <some-chart :chartData="pieChartData.Data" :chartLabel="pieChartData.Labels" :chartColor="pieChartData.Colors"></some-chart>
                        </div>
                    </div>
                </div>
                <div class="masonry-item col-8">
                   
                    <div class="bd bgc-white">
                        <div class="peers fxw-nw@lg+ ai-s">
                            <div class="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                                <div class="layers">
                                    <div class="layer w-100 mB-10">
                                        <h6 class="lh-1">{{barTitle}}</h6>
                                    </div>
                                    <div class="layer w-100">
                                        <total-user :chartData="totalUser" :chartLabel="officesLabels"></total-user>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <div class="row">
            <div class="col-md-4">
                <div class="layers bd bgc-white p-20">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Site Data</h6>
                    </div>
                    <line-chart></line-chart>
                </div>
            </div>
            <div class="col-md-4">
                <div class="layers bd bgc-white p-20" style="min-height: 400px;">
                    <div class="layer w-100 mB-10">
                        <h6 class="lh-1">Site Data</h6>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import TotalUser from "../Pages/Charts/TotalUsers"
import SomeChart from "../Pages/Charts/SomeChart"
import LineChart from "../Pages/Charts/LineChart"
import PieChart from "../Pages/Charts/PieChart"

export default ({
    components: { TotalUser, SomeChart, LineChart, PieChart },
    props:{
        chargesAmount:Array,
        chargesLabel:Array,
        officesLabels:Array,
        consume:"",
        balance:"",
        isAdmin:""
    },
    data() {
        return {
            totalUser:[10,20,50,6,525,85],
            pieChartData:{
                        Labels:this.isAdmin == null ? [this.chargesLabel+' Balance','Consumed']:this.chargesLabel,
                        Data: this.isAdmin  == null ? [this.balance-this.consume,this.consume]:this.chargesAmount,
                        Colors:['rgb(13 110 253)','rgb(25 135 84)','rgb(220 53 69)','rgb(255 193 7)','rgb(13 202 240)']
                    },
            barChart:{
                Labels:this.officesLabels,
                Data:this.chargesAmount,
            },
            barTitle:"Number Of Travels Per Office"
        }
    },
    mounted(){
    }
});
</script>