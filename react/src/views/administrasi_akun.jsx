import Icon from "../assets/logo.png"
import Add_pakar from "../assets/Add Pakar.png"

import Administrasi from "../assets/Administrasi Akun Icon.png"
import Artikel from "../assets/Artikel Logo.png"
import Profil from "../assets/Ellipse.png"

import Edit from "../components/edit_profil"
import View from '../components/view_profil_aktor';

import { useState } from "react"

export default function administrasi_akun() {

    const [showEdit, setShowEdit] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const closeModal = () => {
        setShowEdit(false)
        setShowProfil(false)
    }

return (
    <>
        <div className="bg-white rounded-tl-3xl h-4/5 py-10">
            {/* conten header */}
            <div className="h-1/5 font-bold flex flex-col gap-4 px-4 rounded-tl-3xl">
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
            <div className="h-4/5 px-4 flex flex-col gap-2 mt-8">
                {/* list */}
                <ul onClick={() => setShowProfil(true)} className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                    <li className="w-64 text-center p-1">Nama lengkap</li>
                    <li className="w-40 text-center p-1">Username</li>
                    <li className="w-32 text-center p-1">Jenis Kelamin</li>
                    <li className="w-32 text-center p-1">Tanggal Lahir</li>
                    <li className="w-40 text-center p-1">No. HP</li>
                    <li className="w-40 text-center p-1">Alamat</li>
                    <li className="w-40 text-center p-1">Email</li>
                </ul>
                {/* add */}
                <div onClick={() => setShowEdit(true)} className="absolute bottom-16 end-12 w-16 h-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-full flex p-2 cursor-pointer">
                    <img src={Add_pakar} className="h-6 my-auto mx-auto" />
                </div>

            </div>
        </div>
        <View onClose={closeModal} visible={showProfil} />
        <Edit onClose={closeModal} visible={showEdit} />
    </>
)
}
