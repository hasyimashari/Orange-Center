
import Icon from "../assets/logo.png";

import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider";

export default function signin_up_layout() {

    const {role} = useStateContext();
    if (role==="adm") {
        return <Navigate to='/admin-dashboard'/>
    } else if (role==="pkr") {
        return <Navigate to='/pakar-dashboard'/>
    } else if (role==="usr") {
        return <Navigate to='/user-dashboard'/>
    }

    return (
        <div className='relative w-full h-screen max-h-screen bg-[url("src/assets/bg_logres.png")] bg-center bg-cover flex flex-col items-center py-14'>
            
            {/* content */}
            <div className='relative w-8/12 h-[35rem] bg-white rounded-3xl flex shadow-[2px_6px_25px_-4px_rgba(0,0,0,0.25)]'>

                {/* icon */}
                <div className='w-5/12 p-2 m-5 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-3xl shadow-[2px_6px_4px_rgba(0,0,0,0.25)] text-white flex flex-col items-center justify-center'>
                    <ul className='flex flex-col items-center justify-center gap-5 py-16'>
                        <li className="text-[2.8rem] font-bold">OrangeCenter</li>
                        <li><img src={Icon} className="drop-shadow-[-8px_6px_8px_rgba(0,0,0,0.25)] w-72"/></li>
                        <li className="text-base text-center">Temukan Fakta dan Tips Tentang Jeruk Melalui Pakar Terpecaya</li>
                    </ul>
                </div>

                <div className="w-7/12 flex items-center"> 
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}
