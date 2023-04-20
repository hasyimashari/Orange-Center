import Arrow_right from "../assets/arrow_right.png"
import {Link} from 'react-router-dom';

export default function Login() {
return (
    <>
        <div className="w-7/12 flex items-center"> 
            <form action="" className="w-full px-16">
                <h1 className="font-bold text-4xl my-8">Masuk</h1>

                <div className="my-2">
                    <label for="emac"> Email</label>
                    <input className="h-8 w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="email" name="emaliac" id="emac" maxLength={30}/>
                </div>
                <div className="my-2">
                    <label for="pwac">Passwords</label>
                    <input className="h-8 w-full pl-2 my-1 border-none rounded-lg bg-green-100" type="password" name="passwordac" id="pwac" maxLength={12}/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button type="submit" className="w-5/12 p-5 text-center bg-gradient-to-tr from-[#4E944F] from-4%  to-[#B4E197] to-90% hover:brightness-90 mt-6 py-2 rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex justify-between text-white">
                        MASUK
                        <img src={Arrow_right} />
                    </button>
                    <p className="mt-6">sudah punya akun?  
                    <Link to='/register' className="text-[#4E944F] font-bold cursor-pointer mx-1">
                        DAFTAR 
                    </Link> </p>
                </div>
            </form>
        </div>
    </>
)
}