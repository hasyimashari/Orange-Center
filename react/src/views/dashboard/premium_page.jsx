import React from 'react'
import ProsPremium from '../../assets/Premiumupgrade 2.png'

export default function premium_page() {
    return (
        <div className='h-[34rem] flex items-center justify-center gap-10'>
            <div className='w-full h-2/3 flex items-center justify-center'>
                <div className='h-full w-1/2 flex items-center justify-center p-10 pl-20'>
                    <img className='max-w-full max-h-full' src={ProsPremium} alt="" />
                </div>

                <div className='h-full w-1/2 flex flex-col items-center justify-center text-center gap-4 pr-20'>
                    <h1 className='w-full font-bold text-4xl'>
                        Benefit Berlangganan
                    </h1>

                    <p className='w-1/2 font-semibold text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus quasi porro, cupiditate, omnis voluptates nulla praesentium laboriosam incidunt
                    </p>

                    <p className='w-1/2 font-semibold text-sm'>
                        Cara Berlangganan OrangeCenter: <br/> Kirim Komfirmasi ke <span className='font-extrabold'>OCenter@gmail.com</span> atau ke nomor WA <span className='font-extrabold'>0858-0893-5247</span> 
                    </p>
                </div>
            </div>
        </div>
    )
}
