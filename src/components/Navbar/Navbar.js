import React from 'react'
import searchIcon from '../../assets/Search.png'
import flag from '../../assets/flag.png'
import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import user from '../../assets/user.png'



const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-white px-8 py-[12.8px] fixed w-[inherit] z-20'>
            {/* Search Field  */}
            <div className='shrink'>
                <div className='flex border rounded hover:border-blue-400 px-5 py-2 pr-10 ml-3'>
                    <img src={searchIcon} alt="" />
                    <input className='focus:outline-none ml-3' type="text" placeholder='Search...' />
                </div>
            </div>



            {/* Icons and users  */}
            <div className='flex items-center space-x-5'>
                {/* Flag  */}
                <div>
                    <img src={flag} alt="" />
                </div>

                {/* Icons  */}
                <div className='flex items-center space-x-5'>
                    <img src={notification} alt="" />
                    <img src={message} alt="" />
                </div>

                {/* User    */}
                <div className='flex items-center'>
                    <img src={user} alt="" />
                    <div className='font-inter font-normal ml-4 hidden md:block'>
                        <h3 className='text-base'>Austin Robertson</h3>
                        <h3 className='text-[13px] text-[#8A92A6]'>Marketing Administrator</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar