import { useRef, useState } from "react"
import { useStateContext } from "../context/ContextProvider.jsx";
import {Link, useNavigate} from 'react-router-dom';

import Arrow_right from "../assets/arrow_right.png"
import axiosClient from  "../axios-client"

export default function loginPage() {

    const navigate = useNavigate();

    const [errors, setErrors] = useState(null)
    const {setUser, setToken, setRole, loading, setLoading} = useStateContext()

    const emailref = useRef();
    const passwrodref = useRef();
    
    const masuk = (ev) => {

        ev.preventDefault()

        const dataLogin = {
            email: emailref.current.value,
            password: passwrodref.current.value,
        }

        setErrors(null)
        setLoading(true)
        axiosClient.post('/login', dataLogin)
        .then((response) => {
            setUser(response.data.user)
            setToken(response.data.token)
            setRole(response.data.role)
            setLoading(false)
        })

        .catch(error => {
            const response = error.response;
            setLoading(false)
            if (response && response.status === 422) {
                if (response.data.errors) {
                    setErrors({message: "isi semua data dengan benar" })
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
        <form onSubmit={masuk} action="" className="w-full px-16">
            <h1 className="font-bold text-[2.8rem] my-4">Masuk</h1>

            {/* errors message */}
            {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key]}</p>
                ))}
            </div>
            }

            <div className="my-2">
                <label htmlFor="emac" className="text-base"> Email</label>
                <input ref={emailref}
                className="h-[2rem] w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emailname" id="emailid" maxLength={30}/>
            </div>
            <div className="my-2">
                <label htmlFor="pwac" className="text-base">Passwords</label>
                <input ref={passwrodref}
                className="h-[2rem] w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="password" name="pwname" id="pwid" maxLength={12}/>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 text-base">
                {loading?
                    <button className="w-32 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-default grayscale">
                        Loading...
                    </button>
                        :
                    <button type="submit" className="w-32 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">
                        Masuk
                        <img src={Arrow_right} />
                    </button>
                }
                <p className="mt-6">sudah punya akun?  
                <span onClick={setRegistrationPage} className="text-[#4E944F] font-bold cursor-pointer mx-2">
                    Daftar
                </span> </p>
            </div>
        </form>
    </>
)
}