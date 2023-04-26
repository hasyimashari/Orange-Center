import {Link, useNavigate} from "react-router-dom"
import { useRef, useState } from "react"
import axiosClient from  "../axios-client"
import Arrow_right from "../assets/arrow_right.png"
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Register() {

    const namaref = useRef();
    const usernameref = useRef();
    const jeniskelaminref = useRef();
    const tanggallahirref = useRef();
    const nohpref = useRef();
    const alamatref = useRef();
    const emailref = useRef();
    const passwrodref = useRef();
    
    const [errors, setErrors] = useState(null)
    const {setUser, setToken} = useStateContext()
    
    const onSubmit = (ev) => {

        ev.preventDefault()
        const payload = {
            nama_lengkap: namaref.current.value,
            username: usernameref.current.value,
            jenis_kelamin: jeniskelaminref.current.value,
            tanggal_lahir: tanggallahirref.current.value,
            no_hp: nohpref.current.value,
            alamat: alamatref.current.value,
            email: emailref.current.value,
            password: passwrodref.current.value,
        }

        axiosClient.post('/register', payload)
        .then((response) => {
            setUser(response.data.pengguna)
            setToken(response.data.token_id)
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors)
            }
        })
    }

return (
    <>
        <div className="w-7/12 flex items-center"> 
        <form onSubmit={onSubmit} className="w-full px-16">
                <h1 className="font-bold text-4xl">Daftar</h1>

                {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
                }

                <label className="text-sm">Nama Lengkap</label>
                <input ref={namaref} 
                className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="namalengkap" id="nama" maxLength={30}/>

                <label className="text-sm">Username</label>
                <input ref={usernameref} 
                className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="username" id="uname" maxLength={12}/>

                <div className="flex flex-row">
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Jenis Kelamin</label>
                        <select ref={jeniskelaminref} 
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" name="jeniskelamin" id="jenis">
                            <option value={""}>Pilih</option>
                            <option value={1}>Laki-laki</option>
                            <option value={2}>Perempuan</option>
                        </select>
                    </div>
                    <div className="w-1/2 mr-1">
                        <label className="text-sm" >Tanggal Lahir</label>
                        <input ref={tanggallahirref} 
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="date" name="tanggallahir" id="tanggal" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Nomor Hp</label>
                        <input ref={nohpref}
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="tel" name="nomorhp" id="nohp" maxLength={15}/>
                    </div>
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Alamat</label>
                        <input ref={alamatref} 
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="text" name="alamatuser" id="alamat" maxLength={50}/>
                    </div>
                </div>

                <label className="py-1">Email</label>
                <input ref={emailref}
                className="h-8 w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emailoc" id="emaoc" maxLength={30}/>

                <label className="text-sm">Password</label>
                <input ref={passwrodref}
                className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="password" name="passwordcon" id="pwcon" />

                <div className="flex justify-between text-sm my-6">
                    <p className="py-2">Sudah Memiliki akun?      
                        <span className="text-[#4E944F] font-bold cursor-pointer mx-1">
                            <Link to='/login'>
                                MASUK
                            </Link>
                        </span>
                        </p>
                    <button type="submit" className="text-sm w-4/12 p-5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white cursor-pointer">Daftar <img src={Arrow_right}/></button>
                </div>
            </form>
        </div>
    </>
)
}