import React, { useEffect, useState } from 'react'

import Edit from "../../assets/Edit 1.png"
import Delete from "../../assets/Delete 1.png"

import Decision_artikel from './decision_artikel'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

export default function detailArtikelAdmin() {

    const navigate = useNavigate()

    const [deleteDC, setDeleteDC] = useState(false)
    const {loading, setLoading, setContent} = useStateContext()

    const content = JSON.parse(localStorage.getItem("CONTENT"))

    const setEditArtikelPage = () => {
        navigate('/admin-edit-artikel')
    }

    const openDeleteDC = () => {
        setDeleteDC(true)
    }

    const closeDeleteDC = () => {
        setDeleteDC(false)
    }

    const onDelete = () => {
        setContent()
        navigate('/admin-artikel')
    }

    return (
        <div className='h-[34rem] flex pl-8 pt-4 pr-8 items-center justify-center'>

                <div className='w-full h-full flex gap-4 sm:flex-col sm:items-center sm:justify-center'>
                    {/* gambar artikel */}
                    <div className='h-full w-3/12 sm:w-6/12 flex flex-col gap-0.5'>

                        <div className="w-full h-[55%] sm:h-[80%] sm:p-8 bg-slate-300 rounded-lg flex p-2">
                            <img src={`http://127.0.0.1:8000/storage/${content.foto}`} className="m-auto max-w-full max-h-full" alt="" />
                        </div>

                        <div className='w-full'>
                            <h1 className='font-bold text-3xl sm:text-xl'>{content.judul}</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-gray-500'>{content.created_at.substring(0,10)}</h6>
                        </div>
                    </div>

                    {/* isi artikel */}
                    <div className='h-full w-9/12 sm:w-10/12 overflow-y-auto scrollbar-hide whitespace-pre-line pb-2'>
                        {content.content}
                    </div>

                    {/* delete */}
                    <div onClick={openDeleteDC} className="absolute bottom-36 end-12 w-14 h-14 bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 rounded-full flex cursor-pointer">
                        <img src={Delete} className="h-[2rem] w-[2rem] mx-auto my-auto" />
                    </div>

                    {/* edit */}
                    <div onClick={setEditArtikelPage} className="absolute bottom-16 end-12 w-14 h-14 bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% hover:brightness-90 rounded-full flex cursor-pointer">
                        <img src={Edit} className="h-[2rem] w-[2rem] mx-auto my-auto" />
                    </div>
                </div>
    

            {/* {!content.length && 
                <div className='w-full h-full flex gap-4'>

                </div>
            } */}

            <Decision_artikel onCloseDc={closeDeleteDC} visibleDc={deleteDC} nilaiDc={content} onDelete={onDelete}/>
        </div>
    )
}
