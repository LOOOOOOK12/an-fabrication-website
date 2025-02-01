"use client"

import React from 'react'
import { AboutCarouselData } from '../../types/types'
import Painting from "@/public/carousel/painting.jpg"
import Image from 'next/image'

function aboutSection() {
    return (
        <section className='flex item-center justify-center gap-4 p-6' id='about'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1200px]'>
                <Image src={Painting} alt="asdsa" className='w-full h-[350px] object-contain'/>
                <div className='flex flex-col gap-6 items-start justify-center'>
                    <h1 className='text-5xl font-bold items-start'>About us</h1>
                    <p className='text-xl text-text-400'>
                        Alamil and Napoles Wood and Metal Fabrication 
                        specializes in high-quality wood and metal craftsmanship. From custom furniture to 
                        structural metalwork, we deliver durable and stylish solutions for residential, 
                        commercial, and industrial needs. Let’s build something great together!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection