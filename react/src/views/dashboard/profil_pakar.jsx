import React, { useEffect } from 'react'
import { useStateContext } from "../../context/ContextProvider.jsx";
import { useState } from 'react';

import Profil from "../../assets/Ellipse.png"
import Edit from './edit_profil_pakar';
import View from './view_profil_all_actor';
import axiosClient from '../../axios-client';

export default function profil_pakar() {
    
    const [showEdit, setShowEdit] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const [loadingE, setLoadingE] = useState(false)
    const {user, setUser, setToken, setRole, loading, setLoading} = useStateContext()

    const showPopUpAkun = () => {
        setShowProfil(true)
    }

    const closePopUpAkun = () => {
        setShowProfil(false)
    }

    const showFormEdit = () => {
        setShowEdit(true)
    }

    const closeFormEdit = () => {        
        setShowEdit(false)
        setUser({})
        setLoading(true)
        axiosClient.get('/user')
            .then(({data}) => {
                setUser(data)
                setLoading(false)
            })
    }

    const keluar = (ev) => {
        ev.preventDefault()
        setLoadingE(true)
        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
            setRole(null)
            setLoadingE(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
            setLoading(false)
        })
    }, [])

    return (

        <div>
        <div className='h-[34rem] flex items-center justify-center gap-10'>

            {/* profil */}
            <div className='w-80 h-fit rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>
                <div className='w-full h-28 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl flex items-end justify-center'>
                    <img src={Profil} className='-m-8 h-[5rem] w-[5rem]' alt="" />
                </div>
                
                <div className='w-full flex flex-col items-center pt-8 mb-8'>
                    {loading?
                        <div>
                            <h1 className='text-lg font-bold mt-2'>Loading...</h1>
                            <h4 className='mb-2'>Loading...</h4>
                        </div>:
                        <div>
                            <h1 className='text-lg font-bold mt-2'>{user.nama_lengkap}</h1>
                            <h4 className='mb-2'>{user.username}</h4>
                        </div>
                    }

                    <div className='w-full flex flex-col items-center gap-2 pt-2'>
                        <button onClick={showPopUpAkun} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 text-sm">
                            Profil saya
                        </button>
                        <button onClick={showFormEdit} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                            Edit
                        </button>
                        {loadingE?
                            <button className="bg-white brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm grayscale">
                                Loading...
                            </button>:

                            <button onClick={keluar} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                                Keluar
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>

        <View onClose={closePopUpAkun} visible={showProfil} />
        <Edit onClose={closeFormEdit} visible={showEdit} />
        </div>
        
    )
}
