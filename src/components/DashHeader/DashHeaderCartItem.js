import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
// import arrow from '../../assets/arrow.png'




const DashHeaderCartItem = () => {
    const [chartData] = useState({
        series: [80],
        options: {
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: [''],
        }
    })


    return (
        <div className='flex items-center w-60 h-32 bg-white rounded-lg pl-3'>

            <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={140} width={100} />

            <div className='ml-2 font-inter'>
                <p className='text-base text-[#8A92A6]'> Total Sales</p>
                <h2 className='font-medium text-lg'>$560K</h2>
            </div>
        </div>
    )
}

export default DashHeaderCartItem