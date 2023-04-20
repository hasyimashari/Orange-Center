import {createContext, useContext, useState} from "react";

const StateContext = createContext({
user: {},
token: null,
setUser: () => {},
setToken: () => {},
})

export const ContextProvider = ({children}) => {
const [user, setUser] = useState({
    "alamat":"kediri",
    "nama_lengkap":"hasyim ashari",
    "username":"mhsy",
    "email":"hasyim11c@gmail.com",
    "jenis_kelamin": "laki-laki",
    "no_hp":"085808935247",
    "tanggal_lahir":"13 april 2002"
});

const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        _setToken(token)
    }

    return (
        <StateContext.Provider value={{
        user,
        setUser,
        token,
        setToken,
        }}>
        {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);