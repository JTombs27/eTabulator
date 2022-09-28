<template>

    <Head>
        <title>Home</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="masonry-item w-100" v-if="isAdmin !== null">
            <div class="row gap-20" >
                <div class="col-md-3"  v-for="(vehicle,index) in vehicles" :key="index">
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
                                    <svg version="1.0" v-if="vehicle.TYPECODE == 1" xmlns="http://www.w3.org/2000/svg" width="35" height="30" style="color:gray"  viewBox="0 0 1280.000000 1034.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,1034.000000) scale(0.100000,-0.100000)" fill="#72777a" >
                                        <path d="M6120 10315 c-502 -106 -822 -361 -943 -750 -26 -85 -52 -213 -45 -220 2 -3 188 26 412 63 224 37 409 66 412 63 8 -8 4 -571 -4 -571 -12 0 -740 -98 -779 -105 l-33 -6 0 -359 c0 -281 3 -360 13 -360 6 0 111 14 232 30 121 16 223 30 226 30 3 0 54 40 113 89 244 203 471 324 708 377 99 23 327 23 428 1 123 -27 209 -56 323 -110 l109 -51 19 24 c34 44 116 213 143 293 43 127 59 253 53 407 -6 153 -22 238 -67 360 -187 509 -466 744 -945 799 -202 23 -253 22 -375 -4z"/>
                                        <path d="M6450 8440 c-92 -19 -187 -53 -265 -93 -28 -14 -583 -428 -1235 -921 -861 -651 -1186 -891 -1188 -878 -1 9 -8 90 -16 180 -7 89 -15 164 -18 167 -3 3 -54 -13 -114 -36 -60 -22 -221 -81 -359 -131 -383 -138 -638 -241 -822 -333 -456 -226 -697 -468 -799 -800 -26 -85 -28 -101 -28 -280 0 -174 2 -200 28 -310 33 -140 91 -302 167 -467 54 -117 54 -117 89 -118 78 -1 322 -21 424 -35 1182 -164 1889 -910 2182 -2302 l17 -83 93 -90 c288 -279 740 -437 1439 -505 325 -31 469 -36 1350 -45 495 -5 940 -12 989 -16 l89 -6 -7 68 c-3 38 -13 123 -21 189 -34 275 -30 697 10 972 140 958 741 1562 1762 1772 289 59 521 81 945 88 l347 6 42 56 c142 190 168 423 68 612 -17 31 -46 73 -64 93 l-33 36 -1026 0 -1026 0 0 23 c0 36 -36 133 -76 206 -52 95 -117 188 -299 431 -88 118 -185 250 -214 293 -30 43 -58 80 -62 83 -4 2 -311 -232 -681 -522 l-673 -526 -1000 3 c-1071 2 -1041 4 -1153 -48 -108 -51 -196 -173 -240 -338 -13 -49 -23 -69 -33 -67 -86 20 -371 160 -506 248 -223 145 -422 350 -523 538 -31 58 -33 67 -20 80 8 8 471 363 1029 790 1012 774 1014 775 1031 753 11 -15 1278 -1776 1304 -1814 2 -2 1349 1006 1363 1020 9 9 -20 54 -129 197 -77 102 -273 365 -436 585 -585 788 -813 1060 -962 1143 -238 133 -509 182 -740 132z"/>
                                        <path d="M1935 4190 c-523 -44 -999 -271 -1357 -649 -420 -442 -628 -1044 -568 -1642 52 -508 268 -953 636 -1309 820 -793 2128 -780 2935 29 432 434 652 1019 609 1623 -49 687 -420 1294 -1010 1654 -360 219 -825 329 -1245 294z m465 -754 c557 -129 970 -576 1055 -1141 40 -268 -2 -538 -124 -790 -75 -154 -159 -270 -279 -387 -195 -189 -418 -306 -692 -365 -120 -26 -411 -25 -530 1 -374 81 -684 293 -885 604 -256 397 -287 914 -81 1337 202 414 598 702 1051 764 121 17 365 5 485 -23z"/>
                                        <path d="M10414 4174 c-838 -114 -1531 -733 -1743 -1557 -48 -183 -63 -311 -63 -517 0 -345 61 -615 207 -915 444 -916 1473 -1378 2459 -1105 606 168 1116 620 1361 1205 534 1273 -293 2713 -1658 2890 -145 18 -423 18 -563 -1z m556 -734 c138 -28 204 -51 345 -120 374 -184 641 -532 732 -953 28 -126 25 -440 -5 -563 -115 -485 -452 -855 -914 -1008 -141 -47 -265 -66 -428 -66 -221 0 -404 41 -595 134 -496 242 -798 750 -771 1296 17 351 153 658 401 905 222 222 495 355 811 395 104 13 308 4 424 -20z"/>
                                    </g>
                                    </svg>
                                    <!-- <svg v-if="vehicle.TYPECODE == 1" xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16">
                                        <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                                    </svg> -->
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
                                    <span  class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 bgcH-blue-100 c-blue-500">{{Number(TotalCharge[0].balance1).toLocaleString(undefined, {minimumFractionDigits: 2})}}</span>
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
                            <some-chart  :chartData="chargesChartData.Data" :CharLegelPosition="isAdmin == null ? 'left':'right'" :chartLabel="chargesChartData.Labels"></some-chart>
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
                <div class="col-md-12 mT-10">
                    <div class="layers w-100 bgc-white p-20">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                   <h3 class="fw-bold">Fuel Status Report</h3>
                                </div>
                                <div class="col-md-6 text-end">
                                    <button type="button" class="btn btn-outline-success pull-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                                            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                        </svg>
                                        PRINT</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="w-100 table table-responsive overflow-auto p-5" style="height: 250px;">
                                <table class="table table-bordered">
                                    <thead class="table-dark">
                                        <th class="text-center">Office</th>
                                        <th class="text-center">Fuel Withdrawal</th>
                                        <th class="text-center">Paid</th>
                                        <th class="text-center">Unpaid</th>
                                        <th class="text-center">Balance</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in charge_to" :key="index">
                                            <td width="46%">  &nbsp;{{item.office_name}}</td>
                                            <td width="15%" class="text-end">{{ item.amount}}</td>
                                            <td width="13%" class="text-end">{{ item.amount_paid}}</td>
                                            <td width="13%" class="text-end">{{ item.unpaid_amount}}</td>
                                            <td width="13%" class="text-end">{{ item.balance2}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
        TotalCharge:"",
        charge_to:Array
    },
    data() {
        return {
            totalUser:[10,20,50,6,525,85],
            chargesChartData:{
                        Labels:[],
                        Data: [],
                        Colors:[] 
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
            r:"",
            g:"",
            b:"",
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
                        vm.chargesChartData.Data.push((vm.charges[0].office_charges_amount));
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