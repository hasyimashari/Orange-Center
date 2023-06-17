import React from 'react'
import Cancel from "../../assets/cancel.png"

export default function detail_permintaan({visible, onClose, nilai}) {

    if (!visible) return null

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            
            {/* content */}
            <div className='bg-white w-[40rem] h-80 sm:w-3/4 sm:h-2/4 rounded-xl flex p-4'>
                {/* photo */}
                <div className='w-[45%] h-full bg-slate-300 rounded-lg flex'>
                    <img src={`http://127.0.0.1:8000/storage/${nilai.foto_produk}`} className='m-auto' alt="" />
                </div>

                {/* desc */}
                <div className='w-[55%] pl-8 flex flex-col'>
                    <div className='w-full h-1/3 flex items-center'>
                        <h1 className='font-bold text-lg sm:text-base'>{nilai.nama_produk}</h1>
                    </div>

                    <div className='w-full h-2/3 flex flex-col '>
                        <div className='flex w-full text-left text-sm sm:text-xs'>
                            <p className='w-2/5'>Nama Pembeli</p>
                            <p className='w-3/5'>: {nilai.pengguna.nama_lengkap} </p>
                        </div>
                        <div className='flex w-full text-left text-sm sm:text-xs'>
                            <p className='w-2/5'>Hubungi Pembeli</p>
                            <p className='w-3/5'>: {nilai.pengguna.no_hp} </p>
                        </div>
                        <div className='flex w-full text-left text-sm sm:text-xs'>
                            <p className='w-2/5'>Kebutuhan</p>
                            <p className='w-3/5'>: {nilai.stock} Kg</p>
                        </div>
                        <div className='flex w-full text-left text-sm sm:text-xs'>
                            <p className='w-2/5'>Budget</p>
                            <p className='w-3/5'>: Rp. {nilai.budget}/Kg</p>
                        </div>
                        <div className='flex w-full text-left text-sm sm:text-xs'>
                            <p className='w-2/5'>Deskripsi</p>
                            <p className='w-3/5'>: {nilai.deskripsi}</p>
                        </div>
                    </div>

                    <div onClick={onClose} className="absolute self-end text-sm w-8 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 p-2 rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex  justify-center text-white cursor-pointer"> 
                        <img src={Cancel}/>
                    </div>
                </div>


            </div>
        </div>
    )
}
