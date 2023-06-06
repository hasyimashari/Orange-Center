import React, { useState } from 'react'

export default function detailArtikelPakar() {
    
    const content = JSON.parse(localStorage.getItem("CONTENT"))

    return (
        <div className='h-[34rem] flex pl-8 pt-4 pr-8 items-center justify-center'>
                
                <div className='w-full h-full flex gap-4'>
                    {/* gambar artikel */}
                    <div className='h-full w-3/12  flex flex-col gap-0.5'>

                        <div className="w-full h-[55%] bg-slate-300 rounded-lg flex">
                            <img src={`http://127.0.0.1:8000/storage/${content.foto}`} className="m-auto" alt="" />
                        </div>

                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>{content.judul}</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-gray-500'>{content.created_at.substring(0,10)}</h6>
                        </div>
                    </div>

                    {/* isi artikel */}
                    <div className='h-full w-9/12 overflow-y-auto scrollbar-hide whitespace-pre-line'>
                        {content.content}
                    </div>
                </div>

        </div>
    )
}

