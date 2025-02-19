import React from 'react';
import { WoodWorksData, MetalWorksData, WoodFramesData } from '@/app/types/constants';
import ImageHover from '@/app/components/imageHover';
import ImageDialog from '@/app/components/imageDialog';

function GallerySection() {
    return (
        <section className="flex flex-col gap-12 items-center justify-center py-28 px-6" id="gallery">
            <div className="w-full" id='homeAndOfficeImprovement'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Home and Office Improvement</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {WoodWorksData.map((card, idx) => 
                        <ImageDialog
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
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Metal Works</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
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
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Wood Frames</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
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
