import React from 'react'

import Icon from "../assets/logo.png"

import artikel_img from "../assets/Artikel_db.png"
import konsultasi_img from "../assets/Konsultasi_db.png"
import Arrow_right from "../assets/arrow_right.png"

import Konsultasi from "../assets/Konsultasi Logo.png"
import Artikel from "../assets/Artikel Logo.png"
import Profil from "../assets/Ellipse.png"

export default function dashboard_pakar() {
    return (
        <>
        <div className='relative w-full min-h-screen bg-[url("src/assets/bg_db.png")] bg-center bg-cover flex flex-row'>
            <div className="relative h-screen flex flex-col gap-y-6 py-8 w-16 pt-36">
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Profil} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Konsultasi} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Artikel} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
            </div>
            <div className="relative w-full">
                <div className="h-1/5 flex items-center cursor-default">
                    <img src={Icon} className=" drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] w-32" />
                    <p className="absolute text-5xl text-white font-bold pt-6 ml-16 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" >OrangeCenter</p>
                </div>
                <div className="bg-white rounded-tl-3xl h-4/5">
                    <div className='flex items-center justify-center py-24 gap-10'>
                        <div className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                            <img src={konsultasi_img} className="w-32 h-32" />
                            <h1 className="font-bold">Konsultasi dengan Pakar</h1>
                            <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                            <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center gap-2 p-4 py-2 mt-2.5 text-sm">Hubungi Pakar <img  src={Arrow_right}/></button>
                        </div>
                        <div className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                            <img src={artikel_img} className="w-32 h-32" />
                            <h1 className="font-bold">Artikel</h1>
                            <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                            <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center gap-2 p-12 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
