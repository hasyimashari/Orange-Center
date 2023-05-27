import {Link, useNavigate} from "react-router-dom"
import { useRef, useState } from "react"
import axiosClient from  "../axios-client"
import Arrow_right from "../assets/arrow_right.png"
import { useStateContext } from "../context/ContextProvider";

export default function Register() {

    const navigate = useNavigate();

    const namaref = useRef();
    const usernameref = useRef();
    const jeniskelaminref = useRef();
    const tanggallahirref = useRef();
    const nohpref = useRef();
    const asalref = useRef();
    const emailref = useRef();
    const passwrodref = useRef();
    
    const [errors, setErrors] = useState(null)
    const {loading, setLoading} = useStateContext()
    
    const clickRegistration = (ev) => {

        ev.preventDefault()
        const payload = {
            nama_lengkap: namaref.current.value,
            username: usernameref.current.value,
            jenis_kelamin: jeniskelaminref.current.value,
            tanggal_lahir: tanggallahirref.current.value,
            no_hp: nohpref.current.value,
            asal: asalref.current.value,
            email: emailref.current.value,
            password: passwrodref.current.value,
        }

        setLoading(true)
        axiosClient.post('/register', payload)
        .then(() => {
            setLoading(false)
            navigate('/login')
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors)
                setLoading(false)
            }
        })
    }

    const setLoginPage = () => {
        navigate('/login')
    }

return (
    <>
        {/* form */}
        <form onSubmit={clickRegistration} className="w-full px-16">
                <h1 className="font-bold text-[2.25rem]">Daftar</h1>

                {/* errors */}
                {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
                }

                <label className="text-sm">Nama Lengkap</label>
                <input ref={namaref} 
                className="h-[2rem] w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="namaname" id="namaid" maxLength={30}/>

                <label className="text-sm">Username</label>
                <input ref={usernameref} 
                className="h-[2rem] w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="unname" id="unid" maxLength={12}/>

                <div className="flex flex-row gap-1">
                    <div className="w-1/2">
                        <label className="text-sm">Jenis Kelamin</label>
                        <select ref={jeniskelaminref} 
                        className="text-sm h-[2rem] w-full pl-2 py-1 border-none rounded-lg bg-green-100" name="kelaminname" id="kelaminid">
                            <option value={""}>Pilih</option>
                            <option value={1}>Laki-laki</option>
                            <option value={2}>Perempuan</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm" >Tanggal Lahir</label>
                        <input ref={tanggallahirref} 
                        className="text-sm h-[2rem] w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="date" name="ttlname" id="ttlname" />
                    </div>
                </div>
                <div className="flex flex-row gap-1">
                    <div className="w-1/2">
                        <label className="text-sm">Nomor Hp</label>
                        <input ref={nohpref}
                        className="text-sm h-[2rem] w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="tel" name="nohpname" id="nohpid" maxLength={15}/>
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm">Asal</label>
                        <input ref={asalref} 
                        className="text-sm h-[2rem] w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="text" name="asalname" id="asalid" maxLength={15}/>
                    </div>
                </div>

                <label className="py-1">Email</label>
                <input ref={emailref}
                className="h-[2rem] w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emailname" id="emailid" maxLength={30}/>

                <label className="text-sm">Password</label>
                <input ref={passwrodref}
                className="h-[2rem] w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="password" name="pwname" id="pwid" />

                <div className="flex justify-between text-sm my-6">
                    <p className="py-2.5">sudah punya akun?  
                    <span onClick={setLoginPage} className="text-[#4E944F] font-bold cursor-pointer mx-2">
                        MASUK 
                    </span> </p>
                    {loading?
                        <button type="submit" className="text-sm w-4/12 px-6 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white cursor-pointer">Loading...</button>:
                        <button type="submit" className="text-sm w-4/12 px-6 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white cursor-pointer">Daftar <img src={Arrow_right}/></button>
                    }
                </div>
        </form>
    </>
)
}