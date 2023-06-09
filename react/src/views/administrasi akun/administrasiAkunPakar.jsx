import Add_pakar from "../../assets/Add Pakar.png"

import Add from "./add_pakar"
import View from './view_profil_pakar';

import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from "../../context/ContextProvider";

export default function administrasiAkunPakar() {

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

    const closePopUpDetailProfil = () => {
        setShowProfil(false)
        getUsers()
    }

    const closeFormAddPakarAccount = () => {        
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
        <div className="h-[34rem] pl-8 pr-8 flex flex-col">

            {/* header administrasi akun pakar */}
            <div className="sticky top-0 z-10 w-full h-[8rem] bg-white flex flex-col items-center justify-center gap-6 pt-6">

                <div className="w-full flex flex-row justify-between">
                    <div className="w-3/4 text-center text-4xl font-bold pl-28">
                        <h1>Administrasi akun</h1>
                    </div>
                    <div className="w-1/4 flex flex-row justify-center gap-10">
                        <div onClick={setAdmnistrasiAkunPakar} className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-default grayscale">
                            Pakar
                        </div>
                        <div onClick={setAdmnistrasiAkunUser} className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                            Pengguna
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full">
                    <ul className="flex justify-normal gap-2 pb-4">
                        <li className="w-[22%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Nama lengkap</li>
                        <li className="w-[12%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Username</li>
                        <li className="w-[12%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Jenis Kelamin</li>
                        <li className="w-[12%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Tanggal Lahir</li>
                        <li className="w-[14%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">No. HP</li>
                        <li className="w-[14%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Asal</li>
                        <li className="w-[14%] rounded-xl text-center p-1 border-1 shadow-[0px_2px_0px_1px_rgba(78,148,79,0.25)]">Email</li>
                    </ul>
                </div>

            </div>

            {/* content akun pakar */}
            <div className="w-full max-w-full overflow-y-auto scrollbar-hide">

                {/* when loading */}
                <div>
                    {loading && 
                        <ul className="flex justify-normal gap-2 pb-4">
                            <li className="w-[22%] text-center p-1">Loading...</li>
                            <li className="w-[12%] text-center p-1">Loading...</li>
                            <li className="w-[12%] text-center p-1">Loading...</li>
                            <li className="w-[12%] text-center p-1">Loading...</li>
                            <li className="w-[14%] text-center p-1">Loading...</li>
                            <li className="w-[14%] text-center p-1">Loading...</li>
                            <li className="w-[14%] text-center p-1">Loading...</li>
                        </ul>
                    }
                </div>

                {/* when not loading */}
                <div>
                    {!loading && 
                        <>
                        {users.map((u, id)=>(
                            <div key={id}>
                                {u.status_akun==="Aktif"?
                                <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl cursor-pointer mb-2">
                                    <li className="w-[22%] text-center p-1">{u.nama_lengkap}</li>
                                    <li className="w-[12%] text-center p-1">{u.username}</li>
                                    <li className="w-[12%] text-center p-1">{u.jenis_kelamin}</li>
                                    <li className="w-[12%] text-center p-1">{u.tanggal_lahir.substring(0, 10)}</li>
                                    <li className="w-[14%] text-center p-1">{u.no_hp}</li>
                                    <li className="w-[14%] text-center p-1">{u.asal}</li>
                                    <li className="w-[14%] text-center p-1">{u.email}</li>
                                </ul>:
                                <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white text-red-500 hover:brightness-90 rounded-2xl cursor-pointer mb-2">
                                    <li className="w-[22%] text-center p-1">{u.nama_lengkap}</li>
                                    <li className="w-[12%] text-center p-1">{u.username}</li>
                                    <li className="w-[12%] text-center p-1">{u.jenis_kelamin}</li>
                                    <li className="w-[12%] text-center p-1">{u.tanggal_lahir.substring(0, 10)}</li>
                                    <li className="w-[14%] text-center p-1">{u.no_hp}</li>
                                    <li className="w-[14%] text-center p-1">{u.asal}</li>
                                    <li className="w-[14%] text-center p-1">{u.email}</li>
                                </ul>
                                }
                            </div>
                        ))}
                        </>
                    }
                </div>

            </div>

            {/* add */}
            <div onClick={() => setAddPakarAccount(true)} className="absolute bottom-16 end-12 w-16 h-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-full flex p-2 cursor-pointer">
                <img src={Add_pakar} className="h-6 my-auto mx-auto" />
            </div>

            <View onClose={closePopUpDetailProfil} visible={showProfil} nilai={nilai}/>
            <Add onClose={closeFormAddPakarAccount} visible={showAddPakarAccount}/>
        </div>
    </>
)
}
