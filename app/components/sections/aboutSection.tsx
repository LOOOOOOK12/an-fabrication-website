"use client"

import React from 'react'
import { AboutCarouselData } from '../../types/constants'
import Image from 'next/image'
// import Shape from '../shape'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css';

function aboutSection() {
    return (
        <section className='relative flex item-center justify-center bg-slate-200 p-9' id='about'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[950px]'>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className='w-full md:w-1/2 h-[350px] md:h-[450px] rounded-md'>
                    {AboutCarouselData.map((data, idx) =>
                        <SwiperSlide key={idx}  className='w-full h-full'>
                            <Image src={data.image} alt={data.alt} className='w-full h-full'/>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className='flex flex-col gap-4 items-start justify-center w-full md:w-1/2'>
                    <h1 className='text-4xl md:text-5xl font-bold items-start'>About us</h1>
                    <p className='text-lg md:text-xl text-text-400'>
                    Alamil and Napoles crafts high-quality wood and metal products with durability and style. 
                    We create custom solutions for residential, commercial, and industrial needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection