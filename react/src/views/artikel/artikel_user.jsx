import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function artikel_user() {

    const navigate = useNavigate()

    const setLihatArtikelUser = () => {
        navigate('/user-lihat-artikel')
    }

    return (
        <div className='h-[34rem] grid grid-cols-1 gap-4 pl-8 pt-4 pr-8 items-center'>
            
            {/* content */}
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-gray-500'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div onClick={setLihatArtikelUser} className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* dummy */}
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 min-h-48 h-48 w-full bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-[1px] border-gray-200 rounded-xl p-2 flex gap-4">
                
                {/* photo */}
                <div className="w-2/12 h-full bg-slate-300 rounded-lg flex">

                </div>

                {/* description */}
                <div className="w-10/12 h-full rounded-lg flex flex-col justify-between">
                    <div className='w-full flex flex-col gap-0.5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-3xl'>Loading...</h1>
                        </div>

                        <div className='w-full'>
                            <h6 className='text-xs text-slate-300'>Loading...</h6>
                        </div>

                        <div className='w-full'>
                            <p className='text-xs text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta maxime facilis laborum, enim eveniet a est dolores odit reiciendis omnis assumenda molestiae debitis aliquam voluptatum culpa voluptate quam totam amet.</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="text-center bg-gradient-to-tr from-[#4E944F] from-4% p-1 to-[#B4E197] to-90% rounded-lg text-sm text-white font-bold cursor-pointer hover:brightness-90">
                            <h1>Baca Selengkapnya</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
}
