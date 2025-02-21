import React from 'react'
import { servicesCardProps } from '../types/types'
import Image from 'next/image'
import Link from 'next/link'

function servicesCard({title, image, alt, href}:servicesCardProps) {
    return (
        <Link href={href} className='relative shadow-lg rounded-lg w-full h-[450px]'>
            <Image src={image} alt={alt} className='w-full h-full object-cover rounded-lg brightness-50 hover:brightness-75 duration-100'/>
            <div className="absolute bottom-2 right-2 w-full text-darkMode-colors-text text-2xl text-right font-bold">
                <h1 className='text-text-50'>{title}</h1>
            </div>
        </Link>
    )
}

export default servicesCard