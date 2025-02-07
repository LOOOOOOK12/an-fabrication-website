import Cabinet from "@/public/carousel/cabinet.jpg"
import Metal from "@/public/carousel/metal.jpg"
import Painting from "@/public/carousel/painting.jpg"
import Frame2 from "@/public/woodFrames/frame2.jpg"
import Dogcage from "@/public/metal/dogcage.jpg"
import { Wrench, Settings, ShoppingBasket, Facebook } from "lucide-react"
import { carouselProps, servicesCardProps } from "./types"

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
        name:'Contact Us',
        href:'#contactus'
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
        description:"We offer special discounts for businesses. Large-scale projects can also enjoy exclusive savings."
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
        image: Cabinet,
        title: "Home and Office improvement",
        alt: "Home and Office improvement",
        href: "/gallery"
    },
    {
        image: Metal,
        alt: "Welding & Repairs",
        title: "Custom Fabrication",
        href: "/gallery"
    },
    {
        image: Dogcage,
        alt: "Cages",
        title: "Cages",
        href: "/gallery"
    },
    {
        image: Frame2,
        alt: "Painting Frames",
        title: "Painting Frames",
        href: "/gallery"
    }
]

export const footerDataSocials = [
    {
        socialsIcons: Facebook,
        href:"https://www.facebook.com/ANwoodandmetalFabrication"
    }
]