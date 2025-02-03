"use client"

import React from 'react'
import { AboutCarouselData } from '../../types/types'
import Painting from "@/public/carousel/painting.jpg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function aboutSection() {
    return (
        <section className='flex item-center justify-center gap-4 p-6' id='about'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full md:max-w-[850px]'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    className='w-full h-[400px]'>
                    {AboutCarouselData.map((data, idx) =>
                        <SwiperSlide key={idx}  className='w-full h-full'>
                            <Image src={data.image} alt={data.alt} className='w-full h-full'/>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex flex-col gap-6 items-start justify-center w-full'>
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