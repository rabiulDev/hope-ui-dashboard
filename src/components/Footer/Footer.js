import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-white py-[18px] px-5'>

                <div className='flex items-center font-inter font-normal text-xs'>
                    <span>Privacy Policy</span>
                    <span className='ml-6'>Terms of Use</span>
                </div>

                <div className='font-inter font-normal text-xs'>
                    <span>© 2021 Hope UI</span>
                </div>
            </div>

        </div>
    )
}

export default Footer