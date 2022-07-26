import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DashHeaderCartItem from './DashHeaderCartItem'
import voice from '../../assets/voice.png'




const DashHeader = () => {


    return (
        <div className='bg-dash-header bg-no-repeat bg-cover h-52 px-10 pt-4 rounded-b-2xl relative mt-[71px]'>
            <div className='font-inter text-white space-y-2'>
                <div className='flex items-center justify-between '>
                    <h1 className=' font-bold text-4xl '>Hello Devs !</h1>
                    <button className='px-6 py-2.5 bg-blue-500 rounded text-base'>
                        <img className='inline mr-3' src={voice} alt="" />
                        Announcements
                    </button>
                </div>
                <p className='font-medium text-2xl'>We are on a mission to helps developer like you to build beautiful projects for FREE.</p>
            </div>


            {/* Header cart  */}
            <div className='absolute -bottom-16'>
                <Swiper
                    breakpoints={{
                        576: {

                            slidesPerView: 2
                        },
                        768: {

                            slidesPerView: 4
                        },
                    }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    navigation
                    className='max-w-[1020px]'
                >
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                    <SwiperSlide><DashHeaderCartItem /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default DashHeader