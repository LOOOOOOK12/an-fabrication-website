"use client"
import { motion } from 'motion/react'
import React from 'react'
import  {navLinks} from '../types/types'

function nav() {
    return (
        <motion.header 
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0 }}
            transition={{ duration: .5, type:"spring", delay: .5 }}
            className='w-full fixed flex items-center justify-center top-2 z-50 bg-opacity-75'
        >
            <nav className='w-[800px] bg-primary-700 flex items-center justify-between text-text-50 p-5 shadow-lg'>
                <a className='cursor-default text-xl font-semibold'>A&N</a>
                <div className='flex gap-2'>
                    {navLinks.map((link,idx) => 
                        <a key={idx} href={link.href}>{link.name}</a>
                    )}
                </div>
            </nav>
        </motion.header>
    )
}

export default nav