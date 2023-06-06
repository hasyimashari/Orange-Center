import React, { useEffect, useState } from 'react'
import Add from "../../assets/Add 1.png"
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../axios-client'
import { useStateContext } from '../../context/ContextProvider'

export default function artikelPageAdmin() {

    const navigate = useNavigate()

    const [artikel, setArtikel] = useState([])
    const {loading, setLoading, setContent} = useStateContext()

    const getArtikel = () => {
        setLoading(true)
        axiosClient.get('/artikel')
        .then((response)=>{
            setArtikel(response.data.data)
            setContent()
            setLoading(false)
        })
    }
    
    useEffect(()=>{
        getArtikel()
        setContent()
    }, [])

    const setAddArtikelPage = () => {
        navigate('/admin-buat-artikel')
    }

    const setDetailArtikelAdmin = () => {
        navigate('/admin-lihat-artikel')
    }

    return (
        <div className='h-[34rem] grid grid-cols-1 gap-4 pl-8 pt-4 pr-8 items-center'>
            
            {/* artikel when loading */}
            {loading &&             
                <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4 self-start">
                    
                    {/* photo */}
                    <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                    </div>

                    {/* description */}
                    <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                        <div className='w-full flex flex-col gap-0.5'>
                            <div className='w-full'>
                                <h1 className='font-bold text-3xl'>Loading...</h1>
                            </div>

                            <div className='w-full'>
                                <h6 className='text-xs text-slate-300'>Loading...</h6>
                            </div>

                            <div className='w-full'>
                                <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                                <h1>Baca Selengkapnya</h1>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {/* artikel when not loading */}
            {!loading && <>
                
                {artikel.map((u, id)=>(

                    <div key={id} className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4 self-start">
                                        
                        {/* photo */}
                        <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">
                            <img src={`http://127.0.0.1:8000/storage/${u.foto}`} className="m-auto" alt="" />
                        </div>

                        {/* description */}
                        <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                            <div className='w-full flex flex-col gap-0.5'>
                                <div className='w-full'>
                                    <h1 className='font-bold text-3xl'>{u.judul}</h1>
                                </div>

                                <div className='w-full'>
                                    <h6 className='text-xs text-slate-300'>{u.created_at.substring(0,10)}</h6>
                                </div>

                                <div className='w-full'>
                                    <p className='text-xs text-slate-300'>{u.content.substring(0,255)}...</p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div onClick={() => {setDetailArtikelAdmin(true); setContent(u); }} className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                                    <h1>Baca Selengkapnya</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </>}

            {/* add artikel */}
            <div onClick={setAddArtikelPage} className="absolute bottom-16 end-12 w-14 h-14 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-full flex cursor-pointer">
                <img src={Add} className="h-[3rem] w-[3rem] mx-auto my-auto" />
            </div>
            
        </div>
    )
}
