import React from 'react'


export default function notFoundPage() {
    return (
        <>
        <div className='relative w-full min-h-screen bg-[url("src/assets/bg_logres.png")] bg-center bg-cover flex flex-col items-center justify-center'>
            <div className='w-96 h-96 flex flex-col items-center justify-center gap-4'>
                <h1 className='font-bold text-7xl text-[#4E944F]'>404</h1>
                <p className='font-bold text-2xl'>PAGE NOT FOUND</p>
            </div>
        </div>
        </>
    )
}
