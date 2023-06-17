import React from 'react'
import axiosClient from "../../axios-client"
import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

import Profil from "../../assets/Ellipse.png"
import NoChat from "../../assets/No Chat 1.png"

export default function konsultasiPagePakar() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const {setTo, loading, setLoading} = useStateContext();

    const getUsers = () => {
        setLoading(true)
        axiosClient.post(`/getChatFromPakar/${user.id_pakar}`)
        .then(({data}) => {
            setUsers(data.user)
            setLoading(false)
        })
    }
    
    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])
    
    useEffect(() => {
        getUsers();
    }, [user])
    
    const setChatPageUser = () => {
        navigate('/pakar-chat')
    }

    return (
        <div>
            <div className='h-[34rem] grid grid-cols-4 sm:flex sm:flex-col sm:h-fit sm:py-10 sm:items-center sm:justify-center gap-2 pl-4 pt-4 justify-center'>
                
                {/* cards chat from user loading*/}
                {loading && <div className="m-2 mx-4 h-56 sm:w-64 sm:h-64 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl">
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
                            <div className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 rounded-lg text-white cursor-default grayscale">
                                loading...
                            </div>
                        </div>
                </div>}

                {/* cards chat from user not loading */}
                {users.map((u, id)=>(
                    <div onClick={() => {setTo(u.pengguna)}} key={id} className='m-2 mx-4 h-56 sm:w-64 sm:h-64 bg-white shadow-[-3px_3px_0px_3px_rgba(78,148,79,0.5)] border-[1px] border-[#4E944F] rounded-xl'>
                        {
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-3 '>
                            <div>
                                <img src={Profil} className='w-20' alt="" />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='text-xl font-bold'>
                                    {u.pengguna.nama_lengkap}
                                </div>
                            </div>
                            <div onClick={setChatPageUser} className="w-5/12 p-2 text-center text-sm font-bold bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-lg text-white cursor-pointer">
                                Chat
                            </div>
                        </div>
                        }
                    </div>
                ))}

                {!users.length && !loading && 
                    <div className='row-span-full col-span-full flex items-center justify-center'>
                        <div className='w-1/3 h-3/4 flex flex-col gap-4 items-center justify-center'>
                            <img src={NoChat} className='h-4/6' alt="" />
                            <h1 className="font-bold text-2xl">Belum ada Percakapan</h1>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
