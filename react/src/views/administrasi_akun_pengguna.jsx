import View from '../components/view_profil_pengguna';

import { useEffect, useState } from "react"
import axiosClient from "../axios-client"
import { Link } from 'react-router-dom';

export default function administrasi_akun_pengguna() {
    const [showProfil, setShowProfil] = useState(false)
    const [nilai, setNilai] = useState()
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    getUsers();
    }, [])

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/pengguna')
        .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
        })
        .catch(() => {
            setLoading(false)
        })
    }

    const closeModal = () => {
        setShowProfil(false)
    }

return (
    <>
        {/* conten header */}
        <div className="sticky top-0 bg-white h-32 font-bold flex flex-col items-end justify-end gap-4 px-4 rounded-tl-3xl">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="w-3/4 text-center text-4xl pl-20">
                    <h1>Administrasi akun</h1>
                </div>
                <div className="w-1/4 flex flex-row justify-center gap-10">
                    <Link to="/admin-administrasi-pakar" className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                        Pakar
                    </Link>
                    <Link to="/admin-administrasi-pengguna" className="text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 p-5 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white cursor-pointer">
                        Pengguna
                    </Link>
                </div>
            </div>
            <ul className="flex justify-normal gap-2 pb-4">
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
        {loading && <div className="h-80 pl-8 flex flex-col gap-2">
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

        {!loading && <div className="h-80 pl-8 flex flex-col gap-2">
            {/* list */}
            {users.map(u=>(
                <div>
                    {u.status_akun===1?
                    <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-white hover:brightness-90 rounded-2xl">
                        <li className="w-64 text-center p-1">{u.nama_lengkap}</li>
                        <li className="w-40 text-center p-1">{u.username}</li>
                        {u.jenis_kelamin===1? <li className="w-32 text-center p-1">Laki-laki</li>:<li className="w-32 text-center p-1">Perempuan</li>} 
                        <li className="w-32 text-center p-1">{u.tanggal_lahir}</li>
                        <li className="w-40 text-center p-1">{u.no_hp}</li>
                        <li className="w-40 text-center p-1">{u.alamat}</li>
                        <li className="w-40 text-center p-1">{u.email}</li>
                    </ul>:
                    <ul onClick={() => {setShowProfil(true); setNilai(u);}} className="flex justify-normal gap-2 bg-red-200 hover:brightness-90 rounded-2xl">
                        <li className="w-64 text-center p-1">{u.nama_lengkap}</li>
                        <li className="w-40 text-center p-1">{u.username}</li>
                        {u.jenis_kelamin===1? <li className="w-32 text-center p-1">Laki-laki</li>:<li className="w-32 text-center p-1">Perempuan</li>} 
                        <li className="w-32 text-center p-1">{u.tanggal_lahir}</li>
                        <li className="w-40 text-center p-1">{u.no_hp}</li>
                        <li className="w-40 text-center p-1">{u.alamat}</li>
                        <li className="w-40 text-center p-1">{u.email}</li>
                    </ul>
                    }
                </div>

            ))}
        </div>}

        <View onClose={closeModal} visible={showProfil} nilai={nilai}/>
    </>
)
}
