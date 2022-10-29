<template>

    <Head>
        <title>Home</title>
    </Head>

    <div class="row gap-20 masonry pos-r">
        <div class="col-lg-12">
            <h1>{{username}}</h1>
        </div> 
    </div>
</template>
<script>
import TotalUser        from "../Pages/Charts/TotalUsers"
import SomeChart        from "../Pages/Charts/SomeChart"
import LineChart        from "../Pages/Charts/LineChart"
import PieChart         from "../Pages/Charts/PieChart"
import {ref} from       "vue"
const componentKey  = ref(0);
const componentKey1 = ref(0);
export default ({
    components: { TotalUser, SomeChart, LineChart, PieChart },
    props:{
        
        officesLabels:Array,
        vehicles:Array,
        consume:"",
        balance:"",
        isAdmin:"",
        fuelConsumed:Array,
        TotalCharge:"",
        username:"",
    },
    data() {
        return {
            charge_to:Array,
            charges:Array,
            totalUser:[10,20,50,6,525,85],
            cData:[],
            cLabels:[],
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
            barTitle:"Number Of Travels Per Office",
            fuel_status:true,
            dep_charges:true,
            pie_data:true
        }
    },
    computed:{
        temp()
        {

             let vm = this;
             
             if(vm.officesLabels !== null)
             {
                    _.forEach(vm.officesLabels, function(value,key) {
                    vm.barChart.Labels.push(value.short_name);
                    vm.barChart.Data.push(value.travel_count);
                });
             }
          
            return true;
        },
        chartDataX()
        {
            return this.chargesChartData.Data;
        },
        peiDataX()
        {
            return this.pieChartData.Data;
        }
    },
    mounted()
    {
        
        // this.loadDepartmentCharges();
        // this.loadFuelStatus();
        // this.loadFuelUtilize();
    },
     methods: {
        print() 
        {
            window.open("http://122.54.19.171:8080/jasperserver/flow.html?pp=u%3DJamshasadid%7Cr%3DManager%7Co%3DEMEA,Sales%7Cpa1%3DSweden&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports%2Ffuel_monitoring&reportUnit=%2Freports%2Ffuel_monitoring%2Fcharge_balance&standAlone=truee&decorate=no", "_blank");
        },
        loadDepartmentCharges()
        {
                let vm = this;
                axios.get("/load-department-charges").then(response=>
                {
                    if(response.data != null)
                        {
                            if(vm.chargesChartData !== null)
                            {
                                vm.dep_charges = false;
                                vm.chargesChartData.Labels  = response.data.chartLabel
                                vm.chargesChartData.Data    = response.data.chartData
                                vm.componentKey += 1;
                            }
                        }
                       
                });
        },
         loadFuelStatus()
        {
              axios.get("/load-fuel-status").then(response=>{
                    if(response.data != null)
                        {
                            this.charge_to  = response.data;
                            this.fuel_status = false;
                        }});
        },
         loadFuelUtilize()
        {
            let vm = this;
              axios.get("/load-utilize").then(response=>
              {
                        if(response.data != null)
                        {
                            console.log(response.data.utilize_data);
                            vm.pie_data = false;
                            vm.pieChartData.Data  = response.data.utilize_data
                            vm.pieChartData.Labels = response.data.utilize_label
                            vm.componentKey1 += 1;
                        }
                }
                );
        }
     }
});
</script>
<style>
/** https://loading.io/css/ **/
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #ddd;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>