import { createContext } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {
    const [user,setUser]=useStat
    return (
        <AuthContext.Provider  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;