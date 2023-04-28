import {createContext, useContext, useState} from "react";

const StateContext = createContext({
user: {},
token: null,
role: null,
setUser: () => {},
setToken: () => {},
setRole: () => {},
})

export const ContextProvider = ({children}) => {
const [user, setUser] = useState({});
const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
const [role, _setRole] = useState(localStorage.getItem('ROLE'));

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        _setToken(token)
    }

    const setRole = (role) => {
        if (role) {
            localStorage.setItem('ROLE', role);
        } else {
            localStorage.removeItem('ROLE');
        }
        _setRole(role)
    }

    return (
        <StateContext.Provider value={{
        user,
        setUser,
        token,
        setToken,
        role,
        setRole
        }}>
        {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);