import { Wrench, Settings, ShoppingBasket, LucideProps } from "lucide-react"

export type offersCardProps = {
    icon: React.FC<LucideProps>,
    title: string,
    description: string
}
export const navLinks = [
    {
        name:'Home',
        href:'/'
    },
    {
        name:'Gallery',
        href:'/gallery'
    }
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
    