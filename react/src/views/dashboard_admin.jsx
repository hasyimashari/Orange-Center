
import { useNavigate } from "react-router-dom"
import artikel_img from "../assets/Artikel_db.png"
import permintaan_img from "../assets/Permintaan_db.png"
import Arrow_right from "../assets/arrow_right.png"

export default function dashboard_admin() {

    const navigate = useNavigate()

    const setPermintaanPage = () => {
        navigate('/admin-permintaan')
    }

return (
    <>
        <div className='h-[34rem] flex items-center justify-center gap-10'>

            {/* content */}
            <div onClick={setPermintaanPage} className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={permintaan_img} className="w-32 h-32" />
                <h1 className="font-bold">Pengajuan Permintaan</h1>
                <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm mt-2">Cek Permintaan <img src={Arrow_right}/></button>
            </div>
            
            <div className='w-80 h-80 rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)] flex flex-col items-center gap-y-2 text-center py-6 border-2'>
                <img src={artikel_img} className="w-32 h-32" />
                <h1 className="font-bold">Artikel</h1>
                <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex items-center justify-center gap-2 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
            </div>
        </div>
    </>
)
}
