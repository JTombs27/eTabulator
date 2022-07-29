<template>
</template>

<script>
import { defineComponent, h, PropType } from 'vue'

import { Doughnut } from 'vue-chartjs'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    Plugin
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
export default defineComponent({
    name: 'DoughnutChart',
    components: {
        Doughnut
    },
    props: {
        chartId: {
            type: String,
            default: 'doughnut-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        },
        chartData: {
            type: Array,
            default: () => []
        },
        chartLabel:{
            type:String,
            default: () => []
        },
        chartColor:{
            type:String,
            default: () => []
        }
    },
    setup(props) 
    {
        const chartData = {
            labels: props.chartLabel,
            datasets: [
                {
                    data: props.chartData,
                    backgroundColor: props.chartColor
                }
            ]
        }

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                 
                 datalabels: 
                 {
                    display:true,
                   formatter: function (value, context) {
                            return context.chart.data.labels[ontext.dataIndex];
                        },
                    color:"white",
                },
                legend:{
                    position: 'top'
                }
            }
        }

        return () =>
            h(Doughnut, {
                chartData,
                chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            })
    }
})

</script>

<style>
</style>