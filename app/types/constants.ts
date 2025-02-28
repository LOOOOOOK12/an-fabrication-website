import Cabinet from "@/public/carousel/cabinet.jpg"
import Metal from "@/public/carousel/metal.jpg"
import Painting from "@/public/carousel/painting.jpg"
import Dogcage from "@/public/metal/dogcage.jpg"
import { Wrench, Settings, Facebook } from "lucide-react"
import { carouselProps, servicesCardProps } from "./types"
//Wood Works
import Wood from "@/public/wood/wood.jpg"
import Wood3 from "@/public/wood/wood3.jpg"
import Wood4 from "@/public/wood/wood4.jpg"
import Wood5 from "@/public/wood/wood5.jpg"
import Wood6 from "@/public/wood/wood6.jpg"
import Wood7 from "@/public/wood/wood7.jpg"
import Wood8 from "@/public/wood/wood8.jpg"
import Wood9 from "@/public/wood/wood9.jpg"
import Wood10 from "@/public/wood/wood10.jpg"
import Wood11 from "@/public/wood/wood11.jpg"
import Wood12 from "@/public/wood/wood12.jpg"
import Wood13 from "@/public/wood/wood13.jpg"
import Wood14 from "@/public/wood/wood14.jpg"
import Wood15 from "@/public/wood/wood15.jpg"
import Wood18 from "@/public/wood/wood18.jpg"
import Wood19 from "@/public/wood/wood19.jpg"

//Metal Works
import Metal1 from "@/public/metal/metal1.jpg"
import Metal2 from "@/public/metal/metal2.jpg"
import Metal3 from "@/public/metal/metal3.jpg"
import Metal4 from "@/public/metal/metal4.jpg"
import Metal5 from "@/public/metal/metal5.jpg"
import Metal6 from "@/public/metal/metal6.jpg"

//Wood Frames
import Frame from "@/public/woodFrames/frame.jpg"
import Frame1 from "@/public/woodFrames/frame1.jpg"
import Frame2 from "@/public/woodFrames/frame2.jpg"
import Frame4 from "@/public/woodFrames/frame4.jpg"
import Frame5 from "@/public/woodFrames/frame5.jpg"
import Frame6 from "@/public/woodFrames/frame6.jpg"
import Frame7 from "@/public/woodFrames/frame7.jpg"
import Frame8 from "@/public/woodFrames/frame8.jpg"


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
        name:'Home',
        href:'/'
    },
    {
        name:'Cages and Fences',
        href: '#cagesAndFences'
    },
    {
        name:'Picture Frames',
        href: '#pictureFrames'
    },
    // {
    //     name:'Gates',
    //     href: '#gates'
    // },
    {
        name:'Cabinetry',
        href:'#cabinetry'
    },
    {
        name:'Cages',
        href:'#cages'
    },
    {
        name:'Beds',
        href:'#beds'
    }
]

export const offersData = [
    {
        icon: Wrench,
        title:"Custom Wood & Metal Crafting",
        description:"Bring your designs to life with custom-built furniture, gates, fences, and cabinetry."
    },
    {
        icon: Settings,
        title:"Welding & Repairs",
        description:"Reliable metal repairs to restore strength and function."
    },
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
        image: Dogcage,
        title: "Cages and Fences",
        alt: "Home and Office improvement",
        href: "/gallery#cagesAndFences"
    },
    {
        image: Frame1,
        alt: "Picture Frames",
        title: "Picture Frames",
        href: "/gallery#pictureFrames"
    },
    {
        image: Dogcage,
        alt: "Gates",
        title: "Gates",
        href: "/gallery#gates"
    },
    {
        image: Cabinet,
        alt: "Cabinetry",
        title: "Cabinetry",
        href: "/gallery#cabinetry"
    },
    {
        image: Frame2,
        alt: "Cages",
        title: "Cages",
        href: "/gallery#cages"
    },
    {
        image: Metal5,
        alt: "Beds",
        title: "Beds",
        href: "/gallery#beds"
    }
]

