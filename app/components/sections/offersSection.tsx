import React from 'react'
import OffersCard from '../offersCard'
import { offersData } from '@/app/types/types'

function offersSection() {
    return (
        <div className='py-4 flex flex-col gap-5 items-center justify-center bg-green-300'>
            <h1 className='text-6xl font-bold'>We Offer</h1>
            <div className='flex gap-10'>
                {offersData.map((offer,idx) =>
                    <OffersCard
                        key={idx}
                        icon={offer.icon}
                        title={offer.title}
                        description={offer.description}
                    />
                )}
            </div>
        </div>
    )
}

export default offersSection