import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../../context/ContextProvider"
import axiosClient from "../../axios-client"
import Detail from "./detail_permintaan"

import Person from "../../assets/Person 1.png"
import Tambah_permintaan from "./tambah_permintaan"
import Add from "../../assets/Add 1.png"
import PemintaanNull from "../../assets/Permintaan null.png"

export default function permintaanPageUser() {
    
    const navigate = useNavigate()

    const [detail, setDetail] = useState(false)
    const [buatPermintaan, setBuatPermintaan] = useState(false)
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

    const showPopUpFormPermintaan = () => {
        setBuatPermintaan(true)
    }

    const closePopUpFormPermintaan = () => {
        setBuatPermintaan(false)
        getPermintaan()
    }

    const setPermintaanSaya = () => {
        navigate('/user-permintaan-saya')
    }

return (
    <>
        <div className='h-[34rem] flex flex-col gap-8 pl-4 pt-4 justify-center'>

            {/* permintaan header */}
            <div className="mx-4 h-24 bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-xl p-5">
                <div className="w-full h-full flex px-4">
                    <div className="w-4/12 text-lg text-white h-full pr-40 sm:pr-0 sm:text-sm">
                    <h1>Butuh Jenis Jeruk Tertentu? <br/> Ajukan Sekarang</h1>
                    </div>

                    <div className="w-8/12 h-full flex gap-4">
                        {loading?
                            <>                            
                                <div className="w-1/2 h-full bg-white rounded-lg flex items-center justify-center text-lg sm:text-xs font-bold text-[#4E944F] gap-2  sm:p-1 brightness-90 cursor-default grayscale">
                                    <img className="bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-full w-8 p-1 sm:w-6" src={Person} alt="" />
                                    <h1>Permintaan Saya</h1>
                                </div>
                                <div className="w-1/2 h-full bg-white rounded-lg flex items-center justify-center text-lg sm:text-xs font-bold text-[#4E944F] gap-2  sm:p-1 brightness-90 cursor-default grayscale">
                                    <img className="bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-full w-8 sm:w-6" src={Add} alt="" />
                                    <h1>Ajukan Permintaan</h1>
                                </div>
                            </>
                                :
                            <>                            
                                <div onClick={setPermintaanSaya} className="w-1/2 h-full bg-white rounded-lg flex items-center justify-center text-lg sm:text-xs font-bold text-[#4E944F] gap-2  sm:p-1 hover:brightness-90 cursor-pointer">
                                    <img className="bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-full w-8 p-1 sm:w-6" src={Person} alt="" />
                                    <h1>Permintaan Saya</h1>
                                </div>
                                <div onClick={showPopUpFormPermintaan} className="w-1/2 h-full bg-white rounded-lg flex items-center justify-center text-lg sm:text-xs font-bold text-[#4E944F] gap-2  sm:p-1 hover:brightness-90 cursor-pointer">
                                    <img className="bg-gradient-to-tr from-[#4E944F] from-4% to-[#B4E197] to-90% rounded-full w-8 sm:w-6" src={Add} alt="" />
                                    <h1>Ajukan Permintaan</h1>
                                </div>
                            </>

                        }
                    </div>

                </div>
            </div>

            {/* permintaan */}
            <div className="w-ful h-full grid grid-cols-3 sm:grid-cols-1 sm:px-14 sm:pb-2 sm:gap-6 gap-4 mx-4 justify-center overflow-y-auto scrollbar-hide scroll-smooth">

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
                                    <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold brightness-90 grayscale cursor-default">
                                        <h1>Loading...</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {/* when not loading */}
                    {!loading && <>
                    
                        {permintaan.map((u, id)=>(

                            <div key={id} className="h-32 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl flex p-1.5 gap-2">
                                {/* photo */}
                                <div className="w-1/3 h-full bg-slate-300 rounded-lg flex">
                                    <img src={`http://127.0.0.1:8000/storage/${u.foto_produk}`} className="m-auto" alt="" />
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
        <Tambah_permintaan onClose={closePopUpFormPermintaan} visible={buatPermintaan}/>
    </>
)
}
