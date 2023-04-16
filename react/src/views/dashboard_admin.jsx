import Icon from "../assets/logo.png"
import Bg_image from "../assets/bg_db.png"
import {BookOpenIcon} from "@heroicons/react/20/solid"
import {UsersIcon} from "@heroicons/react/20/solid"
import {UserCircleIcon} from "@heroicons/react/20/solid"
import {Link} from 'react-router-dom';

import artikel_img from "../assets/Artikel_db.png"
import permintaan_img from "../assets/Permintaan_db.png"
import Arrow_right from "../assets/arrow_right.png"

import {useStateContext} from "../context/ContextProvider";
import { Navigate } from "react-router-dom"

export default function DashboardAd() {

    if (!token) {
        return <Navigate to='/login'/>
    }

return (
    <>
    <img src={Bg_image} className="absolute w-full h-screen object-cover brightness-90"/>
    <div className='relative w-full h-screen flex flex-wrap'>
        <ul className='flex flex-col w-[6%] h-screen pt-32 text-white'>
            <li> 
                <Link to='/login'>
                <UserCircleIcon className='h-8 w-8 my-8 mx-6 '/>
                </Link>
            </li>
            <li>
                <UsersIcon className='h-8 w-8 my-8 mx-6 '/>
            </li>
            <li>
                <BookOpenIcon className='h-8 w-8 my-8 mx-6 '/>
            </li>
        </ul>

        <div className="w-[94%] h-screen ">
            <div className="h-1/5 flex flex-row items-center">
                <img src={Icon} className="drop-shadow-xl w-32" />
                <p className="text-5xl text-white font-bold pt-6" >OrangeCenter</p>
            </div>

            <div className="h-4/5 bg-white rounded-tl-3xl flex items-center">
                <div className="bg-white border-2 w-72 h-80 mx-auto rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)]">
                    <div className="flex flex-col items-center gap-y-2 text-center py-6">
                        <img src={artikel_img} className="w-32 h-32" />
                        <h1 className="font-bold">Artikel</h1>
                        <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                        <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex flex-row justify-between p-12 py-2 text-sm">Baca <img  src={Arrow_right}/></button>
                    </div>
                </div>

                <div className="bg-white border-2 w-72 h-80 mx-auto rounded-3xl shadow-[-6px_6px_0px_3px_rgba(78,148,79,0.5)]">
                    <div className="flex flex-col items-center gap-y-2 text-center py-6">
                        <img src={permintaan_img} className="w-32 h-32" />
                        <h1 className="font-bold">Pengajuan Permintaan</h1>
                        <p className="text-sm px-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit a nunc quis pharetra.</p>
                        <button className="bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 w-7/12 text-white rounded-xl flex flex-row justify-between p-3 py-2 text-sm">Cek Permintaan <img src={Arrow_right}/></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
)
}
