import { createContext, useState } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [L,setLoading]=useState(null);
    return (
        <AuthContext.Provider  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;