import { Routes,Route, Navigate } from "react-router-dom";

import Navbar from "./componets/Navbar";
import Home from './componets/pages/Home';
import Cart from './componets/pages/Cart.js';
import About from './componets/pages/About';
import ContactUs from './componets/pages/ContactUs';
import ProductDetails from './componets/ProductDetails';
import Product from "./componets/Product";
import { useState } from 'react';
import "./componets/style/main.css"

function App() {
  const [cartItem, setCartItem] = useState([])
  const onAdd = (product) => {
    const extist = cartItem.find(x => x.id === product.id)
    if (extist) {
      setCartItem(cartItem.map(x => x.id === product.id ? {...extist , qty:extist.qty + 1} : x))
    } else {
      setCartItem([...cartItem,{...product,qty:1}])
    }
  };
  
  const onRemove = (product) => {
    const extist = cartItem.find(x => x.id === product.id)
    if (extist.qty ===1) {
      setCartItem(cartItem.filter(x => x.id !== product.id))
    } else {
            setCartItem(
              cartItem.map((x) =>
                x.id === product.id ? { ...extist, qty: extist.qty - 1 } : x
              )
            );

    }
  };
  

  return (
    <>
      <Navbar cartItemLegnth={cartItem.length} />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Home onAdd={onAdd} />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route
          path="cart"
          element={
            <Cart cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />
          }
        />
        <Route
          path="/prodcuts/:productID"
          element={<ProductDetails onAdd={onAdd} />}
        />
      </Routes>
    </>
  );
}

export default App;
