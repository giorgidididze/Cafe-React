import { createContext, useEffect, useState } from "react";



const AuthContext=createContext(null)

const AuthProvider=({children})=>{
    const [user, setUSer]=useState('')
    const [auth, setAuth]=useState(false)
    useEffect(()=>{
       let userLocal= localStorage.getItem('user');
        let authLocal=localStorage.getItem('auth');
        if(userLocal && authLocal){
            setUSer(JSON.parse(userLocal))
            setAuth(JSON.parse(authLocal))
        }

    }, [])
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('auth',JSON.stringify(auth));

    }, [user, auth])
    const login=(user)=>{
        setUSer(user)
        setAuth(true)
    }
    const logout=()=>{
        setUSer()
        setAuth(false)
    }
    return(
        <AuthContext.Provider value={{user, login, logout, auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}