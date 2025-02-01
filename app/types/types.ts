import { Wrench, Settings, ShoppingBasket, LucideProps, Facebook } from "lucide-react"
import Cabinet from "@/public/carousel/cabinet.jpg"
import Metal from "@/public/carousel/metal.jpg"
import Painting from "@/public/carousel/painting.jpg"
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

// export type footerPropsSocials = {
//     socialsIcons: React.FC<LucideProps>,
//     href: string
// }

export interface CarouselContainerProps {
    items: carouselProps[];
}

export type navLinksProps = {
    name: string,
    href: string
}

export type navLinks = {
    links: navLinksProps[];
}

// Datas
export const navLinksHome = [
    {
        name:'Home',
        href:'#home'
    },
    {
        name:'About Us',
        href:'#about'
    },
    {
        name:'Offers',
        href:'#offers'
    },
    {
        name:'Services',
        href:'#services'
    },
    {
        name:'Contact Us',
        href: '#contactus'
    }
]

export const navLinksGallery = [
    {
        name:'Gallery',
        href:'#gallery'
    },
    {
        name:'Gallery',
        href:'#gallery'
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
        image: Cabinet,
        alt: "Cabinet"
    },
    {
        image: Painting,
        alt: "Painting"
    },
    {
        image: Metal,
        alt: "Metal"
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

export const footerDataSocials = [
    {
        socialsIcons: Facebook,
        href:"https://www.facebook.com/ANwoodandmetalFabrication"
    }
]