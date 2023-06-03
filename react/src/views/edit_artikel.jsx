import React from 'react'

import Cancel from "../assets/cancel.png"
import Arrow_right from "../assets/arrow_right.png"
import { useNavigate } from 'react-router-dom'

export default function edit_artikel() {

    const navigate =  useNavigate()
    
    const setLihatArtikelAdminPage = () => {
        navigate('/admin-lihat-artikel')
    }

    return (
        <div className='h-[34rem] pl-8 pt-4 flex p-4'>
            <div className='w-full h-full flex flex-col'>

                {/* content */}
                <div className='w-full h-[85%] flex gap-4'>

                    <div className='h-full w-[60%] flex flex-col justify-between'>
                        <div className='w-full'>
                            <input
                            className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" maxLength={20} placeholder='judul artikel'/>
                        </div>

                        <div className='w-full'>
                            <textarea name="" id="" rows="18"
                            className='bg-green-100 w-full rounded-lg resize-none pl-2 py-1 text-sm' draggable={false} placeholder='isi artikel'></textarea>
                        </div>
                    </div>

                    <div className='h-full w-[40%] flex flex-col justify-between pb-1.5'>
                        
                        <div className='w-full h-[24rem] rounded-lg border-none bg-green-100 flex flex-col items-center justify-center'>
                            <img className='max-w-36 max-h-36 rounded-lg' alt="preview image"/>
                        </div>

                        <div className='flex items-center justify-center w-full rounded-xl'>
                            <input type="file"
                            className='h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100' name="" id="" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>

                </div>

                <div className='w-full h-[15%] flex justify-center items-center'>
                    <div className="w-full flex justify-end gap-4 text-sm">
                        <button onClick={setLihatArtikelAdminPage} className="text-sm w-32 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                            Kembali 
                            <img src={Cancel}/>
                        </button>
                        <button className="text-sm w-32 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                            Tambah
                            <img src={Arrow_right}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
