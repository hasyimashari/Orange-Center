import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../axios-client';

import Back from '../../assets/Back 1.png'
import Sent from '../../assets/Send 2.png'
import echo from '../../echo';

export default function chat_user() {

    const navigate = useNavigate();
    
    const messageref = useRef();

    const {setTo, loading, setLoading} = useStateContext();
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [session, setSession] = useState([]);
    const [errors, setErrors] = useState()

    const to = JSON.parse(localStorage.getItem("TO"))

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    }, [])

    useEffect(() => {
        const channel = echo.channel(`channel_konsultasi.${to.id_pakar}.${user.id_user}`)
        const id = {
            user: user.id_user,
            pakar: to.id_pakar,
        };

        channel.subscribed(() => {

            setLoading(true);
            setLoadingMessage(true);
            axiosClient.post('/load_chat_pakar/', id)
            .then((data) => {
                setMessages(data.data.chat);
                setLoadingMessage(false);
                setLoading(false);
            });

        });

        channel.listen('ChatSender', () => {

            setLoadingMessage(true);
            axiosClient.post('/load_chat_pakar/', id)
            .then((data) => {
                setMessages(data.data.chat);
                setLoadingMessage(false);
                });
            });
            
    }, [user]);

    axiosClient.post('/get_user_session', {
        user: user.id_user,
    })
    .then(({ data }) => {
        setSession(3 - data.user_session);
    });

    const send = (ev) => {

        ev.preventDefault()
        const dataPertanyaan = {
            user: user.id_user,
            pakar: to.id_pakar,
            line_chat: messageref.current.value.replace('\n\n', '\n'),
            sentby_user: user.id_user,
        }

        axiosClient.post('/sendChat', dataPertanyaan)
        .then(() => {
            setErrors()
            messageref.current.value = ""
        })

        .catch(error => {
            const response = error.response;
            if (response && response.status === 422) {
                setErrors({message: "mohon isi pesan" })
            }
        })
    }

    const setKonsultasiPageUser = () => {
        setTo()
        setMessages()
        echo.leave(`channel_konsultasi.${to.id_pakar}.${user.id_user}`)
        navigate('/user-konsultasi')
    }

    const lastMsgRef = useRef(null)
    useEffect(() => {
        lastMsgRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <div className='h-[34rem] flex flex-col'>

            {/* chat header */}
            <div className='w-full h-16 bg-white sticky top-0 z-10 flex items-center justify-between font-bold text-2xl rounded-tl-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                
                <div onClick={setKonsultasiPageUser} className='w-1/12 h-16 flex pl-6 cursor-pointer'>
                    <button>
                        <img className='w-8' src={Back}/>
                    </button>
                </div>
                <div className='w-11/12 h-16 flex flex-col items-center justify-center pr-20'>
                    <div>
                        {to.nama_lengkap} ({to.spesialis})
                    </div>
                    <div className='text-xs font-light text-gray-500'>
                        {user.status_premium===1 &&
                            <>                            
                                {loading?
                                    <p>Kesempatan Bertanya: ... </p> 
                                        :
                                    <p>Kesempatan Bertanya: {session} </p> 
                                }
                            </>
                        }
                    </div>
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
                            <>{u.sentby_user===user.id_user?
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
            <div className='w-full min-h-16 h-fit bg-white sticky bottom-2 z-10 mt-auto flex flex-col items-center justify-center'>


                {errors && <div className="bg-red-500 rounded py-2 px-3 font-bold">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key]}</p>
                        ))}

                    </div>
                    }

                <div className='w-11/12 h-16 flex items-center justify-center'>

                    {session<=0 && user.status_premium===1?
                        <div className="w-full flex flex-row justify-between">
                            <div className="w-[95%] mr-1">
                                <textarea rows={1} ref={messageref} disabled={true} draggable={false}
                                className="text-sm h-full w-full p-2.5 px-4 border-none rounded-2xl bg-green-100 scrollbar-hide scroll-smooth brightness-90" name="chatn" id="chat" placeholder="Ketik Pesan..."/>
                            </div>
                            <button className="p-2.5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 rounded-full flex items-center justify-center text-white cursor-default grayscale">
                                <img className='w-8' src={Sent} />
                            </button>
                        </div>:

                        <div className="w-full flex flex-row justify-between">
                            <div className="w-[95%] mr-1">
                                <textarea rows={1} ref={messageref}
                                className="text-sm h-full w-full p-2.5 px-4 border-none rounded-2xl bg-green-100 scrollbar-hide scroll-smooth" name="chatn" id="chat" placeholder="Ketik Pesan..."/>
                            </div>
                            {loadingMessage?
                            <button className="p-2.5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% brightness-90 rounded-full flex items-center justify-center text-white cursor-default grayscale">
                                <img className='w-8' src={Sent} />
                            </button>
                                :
                            <button onClick={send} className="p-2.5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 rounded-full flex items-center justify-center text-white">
                                <img className='w-8' src={Sent} />
                            </button>
                            }
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
