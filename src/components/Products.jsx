import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);

  const fetchProduct = useCallback(async () => {
    const Products = await axios.get("https://dummyjson.com/products");
    setProduct(Products.data.products);
    console.log(Products.data.products, "product data");
  }, []);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <h1>All Products</h1>

      <ul>{product.map((item) => 
        <div key={item.id}> 
            <li> <Link to={`/products/${item.id}`}> {item.title} </Link> </li>
            <li> {item.category} </li>
        </div>
      )}
      </ul>
    </>
  );
}

export default Products;
