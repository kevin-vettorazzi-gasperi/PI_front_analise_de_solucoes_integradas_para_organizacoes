import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';


interface AuthProviderProps {
    children: React.ReactNode;
}

interface Props {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>,
}

const AuthContext = createContext({
    token: '',
    setToken: () => { }
} as Props);

function AuthProvider({ children }: AuthProviderProps) {

    const [token, setToken] = useState('');

    // const AuthContext = createContext({
    //     token: '',
    //     setToken
    // } as Props);

    // useEffect(() => {
    //     setToken('new token');
    // }, []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const Context = useContext(AuthContext);

    return Context;
}

export { useAuth, AuthProvider };
