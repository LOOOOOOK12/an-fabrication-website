import React from 'react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { TimageHoverProps } from '@/app/types/types'
import Image from 'next/image'

function imageHover({src, alt, title, description}:TimageHoverProps) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Image src={src} alt={alt} className='w-full h-full rounded-lg'/>
            </HoverCardTrigger>
            <HoverCardContent
                side='right'
                className='flex flex-col items-center justify-center gap-2'>
                <div>
                    <Image src={src} alt={alt} className='h-full w-full rounded-md'/>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl'>{title}</h1>
                    <p>{description}</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default imageHover