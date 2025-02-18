import React from 'react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { TimageHoverProps } from '@/app/types/types'
import Image from 'next/image'

function imageHover({src, alt, title, description}:TimageHoverProps) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Image src={src} alt={alt} className='w-full h-[400px] rounded-lg shadow-md brightness-50 hover:brightness-75 duration-100'/>
            </HoverCardTrigger>
            <HoverCardContent
                side='right'
                className='flex flex-col items-center justify-center gap-2'>
                <div>
                    <Image src={src} alt={alt} className='h-[350px] w-full rounded-md'/>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-3xl font-semibold'>{title}</h1>
                    <p>{description}</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default imageHover