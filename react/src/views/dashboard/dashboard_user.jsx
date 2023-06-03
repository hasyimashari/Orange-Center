import React from 'react'

import artikel_img from "../../assets/Artikel_db.png"
import konsultasi_img from "../../assets/Konsultasi_db.png"
import permintaan_img from "../../assets/Permintaan_db.png"
import Arrow_right from "../../assets/arrow_right.png"
import { useNavigate } from 'react-router-dom'

export default function dasboard_user() {

    const navigate = useNavigate()

    const setChatPageUser = () => {
        navigate('/user-konsultasi')
    }

    const setPermintaanPage = () => {
        navigate('/user-permintaan')
    }

    const setArtikelPage = () => {
        navigate('/user-artikel')
    }

    return (
        <div className='h-[34rem] flex items-center justify-center gap-10'>

            {/* content */}
            <div onClick={setChatPageUser} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={konsultasi_img} className="w-32 h-32" />
                <h1 className="font-bold">Konsultasi dengan Pakar</h1>
                <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 mt-2.5 text-sm">Hubungi Pakar <img  src={Arrow_right}/></button>
            </div>

            <div onClick={setPermintaanPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={permintaan_img} className="w-32 h-32" />
                <h1 className="font-bold">Pengajuan Permintaan</h1>
                <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 mt-2 text-sm">Cek Permintaan <img src={Arrow_right}/></button>
            </div>
            
            <div onClick={setArtikelPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={artikel_img} className="w-32 h-32" />
                <h1 className="font-bold">Artikel</h1>
                <p className="text-sm px-1 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
            </div>
        </div>
    )
}

