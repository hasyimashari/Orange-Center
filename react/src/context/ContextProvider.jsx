import {createContext, useContext, useState} from "react";

const StateContext = createContext({
user: {},
token: null,
role: null,
to: {},
content: {},
loading: null,
setUser: () => {},
setToken: () => {},
setRole: () => {},
setTo: () => {},
setContent: () => {},
setLoading: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [to, _setTo] = useState(localStorage.getItem('TO'));
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [role, _setRole] = useState(localStorage.getItem('ROLE'));
    const [content, _setContent] = useState(localStorage.getItem('CONTENT'));
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

    const setContent = (content) => {
        if (content) {
            localStorage.setItem('CONTENT', JSON.stringify(content));
        } else {
            localStorage.removeItem('CONTENT')
        }
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
        content,
        setContent,
        }}>
        {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);