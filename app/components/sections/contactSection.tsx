"use client"

import React from 'react'

function contactSection() {
    return (
        <div className='py-8 px-4 flex flex-col gap-4 items-center justify-center h-screen' id='contactus'>
            <h1 className='text-4xl md:text-6xl font-bold text-center'>Want Something?</h1>
            <a href='mailto:lukealamil12@gmail.com' className='py-3 px-6 bg-accent-500 text-text-50 text-3xl font-semibold rounded-md hover:bg-accent-600 duration-100'>Contact Us!</a>
        </div>
    )
}

export default contactSection