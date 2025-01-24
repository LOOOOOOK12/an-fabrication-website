"use client";

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { CarouselContainerProps } from "../types/types"
import Autoplay from "embla-carousel-autoplay"

function carouselContainer({ items }:CarouselContainerProps) {
    return (
        <Carousel 
            plugins={[
                Autoplay({
                delay: 5000,
                }),
            ]}>
            <CarouselContent>
                {items.map((item,idx)=>
                    <CarouselItem key={idx}>
                        <img src={item.image.src} alt={item.alt}/>
                    </CarouselItem>
                )}
            </CarouselContent>
        </Carousel>
    )
}

export default carouselContainer