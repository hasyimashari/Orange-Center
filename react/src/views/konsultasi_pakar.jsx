import React from 'react'
import { useEffect, useState } from "react"
import axiosClient from "../axios-client"
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

import Profil from "../assets/Ellipse.png"

export default function konsultasi_pakar() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const {setTo} = useStateContext();

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/pengguna')
        .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
        })
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <div className='h-[35rem] grid grid-cols-4 gap-2 pl-4 pt-4 justify-center'>
                
                {/* content loading*/}
                {loading && <div className="m-2 mx-4 h-56 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div className='w-20 h-20 flex items-center justify-center'>
                                loading...
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    loading...
                                </div>
                                <div className='text-xs font-bold'>
                                    loading...
                                </div>
                            </div>
                            <Link to='/user-chat' className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white">
                                loading...
                            </Link>
                        </div>
                </div>}
                {loading && <div className="m-2 mx-4 h-56 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div className='w-20 h-20 flex items-center justify-center'>
                                loading...
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    loading...
                                </div>
                                <div className='text-xs font-bold'>
                                    loading...
                                </div>
                            </div>
                            <Link to='/user-chat' className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white">
                                loading...
                            </Link>
                        </div>
                </div>}
                {loading && <div className="m-2 mx-4 h-56 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div className='w-20 h-20 flex items-center justify-center'>
                                loading...
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    loading...
                                </div>
                                <div className='text-xs font-bold'>
                                    loading...
                                </div>
                            </div>
                            <Link to='/user-chat' className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white">
                                loading...
                            </Link>
                        </div>
                </div>}
                {loading && <div className="m-2 mx-4 h-56 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div className='w-20 h-20 flex items-center justify-center'>
                                loading...
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    loading...
                                </div>
                                <div className='text-xs font-bold'>
                                    loading...
                                </div>
                            </div>
                            <Link to='/user-chat' className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white">
                                loading...
                            </Link>
                        </div>
                </div>}

                {/* content not loading*/}
                {users.map(u=>(
                    u.status_akun==="Aktif" &&
                    <div onClick={() => {setTo(u)}} className='m-2 mx-4 h-56 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl'>
                        {
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div>
                                <img src={Profil} className='w-20' alt="" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    {u.nama_lengkap}
                                </div>
                                <div className='text-xs font-bold'>
                                    {u.spesialis}
                                </div>
                            </div>
                            <Link to='/pakar-chat' className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white">
                                Chat
                            </Link>
                        </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
