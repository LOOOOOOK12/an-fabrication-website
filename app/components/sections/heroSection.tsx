"use client"

import React from 'react'
import Image from 'next/image'
import Logo from "@/public/logo.jpg"

function heroSection(){
    return (
        <section className={`h-screen bg-cover bg-[url(../public/wallpaper.jpg)] flex items-center justify-center text-3xl relative`} id='home'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Image src={Logo} alt="Logo" className='size-40 rounded-full'/>
                <h1 className='text-2xl md:text-4xl text-center text-text-50 font-bold'>Alamil and Napoles Wood & Metal Fabrication</h1>
            </div>
        </section>
    )
}

export default heroSection