import React from 'react'
import artikel_img from "../assets/Artikel_db.png"
import konsultasi_img from "../assets/Konsultasi_db.png"
import Arrow_right from "../assets/arrow_right.png"

export default function dashboard_pakar() {
    return (
        <div className="h-4/5 bg-white rounded-tl-3xl flex items-center">
            <div className="bg-white border-2 w-72 h-80 mx-auto rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)]">
                <div className="flex flex-col items-center gap-y-2 text-center py-6">
                    <img src={artikel_img} className="w-32 h-32" />
                    <h1 className="font-bold">Artikel</h1>
                    <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                    <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex flex-row justify-between p-12 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
                </div>
            </div>

            <div className="bg-white border-2 w-72 h-80 mx-auto rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)]">
                <div className="flex flex-col items-center gap-y-2 text-center py-6">
                    <img src={konsultasi_img} className="w-32 h-32" />
                    <h1 className="font-bold">Konsultasi dengan Pakar</h1>
                    <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                    <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex flex-row justify-between p-4 py-2 text-sm">Hubungi Pakar <img  src={Arrow_right}/></button>
                </div>
            </div>

        </div>
    )
}
