"use client"

import React from 'react'
import Image from 'next/image'  
import Logo from "@/public/AN.jpg"

function heroSection(){
    return (
        <section className={`h-screen bg-[url(../public/wallpaper1.jpg)] bg-cover bg-primary-300 bg-center bg-blend-multiply flex items-center justify-center text-3xl relative`} id='home'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Image src={Logo} alt="Logo" className='size-28 md:size-48 rounded-full'/>
                <h1 className='text-2xl md:text-4xl text-center text-text-50 font-extrabold w-full md:w-3/4'>Alamil and Napoles Wood & Metal Fabrication</h1>
            </div>
        </section>
    )
}

export default heroSection