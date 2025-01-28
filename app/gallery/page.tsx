import React from 'react'
import GallerySection from '@/app/gallery/sections/gallerySection' 
import TestSection from '@/app/gallery/sections/testSection'
import Nav from '../components/nav'
import { navLinksGallery } from '../types/types'

function page() {
    return (
        <>
            <Nav
                links={navLinksGallery}
            />
            <GallerySection/>
            <TestSection/>
        </>
    )
}

export default page