export const footerDataSocials = [
    {
        socialsIcons: Facebook,
        href:"https://www.facebook.com/ANwoodandmetalFabrication"
    }
]

export const CagesandFencesData = [
    {
        image: Dogcage,
        alt: "Dog Cage",
        title: "Dog cage",
        description: "Doga cage reinforced with metal."
    },
]

export const PictureFramesData = [
    {
        image: Frame,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame1,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame2,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame4,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame5,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame6,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame7,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Frame8,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },

]

export const GatesData = [
    {

    }
]

export const CabinetryData = [
    {
        image: Wood5,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood6,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood7,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood8,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood9,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood10,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood11,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood12,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood13,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Wood14,
        alt: "Picture Frame",
        title: "Picture Frame",
        description: "Picture Frame that is made from wood."
    },
]

export const BedsData = [
    {
        image: Metal4,
        alt: "Bed Frames",
        title: "Bed Frames",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Metal5,
        alt: "Bed Frames",
        title: "Bed Frames",
        description: "Picture Frame that is made from wood."
    },
    {
        image: Metal6,
        alt: "Bed Frames",
        title: "Bed Frames",
        description: "Picture Frame that is made from wood."
    },
] 


export const WoodWorksData = [
    {
        image: Wood,
        alt: "Bar top",
        title: "Bar top",
        description: "Bar top"
    },
    {
        image: Wood3,
        alt: "chairs",
        title: "Chairs",
        description: "Chairs made of Wood"
    },
    {
        image: Wood4,
        alt: "Sink Table",
        title: "Sink table",
        description: "Sink table made of wood"
    },
    {
        image: Wood5,
        alt: "Cabinets",
        title: "Cabinets",
        description: "Cabinets"
    },
    {
        image: Wood6,
        alt: "chairs",
        title: "Wooden Shelfs",
        description: "Wooden Shelfs"
    },
    {
        image: Wood7,
        alt: "Wooden Shelfs 2",
        title: "Wooden Shelfs",
        description: "Wooden Shelfs"
    },
    {
        image: Wood8,
        alt: "Closets",
        title: "Closets",
        description: "Closets"
    },
    {
        image: Wood9,
        alt: "Television Platform",
        title: "Television Platform",
        description: "Television platforms with small cabinets and shelfs"
    },
    {
        image: Wood10,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood11,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood12,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood13,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood14,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood15,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood18,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
    {
        image: Wood19,
        alt: "chairs",
        title: "Bar top",
        description: "chairs"
    },
]

export const MetalWorksData = [
    {
        image: Dogcage,
        alt: "Dog Cage",
        title: "Dog Cage",
        description: "Dog Cage"
    },
    {
        image: Metal1,
        alt: "Shoe shelfs",
        title: "Shoe shelfs",
        description: "Shoe shelfs"
    },
    {
        image: Metal2,
        alt: "Shoe Shelfs",
        title: "Shoe Shelfs",
        description: "Shoe Shelfs"
    },  
    {
        image: Metal3,
        alt: "Dog Cage",
        title: "Dog Cage",
        description: "Dog Cage"
    },  
    {
        image: Metal4,
        alt: "Metal Bed Frames",
        title: "Metal Bed Frames",
        description: "Metal Bed Frames"
    },
    {
        image: Metal5,
        alt: "Metal Bed Frames",
        title: "Metal Bed Frames",
        description: "Metal Bed Frames"
    },
    {
        image: Metal6,
        alt: "Metal Bed Frames",
        title: "Metal Bed Frames",
        description: "Metal Bed Frames"
    },                   
]

export const WoodFramesData = [
    {
        image: Frame,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame1,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame2,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame4,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame5,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame6,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame7,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
    {
        image: Frame8,
        alt: "Frame",
        title: "Frame",
        description: "Frame"
    },
]