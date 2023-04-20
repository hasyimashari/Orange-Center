import React from 'react'
import Profil from "../assets/Ellipse.png"

import { useStateContext } from "../context/ContextProvider"

export default function dasboard_user() {

    const {user, token} = useStateContext();
    
    return (
        <div className='flex items-center justify-center py-16 gap-10'>
            <div className='w-80 h-96 rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>
                <div className='w-full h-2/6 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl'></div>
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
            </div>
        </div>
    )
}

