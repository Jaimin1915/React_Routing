import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const RequiredAuth = ({ children }) => {

    const location = useLocation();
    const { login } = useContext(AuthContext);
    // console.log(login, 'location')

    if(!login) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
}

export default RequiredAuth;