import React from 'react'
import { ServicesCardData } from '@/app/types/constants'
import ServicesCard from '../servicesCard'

function servicesSection() {
    return (
        <section className='py-8 px-4 flex flex-col items-center justify-center gap-6' id='services'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-center'>Services We Provide</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4'>
                    {ServicesCardData.map((card, idx) => 
                        <ServicesCard
                            image={card.image}
                            key={idx}
                            title={card.title}
                            href={card.href}
                            alt={card.alt}
                        />
                    )}                
                </div>
            </div>
        </section>
    )
}

export default servicesSection