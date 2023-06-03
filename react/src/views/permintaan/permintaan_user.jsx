import React, { useEffect, useState } from 'react'

import Detail from "./detail_permintaan"
import EditPermintaan from './edit_permintaan_user'
import Edit from "../../assets/Edit 1.png"
import Back from '../../assets/Back 1.png'
import PemintaanNull from "../../assets/Permintaan null.png"

import { useNavigate } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

export default function permintaan_user() {

    const navigate = useNavigate()

    const {user, setUser, loading, setLoading} = useStateContext()
    const [permintaan, setPermintaan] = useState([])
    const [detail, setDetail] = useState(false)
    const [nilai, setNilai] = useState()
    const [editPermintaan, setEditPermintaan] = useState(false)

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    const getPermintaan = () => {
        setLoading(true)
        axiosClient.post(`/permintaan_saya/${user.id_user}`)
        .then((response)=>{
            setPermintaan(response.data.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getPermintaan();
    }, [user])


    const bukaDetail = () => {
        setDetail(true)
    }

    const tutupDetail = () => {
        setDetail(false)
        setNilai()
    }

    const bukaEditPermintaan = () => {
        setEditPermintaan(true)
    }

    const tutupEditPermintaan = () => {
        setEditPermintaan(false)
        getPermintaan()
        setNilai()
    }

    const setPermintaanPage = () => {
        navigate('/user-permintaan')
    }

    return (
        <div className='h-[34rem] flex flex-col gap-16'>

            {/* contenct header */}
            <div className='w-full h-16 bg-white sticky top-0 flex items-center justify-between font-bold text-2xl rounded-tl-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                
                <div className='w-1/12 h-16 flex pl-6'>
                    <button onClick={setPermintaanPage}>
                        <img className='w-8' src={Back}/>
                    </button>
                </div>
                <div className='w-11/12 h-16 flex items-center justify-center pr-20'>
                    <h1 className='text-3xl font-bold'>Permintaan Saya</h1>
                </div>
            </div>

        
            {/* content */}
            <div className='pl-4 pt-4'>
                <div className="w-ful h-full grid grid-cols-3 gap-4 mx-4 justify-center overflow-y-auto scrollbar-hide scroll-smooth">

                {/* when loading */}
                {loading && 
                    <div className="h-32 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl flex p-1.5 gap-2">
                        {/* photo */}
                        <div className="w-1/3 h-full bg-slate-300 rounded-lg flex">

                        </div>

                        {/* desc */}
                        <div className="w-2/3 h-full flex flex-col gap-1">
                            <div className="w-full h-1/4 font-bold">
                                Loading...
                            </div>

                            <div className="pl-4 w-full h-2/4 flex">
                                <div className="w-1/2 h-full flex flex-col justify-center">
                                    <h1 className="font-bold text-xs">Budget</h1>
                                    <p className="font-light text-xs">Rp. Loading.../Kg</p>
                                </div>
                                <div className="w-1/2 h-full flex flex-col justify-center">
                                    <h1 className="font-bold text-xs">Kebutuhan</h1>
                                    <p className="font-light text-xs">Loading... Kg</p>
                                </div>
                            </div>

                            <div className="w-full h-1/4">
                                <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold">
                                    <h1>Loading...</h1>
                                </div>
                            </div>

                            <img className='absolute w-6 self-end' src={Edit} alt="" />
                        </div>
                    </div>
                }

                {/* when not loadibg */}
                {!loading && <>
                    
                    {permintaan.map((u, id)=>(

                        <div key={id} className="h-32 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl flex p-1.5 gap-2">
                            {/* photo */}
                            <div className="w-1/3 h-full bg-slate-300 rounded-lg flex">
                                <img src={`http://127.0.0.1:8000/storage/${u.foto_produk}`} className='m-auto' alt="" />
                            </div>

                            {/* desc */}
                            <div className="w-2/3 h-full flex flex-col gap-1">
                                <div className="w-full h-1/4 font-bold">
                                    {u.nama_produk}
                                </div>

                                <div className="pl-4 w-full h-2/4 flex">
                                    <div className="w-1/2 h-full flex flex-col justify-center">
                                        <h1 className="font-bold text-xs">Budget</h1>
                                        <p className="font-light text-xs">Rp. {u.budget}/Kg</p>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col justify-center">
                                        <h1 className="font-bold text-xs">Kebutuhan</h1>
                                        <p className="font-light text-xs">{u.stock} Kg</p>
                                    </div>
                                </div>

                                <div onClick={() => {bukaDetail(true); setNilai(u);}}  className="w-full h-1/4">
                                    <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                                        <h1>Lihat Detail</h1>
                                    </div>
                                </div>

                                <img onClick={() => {bukaEditPermintaan(true); setNilai(u)}} className='absolute w-6 self-end cursor-pointer' src={Edit} alt="" />
                            </div>
                        </div>

                    ))}

                </>}

                {!permintaan.length && !loading && 
                        <div className='row-span-full col-span-full flex items-center justify-center'>
                            <div className='w-1/3 h-3/4 flex flex-col gap-4 items-center justify-center'>
                                <img src={PemintaanNull} className='h-5/6' alt="" />
                                <h1 className="font-bold text-2xl">Belum ada Permintaan</h1>
                            </div>
                        </div>
                }

                </div>
            </div>

        <Detail onClose={tutupDetail} visible={detail} nilai={nilai}/>
        <EditPermintaan onClose={tutupEditPermintaan} visible={editPermintaan} nilai={nilai}/>
        </div>
    )
}
