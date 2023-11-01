import { createContext } from "react";

export const AuthContext =createContext(null); 
const AuthProvider = ({children}) => {

    return (
        <AuthContext>
            
        </AuthContext>
    );
};

export default AuthProvider;