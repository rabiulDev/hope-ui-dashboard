import React from 'react'
import logo from '../../assets/logo.png'
import toggleArrow from '../../assets/toggleArrow.png'
const SideBarHeader = () => {
    return (
        <div className='shadow-sm fixed w-[inherit] bg-white z-20'>
            <div className='flex flex-row flex-wrap items-center py-3 px-8'>
                <img src={logo} alt="" />
                <h1 className='font-inter font-medium text-[2rem] ml-3'>Hope UI</h1>
            </div>
            <div className='absolute top-5 -right-3 shadow-md rounded-full hover:cursor-pointer z-30'>
                <img className='z-30' src={toggleArrow} alt="" />
            </div>
        </div>
    )
}

export default SideBarHeader