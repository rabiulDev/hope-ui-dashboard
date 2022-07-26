import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ColumnChart = () => {

    const series = [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }]


    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#3A57E8', '#85F4FA'],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
        },

        fill: {
            opacity: 1,

        },


    }


    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={200} />
        </div>



    )
}

export default ColumnChart