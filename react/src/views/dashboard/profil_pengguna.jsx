import React, { useEffect } from 'react'
import { useStateContext } from "../../context/ContextProvider.jsx";
import { useState } from 'react';

import Profil from "../../assets/Ellipse.png"
import Edit from './edit_profil_pengguna';
import View from './view_profil_all_actor';
import Premium from "../../assets/Premium 1.png"

import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';

export default function profil_user() {
    
    const navigate = useNavigate()

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
        
    const setPremiumPage = () => {
        navigate("/user-premium");
    }

    const keluar = (ev) => {
        setLoadingE(true)
        ev.preventDefault()
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
            <div className='w-80 sm:w-72 h-fit rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] flex flex-col items-center text-center border-2'>
                <div className='w-full h-28 sm:h-20 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl flex items-end justify-center'>
                    <img src={Profil} className='-m-8 h-[5rem] w-[5rem] sm:h-[4rem] sm:w-[4rem]' alt="" />
                </div>
                
                <div className='w-full flex flex-col items-center pt-8 mb-8'>
                    {loading?
                        <div>
                            <h1 className='text-lg font-bold mt-2 sm:text-base'>Loading...</h1>
                            <h4 className='mb-2 sm:text-base'>Loading...</h4>
                        </div>:
                        <div>
                            {user.status_premium===1?
                                <div className='flex gap-1 w-full items-center justify-center'>
                                    <img className='w-8 h-8 grayscale' src={Premium} alt="" />
                                    <h1 className='text-lg font-bold mt-2 sm:text-base'>{user.nama_lengkap}</h1>
                                </div>:
                                <div className='flex gap-1 w-full items-center justify-center cursor-default'>
                                    <img className='w-8 h-8' src={Premium} alt="" />
                                    <h1 className='text-lg font-bold mt-2 sm:text-base'>{user.nama_lengkap}</h1>
                                </div>
                            }
                            <h4 className='mb-2 sm:text-base'>{user.username}</h4>
                        </div>
                    }

                    <div className='w-full flex flex-col items-center gap-2 pt-2'>
                        {loading?
                            <button className="bg-white grayscale brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 sm:py-1.5 sm:text-xs text-sm cursor-default">
                                Profil saya
                            </button>
                                :
                            <button onClick={showPopUpAkun} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 sm:py-1.5 sm:text-xs text-sm">
                                Profil saya
                            </button>
                        }
                        {user.status_premium===1?
                            <>
                                {loading?
                                    <div className="bg-white brightness-90 grayscale border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 sm:py-1.5 sm:text-xs text-sm cursor-default">
                                        Upgrade akun
                                    </div>
                                        :
                                    <div onClick={setPremiumPage} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 sm:py-1.5 sm:text-xs text-sm cursor-pointer">
                                        Upgrade akun
                                    </div>

                                }
                            </>
                                :
                            <div className="bg-white brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 sm:py-1.5 sm:text-xs text-sm cursor-default grayscale">
                                Upgrade akun
                            </div>
                        }
                        {loading?
                            <button className="bg-white grayscale brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 sm:py-1.5 sm:text-xs text-sm cursor-default">
                                Edit
                            </button>
                                :
                            <button onClick={showFormEdit} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 sm:py-1.5 sm:text-xs text-sm">
                                Edit
                            </button>
                        }
                        {loadingE?
                            <button className="bg-white brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 sm:py-1.5 sm:text-xs text-sm grayscale">
                                Loading...
                            </button>
                                :
                                <>
                                    {loading?
                                        <button className="bg-white grayscale brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 sm:py-1.5 sm:text-xs text-sm cursor-default">
                                            Keluar
                                        </button>
                                            :
                                        <button onClick={keluar} className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 sm:py-1.5 sm:text-xs text-sm">
                                            Keluar
                                        </button>
                                    }
                                </>
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

