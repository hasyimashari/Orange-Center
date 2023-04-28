
import Bg_image from "../assets/bg_logres.png";
import Icon from "../assets/logo.png";

import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider";

export default function Layout_signinup() {

    const {role} = useStateContext();
    if (role==="adm") {
        return <Navigate to='/admin-dashboard'/>
    } else if (role==="pkr") {
        return <Navigate to='/pakar-dashboard'/>
    } else if (role==="usr") {
        return <Navigate to='/user-dashboard'/>
    }

    return (
        <div className='relative w-full min-h-screen bg-[url("src/assets/bg_logres.png")] bg-center bg-cover flex flex-col items-center justify-center'>
            <div className='relative w-8/12 bg-white rounded-3xl flex shadow-[2px_6px_25px_-4px_rgba(0,0,0,0.25)]'>
                <div className='w-5/12 p-2 m-5 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-3xl shadow-[2px_6px_4px_rgba(0,0,0,0.25)] text-white'>
                    <ul className='flex flex-col gap-5 py-20'>
                        <li className="mx-auto text-[44px]  font-bold">OrangeCenter</li>
                        <li><img src={Icon} className="drop-shadow-[-8px_6px_8px_rgba(0,0,0,0.25)] w-72 mx-auto my-auto"/></li>
                        <li className="mx-auto text-xl">deksripsi singkat web</li>
                    </ul>
                </div>

                <Outlet/>

            </div>
        </div>
    )
}
