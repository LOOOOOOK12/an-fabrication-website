import React from 'react'
import { offersCardProps } from '../types/types'
import { LucideProps } from 'lucide-react'

export function Icon({ icon: Icon }: { icon: React.FC<LucideProps> }) {
    return <Icon size={45} />;
}

function offersCard({icon, title, description}:offersCardProps) {
    return (
        <div className='flex flex-col items-center p-8 bg-background rounded-lg max-w-[300px] shadow-md'>
            <Icon icon={icon}/>
            <h1 className='text-3xl font-bold mb-4'>{title}</h1>
            <p className='text-text-400'>{description}</p>
        </div>
    )
}

export default offersCard