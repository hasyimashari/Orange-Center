import {createContext, useContext, useState} from "react";

const StateContext = createContext({
user: {},
token: null,
role: null,
to: null,
loading: null,
setUser: () => {},
setToken: () => {},
setRole: () => {},
setTo: () => {},
setLoading: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [to, _setTo] = useState(localStorage.getItem('TO'));
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [role, _setRole] = useState(localStorage.getItem('ROLE'));
    const [loading, setLoading] = useState(false);

    const setTo = (to) => {
        if (to) {
            localStorage.setItem('TO',  JSON.stringify(to));
        } else {
            localStorage.removeItem('TO');
        }
        _setTo(to)
    }

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
            setRole,
            to,
            setTo,
            loading,
            setLoading,
            }}>
            {children}
            </StateContext.Provider>
        );
}

export const useStateContext = () => useContext(StateContext);