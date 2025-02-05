import React from 'react'
import { offersCardProps } from '../types/types'
import { LucideProps } from 'lucide-react'

export function Icon({ icon: Icon, size }:{ icon: React.FC<LucideProps>, size?: number }) {
    return <Icon size={size} />;
}

function offersCard({icon, title, description}:offersCardProps) {
    return (
        <div className='flex flex-col items-center p-8 bg-background rounded-lg max-w-[300px] shadow-md'>
            <Icon icon={icon} size={50}/>
            <h1 className='text-2xl md:text-3xl my-4 font-extrabold text-center'>{title}</h1>
            <p className='text-lg md:text-2xl text-text-400'>{description}</p>
        </div>
    )
}

export default offersCard