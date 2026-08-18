import axios from "axios";
import { useEffect } from "react";

function Cart() {

    async function fetchCartData() {
        const cartData = await axios.get('https://dummyjson.com/carts')
        const data = cartData.data.carts;
        console.log(data, 'cart data');
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return(
        <>
            <h1> Cart Page </h1>
        </>
    )
}

export default Cart;