import Icon from "../assets/logo.png"
import Bg_image from "../assets/bg_db.png"

import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid"
import { BookOpenIcon } from "@heroicons/react/20/solid"
import { UserCircleIcon } from "@heroicons/react/20/solid"

import { Navigate, Outlet } from "react-router-dom"
import {Link} from 'react-router-dom';

import { useStateContext } from "../context/ContextProvider"

export default function Layout_dashboard() {

    const {user, token} = useStateContext();
    if (!token) {
        return <Navigate to='/login'/>
    }

    return (
    <>

    <img src={Bg_image} className="absolute w-full h-screen object-cover brightness-90"/>
    <div className='relative w-full h-screen flex flex-wrap'>
        <ul className='flex flex-col w-[6%] h-screen pt-32 text-white '>
            <li> 
                <Link to='/profil'>
                <UserCircleIcon className='h-8 w-8 my-8 mx-6 '/>
                </Link>
            </li>
            <li>
                <ChatBubbleBottomCenterTextIcon className='h-8 w-8 my-8 mx-6 '/>
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
            <Outlet />

        </div>
    </div>
    </>
)
}
