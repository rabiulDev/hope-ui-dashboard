import React from 'react'
import ReactApexChart from 'react-apexcharts';

const RadialBar = () => {
    const series = [80, 50];
    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        colors: ['#3A57E8', '#85F4FA'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '8px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: false,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges'],
    }


    return (
        <div className='flex '>

            <ReactApexChart options={options} series={series} type="radialBar" height={206} width={206} />

            {/* SIDE DATA  */}
            <div>
                <div className='flex items-center'>
                    <span className='inline-block mr-2 w-[13px] h-[13px] bg-blue-600 rounded-full'></span>
                    <div className='font-inter text-base ml-1'>
                        <p className='text-slate-300'> Fashion</p>
                        <p> 551K</p>
                    </div>
                </div>

                <div className='flex items-center mt-12'>
                    <span className='inline-block mr-2 w-[13px] h-[13px] bg-cyan-400 rounded-full'></span>
                    <div className='font-inter text-base ml-1'>
                        <p className='text-slate-300'> Accessories</p>
                        <p> 176K</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RadialBar