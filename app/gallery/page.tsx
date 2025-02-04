import React from 'react'
import GallerySection from '@/app/gallery/sections/gallerySection' 
import ContactSection from '../components/sections/contactSection'
import Nav from '../components/nav'
import { navLinksGallery } from '../types/constants'
import Footer from '../components/footer'

function page() {
    return (
        <>
            <Nav
                links={navLinksGallery}
            />
            <GallerySection/>
            <ContactSection/>
            <Footer
                links={navLinksGallery}
            />
        </>
    )
}

export default page