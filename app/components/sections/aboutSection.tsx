"use client"

import React from 'react'
import { AboutCarouselData } from '../../types/constants'
import Painting from "@/public/carousel/painting.jpg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function aboutSection() {
    return (
        <section className='flex item-center justify-center p-6' id='about'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full md:max-w-[850px]'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className='w-full h-[400px] rounded-md'>
                    {AboutCarouselData.map((data, idx) =>
                        <SwiperSlide key={idx}  className='w-full h-full'>
                            <Image src={data.image} alt={data.alt} className='w-full h-full'/>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex flex-col gap-4 items-start justify-center w-full'>
                    <h1 className='text-5xl font-bold items-start'>About us</h1>
                    <p className='text-xl text-text-400'>
                    Alamil and Napoles crafts high-quality wood and metal products with durability and style. 
                    We create custom solutions for residential, commercial, and industrial needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection