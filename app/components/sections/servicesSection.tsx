import React from 'react'
import { ServicesCardData } from '@/app/types/types'
import ServicesCard from '../servicesCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function servicesSection() {
    return (
        <section className='h-screen bg-primary-50 flex flex-col items-center justify-center gap-6 p-5' id='services'>
            <h1 className='text-5xl font-bold'>Services</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {ServicesCardData.map((card, idx) => 
                    <ServicesCard
                        key={idx}
                        icon={card.icon}
                        title={card.title}
                    />
                )}                
            </div>
            <Link href={"/gallery"}><Button>Gallery</Button></Link>
        </section>
    )
}

export default servicesSection