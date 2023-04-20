import React from 'react'
import Profil from "../assets/Ellipse.png"
import Ban from "../assets/ban.png"

import Decision from './decision'

import { useStateContext } from "../context/ContextProvider"
import { useState } from 'react';

export default function dasboard_user({visible, onClose}) {
    
    if (!visible) return null;

    const [showDec, setShowDec] = useState(false)
    const closeModal = () => {
        setShowDec(false)
    }

    const {user, token} = useStateContext();
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            <div className='bg-white w-80 h-96 rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>
                <div className='w-full h-2/6 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl flex flex-row-reverse'>
                    <img onClick={() => setShowDec(true)} className='mt-4 mr-4 self-start w-8 cursor-pointer' src={Ban} alt="" />
                </div>
                <img src={Profil} className='absolute h-20 w-20 mx-auto mt-20' alt="" />
                <div className='w-full flex flex-col items-center pt-8'>
                    <div>
                        <h1 className='font-bold mt-2'>{user.nama_lengkap}</h1>
                        <h4 className='text-sm mb-2'>{user.username}</h4>
                    </div>
                    <div className='w-full text-sm flex flex-col gap-2 items-start pl-6'>
                        <div className='flex gap-1 w-full text-left'>
                            <p className='w-1/3'>Jenis kelamin</p>
                            <p className='w-2/3'>: {user.jenis_kelamin}</p>
                        </div>
                        <div className='flex gap-1 w-full text-left'>
                            <p className='w-1/3'>Tanggal lahir</p>
                            <p className='w-2/3'>: {user.tanggal_lahir}</p>
                        </div>
                        <div className='flex gap-1 w-full text-left'>
                            <p className='w-1/3'>No HP</p>
                            <p className='w-2/3'>: {user.no_hp}</p>
                        </div>
                        <div className='flex gap-1 w-full text-left'>
                            <p className='w-1/3'>Alamat</p>
                            <p className='w-2/3'>: {user.alamat}</p>
                        </div>
                        <div className='flex gap-1 w-full text-left'>
                            <p className='w-1/3'>Email</p>
                            <p className='w-2/3'>: {user.email}</p>
                        </div>
                    </div>
                </div>
                <div onClick={onClose} className='text-xs pt-2 cursor-pointer'>
                    x
                </div>
            </div>
            <Decision oCls={closeModal} vsb={showDec}/>
        </div>
    )
}

