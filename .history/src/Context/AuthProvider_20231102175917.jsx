import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null); 
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()




const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }
    const googleLoginUser = ()=>{
        return signInWithPopup(Auth,googleProvider)
    }
    // const logOut =()=>{
    //     signOut(Auth);
    // }
    const authinfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLoginUser

    }
    return (
        <AuthContext.Provider value={authinfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;