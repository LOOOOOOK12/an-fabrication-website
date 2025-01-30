import React from 'react'
import { ServicesCardData } from '@/app/types/types'
import ServicesCard from '../servicesCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function servicesSection() {
    return (
        <section className='py-8 px-4 bg-primary-50 flex flex-col items-center justify-center gap-6' id='services'>
            <div className='flex flex-col items-start justify-center gap-4 max-w-[950px]'>
                <h1 className='text-5xl font-bold'>Services We Provide</h1>
                <div className='flex flex-wrap items-stretch gap-4'>
                    {ServicesCardData.map((card, idx) => 
                        <ServicesCard
                            key={idx}
                            icon={card.icon}
                            title={card.title}
                        />
                    )}                
                </div>
                <Link href={"/gallery"}><Button>View Gallery</Button></Link>
            </div>
        </section>
    )
}

export default servicesSection