import React from 'react'
import upArrow from '../../assets/upArrow.png'
const ActivityOverview = () => {
    return (
        <div>
            <div>
                <h3 className='font-inter font-medium text-2xl text-[#232D42]'>Actvity overview</h3>
                <div className='flex items-center'>
                    <img src={upArrow} alt="" />
                    <p className='font-inter font-normal text-base text-[#8A92A6] mt-2 ml-1'>16% this month</p>
                </div>
            </div>

            <div className='mt-[17px] activityOverview'>
                <ul className='space-y-7'>
                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>$2400, Purchase</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 8:10 PM</span>
                    </li>

                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>New order #8744152</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 11 PM</span>
                    </li>

                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>Affilate Payout</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 7:64 PM</span>
                    </li>

                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>New user added</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 1:21 AM</span>
                    </li>

                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>Product added</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 4:50 AM</span>
                    </li>

                    <li className=''>
                        <p className='font-inter font-normal text-[19px] text-[#232D42]'>Product added</p>
                        <span className='font-inter font-normal text-[16px] text-[#8A92A6]'>11 JUL 4:50 AM</span>
                    </li>

                </ul>
            </div>


        </div>
    )
}

export default ActivityOverview