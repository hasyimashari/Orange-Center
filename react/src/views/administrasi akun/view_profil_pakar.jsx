import React from 'react'
import Profil from "../../assets/Ellipse.png"
import Ban from "../../assets/ban.png"
import Cancel from "../../assets/cancel.png"

import Decision from './decision_pakar'

import { useState, useEffect } from 'react';

export default function view_profil_pakar({onClose, visible, nilai}) {
    
    if (!visible) return null;

    const [showDec, setShowDec] = useState(false)

    const closeModal = () => {
        setShowDec(false)
    }

    const onSuspendSucces = () => {
        setShowDec(false)
        onClose(true)
    }

    return (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            <div className='bg-white w-[24rem] h-[28rem] rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>

                <div className='w-full h-1/4 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl flex items-end justify-center'>
                    <div onClick={onClose} className='absolute self-start ml-72 pl-4 pt-4 cursor-pointer w-full flex items-center justify-center'>
                        <button className="text-sm w-10 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex  justify-center text-white cursor-pointer"> <img src={Cancel}/></button>
                    </div>
                    <img src={Profil} className='-m-12 w-24' alt="" />
                </div>

                <div className='w-full h-3/4 flex flex-col items-center justify-center'>

                    <div className='w-full h-[85%] flex flex-col items-center justify-center pt-8'>
                        <div>
                            <h1 className='text-lg font-bold mt-2'>{nilai.nama_lengkap}</h1>
                            <h4 className='mb-2'>{nilai.username}</h4>
                        </div>
                        <div className='w-full text-sm flex flex-col gap-2 items-start pl-6'>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Jenis kelamin</p>
                                <p className='w-2/3'  >: {nilai.jenis_kelamin}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Tanggal lahir</p>
                                <p className='w-2/3'>: {nilai.tanggal_lahir.substring(0, 10)}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>No HP</p>
                                <p className='w-2/3'>: {nilai.no_hp}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Asal</p>
                                <p className='w-2/3'>: {nilai.asal}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Email</p>
                                <p className='w-2/3'>: {nilai.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[15%] pb-10 cursor-pointer flex items-center justify-center'>
                        {nilai.status_akun==="Aktif"?
                            <img onClick={() => setShowDec(true)} className='w-8 cursor-pointer' src={Ban} alt="" />:
                            <img onClick={() => setShowDec(true)} className='w-8 grayscale cursor-pointer' src={Ban} alt="" />
                        }
                    </div>
                </div>


            </div>
            <Decision onCloseDc={closeModal} visibleDc={showDec} nilaiDc={nilai} onSucces={onSuspendSucces}/>
        </div>
    )
}

