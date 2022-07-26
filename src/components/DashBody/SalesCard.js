import React from 'react'
import bag from '../../assets/Bag.png'
import buy from '../../assets/Buy.png'
const SalesCard = () => {
    return (
        <div>
            <div className='bg-dash-side bg-no-repeat bg-contain w-full h-[300px] rounded-t-lg py-7 px-5'>

                <div className='bg-side-dash-card h-full w-full bg-no-repeat bg-contain p-4'>
                    <div className='font-inter text-white'>
                        <p className='font-bold text-2xl'>VISA</p>
                        <p className='text-[13px] opacity-[1]'>PREMIUM ACCOUNT</p>
                    </div>
                    <div className='mt-6 font-inter text-white font-medium text-2xl'>
                        <span> 5789 **** **** 2847</span>
                    </div>

                    <div className='text-white mt-3'>
                        <p className='flex justify-between items-center font-inter text-[11px]'><span>Card holdar</span> <span>Expire date</span></p>
                        <p className='flex justify-between items-center font-inter font-medium text-[19px]'><span>Mike Smith</span> <span>06/23</span></p>
                    </div>
                </div>

            </div>

            <div className='flex px-4 '>
                <div className='flex'>
                    <div className='flex items-center justify-center w-8 h-8 rounded bg-[#D8DDFA]'>
                        <img src={bag} alt="" />
                    </div>

                    <div className='font-inter font-normal ml-4'>
                        <h3 className='text-base'>1153</h3>
                        <p className='text-[13px] text-[#8A92A6]'>Products</p>
                    </div>

                </div>

                <div className='flex ml-10'>
                    <div className='flex items-center justify-center w-8 h-8 rounded bg-[#CDEBEC]'>
                        <img src={buy} alt="" />
                    </div>

                    <div className='font-inter font-normal ml-4'>
                        <h3 className='text-base'>81K</h3>
                        <p className='text-[13px] text-[#8A92A6]'>Order Served</p>
                    </div>
                </div>
            </div>

            <div className='p-4'>

                <div className='flex items-center justify-between font-inter'>
                    <h3 className='font-medium text-[28px]'>$4,050,12,300</h3>
                    <p className='py-1 px-4 bg-[#1AA053] rounded-[35px] font-normal text-white text-sm'>YoY 24%</p>
                </div>

                <div className='mt-4'>
                    <p className='font-inter font-normal text-base text-[#08B1BA]'>Life time sales</p>
                </div>

                <div className='flex items-center justify-between mt-8 mx-4 font-inter font-normal text-base text-white'>
                    <button className='w-[120px] h-[36px] bg-[#3A57E8] rounded'>
                        View Project
                    </button>

                    <button className='w-[120px] h-[36px] bg-[#08B1BA] rounded'>
                        Analytics
                    </button>
                </div>


            </div>
        </div>
    )
}

export default SalesCard