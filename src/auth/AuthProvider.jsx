import { AuthContext } from "./AuthContext";
import { useState } from "react";

function AuthProvider({ children }) {

    const [login, setLogin] = useState(false);

    const isloggedIn = (value) => {
        setLogin(value);
    }

    const value = {
        login, isloggedIn
    }

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;