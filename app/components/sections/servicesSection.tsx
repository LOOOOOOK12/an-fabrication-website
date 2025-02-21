import React from 'react'
import { ServicesCardData } from '@/app/types/constants'
import ServicesCard from '../servicesCard'

function servicesSection() {
    return (
        <section className='py-8 px-4 flex flex-col items-center justify-center gap-6' id='services'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-center'>Services We Provide</h1>
                <div className=' max-w-[1200px] flex flex-col md:flex-row items-center gap-4'>
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