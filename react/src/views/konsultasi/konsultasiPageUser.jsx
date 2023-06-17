import React from 'react'
import axiosClient from "../../axios-client"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

import Profil from "../../assets/Ellipse.png"

export default function konsultasiPageUser() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([]);
    const {setTo, loading, setLoading} = useStateContext();

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/pakar')
        .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
        })
    }
    
    useEffect(() => {
        getUsers();
    }, [])

    const setChatPageUser = () => {
        navigate('/user-chat')
    }

    return (
        <div>
            <div className='h-[34rem] grid grid-cols-4 sm:flex sm:flex-col sm:h-fit sm:py-10 sm:items-center sm:justify-center gap-2 pl-4 pt-4 justify-center'>
                
                {/* cards chat pakar loading*/}
                {loading && <div className="m-2 mx-4 h-56 sm:w-64 sm:h-64 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-5 '>
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
                            <div className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 rounded-lg text-white cursor-default grayscale">
                                loading...
                            </div>
                        </div>
                </div>}

                {/* cards chat pakar not loading */}
                {users.map((u, id)=>(
                    u.status_akun==="Aktif" && !loading &&
                    <div onClick={() => {setTo(u)}} key={id} className='m-2 mx-4 h-56 sm:w-64 sm:h-64 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl'>
                        {
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-5 '>
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
                            <div onClick={setChatPageUser} className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white cursor-pointer">
                                Chat
                            </div>
                        </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
