import React from 'react'
import logo from '../../assets/logo.png'
import toggleArrow from '../../assets/toggleArrow.png'
const SideBarHeader = () => {
    return (
        <div className='border-b fixed w-[inherit] bg-white'>
            <div className='flex flex-row flex-wrap items-center py-3 px-8'>
                <img src={logo} alt="" />
                <h1 className='font-inter font-medium text-[2rem] ml-3'>Hope UI</h1>
            </div>
            <div className='absolute top-5 -right-3 shadow-md rounded-full hover:cursor-pointer z-10'>
                <img src={toggleArrow} alt="" />
            </div>
        </div>
    )
}

export default SideBarHeader