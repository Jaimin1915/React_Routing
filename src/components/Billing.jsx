import { useNavigate } from "react-router-dom";

function Billing() {

    const navigate = useNavigate();

    function cancelSub() {
        if(window.confirm("Subscription Cancel")) {
            navigate('/dashboard')
        }
    }
    return(
        <>
            <h1> Billing </h1>

            <button className="bg-amber-200" onClick={() => cancelSub()}> Cancel Subscription </button>
        </>
    )
}

export default Billing;