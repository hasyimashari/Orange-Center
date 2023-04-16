import React from 'react'

export default function dasboard_user() {

    return (
        <div className="h-4/5 bg-white rounded-tl-3xl flex items-center">

            
            <div className=" bg-white border-[1px] border-[#4E944F] shadow-[0px_6px_0px_rgba(78,148,79,0.5)] w-72 h-[400px] mx-auto rounded-3xl">
                <div className='flex flex-col items-center gap-y-3'>
                    <div className='w-full p-16 bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-t-3xl'>
                    </div>

                    <h1 className='font-bold mt-2'>Nama Lengkap</h1>
                    <h4 className='text-sm mb-2'>Username</h4>
                    <button className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-10 py-2 text-sm">
                        Profil saya
                    </button>
                    <button className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                        Edit
                    </button>
                    <button className="bg-white hover:brightness-90 border-[1px] border-[#4E944F]  w-7/12 text-black rounded-xl p-12 py-2 text-sm">
                        Keluar
                    </button>
                </div>
            </div>

        </div>
    )
}

