import React from 'react';
import { WoodWorksData, MetalWorksData, WoodFramesData } from '@/app/types/constants';
import ImageHover from '@/app/components/imageHover';

function GallerySection() {
    return (
        <section className="flex flex-col gap-12 items-center justify-center py-28 px-12" id="gallery">
            <div className="w-full" id='homeAndOfficeImprovement'>
                <h1 className="text-5xl font-extrabold mb-6 mt-6 text-center">Home and Office Improvement</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {WoodWorksData.map((card, idx) => 
                        <ImageHover
                            key={idx}
                            src={card.image} 
                            alt={card.alt} 
                            title={card.title || `Image ${idx + 1}`} 
                            description={card.description} 
                        />
                    )}
                </div>
            </div>
            <div className="w-full" id='metalWorks'>
                <h1 className="text-5xl font-extrabold mb-6 mt-6 text-center">Metal Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {MetalWorksData.map((card, idx) =>
                    <ImageHover
                        key={idx}
                        src={card.image}
                        alt={card.alt} 
                        title={card.title || `Image ${idx + 1}`} 
                        description={card.description}
                    />
                )}
                </div>
            </div>
            <div className="w-full" id='woodFrames'>
                <h1 className="text-5xl font-extrabold mb-6 mt-6 text-center">Wood Frames</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {WoodFramesData.map((card, idx) =>
                    <ImageHover
                        key={idx}
                        src={card.image}
                        alt={card.alt} 
                        title={card.title || `Image ${idx + 1}`} 
                        description={card.description}
                    />
                )}
                </div>
            </div>
        </section>
    );
}

export default GallerySection;
