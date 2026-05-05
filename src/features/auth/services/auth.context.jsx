
import { createContext, useState, useEffect } from "react";
import { getMe } from "./auth.api";
import { Navigate } from "react-router";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    return (

        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )

}