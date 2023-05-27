import Add_pakar from "../assets/Add Pakar.png"

import Edit from "./add_pakar"
import View from './view_profil_pakar';

import { useEffect, useState } from "react"
import axiosClient from "../axios-client"
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from "../context/ContextProvider";

export default function administrasi_akun_pakar() {

    const navigate = useNavigate();

    const [showAddPakarAccount, setAddPakarAccount] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const {loading, setLoading} = useStateContext()
    const [users, setUsers] = useState([])
    const [nilai, setNilai] = useState()

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
    
    useEffect(() => {
        getUsers();
    }, [])

    const closeProfil = () => {
        setShowProfil(false)
        getUsers()
    }

    const closeAddPakarAccount = () => {        
        setAddPakarAccount(false)
        getUsers()
    }

    const setAdmnistrasiAkunPakar = () => {
        navigate("/admin-administrasi-pakar")
    }

    const setAdmnistrasiAkunUser = () => {
        navigate("/admin-administrasi-pengguna")
    }

return (
    <>
        {/* conten header */}
        <div className="sticky top-0 z-10 bg-white h-[8rem] font-bold flex flex-col items-end justify-end gap-4 px-4 rounded-tl-3xl">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="w-3/4 text-center text-4xl pl-20">
                    <h1>Administrasi akun</h1>
                </div>
                <div className="w-1/4 flex flex-row justify-center gap-10">
                    <div onClick={setAdmnistrasiAkunPakar} className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                        Pakar
                    </div>
                    <div onClick={setAdmnistrasiAkunUser} className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                        Pengguna
                    </div>
                </div>
            </div>
            <ul className="flex justify-normal gap-2 pb-4">
                <li className="w-[15rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Nama lengkap</li>
                <li className="w-[10rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Username</li>
                <li className="w-[8rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Jenis Kelamin</li>
                <li className="w-[8rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Tanggal Lahir</li>
                <li className="w-[10rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">No. HP</li>
                <li className="w-[10rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Asal</li>
                <li className="w-[10rem] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Email</li>
            </ul>
        </div>
        
        {/* conten */}
        {loading && <div className="h-fit pl-8 flex flex-col gap-2">
            <ul  className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                <li className="w-[15rem] text-center p-1">Loading...</li>
                <li className="w-[10rem] text-center p-1">Loading...</li>
                <li className="w-[8rem] text-center p-1">Loading...</li>
                <li className="w-[8rem] text-center p-1">Loading...</li>
                <li className="w-[10rem] text-center p-1">Loading...</li>
                <li className="w-[10rem] text-center p-1">Loading...</li>
                <li className="w-[10rem] text-center p-1">Loading...</li>
            </ul>
        </div>}

        {!loading && <div className="h-fit pl-8 flex flex-col gap-2">
            {/* list */}
            {users.map((u, id)=>(
                <div key={id}>
                    {u.status_akun==="Aktif"?
                    <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl cursor-pointer">
                        <li className="w-[15rem] text-center p-1">{u.nama_lengkap}</li>
                        <li className="w-[10rem] text-center p-1">{u.username}</li>
                        <li className="w-[8rem] text-center p-1">{u.jenis_kelamin}</li>
                        <li className="w-[8rem] text-center p-1">{u.tanggal_lahir}</li>
                        <li className="w-[10rem] text-center p-1">{u.no_hp}</li>
                        <li className="w-[10rem] text-center p-1">{u.asal}</li>
                        <li className="w-[10rem] text-center p-1">{u.email}</li>
                    </ul>:
                    <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white text-red-500 hover:brightness-90 rounded-2xl cursor-pointer">
                        <li className="w-[15rem] text-center p-1">{u.nama_lengkap}</li>
                        <li className="w-[10rem] text-center p-1">{u.username}</li>
                        <li className="w-[8rem] text-center p-1">{u.jenis_kelamin}</li>
                        <li className="w-[8rem] text-center p-1">{u.tanggal_lahir}</li>
                        <li className="w-[10rem] text-center p-1">{u.no_hp}</li>
                        <li className="w-[10rem] text-center p-1">{u.asal}</li>
                        <li className="w-[10rem] text-center p-1">{u.email}</li>
                    </ul>
                    }
                </div>
            ))}
            {/* add */}
            <div onClick={() => setAddPakarAccount(true)} className="absolute bottom-16 end-12 w-16 h-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-full flex p-2 cursor-pointer">
                <img src={Add_pakar} className="h-6 my-auto mx-auto" />
            </div>
        </div>}

        <View onClose={closeProfil} visible={showProfil} nilai={nilai}/>
        <Edit onClose={closeAddPakarAccount} visible={showAddPakarAccount}/>
    </>
)
}
