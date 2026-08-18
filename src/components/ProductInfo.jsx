import { useParams, useSearchParams } from "react-router-dom";

function ProductInfo() {
    
    const { productId } = useParams();
    return(
        <>
            <h1> Product No. {productId} </h1>
        </>
    )
}

export default ProductInfo;