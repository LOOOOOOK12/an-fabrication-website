"use client"

import { motion } from 'motion/react'
import React from 'react'
import  { navLinks } from '../types/types'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.jpg'

function nav({ links }:navLinks) {
    return (
        <motion.header 
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0 }}
            transition={{ duration: .5, type:"spring", delay: .5 }}
            className='w-full fixed flex items-center justify-center top-2 z-50 bg-opacity-75'
        >
            <nav className='w-[800px] bg-primary-700 flex items-center justify-between text-text-50 p-4 shadow-lg'>
                <Link className='cursor-default text-3xl font-semibold size-10' href={"/"}>
                    <Image src={Logo} alt="Logo" className='h-full w-full rounded-full'/>
                </Link>
                <div className='flex gap-4'>
                    {links.map((link, idx) => 
                        <a className='text-xl hover:text-secondary-400 hover:duration-100' key={idx} href={link.href}>{link.name}</a>
                    )}
                </div>
            </nav>
        </motion.header>
    )
}

export default nav