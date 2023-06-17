import React from 'react'
import Profil from "../../assets/Ellipse.png"
import Cancel from "../../assets/cancel.png"

import { useStateContext } from "../../context/ContextProvider.jsx";

export default function view_profil_all_actor({visible, onClose}) {

    if (!visible) return null;

    const {user} = useStateContext();

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>

            <div className='relative bg-white w-[24rem] h-[28rem] sm:w-2/4 sm:h-3/4 rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>

                <div className='relative w-full h-1/4 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl flex items-end justify-center'>
                    <div onClick={onClose} className='absolute self-start ml-72 sm:ml-56 pl-4 pt-4 cursor-pointer w-full flex items-center justify-center'>
                        <button className="text-sm w-10 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex  justify-center text-white cursor-pointer"> <img src={Cancel}/></button>
                    </div>
                    <img src={Profil} className='-m-12 w-24 sm:w-20' alt="" />
                </div>

                <div className='w-full h-3/4 mt-4 flex flex-col items-center justify-center'>

                    <div className='w-full h-[85%] flex flex-col items-center justify-center pt-8'>
                        <div>
                            <h1 className='text-lg font-bold mt-2 sm:text-base'>{user.nama_lengkap}</h1>
                            <h4 className='mb-2 sm:text-sm'>{user.username}</h4>
                        </div>
                        <div className='w-full text-base sm:text-sm flex flex-col gap-2 items-start pl-6'>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Jenis kelamin</p>
                                <p className='w-2/3'  >: {user.kelamin.jenis_kelamin}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Tanggal lahir</p>
                                <p className='w-2/3'>: {user.tanggal_lahir.substring(0, 10)}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>No HP</p>
                                <p className='w-2/3'>: {user.no_hp}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Asal</p>
                                <p className='w-2/3'>: {user.asal}</p>
                            </div>
                            <div className='flex gap-1 w-full text-left'>
                                <p className='w-1/3'>Email</p>
                                <p className='w-2/3'>: {user.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[15%] pb-10 cursor-pointer flex items-center justify-center'>

                    </div>
                </div>

            </div>
        </div>
    )
}

