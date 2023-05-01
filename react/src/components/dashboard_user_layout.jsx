import Icon from "../assets/logo.png"
import Artikel from "../assets/Artikel Logo.png"
import Konsultasi from "../assets/Konsultasi Logo.png"
import Profil from "../assets/Ellipse.png"
import Permintaan from "../assets/Permintaan Kebutuhan Logo.png"

import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider"
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client'

import React, { useEffect } from 'react'

export default function Layout_dashboard() {
    
    const {token, role, setUser} = useStateContext();
    if (!token) {
        return <Navigate to='/login'/>
    }
    if (role!=="usr") {
        return <Navigate to='*'/>
    }
    
    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    return (
    <>
        <div className='relative w-full min-h-screen bg-[url("src/assets/bg_db.png")] bg-center bg-cover flex flex-row'>
            <div className="relative h-screen flex flex-col gap-y-6 py-8 w-16 pt-36">

                <Link to='/user-profil' className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Profil} className='h-8 w-8 mx-auto m-2' alt="" />
                </Link>

                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Konsultasi} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Artikel} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Permintaan} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
            </div>
            
            <div className="relative w-full">

                <Link to='user' className="h-1/5 flex items-center cursor-pointer">
                    <img src={Icon} className=" drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] w-32" />
                    <p className="absolute text-5xl text-white font-bold pt-6 ml-16 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" >OrangeCenter</p>
                </Link>

                <div className="bg-white rounded-tl-3xl h-4/5 max-h-screen">
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
)
}
