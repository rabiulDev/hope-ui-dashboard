import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'

const dashIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>

const menuStyleIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
</svg>

const homeItemsData = [
    { id: 1, icon: dashIcon, name: "Dashboard" },
    { id: 2, icon: menuStyleIcon, name: "Menu Style" },
]

const SidebarHomeItems = () => {
    return (
        <div className='mt-[6rem]'>
            <h1 className='px-8 mb-4 font-inter font-semibold text-base text-[#ADB5BD]'>Home</h1>
            <ul className='px-3'>
                {homeItemsData.map(data => <SideBarMenuItem key={data.id} data={data} />)}
            </ul>
        </div>
    )
}

export default SidebarHomeItems