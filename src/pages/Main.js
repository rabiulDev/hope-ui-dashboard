import DashBody from '../components/DashBody/DashBody'
import DashHeader from '../components/DashHeader/DashHeader'
import Navbar from '../components/Navbar/Navbar'
import SideBarHeader from '../components/Sidebar/SideBarHeader'
import SidebarHomeItems from '../components/Sidebar/SidebarHomeItems'


const Main = () => {
    return (
        <div className='flex bg-gray-200 max-w-[1920px]'>

            {/*DASHBOARD SIDEBAR*/}
            <div className='hidden md:block w-[20%] h-full bg-white shadow fixed z-30 overflow-y-auto scrollbar-thin'>

                <SideBarHeader />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />
                <SidebarHomeItems />

            </div>


            {/* DASHBOARD BODY */}
            <div className='w-[80%] relative z-10 md:ml-[20%]'>
                <Navbar />
                <DashHeader />
                <DashBody />
            </div>


        </div>
    )
}

export default Main