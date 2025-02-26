import React from 'react'
import OffersCard from '../offersCard'
import { offersData } from '@/app/types/constants'

function offersSection() {
    return (
        <section className='py-8 px-4 flex flex-col gap-5 items-center justify-center bg-primary' id='offers'>
            <h1 className='text-4xl md:text-6xl font-bold text-text-50'>We Offer</h1>
            <div className='flex flex-col md:flex-row gap-5'>
                {offersData.map((offer,idx) =>
                    <OffersCard
                        key={idx}
                        icon={offer.icon}
                        title={offer.title}
                        description={offer.description}
                    />
                )}
            </div>
        </section>
    )
}

export default offersSection