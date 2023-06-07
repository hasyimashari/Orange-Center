import React from 'react'
import { useNavigate } from 'react-router-dom'

import artikel_img from "../../assets/Artikel_db.png"
import konsultasi_img from "../../assets/Konsultasi_db.png"
import permintaan_img from "../../assets/Permintaan_db.png"
import Arrow_right from "../../assets/arrow_right.png"

export default function dasboard_user() {

    const navigate = useNavigate()

    const setChatPage = () => {
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

            {/* cards fitur */}
            <div onClick={setChatPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={konsultasi_img} className="w-32 h-32" />
                <h1 className="font-bold mb-4">Konsultasi dengan Pakar</h1>
                <p className="text-sm px-1">Tanya Jawab dengan Pakar Terpercaya</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 mt-2.5 text-sm">Hubungi Pakar <img  src={Arrow_right}/></button>
            </div>

            <div onClick={setPermintaanPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={permintaan_img} className="w-32 h-32" />
                <h1 className="font-bold">Pengajuan Permintaan</h1>
                <p className="text-sm px-1 mb-2">Jual atau Dapatkan Beragam Jenis Jeruk yang Berkualitas</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 mt-2 text-sm">Cek Permintaan <img src={Arrow_right}/></button>
            </div>
            
            <div onClick={setArtikelPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={artikel_img} className="w-32 h-32" />
                <h1 className="font-bold">Artikel</h1>
                <p className="text-sm px-1 mb-4">Dapatkan Informasi Seputar Jeruk Secara Lengkap</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
            </div>
        </div>
    )
}

