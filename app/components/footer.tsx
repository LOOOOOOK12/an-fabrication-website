"use client"

import React from 'react'
import { footerDataSocials } from '../types/types'
import { Icon } from './offersCard'
import { MapPin, PhoneCall } from 'lucide-react'
import { navLinks } from '../types/types'

function footer({ links }:navLinks) {
    return (
        <footer className='w-full h-full flex flex-col md:flex-row justify-evenly bg-primary-700 gap-4 text-white p-5'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>Links</h1>
                <div className='flex flex-col gap-2'>
                    {links.map((link, idx) =>
                        <a key={idx} href={link.href}>{link.name}</a>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>You can Visit us in</h1>
                <div className='flex flex-col gap-2'>
                    <span className='flex gap-2 items-center'><MapPin/> 152 Purok 2 Bogtong Legazpi City</span>
                </div>
                <h1 className='text-2xl font-semibold'>Contact us</h1>
                <span className='flex gap-2 items-center'><PhoneCall/>09982809283</span>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>Check our Social Medias</h1>
                <div className='flex gap-2'>
                    {footerDataSocials.map((socials, idx)=>
                    <a target='_blank' href={socials.href} key={idx}>
                        <Icon icon={socials.socialsIcons}/>
                    </a>)}
                </div>
            </div>
        </footer>
    )
}

export default footer