"use client"

import { motion } from 'motion/react'
import React from 'react'

function nav() {
    return (
        <motion.header 
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type:"spring", delay: .5 }}
            className='w-full fixed top-0 z-50 bg-slate-500 shadow-md bg-opacity-75 backdrop-blur'
        >
            <nav className='w-full flex items-center justify-between p-5'>
                <h1>A&N</h1>
                <div>
                    <a href="#Hero">Home</a>
                </div>
            </nav>
        </motion.header>
    )
}

export default nav