import React from 'react'
import Arrow_right from "../assets/arrow_right.png"
import Cancel from "../assets/cancel.png"
import axiosClient from '../axios-client';

export default function decision({oCls, vsb, nil}) {

    if (!vsb) return null;

    const Suspend = (ev) => {

        ev.preventDefault()

        const suspend = {
            status_akun:"2"
        }
        const aktif = {
            status_akun: "1"
        }

        if (nil.status_akun==="Aktif"){
            axiosClient.put(`/suspend_pengguna/${nil.id_user}`, suspend)
            .then(() => {
                oCls(true)
            })
            .catch((response) => {
                console.log(response)
            })
        } else {
            axiosClient.put(`/suspend_pengguna/${nil.id_user}`, aktif)
            .then(() => {
                oCls(true)
            })
            .catch((response) => {
                console.log(response)
            })
        }
    }

    const cancel = () =>{
        oCls(true)
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-16 gap-10'>
            <div className='bg-white w-[30rem] h-32 rounded-2xl flex flex-col'>
                <p className='text-xl font-extrabold self-center mt-6'>Apakah Anda Yakin</p>
                <div className="flex justify-center gap-x-6 text-sm my-4">
                    <button onClick={cancel} className="text-sm w-4/12 p-5 text-center bg-gradient-to-tr from-[#F77979] from-4%  to-[#B4161B] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white cursor-pointer">Batal <img src={Cancel}/></button>
                    <button onClick={Suspend} className="text-sm w-4/12 p-5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white cursor-pointer">Ya <img src={Arrow_right}/></button>
                </div>
            </div>
        </div>
    )
}
