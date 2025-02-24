"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'  
import Logo from "@/public/logo.ico"

function heroSection(){
    return (
        <section className={`h-screen bg-[url(../public/wallpaper1.jpg)] bg-cover bg-primary-400 bg-center bg-blend-multiply flex items-center justify-center text-3xl relative`} id='home'>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 2, scale: 1 }}
                transition={{duration: 1, delay: .5, type: "spring"}}
                className='flex flex-col items-center justify-center gap-6'>
                    <Image src={Logo} alt="Logo" className='size-28 md:size-48 rounded-full'/>
                    <h1 className='text-2xl md:text-4xl text-center text-text-50 font-extrabold w-full md:w-3/4'>Alamil and Napoles Wood & Metal Fabrication</h1>
            </motion.div>
        </section>
    )
}

export default heroSection