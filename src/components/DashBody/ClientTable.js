import React from 'react'
import addidas from '../../assets/addidas.png'
import netflixIcon from '../../assets/Sphere-min.png'
import shopifyIcon from '../../assets/Cube-min.png'
import bootstrapIcon from '../../assets/Cylinder-min.png'
import communityIcon from '../../assets/IcoSphere-min.png'
import { Line } from 'rc-progress';

const ClientTable = () => {
    return (
        <div className='bg-white rounded-lg mt-4 py-1'>
            <div className='p-6 flex items-center justify-between'>
                <div className='font-inter'>
                    <p className='font-medium text-[19px] text-[#232D42]'>Enterprise Clients</p>
                    <p className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-[#3A57E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='font-normal text-base text-[#8A92A6]'>15 New Acquired ths month</span>
                    </p>

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div>

                <table className='w-full'>
                    <tr className='bg-[#F5F6FA] font-inter font-medium text-base text-[#8A92A6] text-left border-spacing-2'>
                        <th className='p-2'>COMPANIES</th>
                        <th>CONTACTS</th>
                        <th>ORDER</th>
                        <th>COMPLETION</th>
                    </tr>
                    <tr className=''>
                        <td className='flex items-center py-4 pl-4'>
                            <div className='w-11 h-11 bg-[#C4CCF8] rounded flex items-center justify-center mr-2'>
                                <img src={addidas} alt="" />
                            </div>
                            <span className='font-inter front-normal text-base text-[#232D42]'>Addidas Sportwear </span>
                        </td>

                        <td>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10'> SP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> PP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> MM</span>
                        </td>

                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>$30,000</span>
                        </td>
                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>60%</span>
                            <Line percent={60} strokeWidth={1} strokeColor="#3A57E8" className='w-32 h-2 rounded-lg' />
                        </td>


                    </tr>
                    <tr className=' '>
                        <td className='flex items-center py-4 pl-4'>
                            <div className='w-11 h-11 bg-[#C4CCF8] rounded flex items-center justify-center mr-2'>
                                <img src={netflixIcon} alt="" />
                            </div>
                            <span className='font-inter front-normal text-base text-[#232D42]'>Netflix </span>
                        </td>

                        <td>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10'> SP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> MM</span>
                        </td>

                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>$8,500</span>
                        </td>
                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>25%</span>
                            <Line percent={25} strokeWidth={1} strokeColor="#3A57E8" className='w-32 h-2 rounded-lg' />
                        </td>


                    </tr>
                    <tr className=' '>
                        <td className='flex items-center py-4 pl-4'>
                            <div className='w-11 h-11 bg-[#C4CCF8] rounded flex items-center justify-center mr-2'>
                                <img src={shopifyIcon} alt="" />
                            </div>
                            <span className='font-inter front-normal text-base text-[#232D42]'>Shopifi Stores </span>
                        </td>

                        <td>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10'> PP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> TP</span>

                        </td>

                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>$20,500</span>
                        </td>
                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>100%</span>
                            <Line percent={100} strokeWidth={1} strokeColor="#1AA053" className='w-32 h-2 rounded-lg' />
                        </td>


                    </tr>
                    <tr className=' '>
                        <td className='flex items-center py-4 pl-4'>
                            <div className='w-11 h-11 bg-[#C4CCF8] rounded flex items-center justify-center mr-2'>
                                <img src={bootstrapIcon} alt="" />
                            </div>
                            <span className='font-inter front-normal text-base text-[#232D42]'>Boostrap Technologies </span>
                        </td>

                        <td>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10'> SP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> PP</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> MM</span>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> TP</span>
                        </td>

                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>$9,800</span>
                        </td>
                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>100%</span>
                            <Line percent={100} strokeWidth={1} strokeColor="#1AA053" className='w-32 h-2 rounded-lg' />
                        </td>


                    </tr>
                    <tr className=' '>
                        <td className='flex items-center py-4 pl-4'>
                            <div className='w-11 h-11 bg-[#C4CCF8] rounded flex items-center justify-center mr-2'>
                                <img src={communityIcon} alt="" />
                            </div>
                            <span className='font-inter front-normal text-base text-[#232D42]'>Community First </span>
                        </td>

                        <td>
                            <span className='inline-block w-11 h-11 bg-white border-[2px] border-[#3A57E8] rounded-full text-[#3A57E8] text-center leading-10 -ml-3'> MM</span>
                        </td>

                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>$14,000</span>
                        </td>
                        <td>
                            <span className='font-inter font-normal text-base text-[#232D42]'>75%</span>
                            <Line percent={75} strokeWidth={1} strokeColor="#3A57E8" className='w-32 h-2 rounded-lg' />
                        </td>


                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ClientTable