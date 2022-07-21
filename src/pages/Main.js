import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SideBarHeader from '../components/Sidebar/SideBarHeader'
import SidebarHomeItems from '../components/Sidebar/SidebarHomeItems'

const Main = () => {
    return (
        <div className='flex bg-gray-100 '>

            {/*DASHBOARD SIDEBAR*/}
            <div className='hidden md:block w-[250px] flex-shrink-0 h-screen bg-white shadow '>
                <SideBarHeader />
                <SidebarHomeItems />
            </div>


            {/* DASHBOARD BODY */}
            <div className='flex-auto h-screen'>
                <Navbar />
            </div>


        </div>
    )
}

export default Main