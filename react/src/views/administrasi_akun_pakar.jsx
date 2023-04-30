import Icon from "../assets/logo.png"
import Add_pakar from "../assets/Add Pakar.png"

import Administrasi from "../assets/Administrasi Akun Icon.png"
import Artikel from "../assets/Artikel Logo.png"
import Profil from "../assets/Ellipse.png"

import Edit from "../components/add_actor"
import View from '../components/view_profil_aktor';

import { useEffect, useState } from "react"
import axiosClient from "../axios-client"
import { Link } from 'react-router-dom';

export default function administrasi_akun() {

    const [showEdit, setShowEdit] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const [nilai, setNilai] = useState()
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    getUsers();
    }, [])


    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/pakar')
        .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
        })
        .catch(() => {
            setLoading(false)
        })
    }

    const closeModal = () => {
        setShowEdit(false)
        setShowProfil(false)
    }

return (
    <>
        <div className="bg-white rounded-tl-3xl h-4/5 py-10">
            {/* conten header */}
            <div className="h-16 font-bold flex flex-col gap-4 px-4 rounded-tl-3xl">
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="w-3/4 text-center text-4xl pl-20">
                        <h1>Administrasi akun</h1>
                    </div>
                    <div className="w-1/4 flex flex-row justify-center gap-10">
                        <Link to="/admin-administrasi-pakar" className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                            Pakar
                        </Link>
                        <Link to="/admin-administrasi-pengguna" className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                            Pengguna
                        </Link>
                    </div>
                </div>
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
            {loading && <div className="h-80 px-4 flex flex-col gap-2 mt-8">
                <ul  className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                    <li className="w-64 text-center p-1">Loading...</li>
                    <li className="w-40 text-center p-1">Loading...</li>
                    <li className="w-32 text-center p-1">Loading...</li>
                    <li className="w-32 text-center p-1">Loading...</li>
                    <li className="w-40 text-center p-1">Loading...</li>
                    <li className="w-40 text-center p-1">Loading...</li>
                    <li className="w-40 text-center p-1">Loading...</li>
                </ul>
            </div>}

            {!loading && <div className="snap-y h-80 px-4 flex flex-col gap-2 mt-8">
                {/* list */}
                {!loading
                }
                {users.map(u=>(
                    <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                        <li className="w-64 text-center p-1">{u.nama_lengkap}</li>
                        <li className="w-40 text-center p-1">{u.username}</li>
                        <li className="w-32 text-center p-1">{u.jenis_kelamin}</li>
                        <li className="w-32 text-center p-1">{u.tanggal_lahir}</li>
                        <li className="w-40 text-center p-1">{u.no_hp}</li>
                        <li className="w-40 text-center p-1">{u.alamat}</li>
                        <li className="w-40 text-center p-1">{u.email}</li>
                    </ul>
                ))}
                {/* add */}
                <div onClick={() => setShowEdit(true)} className="absolute bottom-16 end-12 w-16 h-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-full flex p-2 cursor-pointer">
                    <img src={Add_pakar} className="h-6 my-auto mx-auto" />
                </div>
            </div>}

        </div>
        <View onClose={closeModal} visible={showProfil} nilai={nilai}/>
        <Edit onClose={closeModal} visible={showEdit} />
    </>
)
}
