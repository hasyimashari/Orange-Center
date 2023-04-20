import Icon from "../assets/logo.png"
import Add_pakar from "../assets/Add Pakar.png"

import artikel_img from "../assets/Artikel_db.png"
import permintaan_img from "../assets/Permintaan_db.png"
import Arrow_right from "../assets/arrow_right.png"

import Administrasi from "../assets/Administrasi Akun Icon.png"
import Artikel from "../assets/Artikel Logo.png"
import Profil from "../assets/Ellipse.png"

import {useStateContext} from "../context/ContextProvider";
import { Navigate } from "react-router-dom"

export default function administrasi_akun() {

    // if (!token) {
    //     return <Navigate to='/login'/>
    // }

return (
    <>
        <div className='relative w-full min-h-screen bg-[url("src/assets/bg_db.png")] bg-center bg-cover flex flex-row'>
            {/* sidebar */}
            <div className="relative h-screen flex flex-col gap-y-6 py-8 w-16 pt-36">
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Profil} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Administrasi} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
                <div className="w-full hover:bg-white rounded-lg hover:bg-opacity-25 cursor-pointer">
                    <img src={Artikel} className='h-8 w-8 mx-auto m-2' alt="" />
                </div>
            </div>
            
            <div className="relative w-full">
                {/* icon */}
                <div className="h-1/5 flex items-center cursor-default">
                    <img src={Icon} className=" drop-shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] w-32" />
                    <p className="absolute text-5xl text-white font-bold pt-6 ml-16 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" >OrangeCenter</p>
                </div>

                <div className="bg-white rounded-tl-3xl h-4/5 pl-2 py-10">
                    {/* conten header */}
                    <div className="h-1/5 font-bold flex flex-col gap-4 px-2 rounded-tl-3xl">
                        <h1 className="w-full text-center text-4xl">Administrasi akun</h1>
                        <ul className="flex justify-normal gap-2">
                            <li className="w-64 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Nama lengkap</li>
                            <li className="w-40 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Username</li>
                            <li className="w-32 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Jenis Kelamin</li>
                            <li className="w-32 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Tanggal Lahir</li>
                            <li className="w-40 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">No. HP</li>
                            <li className="w-40 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Alamat</li>
                            <li className="w-40 rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Email</li>
                        </ul>
                    </div>
                    
                    {/* conten */}
                    <div className="h-4/5 px-2 flex flex-col gap-2 mt-6">
                        {/* list */}
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>
                        <ul className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                            <li className="w-64 text-center p-1">Nama lengkap</li>
                            <li className="w-40 text-center p-1">Username</li>
                            <li className="w-32 text-center p-1">Jenis Kelamin</li>
                            <li className="w-32 text-center p-1">Tanggal Lahir</li>
                            <li className="w-40 text-center p-1">No. HP</li>
                            <li className="w-40 text-center p-1">Alamat</li>
                            <li className="w-40 text-center p-1">Email</li>
                        </ul>

                        {/* add */}
                        <div className="absolute bottom-16 end-12 w-16 h-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-full flex p-2">
                            <img src={Add_pakar} className="h-6 my-auto mx-auto" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </>
)
}
