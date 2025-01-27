import React from 'react'
import { ServicesCardData } from '@/app/types/types'
import ServicesCard from '../servicesCard'

function servicesSection() {
    return (
        <section className='bg-primary-50 flex flex-col items-center justify-center gap-2 p-5' id='services'>
            <h1 className='text-5xl font-bold'>Services</h1>
            <div className='flex flex-wrap gap-4'>
                {ServicesCardData.map((card, idx) => 
                    <ServicesCard
                        key={idx}
                        icon={card.icon}
                        title={card.title}
                    />
                )}                
            </div>
        </section>
    )
}

export default servicesSection