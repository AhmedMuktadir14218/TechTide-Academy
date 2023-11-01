import { createContext } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {
    const
    return (
        <AuthContext.Provider  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;