import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../../context/ContextProvider'
import axiosClient from '../../axios-client'

import Cancel from "../../assets/cancel.png"
import Arrow_right from "../../assets/arrow_right.png"

export default function tambah_permintaan({visible, onClose}) {

    if (!visible) return null

    const namabarangref = useRef()
    const deskrisiref = useRef()
    const budgetref = useRef()
    const kebutuhanref = useRef()

    const {user, setUser} = useStateContext()
    const [errors, setErrors] = useState()
    const [image, setImage] = useState()
    const [imagePre, steImagePre] = useState()
    const [loading, setLoading] = useState(false)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        setImage(event.target.files[0]);
        steImagePre(URL.createObjectURL(event.target.files[0]))
        }
    }

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    const tambahPermintaan = (ev) => {
        
        ev.preventDefault()
        const dataPermintaan = {
            id_user: user.id_user,
            foto_produk: image,
            nama_produk: namabarangref.current.value,
            deskripsi: deskrisiref.current.value,
            budget: budgetref.current.value,
            stock: kebutuhanref.current.value
        }

        setLoading(true)
        axiosClient.post('/buatPermintaan', dataPermintaan, {headers:{'Content-Type':"multipart/form-data"}})
        .then(()=>{
            onClose(true)
            setLoading(false)
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                setErrors({message: "isi semua data dengan benar" })
                setLoading(false)
            }
        })
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            
            <div className='bg-white w-96 min-h-[32rem] sm:w-[22rem] sm:min-h-[30rem] h-fit rounded-xl flex p-4 px-8 items-center justify-center'>
                
                <div className='w-full h-full flex flex-col gap-2 items-center'>

                    {/* errors */}
                    {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key]}</p>
                        ))}
                    </div>
                    }

                    {/* form */}
                    <div className='flex items-center justify-center w-full rounded-xl'>
                        <input type="file" onChange={onImageChange}
                        className='h-8 w-full px-2 text-sm py-1 sm:h-6 sm:text-xs border-none rounded-lg bg-green-100' name="" id="" accept=".png, .jpg, .jpeg" />
                    </div>
                    
                    <div className='w-full h-40 rounded-lg border-none bg-green-100 flex flex-col items-center justify-center p-2'>
                        <img className='max-w-full max-h-full rounded-lg sm:text-xs' alt="preview image" src={imagePre}/>
                    </div>
                    
                    <div className='w-full'>
                        <label className="w-full text-sm text-left">Nama Barang</label>
                        <input ref={namabarangref}
                        className="h-8 w-full pl-2 text-sm py-1 sm:h-6 sm:text-xs border-none rounded-lg bg-green-100" type="text" maxLength={20} placeholder='nama barang'/>
                    </div>

                    <div className='w-full'>
                        <label className="w-full text-sm text-left">Deskripsi</label>
                        <textarea name="" id="" rows="4" ref={deskrisiref}
                        className='bg-green-100 w-full rounded-lg resize-none pl-2 py-1 text-sm sm:text-xs' draggable={false} placeholder='deskripsi barang'></textarea>
                    </div>

                    <div className="w-full flex flex-row">
                        <div className="w-1/2 mr-1">
                            <label className="text-sm">Budget (Rp/Kg)</label>
                            <input ref={budgetref} type='text'
                            className="h-8 w-full pl-2 text-sm py-1 sm:h-6 sm:text-xs border-none rounded-lg bg-green-100" maxLength={7} placeholder='10000'/>
                        </div>
                        <div className="w-1/2 mr-1">
                            <label className="text-sm">Kebutuhan (Kg)</label>
                            <input ref={kebutuhanref} type='text'
                            className="h-8 w-full pl-2 text-sm py-1 sm:h-6 sm:text-xs border-none rounded-lg bg-green-100" maxLength={7} placeholder='100'/>
                        </div>
                    </div>

                    <div className="w-full flex justify-end gap-4 mt-2 text-sm">
                        <button onClick={onClose} className="text-sm w-4/12 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                            Batal 
                            <img src={Cancel}/>
                        </button>
                        {loading?
                            <button className="text-sm w-4/12 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-default grayscale">
                                Loading...
                            </button>
                                :
                            <button onClick={tambahPermintaan} className="text-sm w-4/12 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                                Tambah
                                <img src={Arrow_right}/>
                            </button>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
