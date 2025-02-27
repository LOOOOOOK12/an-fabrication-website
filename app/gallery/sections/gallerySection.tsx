import React from 'react';
import { CagesandFencesData, PictureFramesData, CabinetryData, BedsData, MetalWorksData } from '@/app/types/constants';
import ImageDialog from '@/app/components/imageDialog';

function GallerySection() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center py-28 px-6" id="gallery">
            <div className="w-full" id='cagesAndFences'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Cages and Fences</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {CagesandFencesData.map((card, idx) => 
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
            <div className="w-full" id='pictureFrames'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Picture Frames</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {PictureFramesData.map((card, idx) => 
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
            <div className="w-full" id='gates'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Gates</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                {MetalWorksData.map((card, idx) =>
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
            <div className="w-full" id='cabinetry'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Cabinetry</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                {CabinetryData.map((card, idx) =>
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
            <div className='w-full' id='cages'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Cages</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                {CagesandFencesData.map((card, idx) =>
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
            <div className='w-full' id='beds'>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-6 text-center">Beds</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                {BedsData.map((card, idx) =>
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
        </section>
    );
}

export default GallerySection;
