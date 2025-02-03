import React from 'react'
import { ServicesCardData } from '@/app/types/types'
import ServicesCard from '../servicesCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function servicesSection() {
    return (
        <section className='py-8 px-4 bg-primary-50 flex flex-col items-center justify-center gap-6' id='services'>
            <div className='flex flex-col items-center justify-center gap-4 max-w-[950px]'>
                <h1 className='text-5xl font-bold text-center'>Services We Provide</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 justify-center items-center gap-4'>
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