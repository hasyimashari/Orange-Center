import { useEffect, useState } from "react"
import { useStateContext } from "../../context/ContextProvider"
import axiosClient from "../../axios-client"
import Detail from "./detail_permintaan"

import PemintaanNull from "../../assets/Permintaan null.png"

export default function permintaanPageAdmin() {

    const [detail, setDetail] = useState(false)
    const [permintaan, setPermintaan] = useState([])
    const {loading, setLoading} = useStateContext()
    const [nilai, setNilai] = useState()

    useEffect(()=>{
        axiosClient.post('/sendReminder'),
        axiosClient.put('/autoDelete')
    }, [])

    const getPermintaan = () => {
        setLoading(true)
        axiosClient.get('/permintaan')
        .then((response)=>{
            setPermintaan(response.data.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getPermintaan();
    }, [])

    const showPopUpDetailPermintaan = () => {
        setDetail(true)
    }

    const closePopUpDetailPermintaan = () => {
        setDetail(false)
    }

    return (
        <>
        <div className='h-[34rem] flex flex-col gap-8 pl-4 pt-4 justify-center'>

            {/* permintaan header */}
            <div className="mx-4 h-24 bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-xl p-5">
                <div className="w-full h-full flex px-4">
                    <div className="w-1/2 text-lg text-white h-full pr-40">
                        <h1>Butuh Jenis Jeruk Tertentu? <br/> Ajukan Sekarang</h1>
                    </div>
                </div>
            </div>

            {/* permintaan */}
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
                                    <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold ">
                                        <h1>Loading...</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {/* when not loadibg */}
                    {!loading && <>
                    
                        {permintaan.map((u, id)=>(

                            <div key={id} className="h-32 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl flex p-1.5 gap-2">
                                {/* photo */}
                                <div className="w-1/3 h-full bg-slate-300 rounded-lg flex p-2">
                                    <img src={`http://127.0.0.1:8000/storage/${u.foto_produk}`} className="m-auto max-w-full max-h-full" alt="" />
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

                                    <div onClick={() => {showPopUpDetailPermintaan(true); setNilai(u);}}  className="w-full h-1/4">
                                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                                            <h1>Lihat Detail</h1>
                                        </div>
                                    </div>
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

        <Detail onClose={closePopUpDetailPermintaan} visible={detail} nilai={nilai}/>
    </>
    )
}
