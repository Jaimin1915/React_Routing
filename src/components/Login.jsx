import { replace, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

function Login() {

    const location = useLocation();
    const navigate = useNavigate();

    const { isloggedIn } = useContext(AuthContext);
    // console.log(isloggedIn, 'values')

    const userComeFrom = location?.state?.from?.pathname || "/";

    const handleLogin = () => {
        isloggedIn(true);
        navigate(userComeFrom, {replace: true})
    }

    return(
        <>
            <h1> Login Page </h1>
            <h2> User comes from : {userComeFrom} </h2>
            <button onClick={handleLogin}> Click here to login </button>
        </>
    )
}

export default Login;