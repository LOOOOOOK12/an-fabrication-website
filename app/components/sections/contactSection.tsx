"use client"

import React from 'react'
// import { footerDataSocials } from '@/app/types/constants'
// import { Icon } from '../offersCard'

function contactSection() {
    return (
        <div className='py-8 px-4 flex flex-col gap-8 items-center justify-center h-screen' id='contactus'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-3xl md:text-6xl font-bold text-center'>Want Something Built?  </h1>
                <a href='mailto:lukealamil12@gmail.com' className='p-2 md:py-3 md:px-6 bg-accent-500 text-text-50 text-xl md:text-3xl font-semibold rounded-md hover:bg-accent-600 duration-100'>Contact Us!</a>
            </div>
            {/* <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-2xl md:text-4xl font-bold text-center'>You can also visit us in</h1>
                <div className='flex items-center justify-center'>
                    {footerDataSocials.map((socials,idx)=>
                    <a key={idx} target='_blank' href={socials.href}>
                        <Icon icon={socials.socialsIcons} size={50}/>
                    </a>)}
                </div>
            </div> */}
        </div>
    )
}

export default contactSection