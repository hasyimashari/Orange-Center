import React from 'react'

import Icon from "../assets/logo.png"

import Konsultasi from "../assets/Konsultasi Logo.png"
import Artikel from "../assets/Artikel Logo.png"
import Profil from "../assets/Ellipse.png"

import { Navigate, Outlet, useNavigate } from "react-router-dom"

import { useStateContext } from "../context/ContextProvider"

export default function dashboard_pakar_layout() {

    const navigate = useNavigate();
    const {token, role} = useStateContext();

    if (!token) {
        return <Navigate to='/login'/>
    }
    if (role!=="pkr") {
        return <Navigate to='*'/>
    }

    const setProfilePage = () => {
        navigate('/pakar-profil')
    }

    const setChatPage = () => {
        navigate('/pakar-konsultasi')
    }

    const setDashboardPage = () => {
        navigate('/pakar-dashboard')
    }

    const setArtikelPage = () => {
        navigate('/pakar-artikel')
    }

    return (
        <div className='relative w-full h-screen max-h-screen bg-[url("src/assets/bg_db.png")] bg-center bg-cover flex flex-row'>

            {/* sidebar */}
            <div className="relative h-screen flex flex-col gap-6 w-[5%] sm:w-[8%] min-w-[5%] pt-36">

                <div onClick={setProfilePage} className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Profil} className='h-[2rem] w-[2rem] sm:h-[1.7rem] sm:w-[1.7rem] mx-auto m-2' alt="" />
                </div>
                <div onClick={setChatPage} className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Konsultasi} className='h-[2rem] w-[2rem] sm:h-[1.7rem] sm:w-[1.7rem] mx-auto m-2' alt="" />
                </div>
                <div onClick={setArtikelPage} className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Artikel} className='h-[2rem] w-[2rem] sm:h-[1.7rem] sm:w-[1.7rem] mx-auto m-2' alt="" />
                </div>
            </div>

            <div className="relative w-[95%] sm:w-[92%]">
                {/* header */}
                <div onClick={setDashboardPage} className="w-full h-[8rem] sm:h-[7rem] flex items-center cursor-pointer">
                    <img src={Icon} className=" drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] w-32 sm:w-28" />
                    <p className="absolute text-5xl sm:text-4xl text-white font-bold pt-6 ml-16 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" >OrangeCenter</p>
                </div>

                {/* content */}
                <div className="w-full bg-white rounded-tl-3xl h-[81%] sm:h-[83%] max-h-screen overflow-y-auto scrollbar-hide">
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}
