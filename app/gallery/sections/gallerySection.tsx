import React from 'react'

function gallerySection() {
    return (
        <section className='h-full w-full flex flex-col gap-6 items-center justify-center p-6' id='home'>
            <div className='h-full w-full'>
                <h1 className='text-3xl'>Wood works</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-2'>
                    <div className='bg-slate-500 w-full h-32'></div>
                    <div className='bg-slate-600 w-full h-32'></div>
                    <div className='bg-slate-900 w-full h-32'></div>
                    <div className='bg-slate-300 w-full h-32'></div>
                    <div className='bg-slate-600 w-full h-32'></div>

                    <div className='bg-red-400 w-full h-32'></div>
                    <div className='bg-red-600 w-full h-32'></div>
                    <div className='bg-red-900 w-full h-32'></div>
                    <div className='bg-red-300 w-full h-32'></div>
                    <div className='bg-red-600 w-full h-32'></div>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-3xl'>Metal Works works</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-2'>
                    <div className='bg-slate-500 w-full h-32'></div>
                    <div className='bg-slate-600 w-full h-32'></div>
                    <div className='bg-slate-900 w-full h-32'></div>
                    <div className='bg-slate-300 w-full h-32'></div>
                    <div className='bg-slate-600 w-full h-32'></div>

                    <div className='bg-red-400 w-full h-32'></div>
                    <div className='bg-red-600 w-full h-32'></div>
                    <div className='bg-red-900 w-full h-32'></div>
                    <div className='bg-red-300 w-full h-32'></div>
                    <div className='bg-red-600 w-full h-32'></div>
                </div>
            </div>
        </section>
    )
}

export default gallerySection