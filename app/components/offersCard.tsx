import React from 'react'
import { offersCardProps } from '../types/types'
import { LucideProps } from 'lucide-react'

function Icon({ icon: Icon }: { icon: React.FC<LucideProps> }) {
    return <Icon size={45} className='mb-4' />;
}

function offersCard({icon, title, description}:offersCardProps) {
    return (
        <div className='flex flex-col items-center p-8 bg-white rounded-lg max-w-[300px]'>
            <Icon icon={icon}/>
            <h1 className='text-3xl font-bold mb-4'>{title}</h1>
            <p className='text-gray-400'>{description}</p>
        </div>
    )
}

export default offersCard