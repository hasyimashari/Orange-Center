import React from 'react'
import Profil from "../assets/Ellipse.png"
import { useStateContext } from "../context/ContextProvider.jsx";
import { useState } from 'react';

import Edit from '../components/edit_profil_pakar';
import View from '../components/view_profil_all_actor';
import axiosClient from '../axios-client';

export default function profil_pakar() {
    
    const [showEdit, setShowEdit] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const [loading, setLoading] = useState(false)
    const {user, setUser, setToken, setRole} = useStateContext()
    
    const closeModal = () => {
        setShowProfil(false)
    }
    
    const closeModalEdit = () => {        
        setShowEdit(false)
        setUser({})
        setLoading(true)
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
                setLoading(false)
            })
    }

    const onLogout = ev => {
        ev.preventDefault()
        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
            setRole(null)
        })
    }

    return (

        <div>
        {/* // profil  */}
        <div className='flex items-center justify-center py-16 gap-10'>
            <div className='w-80 h-96 rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>
                <div className='w-full h-2/6 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl'></div>
                <img src={Profil} className='absolute h-20 w-20 mx-auto mt-20' alt="" />
                <div className='w-full flex flex-col items-center pt-8'>
                    {loading?
                        <div>
                            <h1 className='font-bold mt-2'>Loading...</h1>
                            <h4 className='text-sm mb-2'>Loading...</h4>
                        </div>:
                        <div>
                            <h1 className='font-bold mt-2'>{user.nama_lengkap}</h1>
                            <h4 className='text-sm mb-2'>{user.username}</h4>
                        </div>
                    }

                    <div className='w-full flex flex-col items-center gap-2 pt-2'>
                        <button onClick={() => setShowProfil(true)} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 text-sm">
                            Profil saya
                        </button>
                        <button onClick={() => setShowEdit(true)} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                            Edit
                        </button>
                        <button onClick={onLogout} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                            Keluar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <View onClose={closeModal} visible={showProfil} />
        <Edit onClose={closeModalEdit} visible={showEdit} />
        </div>
        
    )
}

