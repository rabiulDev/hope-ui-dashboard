import React from 'react'
import { NavLink } from 'react-router-dom'
const SideBarMenuItem = ({ data }) => {
    return (
        <li className='px-[26px] py-3 rounded  hover:bg-blue-600 text-[#8A92A6] hover:text-white hover:cursor-pointer'>
            <NavLink className="flex items-center" to="/">
                <span>{data.icon}</span>
                <span className='ml-3 font-inter text-base font-normal'>{data.name}</span>
            </NavLink>
        </li>
    )
}

export default SideBarMenuItem