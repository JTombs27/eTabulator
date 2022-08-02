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
        <div class=" w-100">
            <div class="row"  v-if="temp">
                <div :class="isAdmin == null ? 'col-md-4':'col-md-6'" >
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">{{(isAdmin == null ? 'Fuel Utilization': 'Department Charges')}}</h6>
                        </div>
                        <div class="col-12">
                            <some-chart :chartData="chargesChartData.Data" :CharLegelPosition="isAdmin == null ? 'top':'left'" :chartLabel="chargesChartData.Labels" :chartColor="chargesChartData.Colors"></some-chart>
                        </div>
                    </div>
                </div>
                <div v-if="isAdmin !== null" :class="isAdmin == null ? 'col-md-4':'col-md-6'" >
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Fuel Utilized</h6>
                        </div>
                        <div class="col-12">
                            <pie-chart :pieChartData="pieChartData.Data" :pieChartLabels = "pieChartData.Labels"></pie-chart>
                            <!-- <some-chart :chartData="pieChartData.Data" :CharLegelPosition="isAdmin == null ? 'top':'left'" :chartLabel="pieChartData.Labels" :chartColor="pieChartData.Colors"></some-chart> -->
                        </div>
                    </div>
                </div>
                <!-- <div :class="isAdmin? 'col-md-6':'col-md-4'">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">Department Charges</h6>
                        </div>
                        <div class="col-12">
                            <some-chart :chartData="pieChartData.Data" :CharLegelPosition="'left'" :chartLabel="pieChartData.Labels" :chartColor="pieChartData.Colors"></some-chart>
                        </div>
                    </div>
                </div> -->
                <div :class="(isAdmin !== null ? 'col-md-12 mT-10':'col-md-8')">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1">{{barTitle}}</h6>
                        </div>
                        <div class="col-12">
                            <total-user :chartData="barChart.Data" :chartLabel="barChart.Labels"></total-user>
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
import { nextTick } from "vue";

export default ({
    components: { TotalUser, SomeChart, LineChart, PieChart },
    props:{
        charges:Array,
        officesLabels:Array,
        consume:"",
        balance:"",
        isAdmin:"",
        fuelConsumed:Array,
        TotalCharge:""
    },
    data() {
        return {
            totalUser:[10,20,50,6,525,85],
            chargesChartData:{
                        Labels:[],
                        Data: [],
                        Colors:['rgb(13 110 253)','rgb(25 135 84)','rgb(220 53 69)','rgb(255 193 7)','rgb(13 202 240)']
                    },
            pieChartData:{
                        Labels:[],
                        Data: [],
                        Colors:['rgb(13 110 253)','rgb(25 135 84)','rgb(220 53 69)','rgb(255 193 7)','rgb(13 202 240)']
                    },
            barChart:{
                Labels:[],
                Data:[],
            },

            barTitle:"Number Of Travels Per Office"
        }
    },
    computed:{
        temp(){

             let vm = this;
              _.forEach(vm.officesLabels, function(value,key) {
                vm.barChart.Labels.push(value.short_name);
                vm.barChart.Data.push(value.travel_count);
            });

            if(vm.isAdmin)
            {
                _.forEach(vm.charges,function(value,key){
                vm.chargesChartData.Labels.push(value.office_short_name);
                vm.chargesChartData.Data.push(value.office_charges_amount);
            })
            }
            else{
                vm.chargesChartData.Labels.push(vm.charges[0].office_short_name+' Balance');
                vm.chargesChartData.Labels.push(vm.charges[0].office_short_name+' Consumed');
                vm.chargesChartData.Data.push((vm.balance - vm.consume));
                vm.chargesChartData.Data.push(vm.consume);
            }

            _.forEach((_(vm.fuelConsumed)
            .groupBy('office_short_name')
            .map((platform, id) => ({
                office_short_name: id,
                price: _.sumBy(platform, 'price'),
            }))
            .value()),function(value,key){
                vm.pieChartData.Labels.push(value.office_short_name);
                vm.pieChartData.Data.push(value.price);
            })

            var total_consumed = _.sum(vm.pieChartData.Data)

            vm.pieChartData.Labels.push('Total Balance');
            vm.pieChartData.Data.push((vm.TotalCharge - total_consumed))
          
            return vm.barChart;
        },
    },
    mounted()
    {
       
    }
});
</script>