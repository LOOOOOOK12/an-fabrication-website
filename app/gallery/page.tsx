import React from 'react'
import GallerySection from '@/app/gallery/sections/gallerySection' 
import TestSection from '@/app/gallery/sections/testSection'
import Nav from '../components/nav'
import { navLinksGallery } from '../types/types'
import Footer from '../components/footer'

function page() {
    return (
        <>
            <Nav
                links={navLinksGallery}
            />
            <GallerySection/>
            <TestSection/>
            <Footer
                links={navLinksGallery}
            />
        </>
    )
}

export default page