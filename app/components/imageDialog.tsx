import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"  
import { TimageHoverProps } from '../types/types'
import Image from 'next/image'

function imageDialog({ src, alt, title, description}:TimageHoverProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Image src={src} alt={alt} className='w-full h-[400px] rounded-lg shadow-md brightness-50 hover:brightness-75 duration-100'/>
            </DialogTrigger>
            <DialogContent>
                <Image src={src} alt={alt} className='w-full max-h-[400px] rounded-md'/>
                <DialogTitle className='text-4xl'>{title}</DialogTitle>
                <DialogDescription className='text-2xl'>{description}</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default imageDialog