import { LucideProps } from "lucide-react"
import { StaticImageData } from "next/image"

// Types
export type offersCardProps = {
    icon: React.FC<LucideProps>,
    title: string,
    description: string
}

export type servicesCardProps = {
    image: StaticImageData,
    title: string,
    href: string,
    alt: string,
}

export type carouselProps = {
    image: StaticImageData,
    alt: string
}

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

export type Tshape = {
    className: string
}

export type TimageHoverProps = {
    src: StaticImageData,
    alt: string,
    title?: string,
    description?: string    
}
