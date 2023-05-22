import axiosClient from  "../axios-client"
import { useRef, useState } from "react"
import { useStateContext } from "../context/ContextProvider.jsx";

import Arrow_right from "../assets/arrow_right.png"
import Cancel from "../assets/cancel.png"

export default function edit_profil_pakar({visible, onClose}) {

    const namaref = useRef();
    const usernameref = useRef();
    const spesialisref = useRef();
    const jeniskelaminref = useRef();
    const tanggallahirref = useRef();
    const nohpref = useRef();
    const asalref = useRef();
    const emailref = useRef();
    const passwrodref = useRef();

    const [errors, setErrors] = useState()
    const {user} = useStateContext()

    const save = (ev) => {

        ev.preventDefault()
        const payload = {
            nama_lengkap: namaref.current.value,
            username: usernameref.current.value,
            spesialis: spesialisref.current.value,
            jenis_kelamin: jeniskelaminref.current.value,
            tanggal_lahir: tanggallahirref.current.value,
            no_hp: nohpref.current.value,
            asal: asalref.current.value,
            email: emailref.current.value,
            password: passwrodref.current.value,
        }

        axiosClient.put(`/pakar/${user.id_pakar}`, payload)
            .then(() => {
                onClose(true)
                setErrors()
            })
            .catch(err => {
            const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
        })
    }

    const cancel = () => {
        onClose(true);
        setErrors(null);
    }

    if (!visible) return null;

    return (

        // form
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-8 gap-10'>
        <form onSubmit={save} className="bg-white w-2/6 px-16 rounded-3xl shadow-[0px_6px_0px_rgba(78,148,79,0.5)] border-2 pt-6">

                {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}

                </div>
                }

                <label className="text-sm">Nama Lengkap</label>
                <input ref={namaref} defaultValue={user.nama_lengkap}
                className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="namaname" id="namaid" maxLength={30}/>

                <div className="flex flex-row">
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Username</label>
                        <input ref={usernameref}
                        className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="text" name="unname" id="unid" maxLength={12}/>
                    </div>
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Spesialis</label>
                        <select ref={spesialisref} 
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" name="sepsialisname" id="spesialisis">
                            <option value={""}>Pilih</option>
                            <option value={1}>Pakar Jeruk</option>
                            <option value={2}>Pakar Pupuk</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-row">
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Jenis Kelamin</label>
                        <select ref={jeniskelaminref} 
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" name="kelaminname" id="kelaminid">
                            <option value={""}>Pilih</option>
                            <option value={1}>Laki-laki</option>
                            <option value={2}>Perempuan</option>
                        </select>
                    </div>
                    <div className="w-1/2 mr-1">
                        <label className="text-sm" >Tanggal Lahir</label>
                        <input ref={tanggallahirref} defaultValue={user.tanggal_lahir}
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="date" name="ttlname" id="ttlid" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Nomor Hp</label>
                        <input ref={nohpref} defaultValue={user.no_hp}
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="tel" name="nohpname" id="nohpid" maxLength={15}/>
                    </div>
                    <div className="w-1/2 mr-1">
                        <label className="text-sm">Asal</label>
                        <input ref={asalref} defaultValue={user.asal}
                        className="text-sm h-8 w-full pl-2 py-1 border-none rounded-lg bg-green-100" type="text" name="asalname" id="asalid" maxLength={15}/>
                    </div>
                </div>

                <label className="py-1">Email</label>
                <input ref={emailref} defaultValue={user.email}
                className="h-8 w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emailname" id="emailid" maxLength={30}/>

                <label className="text-sm">Password</label>
                <input ref={passwrodref}
                className="h-8 w-full pl-2 text-sm py-1 border-none rounded-lg bg-green-100" type="password" name="pwnname" id="pwid" />

                <div className="flex justify-end gap-x-6 text-sm my-6">
                    <button onClick={cancel} className="text-sm w-4/12 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">Batal <img src={Cancel}/></button>
                    <button type="submit" className="text-sm w-4/12 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-1 text-white cursor-pointer">Simpan <img src={Arrow_right}/></button>
                </div>
            </form>
        </div>
    )
}

