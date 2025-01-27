import { Wrench, Settings, ShoppingBasket, LucideProps } from "lucide-react"
import Welding1 from "@/public/weldingPictures/welding1.jpg"
import { StaticImageData } from "next/image"

// Types
export type offersCardProps = {
    icon: React.FC<LucideProps>,
    title: string,
    description: string
}

export type servicesCardProps = {
    icon: React.FC<LucideProps>,
    title: string,
    href?: string,
}

export type carouselProps = {
    image: StaticImageData,
    alt: string
}

export interface CarouselContainerProps {
    items: carouselProps[];
}

// Datas
export const navLinks = [
    {
        name:'Home',
        href:'#home'
    },
    {
        name:'About',
        href:'#about'
    },
    {
        name:'Services',
        href:'#services'
    },
]

export const offersData = [
    {
        icon: Wrench,
        title:"Custom Wood & Metal Fabrication",
        description:"Bring your designs to life with custom furniture, gates, fences, and cabinetry."
    },
    {
        icon: Settings,
        title:"Welding & Repairs",
        description:"Reliable metal repairs to restore strength and function."
    },
    {
        icon: ShoppingBasket,
        title:"Bulk Orders",
        description:"Special discounts for businesses and large-scale projects."
    }
]

export const AboutCarouselData: carouselProps[] = [
    {
        image: Welding1,
        alt: "Welding Picture 1"
    },
    {
        image: Welding1,
        alt: "Welding Picture 2"
    },
]

export const ServicesCardData: servicesCardProps[] = [
    {
        icon: Wrench,
        title: "Custom Fabrication"
    },
    {
        icon: Settings,
        title: "Welding & Repairs"
    },
    {
        icon: ShoppingBasket,
        title: "Bulk Orders"
    },
    {
        icon: Wrench,
        title: "Custom Fabrication"
    },
    {
        icon: Settings,
        title: "Welding & Repairs"
    },
    {
        icon: ShoppingBasket,
        title: "Bulk Orders"
    }
    ,
    {
        icon: Wrench,
        title: "Custom Fabrication"
    },
    {
        icon: Settings,
        title: "Welding & Repairs"
    },
]