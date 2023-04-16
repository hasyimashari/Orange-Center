
import Bg_image from "../assets/bg_logres.png";
import Icon from "../assets/logo.png";

import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../context/ContextProvider";

export default function Layout_signinup() {

    const {token} = useStateContext();
    if (token) {
        return <Navigate to='/user'/>
    }

return (
    <>
    <img src={Bg_image} className="absolute w-full h-screen object-cover brightness-90"/>
    <div className='relative w-full h-screen flex items-center justify-center bg-transparent'>

        <div className="relative w-8/12 h-5/6 p-3 bg-slate-100 flex rounded-3xl shadow-xl">
            <div className="w-5/12 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-3xl shadow-md text-white flex flex-col justify-center" >
                <h1 className="mx-auto text-4xl font-bold mt-10">OrangeCenter</h1>
                <img src={Icon} className="drop-shadow-xl w-72 mx-auto my-auto"/>
                <p className="mx-auto text-xl mb-20">deskripsi singkat web</p>
            </div>

            <Outlet />
        </div>
    </div>
    </>
)
}
