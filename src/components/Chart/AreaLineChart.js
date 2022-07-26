import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';


const AreaLineChart = () => {
    const [chartData] = useState({

        series: [{
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Cost',
            data: [11, 32, 45, 32, 34, 52, 41]
        },],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false
                },
                brush: {
                    enabled: false,
                }
            },
            colors: ['#3A57E8', '#85F4FA'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            legend: {
                show: false
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            grid: {
                show: false,
            }
        }


    }
    )





    return (
        <div className="overview-chart-warp bg-white p-6 mb-4 rounded-b-lg">

            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                height="300px"
                width="100%"
                type="area"
            />
        </div>
    )
}

export default AreaLineChart