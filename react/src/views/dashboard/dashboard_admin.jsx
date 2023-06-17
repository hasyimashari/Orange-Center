import { useNavigate } from "react-router-dom"

import artikel_img from "../../assets/Artikel_db.png"
import permintaan_img from "../../assets/Permintaan_db.png"
import Arrow_right from "../../assets/arrow_right.png"

export default function dashboard_admin() {

    const navigate = useNavigate()

    const setPermintaanPage = () => {
        navigate('/admin-permintaan')
    }

    const setArtikelPage = () => {
        navigate('/admin-artikel')
    }

return (
    <>
        <div className='h-[34rem] flex sm:flex-col sm:h-fit sm:py-10 items-center justify-center gap-10'>

            {/* cards fitur */}
            <div onClick={setPermintaanPage} className='w-80 h-80 sm:w-64 sm:h-64 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2.5 text-center justify-center py-6 border-2'>
                <img src={permintaan_img} className="w-32 h-32 sm:w-24 sm:h-24" />
                <h1 className="font-bold sm:text-sm">Pengajuan Permintaan</h1>
                <p className="text-sm px-1 sm:text-xs">Jual atau Dapatkan Beragam Jenis Jeruk yang Berkualitas</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm sm:text-xs sm:py-1">Cek Permintaan <img src={Arrow_right}/></button>
            </div>
            
            <div onClick={setArtikelPage} className='w-80 h-80 sm:w-64 sm:h-64 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-3 text-center justify-center py-6 border-2'>
                <img src={artikel_img} className="w-32 h-32 sm:w-24 sm:h-24" />
                <h1 className="font-bold sm:text-sm">Artikel</h1>
                <p className="text-sm px-1 sm:text-xs">Dapatkan Informasi Seputar Jeruk Secara Lengkap</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm sm:text-xs sm:py-1">Baca <img  src={Arrow_right}/></button>
            </div>
        </div>
    </>
)
}
