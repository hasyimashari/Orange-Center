import React, { useState } from 'react'
import axiosClient from '../axios-client';
import Arrow_right from "../assets/arrow_right.png"
import Cancel from "../assets/cancel.png"

export default function decision_artikel({onCloseDc, visibleDc, nilaiDc, onDelete}) {

    if (!visibleDc) return null;

    const delete_permintaan = () => {

        // axiosClient.put(`/delete_permintaan_saya/${nilaiDc.id_permintaan}`)
        // .then(() => {
        //     onCloseDc(true)
        //     onDelete(true)
        // })

    }

    const cancel = () =>{
        onCloseDc(true)
    }

    return (
        // decission yes or no
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            <div className='bg-white w-[30rem] min-h-32 h-fit rounded-2xl flex flex-col px-10'>
                <p className='text-xl text-center font-extrabold self-center mt-6'>Apakah Anda Yakin Untuk Menghapus Artikel Ini</p>
                <div className="flex justify-center gap-x-6 text-sm my-4">
                    <button onClick={cancel} className="text-sm w-4/12 p-5 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 text-white cursor-pointer">Batal <img src={Cancel}/></button>
                    <button onClick={delete_permintaan} className="text-sm w-4/12 p-5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 text-white cursor-pointer">Ya <img src={Arrow_right}/></button>
                </div>
            </div>
        </div>
    )
}
