import React from 'react';
import { HomeAndOfficeImprovementData } from '@/app/types/constants';
import ImageHover from '@/app/components/imageHover';

function GallerySection() {
    return (
        <section className="flex flex-col gap-6 items-center justify-center py-12 px-4" id="gallery">
            <div className="h-full w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">Home and Office Improvement</h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {HomeAndOfficeImprovementData.map((card, idx) => {
                        const gridSpan = [
                            "col-span-1 row-span-1",  // First item (Big)
                            "col-span-1 row-span-1",  // Second item (Small)
                            "col-span-1 row-span-2",  // Third item (Tall)
                            "col-span-2 row-span-1",  // Fourth item (Small)
                            "col-span-2 row-span-1",  // Fifth item (Wide)
                        ];

                        return (
                            <div key={idx} className={`relative overflow-hidden rounded-xl shadow-lg ${gridSpan[idx % gridSpan.length]}`}>
                                <ImageHover 
                                    src={card.image} 
                                    alt={card.alt} 
                                    title={card.title || `Image ${idx + 1}`} 
                                    description={card.description} 
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Metal Works Section */}
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">Metal Works</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-3">
                    <div className="bg-slate-500 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-slate-600 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-slate-900 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-slate-300 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-slate-600 w-full h-32 rounded-lg shadow-md"></div>

                    <div className="bg-red-400 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-red-600 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-red-900 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-red-300 w-full h-32 rounded-lg shadow-md"></div>
                    <div className="bg-red-600 w-full h-32 rounded-lg shadow-md"></div>
                </div>
            </div>
        </section>
    );
}

export default GallerySection;
