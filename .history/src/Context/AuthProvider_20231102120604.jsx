import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null); 
const Auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }
    const authinfo = {
        user,
        loading,
        createUser,''

    }
    return (
        <AuthContext.Provider value={authinfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;