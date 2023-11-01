import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext =createContext(null); 

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);

    const authinfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authinfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;