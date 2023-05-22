import Arrow_right from "../assets/arrow_right.png"
import axiosClient from  "../axios-client"

import { useRef, useState } from "react"
import { useStateContext } from "../context/ContextProvider.jsx";
import {Link, useNavigate} from 'react-router-dom';

export default function login() {

    const navigate = useNavigate();

    const emailref = useRef();
    const passwrodref = useRef();
    
    const [errors, setErrors] = useState(null)
    const {setUser, setToken, setRole} = useStateContext()
    
    const clickLogin = (ev) => {

        ev.preventDefault()

        const payload = {
            email: emailref.current.value,
            password: passwrodref.current.value,
        }

        setErrors(null)
        axiosClient.post('/login', payload)
        .then((response) => {
            setUser(response.data.user)
            setToken(response.data.token)
            setRole(response.data.role)
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                if (response.data.errors) {
                    setErrors(response.data.errors)
                } else {
                    setErrors({email: [response.data.message]})
                }
            }
        })
    }

    const setRegistrationPage = () => {
        navigate('/register')
    }

return (
    <>
        {/* form */}
        <form onSubmit={clickLogin} action="" className="w-full px-16">
            <h1 className="font-bold text-[2.8rem] my-4">Masuk</h1>

            {/* error */}
            {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
            }

            {/* form */}
            <div className="my-2">
                <label htmlFor="emac"> Email</label>
                <input ref={emailref}
                className="h-[2rem] w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emailname" id="emailid" maxLength={30}/>
            </div>
            <div className="my-2">
                <label htmlFor="pwac">Passwords</label>
                <input ref={passwrodref}
                className="h-[2rem] w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="password" name="pwname" id="pwid" maxLength={12}/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button type="submit" className="w-5/12 px-7 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 mt-6 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white">
                    MASUK
                    <img src={Arrow_right} />
                </button>
                <p className="mt-6">sudah punya akun?  
                <span onClick={setRegistrationPage} className="text-[#4E944F] font-bold cursor-pointer mx-2">
                    DAFTAR 
                </span> </p>
            </div>
        </form>
    </>
)
}