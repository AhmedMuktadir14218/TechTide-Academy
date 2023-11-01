import { createContext, useState } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null);

    const authinfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider vs >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;