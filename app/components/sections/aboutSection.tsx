import React from 'react'
import CarouselContainer from '../carouselContainer'
import { AboutCarouselData } from '../../types/types'

function aboutSection() {
    return (
        <section className='h-screen flex flex-col md:flex-row items-center gap-2 justify-center p-5' id='about'>
            <div className='max-w-[1000px] h-[600px] flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center justify-center'>
                    <CarouselContainer
                        items={AboutCarouselData}
                    />
                </div>
                <div className='max-h-[800px] w-full flex flex-col gap-4'>
                    <h1 className='text-5xl font-bold'>About us</h1>
                    <p className='text-xl text-text-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus at nesciunt ea dolorum voluptatem illo quia rem nostrum quibusdam, et doloremque unde distinctio veniam consectetur quae tempore. Facilis, nihil at?</p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection