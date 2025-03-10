"use client"

import React from 'react'
import Shape from '../shape'

function contactSection() {
    return (
        <div className='relative py-8 px-4 flex flex-col gap-8 items-center justify-center h-screen' id='contactus'>
            {/* Left */}
            <Shape
                className={"-z-40 top-12 left-12 -rotate-12 rounded-lg size-24  md:left-12 md:size-24 lg:size-56 bg-accent-500"}
            />
            {/* Bottom Left */}
            <Shape
                className={"-z-40 bottom-14 left-24 -rotate-45 rounded-lg size-24 md:left-24 md:size-24 lg:size-56 bg-secondary-200"}
            />
            {/* Bottom Right */}
            <Shape
                className={"-z-40 right-12 bottom-20 rotate-12 rounded-lg size-24 md:bottom-20 md:size-24 lg:size-64 bg-primary"}
            />
            { /* Top Right */ }
            <Shape
                className={"-z-40 top-8 right-20 -rotate-45 rounded-lg size-24 md:right-20 md:size-24 lg:size-44 bg-accent-600"}
            />
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-3xl md:text-6xl font-bold text-center'>Any Questions?</h1>
                <a href='mailto:an.woodmetalfab@gmail.com' className='p-2 md:py-3 md:px-6 bg-secondary-800 text-text-50 text-xl md:text-3xl font-semibold rounded-md hover:bg-secondary-700 duration-100'>Contact Us!</a>
            </div>
        </div>
    )
}

export default contactSection