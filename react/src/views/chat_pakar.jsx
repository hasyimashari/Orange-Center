import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';

import Back from '../assets/Back 1.png'
import Sent from '../assets/Send 2.png'
import echo from '../echo';

export default function chat_pakar() {

    const messageref = useRef();
    const {to, setTo, loading, setLoading} = useStateContext();
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    echo.channel(`channel_konsultasi.${user.id_pakar}.${to.id_user}`)
    .subscribed(
        useEffect(()=>{
            setLoading(true)
            const id = {
                user:to.id_user,
                pakar:user.id_pakar,
            }
            axiosClient.post('/load_chat_pakar/', id)
            .then((data) => {
                setMessages(data.data.chat)
                setLoading(false)
            })
        }, [user])
    )
    .listen('ChatSender', ()=> {
        const id = {
            user:to.id_user,
            pakar:user.id_pakar,
        }
        axiosClient.post('/load_chat_pakar/', id)
        .then((data) => {
            setMessages(data.data.chat)
        })
    })

    const onSend = (ev) => {

        ev.preventDefault()
        const payload = {
            user: to.id_user,
            pakar: user.id_pakar,
            line_chat: messageref.current.value.replace('\n\n', '\n'),
            sentby_pakar: user.id_pakar,
        }

        axiosClient.post('/sendChat', payload)
        .then(() => {
            messageref.current.value = ""
        })

        .catch(error => {
            console.log(error)
        })
    }

    const onCli = () => {
        setTo()
        setMessages()
        echo.leave(`channel_konsultasi.${user.id_pakar}.${to.id_user}`);
    }

    const lastMsgRef = useRef(null)

    useEffect(() => {
        lastMsgRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <div className='h-[34rem] flex flex-col'>

            {/* header */}
            <div className='w-full h-16 bg-white sticky top-0 z-10 flex items-center justify-between font-bold text-2xl rounded-tl-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                
                <Link to='/pakar-konsultasi' className='w-1/12 h-16 flex pl-6'>
                    <button onClick={onCli}>
                        <img className='w-8' src={Back}/>
                    </button>
                </Link>
                <div className='w-11/12 h-16 flex items-center justify-center pr-20'>
                    {to.nama_lengkap}
                </div>
            </div>

            {/* chat */}
            <div className='overflow-y-auto scrollbar-hide scroll-smooth' >
                <div className='w-full min-h-screen h-fit flex items-center justify-center my-2' >


                    {loading? <div className='w-10/12 h-fit flex flex-col mt-auto gap-2'>

                            {/* chat when loadng */}
                            <div className='self-end max-w-[40%] mr-4'>
                                <div className="p-2.5 px-4 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-2xl flex flex-col items-center justify-center gap-1 text-white">
                                    <div className='text-lg text-left whitespace-pre-line'>
                                        Loading...
                                    </div>
                                </div>
                            </div>
                            
                            <div className='self-start max-w-[40%] mr-4'>
                                <div className="p-2.5 px-4 text-center bg-gray-200 rounded-2xl flex flex-col items-center justify-center gap-1 text-black">
                                    <div className='text-lg text-left whitespace-pre-line'>
                                        Loading...
                                    </div>
                                </div>
                            </div>

                        <div ref={lastMsgRef}/>
                    </div>:

                    // chat when not loading
                    <div className='w-10/12 h-fit flex flex-col mt-auto gap-2'>
                        {messages.map((u, id)=>(
                            <>{u.sentby_pakar===user.id_pakar?
                                <div key={id} className='self-end max-w-[40%] mr-4'>
                                    <div className="p-2.5 px-4 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% rounded-2xl flex flex-col items-center justify-center gap-1 text-white">
                                        <div className='text-lg text-left whitespace-pre-line'>
                                            {u.line_chat}
                                        </div>
                                        <div className='text-xs self-end'>
                                            {u.created_at.substring(10,16)}
                                        </div>
                                    </div>
                                </div>:

                                <div key={id} className='self-start max-w-[40%] mr-4'>
                                    <div className="p-2.5 px-4 text-center bg-gray-200 rounded-2xl flex flex-col items-center justify-center gap-1 text-black">
                                        <div className='text-lg text-left whitespace-pre-line'>
                                            {u.line_chat}
                                        </div>
                                        <div className='text-xs self-end'>
                                            {u.created_at.substring(10,16)}
                                        </div>
                                    </div>
                                </div>
                            }
                            </>
                        ))}
                        <div ref={lastMsgRef}/>
                    </div>
                    }
                </div>
                
            </div> 

            {/* send chat */}
            <div className='w-full h-16 bg-white sticky bottom-2 z-10 mt-auto flex items-center justify-center'>
                <div className='w-11/12 h-16 flex items-center justify-center'>
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-[95%] mr-1">
                            <textarea rows={1} ref={messageref}
                            className="text-sm h-full w-full p-2.5 px-4 border-none rounded-2xl bg-green-100 scrollbar-hide scroll-smooth" name="chatn" id="chat" placeholder="Ketik Pesan..."/>
                        </div>
                        <button onClick={onSend} className="p-2.5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-full flex items-center justify-center text-white">
                            <img className='w-6' src={Sent} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
