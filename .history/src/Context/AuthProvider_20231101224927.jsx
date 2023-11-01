import { createContext } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;