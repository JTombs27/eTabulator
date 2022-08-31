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
            default: () => [
                    '#ff0000',
                    '#ff4000',
                    '#ff8000',
                    '#ffbf00',
                    '#ffff00',
                    '#bfff00',
                    '#80ff00',
                    '#40ff00',
                    '#00ff00',
                    '#00ff40',
                    '#00ff80',
                    '#00ffbf',
                    '#00ffff',
                    '#00bfff',
                    '#0080ff',
                    '#0040ff',
                    '#0000ff',
                    '#4000ff',
                    '#8000ff',
                    '#bf00ff',
                    '#ff00ff',
                    '#ff00bf',
                    '#ff0080',
                    '#ff0040',
                    '#ff0000',
                    '#0d6efd',
                    '#6f42c1',
                    '#d63384',
                    '#dc3545',
                    '#fd7e14',
                    '#ffc107',
                    '#198754',
                    '#20c997',
                    '#0dcaf0',
                    '#6c757d',
                    '#343a40',
                    '#0d6efd',
                    '#198754',
                    '#0dcaf0',
                    '#ffc107',
                    '#dc3545',
                    '#212529']
                    
        },
        CharLegelPosition:{
            type:String,
            default:"top"
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
                legend:{
                    position: props.CharLegelPosition,
                    align:'start',
                    labels:{
                        usePointStyle:true,
                        pointStyle:'rectRounded',
                        font: {
                                size: 10,
                                style:'normal',
                            }
                    }
                },
                datalabels: {
                display: true,
                align: 'bottom',
                backgroundColor: '#ccc',
                borderRadius: 3,
                font: {
                size: 18,
                }
            },
                
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