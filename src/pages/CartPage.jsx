import React from "react";
import Cart from "../components/CartPage/Cart";
import "./cartPage.css";

const CartPage = () => {
  return (
    <div className="app">
      <p className="product-style media-p">
        Home<span class="health-style"> &gt;</span> Furniture
        <span class="health-style"> &gt;</span> Sofa
        <span className="health-style remove-media"> &gt;</span> LuxeComfort
        Sectional Sofa
        <span class="health-style"> &gt;</span> Cart
      </p>
      <Cart />
    </div>
  );
};

export default CartPage;
