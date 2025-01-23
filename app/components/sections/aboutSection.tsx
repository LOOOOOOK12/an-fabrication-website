import React from 'react'

function aboutSection() {
    return (
        <section className='h-screen flex items-center gap-2 justify-center'>
            <div className='w-1/2 flex gap-10 justify-between items-center'>
                <div className='relative w-full h-96'>
                    <div className='bg-red-600 size-40 w-40 absolute top-5'></div>
                    <div className='bg-red-200 size-40 w-40 absolute top-32 left-20'></div>
                    <div className='bg-red-900 size-40 w-44 absolute top-64 left-0'></div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-5xl font-bold'>About us</h1>
                    <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus at nesciunt ea dolorum voluptatem illo quia rem nostrum quibusdam, et doloremque unde distinctio veniam consectetur quae tempore. Facilis, nihil at?</p>
                </div>
            </div>
        </section>
    )
}

export default aboutSection