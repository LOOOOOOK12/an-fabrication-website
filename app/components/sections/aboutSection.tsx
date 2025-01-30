import React from 'react'
import CarouselContainer from '../carouselContainer'
import { AboutCarouselData } from '../../types/types'

function aboutSection() {
    return (
        <section className='h-screen flex flex-col py-8 px-4 md:flex-row items-center gap-2 justify-center' id='about'>
            <div className='max-w-[1000px] h-[500px] flex flex-col md:flex-row items-center justify-center gap-4'>
                <div className='flex items-center justify-center max-w-[500px]'>
                    <CarouselContainer
                        items={AboutCarouselData}
                    />
                </div>
                <div className='max-h-[800px] w-full flex flex-col gap-2'>
                    <h1 className='text-5xl font-bold'>About us</h1>
                    <p className='text-xl text-text-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus at nesciunt ea dolorum voluptatem illo quia rem nostrum quibu</p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection