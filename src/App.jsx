import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import { useState } from "react";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Billing from "./components/Billing";
import Overview from "./components/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Setting from "./components/Setting";

function App() {
  const [productNo, setProductNo] = useState(0);

  return (
    <>
      <h1>Jaimin</h1>
      <nav className="flex flex-col">
        <Link to="/"> Home Page </Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Shopping Cart</Link>
        <Link to='/dashboard'> Dashboard </Link>
      </nav>

      <main>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="settings" element={<Setting />} />
            <Route path="billing" element={<Billing />} />
          </Route>

        </Routes>
      </main>


    </>
  );
}

export default App;
