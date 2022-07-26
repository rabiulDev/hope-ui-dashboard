import React from 'react'
import AreaLineChart from '../Chart/AreaLineChart'
import ColumnChart from '../Chart/ColumnChart'
import RadialBar from '../Chart/RadialBar'
import ActivityOverview from './ActivityOverview'
import ClientTable from './ClientTable'
import SalesCard from './SalesCard'
import TraficDetaiCart from './TraficDetaiCart'

const DashBody = () => {
    return (
        <div className=' grid grid-cols-6 mt-16 p-10 gap-x-4'>

            <div className='col-span-4'>
                {/* AREA CHART  */}
                <div>
                    {/* CHART TITLE  */}
                    <div className='flex justify-between items-center bg-white px-9 pt-4 rounded-t-lg '>
                        <div>
                            <h3 className='font-inter font-medium text-lg'>$855.8K</h3>
                            <p className='font-inter text-sm text-slate-300 '>Gross Sales</p>
                        </div>

                        <div className='flex'>
                            <p className='flex items-center font-inter text-base text-slate-300'> <span className='inline-block mr-2 w-[13px] h-[13px] bg-blue-600 rounded-full'></span> Sales</p>
                            <p className='flex ml-6 items-center font-inter text-base text-slate-300'> <span className='inline-block mr-2 w-[13px] h-[13px] bg-cyan-400 rounded-full'></span> Cost</p>
                        </div>

                        <div>
                            <button className='font-inter flex text-base text-slate-300'> This Week
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                        </div>
                    </div>

                    {/* CHART  */}
                    <AreaLineChart />
                </div>

                {/* RADIAL AND COLUMN CHART  */}
                <div className='grid md:grid-cols-12 md:gap-x-4'>
                    {/* RADIAL BAR CHART  */}
                    <div className='md:col-span-6 bg-white rounded-lg'>
                        <div className='flex justify-between items-center p-8'>
                            <p className='font-inter font-medium text-lg'>Earnings</p>
                            <button className='font-inter flex text-base text-slate-300'> This Week
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <RadialBar />
                    </div>

                    {/* COLUMN CHART  */}
                    <div className='md:col-span-6 bg-white rounded-lg'>
                        <div className='flex justify-between items-center p-8'>
                            <p className='font-inter font-medium text-lg'>Conversions</p>
                            <button className='font-inter flex text-base text-slate-300'> This Week
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        <ColumnChart />
                    </div>
                </div>

                {/* ENTERPRISE CLIENTS TABLE */}
                <div>
                    <ClientTable />
                </div>

            </div>

            {/* Dash Side bar  */}
            <div className='col-span-2'>

                {/* SALES DETAILS  */}
                <div className='bg-white h-[560px] rounded-lg'>
                    <SalesCard />
                </div>

                {/* TRAFIC DETAILS  */}
                <TraficDetaiCart />

                <div className='mt-4 bg-white rounded-lg p-6'>
                    <ActivityOverview />
                </div>
            </div>
        </div>


    )
}

export default DashBody