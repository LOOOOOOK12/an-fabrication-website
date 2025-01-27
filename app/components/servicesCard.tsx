import React from 'react'
import { servicesCardProps } from '../types/types'
import { Icon } from './offersCard'

function servicesCard({icon, title}:servicesCardProps) {
    return (
        <div className='flex items-center justify-center gap-4 p-4 shadow-lg rounded-lg bg-background'>
            <Icon icon={icon}/>
            <h1 className='text-text-400'>{title}</h1>
        </div>
    )
}

export default servicesCard