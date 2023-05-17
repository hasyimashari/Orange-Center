import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';

import Back from '../assets/Back 1.png'
import Sent from '../assets/Send 2.png'

export default function chat_user() {

    const {to, setTo} = useStateContext();
    const [user, setUser] = useState({});

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    return (
        <div className='h-[35rem] flex flex-col justify-between'>

            {/* header */}
            <div className='w-full h-16 sticky top-0 z-10 flex items-center justify-between font-bold text-2xl rounded-tl-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                
                <Link to='/user-konsultasi' className='w-1/12 flex pl-6'>
                    <button onClick={() => {setTo()}}>
                        <img className='w-8' src={Back}/>
                    </button>
                </Link>
                <div className='w-11/12 flex items-center justify-center pr-20'>
                    {to.nama_lengkap} ({to.spesialis})
                </div>
            </div>

            <div className='w-full h-16 sticky bottom-2 z-10 flex items-center justify-center'>
                <div className='w-11/12'>
                    <div className="flex flex-row justify-between">
                        <div className="w-[95%] mr-1">
                            <input
                            className="text-sm h-full w-full p-2.5 px-4 border-none rounded-2xl bg-green-100" name="chatn" id="chat" placeholder="Ketik Pesan..."/>
                        </div>
                        <button className="p-2.5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-full flex items-center justify-center text-white">
                            <img className='w-6' src={Sent} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
