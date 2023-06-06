import React, { useEffect, useRef, useState } from 'react'

import Cancel from "../../assets/cancel.png"
import Arrow_right from "../../assets/arrow_right.png"

import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import axiosClient from '../../axios-client'

export default function editArtikelPage() {

    const navigate =  useNavigate()

    const {user, setUser, loading, setLoading, setContent} = useStateContext()

    const judulref = useRef()
    const isiartikelref = useRef()

    const [image, setImage] = useState()
    const [imagePre, setImagePre] = useState()
    const [errors, setErrors] = useState()
    
    const content = JSON.parse(localStorage.getItem("CONTENT"))

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
            setImagePre(URL.createObjectURL(event.target.files[0]))
        }
    }
    
    const setLihatArtikelAdminPage = () => {
        navigate('/admin-lihat-artikel')
    }

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    const ubah = (ev) => {

        ev.preventDefault()
        const payload = {
            id_admin : user.id_admin,
            judul: judulref.current.value,
            foto: image,
            content: isiartikelref.current.value.replace('\n\n', '\n')
        }

        setLoading(true)
        axiosClient.post(`/edit_artikel/${content.id_artikel}`, payload, {headers:{'Content-Type':"multipart/form-data"}})
        .then((response)=>{
            setLoading(false)
            setContent()
            setContent(response.data.data)
            setLihatArtikelAdminPage()
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                setErrors({message: "isi semua data dengan benar" })
                setLoading(false)            }
        })
    }


    return (
        <div className='h-[34rem] pl-8 pt-4 flex p-4'>
            <div className='w-full h-full flex flex-col'>

                {/* artikel */}
                <div className='w-full h-[85%] flex gap-4'>

                    <div className='h-full w-[60%] flex flex-col justify-between'>
                        <div className='w-full'>
                            <input defaultValue={content.judul} ref={judulref}
                            className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" maxLength={20} placeholder='judul artikel'/>
                        </div>

                        <div className='w-full'>
                            <textarea name="" id="" rows="18" defaultValue={content.content} ref={isiartikelref}
                            className='bg-green-100 w-full rounded-lg resize-none pl-2 py-1 text-sm' draggable={false} placeholder='isi artikel'></textarea>
                        </div>
                    </div>

                    <div className='h-full w-[40%] flex flex-col justify-between pb-1.5'>
                        
                        <div className='w-full h-[24rem] rounded-lg border-none bg-green-100 flex flex-col items-center justify-center p-2'>
                            <img className='max-w-full max-h-full rounded-lg' src={imagePre} alt="isi foto kembali"/>
                        </div>

                        <div className='flex items-center justify-center w-full rounded-xl'>
                            <input type="file" onChange={onImageChange}
                            className='h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100' name="" id="" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>

                </div>

                <div className='w-full h-[15%] flex justify-center items-center'>
                    <div className="w-full flex justify-end gap-4 text-sm">

                        {/* errors */}
                        {errors && <div className="bg-red-500 w-fit rounded py-2 px-3 font-bold">
                            {Object.keys(errors).map(key => (
                                <p key={key}>{errors[key]}</p>
                            ))}
                        </div>
                        }

                        <button onClick={setLihatArtikelAdminPage} className="text-sm w-32 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                            Kembali 
                            <img src={Cancel}/>
                        </button>
                        {loading?
                            <button className="text-sm w-32 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-default grayscale">
                                Loading...
                            </button>
                                :
                            <button onClick={ubah} className="text-sm w-32 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
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
