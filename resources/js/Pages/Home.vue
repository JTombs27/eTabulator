<template>

    <Head>
        <title>Home</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item w-100">
            <div class="row gap-20">
                <div class="col-md-3" v-for="(vehicle,index) in vehicles" :key="index">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1" v-if="vehicle.TYPECODE == 1">Total Motorcyle</h6>
                            <h6 class="lh-1" v-if="vehicle.TYPECODE == 2">Total Light Vehicle</h6>
                            <h6 class="lh-1" v-if="vehicle.TYPECODE == 3">Total Heavy Equipment</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">
                                   
                                    </span>
                                </div>
                                <div class="peer"> 
                                    <svg v-if="vehicle.TYPECODE == 1" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
                                        <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                                    </svg>
                                    <svg  v-if="vehicle.TYPECODE == 2" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"/>
                                    </svg>
                                    <svg  v-if="vehicle.TYPECODE == 3" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-truck pull-left" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                    <svg v-if="vehicle.TYPECODE == 15" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-truck-flatbed" viewBox="0 0 16 16">
                                        <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z"/>
                                    </svg>
                                     &nbsp;
                                    <span  v-if="vehicle.TYPECODE == 1" class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 bgcH-green-100 c-green-500">{{vehicle.number_of_type_vehicle}}</span>
                                    <span  v-if="vehicle.TYPECODE == 2" class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 bgcH-purple-100 c-purple-500">
                                    {{vehicle.number_of_type_vehicle}} 
                                    </span>
                                    <span  v-if="vehicle.TYPECODE == 3" class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 bgcH-red-100 c-red-500">{{vehicle.number_of_type_vehicle}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="layers bd bgc-white p-20">
                        <div class="layer w-100 mB-10">
                            <h6 class="lh-1" >Total Charges</h6>
                        </div>
                        <div class="layer w-100">
                            <div class="peers ai-sb fxw-nw">
                                <div class="peer peer-greed">
                                    <span id="sparklinedash">
                                        
                                    </span>
                                </div>
                                <div class="peer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                                        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                                    </svg>
                                    <span  class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 bgcH-blue-100 c-blue-500">{{Number(TotalCharge).toLocaleString(undefined, {minimumFractionDigits: 2})}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-100">
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
        vehicles:Array,
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
             if(vm.officesLabels !== null){
                    _.forEach(vm.officesLabels, function(value,key) {
                    vm.barChart.Labels.push(value.short_name);
                    vm.barChart.Data.push(value.travel_count);
                });
             }
             
            if(vm.chargesChartData !== null)
            {
                 if(vm.isAdmin)
                {
                    _.forEach(vm.charges,function(value,key){
                    vm.chargesChartData.Labels.push(value.office_short_name);
                    vm.chargesChartData.Data.push(value.office_charges_amount);
                })
                }
                else{
                    if(vm.charges.length >0)
                    {
                        vm.chargesChartData.Labels.push(vm.charges[0].office_short_name+' Balance');
                        vm.chargesChartData.Labels.push(vm.charges[0].office_short_name+' Consumed');
                        vm.chargesChartData.Data.push((vm.balance - vm.consume));
                        vm.chargesChartData.Data.push(vm.consume);
                    }
                }
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